'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7de1e9212d94e39005647d374d936d1b",
"index.html": "95898e6f733c10b3790e1b0135fe734e",
"/": "95898e6f733c10b3790e1b0135fe734e",
"main.dart.js": "ce6dd9e51a3d41c2593692ce44d05664",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cdb4bf092dc36864573e7e7e798055dc",
"assets/AssetManifest.json": "69da5bb13080541917b94e0d4e9bad17",
"assets/NOTICES": "b50bd57d5705f4cf313f3055f95e8a0f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/shaders/ink_sparkle.frag": "913f61b97c1b267cb42dd91b31cec750",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/delete_on_click.png": "bea7df1f4b3870d8b5603030ae0b92ea",
"assets/assets/tag_more.png": "3495fa1c34535d0f9fd748621b19b7a0",
"assets/assets/star_active.png": "1d93c4353d8d546b53a40bb3c9e997a8",
"assets/assets/home_active.png": "96dd8a724f8ea8c96c60e5feaff1f32e",
"assets/assets/arrow_right.png": "c628d435d6d5bbb6b06a2195d1d95afa",
"assets/assets/share_active.png": "59f2ec489a8a0de07202cb28fe061f3f",
"assets/assets/bell.png": "06881623ba8650ce2a3827c0d950e90e",
"assets/assets/edit_on_click..png": "aafb2a86b2056d0ddb39a335236e018f",
"assets/assets/edit_3x.png": "e277c012f9082c9407a0f80e130372b2",
"assets/assets/trash_active.png": "f4c6b04cfae2ac7673c460e9fc9ee821",
"assets/assets/more_white.png": "61983a75964159c6cf42c72ec9f53605",
"assets/assets/lock.png": "a7a79cf63d7246af2120f51d93812496",
"assets/assets/failed.png": "af65145250cf32f09849023de5e585d3",
"assets/assets/tag.png": "d8f2af45a3abcef12cc115130a88d2e8",
"assets/assets/clock_thick.png": "0af362fcda48c009ae3d6bc6788272a9",
"assets/assets/cancel.png": "356f74045f7e1a9988d6f4349904aaaa",
"assets/assets/trash_inactive.png": "fee389b790e0798995e724a65f85961a",
"assets/assets/passwd_hide_3x.png": "7202a3c876273cf74d4d055bc2b99dd1",
"assets/assets/thumbs_inactive.png": "b83b0ec2be49952a34a76c40be92fae8",
"assets/assets/home.png": "9fad9410f3fd1b24aea12e6799ee640a",
"assets/assets/person.png": "49f0a4fb60699cbfa22bfa09bc91c264",
"assets/assets/thumbs_active.png": "289e3b8f984e9e60c1582447c3a99aa0",
"assets/assets/cancel_on_click..png": "e7d98bcd672931ba1b11221fe2905caf",
"assets/assets/msg_white.png": "303c86cabc553716cef58b4e131d2038",
"assets/assets/passwd_hide.png": "3e5d7828d9754a71403f871a1da98f53",
"assets/assets/search.png": "4c59b15859dc34c87908c4599ea72f91",
"assets/assets/heart.png": "9e716aec1c20cc49d3afbe16b93e4d85",
"assets/assets/search_.png": "f884b7098ad6dec6999b18cc5d6f3250",
"assets/assets/calendar_thick.png": "d2d871b7433aa52b31d5c9005627fac3",
"assets/assets/calendar_thin.png": "3e44b82af6321845d6e63519ca4fe03d",
"assets/assets/more_onclick.png": "b7f66d8f9850a17ff426ce1938b38ac6",
"assets/assets/calendar.png": "d504b8f035bf2e13f08587be34616f4c",
"assets/assets/comment.png": "90a473ee978167bf9651d61419f4d2d1",
"assets/assets/passwd_show_3x.png": "e1debe1d5bfc740d7ef9615a714b7fbe",
"assets/assets/profile.jpg": "4521bd7100ffb75bd9302389de5b6be5",
"assets/assets/share.png": "9d87a24b6d633c083b94bf2a5b39efdd",
"assets/assets/back_onclick.png": "c9cf71a2fb6f79c4049195fd51b5c397",
"assets/assets/success.png": "4086d49aef89dac571386e01e7a9105b",
"assets/assets/clock.png": "bd03b7582c0bf3e4abda8d874b98048d",
"assets/assets/delete.png": "b2f8bd81b91af3a92c2c510ee11c8768",
"assets/assets/unlock.png": "67cac38cb1f6433a48cd75a1bcd8dde1",
"assets/assets/back_white.png": "1c169fb529fd8200f10a974e0e21ae0a",
"assets/assets/edit.png": "90d65b30dd7907a0a7aac760acac6699",
"assets/assets/passwd_show.png": "474206d34ce1a3be3c0f5e9d2db32c43",
"assets/assets/star.png": "fb5e65c3b2cfabc26e76c3300fe75015",
"assets/assets/comment_active.png": "989d15a5a6d2fe39173848c3da8f9444",
"assets/assets/search_onclick.png": "e16b1c28d32f2b8302ace97c2bd36106",
"assets/assets/more.png": "fbf1ede6330a1fc96e5218f17150645a",
"assets/assets/pic.png": "2d88c455b363fd795e38d88b545a487b",
"assets/assets/notification_center_comment.png": "10715ac65700065f9a4cba6071273c12",
"assets/assets/clock_thin.png": "27a2d46d0b4fb88f3f66713dd43c8089",
"assets/assets/person_active.png": "1236ff17013eb660f3c3d58c97c4f989",
"assets/assets/arrow_down.png": "ba5190568bc51339e872bb153559bc7b",
"assets/assets/back.png": "1819d3c411c61c01a1622f75005a99d9",
"assets/assets/edit_small.png": "9c39bf22e57f1701aa7677636f33b802",
"assets/assets/pic_thick.png": "9cd895cf16a0c9261fe1df21f9fdd465",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
