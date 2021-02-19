'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9a4dddba415c9ee5265cd5f5d9963a6a",
"index.html": "abc9b1a5c5d3f439bdc3280e847ab32d",
"/": "abc9b1a5c5d3f439bdc3280e847ab32d",
"main.dart.js": "9cbb3029220e671d8406ec27defa9fb2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
".git/config": "6cdb50351ffb6e168867e77e0375d169",
".git/objects/57/e0a616fd1f66b442441b1c74d7d63fb1f3d2b3": "ad590c30b97545eccc509cac4fd11830",
".git/objects/3d/47ab3902ae2c67b9a8901d6a92d83e9a596a35": "064de98ec650b64bafe491a29c319e96",
".git/objects/9c/14018009b3e47907a9f958688ff5be831834fb": "a03b33e7ad93419ab082100de15f5670",
".git/objects/ad/b275a9c0d7929abdf85f98e06b1d7a8eeec804": "7489a02ffb1adefd5dd01f73bc39f8f8",
".git/objects/ae/a2f159a9eafed9c2a51cc527358b0bce45d95b": "43de0f3b3b8d588e3579a000f6dd83bf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/316e7c5739f06b402a8c150211e35d963c5671": "fcc0d0742dd4cb6c581b0e588dae9441",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/9820609aeabfaa06e5fee73b630918448a93d4": "8d99d3c8ea3823c94d013745eb8f0c0d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/73/d690d0a38ad52cefe5007f96a5d54860d426e1": "6c296abc44a78d65d7cc0ea029c9cc31",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/eb7b4b9824e11e7ab6cff7ca5a5dbc04059d5b": "dae0b80d3440b0a29e0bbf7157286233",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/0200d56eeb4a77af0c88f16cf2f190fc08852a": "d6a92c823cc68d131e58ec321d19ddc0",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/3a/aa28e1e73d004af9205e9c01be891d7d391cba": "460e4937ff95a58d3506a43bc2a402a0",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/39/9cacd175390951bba91df84b0d7c0a1d2cd7f8": "4ad9f0304ee73938b2bdd133af47941c",
".git/objects/d3/f9cc69733c8bef481eb81b6e090c7d4c04cafb": "0ed7dbf760247a7d29c8728af7cebc9d",
".git/objects/d4/7daea7c84db5322b78559f436902993de5126a": "a5749227880fcbf38ead96b3ba1824c4",
".git/objects/a9/032cf6887a6c15980fe0fee6b4754492d17192": "4f84041a82bf60b6f69b71583ac6a44f",
".git/objects/aa/0a33d15f3ac1594d99b5f1579b5d7f17ac2546": "564d99e0c71c6dcc07cc7901a1f88453",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f7813de904fd16bd2e66f6cfc378c42152b5a7": "86daa6802cf26b35ad0c27da486b4989",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/1079426e88845ca8b8d8fd20b332a2e25f851a": "033d0eeb2866f69fb2f834351b45dfcf",
".git/objects/a6/e0505a6f0612adaf08f77a61ad24ed1ccaa663": "8e45d9db4dfce6c24966b1e216d04bd0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f9/10147ae74dcf3fc47337c1e231813c3e6b346a": "53ad62cebd0e17d8c99410a0d19d5e3a",
".git/objects/fa/630ea2a8100e34132bc80736327ebe6e357e46": "55c5089ae3f83fcc90518e84779629a3",
".git/objects/e7/b2e2e75790f665072dc9d787858eb0e426933a": "6570f85a52b1e4d8ca9c755f7268bf56",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/d199b2bc378856ca50fd44cdd691ec6e6fe772": "4da1bb6e598a65abb1eed8f2b8a0b185",
".git/objects/8c/8dc271ab9eb0abe31b668a0963371fbd82748d": "6df6460b4e9bfc11c98c3ee009fa7115",
".git/objects/82/08655ef234b1355d9b5dac95b3a6786c58352e": "be74ea73452738ed0744092f9182c1dc",
".git/objects/8b/50ed6928a54cdc6c0afbb4d1f4098bfb6d75b5": "f9c401fbad2bde591ba4bc6c9ad2d702",
".git/objects/13/419d4e6c96524cf1fe2bb8ea4387eea5c11ef9": "5e148a875928830b5ca934c6e9b42746",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "208316b26f16f111d8a3b6174d03a303",
".git/logs/refs/heads/main": "aeafa05f0bfee947f6e8d1022d9e9784",
".git/logs/refs/remotes/origin/main": "675c906e65c3c6821cd2b13379ae97fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "2f7ca68e33aade3c539fcd552f433d1a",
".git/refs/remotes/origin/main": "2f7ca68e33aade3c539fcd552f433d1a",
".git/index": "ac45f19f3b58237042f85251edaf5452",
".git/COMMIT_EDITMSG": "cfcbf472eca4c9d1c00a27ebc1a28b18",
"assets/AssetManifest.json": "62162838250b016abe5202f9b66082b8",
"assets/NOTICES": "8e2ffb46833e0ed6ede52bc206180884",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/images/web_deva.png": "8206bbfc0d45de43d68fedc24d9e5a70",
"assets/lib/assets/images/dev_girl.png": "dacf9ec42db06f829744c46be3360ba0",
"assets/lib/assets/images/my_image.jpg": "3559e952d1c0c82f2dd0bd965770fb2b",
"assets/lib/assets/images/png_mob_dev_girl.png": "7f198989f63762ca0877be9904bda71b",
"assets/lib/assets/images/mob_deva.png": "7b9206456eb9fc137e29422687bbb101",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
