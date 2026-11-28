package com.roboegypt.lab;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import android.webkit.MimeTypeMap;
import androidx.core.content.FileProvider;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Saves a file a page made (Youssef, 20 Nov 2026: Robo Montage's video, a lab's «save on my device»). The page script
 * (res/raw/robo_save.js) sends it in base64 pieces: begin → chunk… → end. Android 10+ puts it straight in the gallery
 * (videos, pictures), Music (sounds) or Downloads (everything else), in a «Robo Egypt» folder, with no permission needed.
 * Android 7–9 can't do that without the storage permission, so there the share sheet opens and the child picks where it goes.
 */
public class RoboSave {
    private static final String FOLDER = "Robo Egypt";
    private final Activity act;
    private final Map<String, File> files = new ConcurrentHashMap<>();
    private final Map<String, String> names = new ConcurrentHashMap<>(), mimes = new ConcurrentHashMap<>();

    public RoboSave(Activity act) { this.act = act; }

    static String script(Activity a) {
        try (InputStream in = a.getResources().openRawResource(R.raw.robo_save)) {
            java.io.ByteArrayOutputStream b = new java.io.ByteArrayOutputStream(); byte[] buf = new byte[8192]; int n;
            while ((n = in.read(buf)) > 0) b.write(buf, 0, n);
            return b.toString("UTF-8");
        } catch (Exception e) { return ""; }
    }

    @JavascriptInterface
    public String begin(String name, String mime) {
        try {
            String m = mime == null ? "" : mime.split(";")[0].trim().toLowerCase(Locale.ROOT);
            String n = clean(name);
            String ext = n.contains(".") ? n.substring(n.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT) : "";
            if (m.isEmpty() && !ext.isEmpty()) { String g = MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext); if (g != null) m = g; }
            if (m.isEmpty()) m = "application/octet-stream";
            if (n.isEmpty()) n = "Robo-Egypt-" + new SimpleDateFormat("yyyyMMdd-HHmmss", Locale.ROOT).format(new Date());
            if (ext.isEmpty()) { String e = MimeTypeMap.getSingleton().getExtensionFromMimeType(m); if (e != null) n += "." + e; }
            File dir = new File(act.getCacheDir(), "robo-save"); dir.mkdirs();
            String id = UUID.randomUUID().toString();
            File f = new File(dir, id); new FileOutputStream(f).close();
            files.put(id, f); names.put(id, n); mimes.put(id, m);
            return id;
        } catch (Exception e) { return ""; }
    }

    @JavascriptInterface
    public boolean chunk(String id, String b64) {
        File f = files.get(id); if (f == null) return false;
        try (FileOutputStream o = new FileOutputStream(f, true)) { o.write(Base64.decode(b64, Base64.DEFAULT)); return true; }
        catch (Exception e) { drop(id); return false; }
    }

    /** "gallery", "music", "downloads", "share" (Android 7–9), or "" when it failed */
    @JavascriptInterface
    public String end(String id) {
        File f = files.get(id); String name = names.get(id), mime = mimes.get(id);
        if (f == null) return "";
        try {
            if (Build.VERSION.SDK_INT >= 29) return toMediaStore(f, name, mime);
            return share(f, name, mime);
        } catch (Exception e) { return ""; }
        finally { drop(id); }
    }

    private String toMediaStore(File f, String name, String mime) throws Exception {
        Uri coll; String rel, where;
        if (mime.startsWith("video/")) { coll = MediaStore.Video.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY); rel = Environment.DIRECTORY_MOVIES; where = "gallery"; }
        else if (mime.startsWith("image/")) { coll = MediaStore.Images.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY); rel = Environment.DIRECTORY_PICTURES; where = "gallery"; }
        else if (mime.startsWith("audio/")) { coll = MediaStore.Audio.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY); rel = Environment.DIRECTORY_MUSIC; where = "music"; }
        else { coll = MediaStore.Downloads.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY); rel = Environment.DIRECTORY_DOWNLOADS; where = "downloads"; }
        ContentResolver cr = act.getContentResolver();
        ContentValues v = new ContentValues();
        v.put(MediaStore.MediaColumns.DISPLAY_NAME, name);
        v.put(MediaStore.MediaColumns.MIME_TYPE, mime);
        v.put(MediaStore.MediaColumns.RELATIVE_PATH, rel + "/" + FOLDER);
        v.put(MediaStore.MediaColumns.IS_PENDING, 1);
        Uri u = cr.insert(coll, v);
        if (u == null) throw new Exception("insert failed");
        try (InputStream in = new FileInputStream(f); OutputStream out = cr.openOutputStream(u)) {
            byte[] buf = new byte[65536]; int n; while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        } catch (Exception e) { cr.delete(u, null, null); throw e; }
        ContentValues done = new ContentValues(); done.put(MediaStore.MediaColumns.IS_PENDING, 0);
        cr.update(u, done, null, null);
        return where;
    }

    private String share(File f, String name, String mime) throws Exception {
        File dir = new File(act.getCacheDir(), "robo-share"); dir.mkdirs();
        File[] old = dir.listFiles(); if (old != null) for (File o : old) o.delete();
        File out = new File(dir, name);
        if (!f.renameTo(out)) throw new Exception("move failed");
        Uri u = FileProvider.getUriForFile(act, act.getPackageName() + ".fileprovider", out);
        Intent i = new Intent(Intent.ACTION_SEND).setType(mime).putExtra(Intent.EXTRA_STREAM, u).addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        act.runOnUiThread(() -> act.startActivity(Intent.createChooser(i, name)));
        return "share";
    }

    private void drop(String id) {
        File f = files.remove(id); names.remove(id); mimes.remove(id);
        if (f != null) f.delete();
    }

    private static String clean(String s) {
        if (s == null) return "";
        s = s.replaceAll("[\\\\/:*?\"<>|\\p{Cntrl}]", "_").trim();
        while (s.startsWith(".")) s = s.substring(1);
        return s.length() > 120 ? s.substring(s.length() - 120) : s;
    }
}
