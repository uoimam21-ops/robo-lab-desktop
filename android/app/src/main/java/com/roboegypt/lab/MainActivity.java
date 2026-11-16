package com.roboegypt.lab;

import android.net.Uri;
import android.os.Bundle;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends BridgeActivity {
    private OtaUpdater ota;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // live updates of the journey and the labs (OtaUpdater): pick the set to use before the first page loads
        ota = new OtaUpdater(this); ota.init();
        super.onCreate(savedInstanceState);

        // Same headers as the desktop app: the labs ask to be cross-origin isolated (Python's Stop button and input()
        // need SharedArrayBuffer). Robo Block and the Journey are not, so their YouTube videos keep working.
        // WebViews that don't support isolation simply ignore them, and the labs fall back on their own.
        bridge.setWebViewClient(new BridgeWebViewClient(bridge) {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                WebResourceResponse res = super.shouldInterceptRequest(view, request);
                Uri u = request.getUrl();
                if (res == null || !"localhost".equals(u.getHost())) return res;
                String path = u.getPath() == null ? "/" : u.getPath();
                Map<String, String> h = new HashMap<>();
                if (res.getResponseHeaders() != null) h.putAll(res.getResponseHeaders());
                h.put("Cross-Origin-Resource-Policy", "same-origin");
                // the home (two cards + bar) is NOT isolated either: an isolated page can't hold the journey in its frame
                // (net::ERR_BLOCKED_BY_RESPONSE on Youssef's phone, 16 Nov 2026). Python and Robo Code then open full screen.
                boolean home = path.equals("/") || path.equals("/index.html") || path.startsWith("/launcher/");
                if (!home && !path.startsWith("/lab/roboblock") && !path.startsWith("/journey")) {
                    h.put("Cross-Origin-Opener-Policy", "same-origin");
                    h.put("Cross-Origin-Embedder-Policy", "credentialless");
                }
                WebResourceResponse newer = ota.respond(path, h);   // a newer copy downloaded by the live update
                if (newer != null) { try { res.getData().close(); } catch (Exception ignored) {} return newer; }
                res.setResponseHeaders(h);
                return res;
            }

            // a page used too much memory and its renderer was killed: start the app again instead of crashing
            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                runOnUiThread(MainActivity.this::recreate);
                return true;
            }
        });

        ota.checkLater();

        // Back button: go back a page (lab → home screen); on the home screen, leave the app
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView w = bridge.getWebView();
                if (w != null && w.canGoBack()) w.goBack();
                else finish();
            }
        });
    }
}
