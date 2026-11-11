package com.roboegypt.lab;

import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
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
                if (!path.startsWith("/lab/roboblock") && !path.startsWith("/journey")) {
                    h.put("Cross-Origin-Opener-Policy", "same-origin");
                    h.put("Cross-Origin-Embedder-Policy", "credentialless");
                }
                res.setResponseHeaders(h);
                return res;
            }
        });

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
