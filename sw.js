// Offline support: app shell + slides cached; network first so updates arrive when online.
const CACHE = "opim639-prep-v1";
const SHELL = ["./", "index.html", "slides.json", "manifest.json", "icon-192.png", "icon-512.png", "img/price_opt.jpg", "img/network_hump.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return r; }).catch(() => caches.match(e.request).then(m => m || caches.match("index.html"))));
});
