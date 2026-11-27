// EduBridge offline cache - whole site is local content, so after the first visit lessons work with no connection.
const CACHE = 'edubridge-v15';
const ASSETS = ['./','index.html','assets/styles.css','assets/app.js','assets/data.js','assets/kidnotes.js','assets/kidgames.js','assets/uninotes1.js','assets/uninotes2.js','assets/mentorextra.js','assets/models.js','assets/vendor/three.min.js'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request,{ignoreSearch:true}).then(hit=> hit || fetch(e.request).then(r=>{
      const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r;
    }).catch(()=>caches.match('index.html')))
  );
});
