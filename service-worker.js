const CACHE_NAME = "heloisahand-connect-v79";
const APP_SHELL = [
  "/",
  "/index.html",
  "/styles.css?v=79",
  "/app.js?v=79",
  "/assets/feature-quiz.svg",
  "/assets/feature-training.svg",
  "/assets/feature-project.svg",
  "/assets/feature-support.svg",
  "/manifest.webmanifest",
  "/assets/pwa-icon-192.png",
  "/assets/pwa-icon-512.png",
  "/assets/pwa-maskable-512.png",
  "/assets/hero-handball.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("/index.html", copy));
          return response;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});

self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (error) {
    payload = {};
  }
  const title = payload.title || "Instituto HeloisaHand";
  const options = {
    body: payload.body || "Voce tem uma nova notificacao.",
    icon: "/assets/pwa-icon-192.png",
    badge: "/assets/pwa-icon-192.png",
    data: { url: payload.url || "/#/notificacoes" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/#/notificacoes";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const existing = clientList.find((client) => "focus" in client);
      if (existing) {
        existing.navigate(url);
        return existing.focus();
      }
      return clients.openWindow(url);
    })
  );
});
