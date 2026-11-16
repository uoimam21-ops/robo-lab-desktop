package com.roboegypt.lab;

import android.webkit.JavascriptInterface;
import android.webkit.WebResourceResponse;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * input() for Python on Android (16 Nov 2026). The Python worker asks with a synchronous GET /__robo_input__?id=…;
 * MainActivity's request interceptor (a background thread) waits here until the page calls RoboInput.answer(id, text).
 * Every 4 minutes it answers «again» and the worker asks once more, so nothing times out while the child thinks.
 */
class RoboInput {
    private static final Map<String, LinkedBlockingQueue<String>> Q = new ConcurrentHashMap<>();
    private static LinkedBlockingQueue<String> q(String id) { return Q.computeIfAbsent(id == null ? "" : id, k -> new LinkedBlockingQueue<>()); }

    @JavascriptInterface
    public void answer(String id, String text) { q(id).offer(text == null ? "" : text); }

    static WebResourceResponse waitFor(String id) {
        String t;
        try { t = q(id).poll(240, TimeUnit.SECONDS); } catch (InterruptedException e) { t = null; }
        if (t == null) t = "\u0000AGAIN"; else Q.remove(id == null ? "" : id);
        WebResourceResponse r = new WebResourceResponse("text/plain", "utf-8", new ByteArrayInputStream(t.getBytes(StandardCharsets.UTF_8)));
        Map<String, String> h = new HashMap<>(); h.put("Cache-Control", "no-store"); r.setResponseHeaders(h);
        return r;
    }
}
