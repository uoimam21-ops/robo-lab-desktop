package com.roboegypt.lab;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.webkit.MimeTypeMap;
import android.webkit.WebResourceResponse;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.zip.GZIPInputStream;
import org.json.JSONObject;

/**
 * Live updates of the journey and the labs (Youssef, 16 Nov 2026; scripts/ota.mjs makes the files). Same rules as electron/ota.js:
 * files/ota/objects/<sha256> are downloaded files checked by their hash, state.json is the set in use on top of the app's own
 * files, next.json a newer complete set that becomes state.json the next time the app starts. A new set is «pending» until the
 * app has stayed up 20 s with it; if that fails twice the app goes back to its own files.
 */
class OtaUpdater {
    static final int NATIVE = 1;   // raise when MainActivity gains something new pages need (ota-native.txt)
    private static final String URL0 = "https://github.com/uoimam21-ops/robo-lab-download/releases/latest/download/";
    private static final String TAG = "RoboOta";
    private final File dir, obj, stateF, nextF;
    private final Context ctx;
    private JSONObject base = new JSONObject();
    private volatile JSONObject state = null;

    OtaUpdater(Context c) {
        ctx = c; dir = new File(c.getFilesDir(), "ota"); obj = new File(dir, "objects");
        stateF = new File(dir, "state.json"); nextF = new File(dir, "next.json");
    }

    /** once at start, before the first page */
    void init() {
        try (InputStream in = ctx.getAssets().open("public/ota-base.json")) { base = new JSONObject(new String(readAll(in), StandardCharsets.UTF_8)); } catch (Exception e) { base = new JSONObject(); }
        try {
            JSONObject s = readJson(stateF), next = readJson(nextF);
            if (next != null) { s = next; s.put("pending", true); s.put("tries", 0); nextF.delete(); }
            if (s != null && !newer(s.optString("v"), base.optString("v", "0"))) s = null;
            if (s != null && s.optBoolean("pending") && (s.optInt("tries") + 1) > 2) s = null;
            else if (s != null && s.optBoolean("pending")) s.put("tries", s.optInt("tries") + 1);
            state = s;
            if (s != null) { write(stateF, s.toString()); } else stateF.delete();
            if (s != null && s.optBoolean("pending")) new Handler(Looper.getMainLooper()).postDelayed(() -> {
                try { JSONObject t = state; if (t != null) { t.put("pending", false); t.put("tries", 0); write(stateF, t.toString()); } } catch (Exception ignored) {}
            }, 20000);
        } catch (Exception e) { state = null; }
    }

    /** a downloaded newer copy for this URL path ("/lab/x.html"), or null for the app's own file */
    WebResourceResponse respond(String path, Map<String, String> headers) {
        JSONObject s = state; if (s == null) return null;
        String key = path.replaceFirst("^/+", "");
        String h = s.optJSONObject("files") != null ? s.optJSONObject("files").optString(key, "") : "";
        if (h.isEmpty()) return null;
        File f = new File(obj, h); if (!f.isFile()) return null;
        try {
            String ext = MimeTypeMap.getFileExtensionFromUrl(key), mime = MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext);
            if (mime == null) mime = key.endsWith(".js") || key.endsWith(".mjs") ? "text/javascript" : key.endsWith(".css") ? "text/css" : key.endsWith(".wasm") ? "application/wasm" : "application/octet-stream";
            InputStream body = new FileInputStream(f);
            if (key.matches(".*\\.(html|js|css)$")) {   // same change as scripts/mobile.mjs makes to the app's own copies
                String t = new String(readAll(body), StandardCharsets.UTF_8).replace("/vendor/fonts/css2?", "/vendor/fonts/fonts.css?");
                body = new java.io.ByteArrayInputStream(t.getBytes(StandardCharsets.UTF_8));
            }
            WebResourceResponse r = new WebResourceResponse(mime, mime.startsWith("text/") ? "utf-8" : null, body);
            Map<String, String> hh = new HashMap<>(headers); hh.put("Cache-Control", "no-cache"); r.setResponseHeaders(hh);
            return r;
        } catch (Exception e) { return null; }
    }

    /** in the background: download a newer set, ready for the next start */
    void checkLater() {
        new Thread(() -> {
            try { Thread.sleep(15000); } catch (InterruptedException ignored) {}
            try { check(); } catch (Exception e) { Log.i(TAG, "check: " + e); }
        }, "robo-ota").start();
    }

    private void check() throws Exception {
        JSONObject j = new JSONObject(new String(get(URL0 + "ota.json"), StandardCharsets.UTF_8));
        String cur = state != null ? state.optString("v") : base.optString("v", "0");
        if (!newer(j.optString("v"), cur) || j.optInt("native", 1) > NATIVE) return;
        JSONObject all = j.getJSONObject("files"), baseFiles = base.optJSONObject("files"), files = new JSONObject();
        obj.mkdirs();
        for (Iterator<String> it = all.keys(); it.hasNext(); ) {
            String p = it.next(), h = all.getString(p);
            if (baseFiles != null && h.equals(baseFiles.optString(p))) continue;   // the app already has this exact file
            File f = new File(obj, h);
            if (!f.isFile()) {
                byte[] data = readAll(new GZIPInputStream(new java.io.ByteArrayInputStream(get(URL0 + h + ".gz"))));
                if (!hex(MessageDigest.getInstance("SHA-256").digest(data)).equals(h)) throw new Exception("bad file " + p);
                File tmp = new File(obj, h + ".tmp"); try (FileOutputStream o = new FileOutputStream(tmp)) { o.write(data); }
                if (!tmp.renameTo(f)) throw new Exception("rename " + p);
            }
            files.put(p, h);
        }
        JSONObject next = new JSONObject(); next.put("v", j.getString("v")); next.put("files", files);
        File tmp = new File(dir, "next.json.tmp"); write(tmp, next.toString()); if (!tmp.renameTo(nextF)) throw new Exception("rename next");
        Set<String> keep = new HashSet<>();
        for (Iterator<String> it = files.keys(); it.hasNext(); ) keep.add(files.getString(it.next()));
        JSONObject s = state; if (s != null && s.optJSONObject("files") != null) for (Iterator<String> it = s.getJSONObject("files").keys(); it.hasNext(); ) keep.add(s.getJSONObject("files").getString(it.next()));
        File[] list = obj.listFiles(); if (list != null) for (File f : list) if (!keep.contains(f.getName())) f.delete();
        Log.i(TAG, "v" + j.getString("v") + " ready for the next start (" + files.length() + " files)");
    }

    private static byte[] get(String url) throws Exception {
        for (int hop = 0; hop < 6; hop++) {
            HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
            c.setInstanceFollowRedirects(false); c.setConnectTimeout(20000); c.setReadTimeout(60000); c.setRequestProperty("User-Agent", "robo-journey-android");
            int code = c.getResponseCode();
            if (code >= 300 && code < 400) { String loc = c.getHeaderField("Location"); c.disconnect(); if (loc == null) break; url = new URL(new URL(url), loc).toString(); continue; }
            if (code != 200) { c.disconnect(); throw new Exception("HTTP " + code); }
            try (InputStream in = c.getInputStream()) { return readAll(in); } finally { c.disconnect(); }
        }
        throw new Exception("too many redirects");
    }

    private static boolean newer(String a, String b) {
        String[] x = a.split("\\."), y = b.split("\\.");
        for (int i = 0; i < 3; i++) {
            int p = i < x.length ? parse(x[i]) : 0, q = i < y.length ? parse(y[i]) : 0;
            if (p != q) return p > q;
        }
        return false;
    }
    private static int parse(String s) { try { return Integer.parseInt(s.trim()); } catch (Exception e) { return 0; } }
    private static JSONObject readJson(File f) { try (InputStream in = new FileInputStream(f)) { return new JSONObject(new String(readAll(in), StandardCharsets.UTF_8)); } catch (Exception e) { return null; } }
    private void write(File f, String s) throws Exception { dir.mkdirs(); try (FileOutputStream o = new FileOutputStream(f)) { o.write(s.getBytes(StandardCharsets.UTF_8)); } }
    private static byte[] readAll(InputStream in) throws Exception { ByteArrayOutputStream b = new ByteArrayOutputStream(); byte[] buf = new byte[65536]; int n; while ((n = in.read(buf)) > 0) b.write(buf, 0, n); return b.toByteArray(); }
    private static String hex(byte[] d) { StringBuilder s = new StringBuilder(); for (byte x : d) s.append(String.format("%02x", x)); return s.toString(); }
}
