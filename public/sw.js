try{
  const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/monitor',
  '/search',
  '/manifest.json',
  '/script/index.js',
  '/script/*.js',
  '../src/views/*.html' 
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