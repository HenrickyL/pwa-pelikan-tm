// import {Cache, CacheStorage, caches} from 'cache-polyfill'
const version = "1.0";
const cacheName = `Pelikan-Tm-${version}`;
const staticCacheName = 'site-static-v1';
try {
  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          '/',
          '/img/',
          '/img/arrow-left.svg',
          '/img/Pelikan-color.png',
          '/img/search.svg',
          '/img/monitor.svg',
          '/img/logo.png',
          '/scripts/',
          '/scripts/header.js',
          '/scripts/index.js',
          '/scripts/monitor.js',
          '/scripts/notFound.js',
          '/scripts/search.js',
          '/styles/',
          '/styles/animations.css',
          '/styles/index.css',
          '/styles/main.css',
          '/styles/monitor.css',
          '/styles/notFound.css',
          '/styles/responsive.css',
          '/styles/search.css',
          ''

          
        ]);
      })
    );
   });
} catch (error) {
  console.log("error to install Service worker", error)
}

try {
  // activate event
  self.addEventListener('activate', evt => {
    evt.waitUntil(self.clients.claim());
  })
} catch (error) {
  console.log("Error to activate SW : ",error)
}

try {
  // fetch event
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
  });
} catch (error) {
  console.log("Error to fetch SW : ",error)
}

// self.addEventListener('fetch', (event) => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith((async () => {
//       try {
//         const preloadResp = await event.preloadResponse;

//         if (preloadResp) {
//           return preloadResp;
//         }

//         const networkResp = await fetch(event.request);
//         return networkResp;
//       } catch (error) {

//         const cache = await caches.open(cacheName);
//         const cachedResp = await cache.match(offlineFallbackPage);
//         return cachedResp;
//       }
//     })());
//   }
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the "Offline page" service worker

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

// const CACHE = "pwabuilder-page";


// const offlineFallbackPage = "off_index.html";

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });


// if (workbox.navigationPreload.isSupported()) {
//   workbox.navigationPreload.enable();
// }

// self.addEventListener('fetch', (event) => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith((async () => {
//       try {
//         const preloadResp = await event.preloadResponse;

//         if (preloadResp) {
//           return preloadResp;
//         }

//         const networkResp = await fetch(event.request);
//         return networkResp;
//       } catch (error) {

//         const cache = await caches.open(CACHE);
//         const cachedResp = await cache.match(offlineFallbackPage);
//         return cachedResp;
//       }
//     })());
//   }
// });


////////////////////////////////////////////////////////////////////////////////////////////





// try{
//   const staticCacheName = 'site-static-v1';
//   const assets = [
//     '/',
//     '/monitor',
//     '/search',
//     '/script/index.js',
//     '/manifest.json',
//     '/styles/index.css',
//     '/styles/main.css',
//     '/styles/monitor.css',
//     '/styles/search.css',
//     '/scripts/index.js',
//     '/scripts/monitor.js',
//     '/scripts/search.js',
//     '../src/views/index.html',
//     '../src/views/monitor.html',
//     '../src/views/search.html', 
//   ];
//   // install event
//   self.addEventListener('install', evt => {
  
//     evt.waitUntil(
//       caches.open(staticCacheName).then((cache) => {
//         console.log('caching shell assets');
//         cache.addAll(assets);
//       }).catch((err)=>{
//         console.log("error:"+err)
//       })
//     );
//   });
//   // activate event
//   self.addEventListener('activate', evt => {
//     evt.waitUntil(
//       caches.keys().then(keys => {
//         return Promise.all(keys
//           .filter(key => key !== staticCacheName)
//           .map(key => caches.delete(key))
//         );
//       }).catch((err)=>{
//         console.log("error:"+err)
//       })
//     );
//   });
//   // fetch event
//   self.addEventListener('fetch', evt => {
//     evt.respondWith(
//       caches.match(evt.request).then(cacheRes => {
//         return cacheRes || fetch(evt.request);
//       }).catch((err)=>{
//         console.log("error:"+err)
//       })
//     );
//   });
// }catch(err){
//   console.log(err)
// }
