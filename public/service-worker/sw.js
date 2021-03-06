try{
  const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/monitor',
  '/search',
  '/script/index.js',
  '/manifest.json',
  '/styles/index.css',
  '/styles/main.css',
  '/styles/monitor.css',
  '/styles/search.css',
  '/scripts/index.js',
  '/scripts/monitor.js',
  '/scripts/search.js',
  '../src/views/index.html',
  '../src/views/monitor.html',
  '../src/views/search.html', 
];
// install event
self.addEventListener('install', evt => {
 
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    }).catch((err)=>{
      console.log("error:"+err)
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    }).catch((err)=>{
      console.log("error:"+err)
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    }).catch((err)=>{
      console.log("error:"+err)
    })
  );
});
}catch(err){
  console.log(err)
}
