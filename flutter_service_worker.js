'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/ic_up_green.png": "f5ccd2c9d47ff2294139659c811e03fa",
"assets/assets/images/ic_add_content.png": "ae9f9b5f08c27f3a6a98dad72ea5f88d",
"assets/assets/images/ic_points.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/ic_article.png": "b5e50874163eecdde4a51d2b4a30f475",
"assets/assets/images/ic_coupons.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/calendar.png": "14aa542a81b6be4691de8471e43aa9d4",
"assets/assets/images/ic_add.png": "04176e25648a85909296f52ace5d6327",
"assets/assets/images/mental_build_resilience.png": "941c562c66020509c125a64f323caaf0",
"assets/assets/images/mental_reduce_stress.png": "290a27bcb99c1f06eff45f3eae12b6ee",
"assets/assets/images/ic_video_table.png": "2bc9f6ae208fb0f4f2537ced9ff1a249",
"assets/assets/images/location%2520.png": "358f1e0a8859aebf4a351240ae2fe26a",
"assets/assets/images/Logo_Lifesten-BlackOrange%2520(2).png": "005cdc359986638243e2ca519195b231",
"assets/assets/images/ic_test_result.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/ic_workplace.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/points.png": "3a6c29968fd2caa53d687ce8bca9ebff",
"assets/assets/images/average_age.png": "39a9e4361e91c183b037b3d7033883d3",
"assets/assets/images/ic_meditation.png": "f8b4f856df368edefd04898c545317d9",
"assets/assets/images/ic_upload.png": "f4655b07d1ce28cf47a8cbd4bde89093",
"assets/assets/images/ic_physical.png": "8eb65b727ed20496a75fbf02bd029a70",
"assets/assets/images/mental_Improve%2520sleep%2520quality.png": "9b378afc2ab68a2899bc18ae086420b6",
"assets/assets/images/ic_thumbnail.png": "5cb31ebac3d686332e27a319c003d8ea",
"assets/assets/images/ic_search.png": "11e32fe5f6163f47fd1ba02285fcd837",
"assets/assets/images/mental_manage_anxiety.png": "b5ff62217d82aea44d60a21f711f6090",
"assets/assets/images/ic_video.png": "4057ae686c0133dfb7506b83c9d2f187",
"assets/assets/images/ic_edit_table.png": "8b190d27500316b36f99abd832d9d5a3",
"assets/assets/images/ic_document.png": "2a42a137ca6ebce4247c8c777871d54f",
"assets/assets/images/ic_partners.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/ic_eye.png": "512dc9c9a0085b0660adf630c7e043dd",
"assets/assets/images/theme.png": "f8f9a1d6543e5d7e9b11a982e02a6f73",
"assets/assets/images/mental_enhance_focus.png": "d00a377aba206f19b1fb6d948dfb80b6",
"assets/assets/images/ic_nutrition_category.png": "b134783109eaf5f2b2276a69db769b7e",
"assets/assets/images/Logo_Lifesten-WhiteOrange%2520(1).png": "0dbf53acc69ee8962837791bee464c25",
"assets/assets/images/ic_logout.png": "7094ceb0205ac998a1dede35c144fad2",
"assets/assets/images/ic_delete_table.png": "2656e71632c19cee8dba310247f313bb",
"assets/assets/images/ic_down_red.png": "cd414bf8714eb6686462d8507377b2a3",
"assets/assets/images/ic_edit_delete.png": "e63d31fe67674a0d44d49d8638a645f3",
"assets/assets/images/ic_home.png": "3304bf2ee0ab1707714cb0401acb5db7",
"assets/assets/images/mental_other.png": "3570ec6168b317d3103375a1b1207363",
"assets/assets/images/mental_enhance_relaxation.png": "d00a377aba206f19b1fb6d948dfb80b6",
"assets/assets/images/Logo_Lifesten_Black%2520(1).png": "6c0ce0649ae22dae8471d73b01de029c",
"assets/assets/images/ic_selected_nav_menu.png": "9ff438319549f636e83a8eff91e2a788",
"assets/assets/images/ic_profile_placeholder.jpg": "0c5c026703bc14a4ec4e557c0735308e",
"assets/assets/images/profile.png": "956373a091732a592bca258dc524aaff",
"assets/assets/images/Logo_Lifesten-White%2520(1).png": "3070dd78972632431dbbd1b6bce3f1e2",
"assets/assets/images/ic_eye_views.png": "00aae744f0156c5a86394d5894a8c414",
"assets/assets/images/mental_boost_self_confidence.png": "e1cc0318e88f43f6efe9c88cf0ae9d0e",
"assets/assets/images/image_not_found.jpg": "9e3f64ea883c30a596a31cc5f4d98510",
"assets/assets/images/ic_menu.png": "17d7d19f3b1b084f2296fe39733e6f9c",
"assets/assets/images/ic_provider.png": "7d885e71c2f7886941898341a1d2512c",
"assets/assets/images/nutrition_tips.png": "96d3af96535bb01779414ff95fde3265",
"assets/assets/images/mental_improve_mood.png": "9b378afc2ab68a2899bc18ae086420b6",
"assets/assets/images/ic_nutrition.png": "8f327804a158e3c25e828cf0684e0833",
"assets/assets/images/ic_video_link.png": "2bc9f6ae208fb0f4f2537ced9ff1a249",
"assets/assets/animation/animation_lmhkmzby.json": "40b411caffc52d5a3a7e6107b4192994",
"assets/assets/font/NotoSansSymbols2-Regular.ttf": "b3120a6360f58b556ec2edf2c2bab0d4",
"assets/assets/font/Inter_700_Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/font/Inter-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/font/Inter-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/AssetManifest.bin": "5b4dad55854859417a0073382fe80f53",
"assets/AssetManifest.bin.json": "76972bcf4a4f38ee8cc9e2d29f7c8aea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/fonts/MaterialIcons-Regular.otf": "700b2395b57c66f1b1d9687d13360de4",
"assets/FontManifest.json": "24ea64240f33d98a3b1f3a94aea5aac4",
"assets/AssetManifest.json": "af29ac25763e36a54de962226c5558dc",
"assets/NOTICES": "57fb18b937459f157503475f98b1da4f",
"favicon.png": "4225cb13e1d3cbd0208d75bcc30b5dd2",
"main.dart.js": "7f8ece05ba52a6ba05b731fd0992c064",
"icons/Icon-192.png": "d96862abe025aad67d9fc7bd05f1ab38",
"icons/Icon-maskable-192.png": "d96862abe025aad67d9fc7bd05f1ab38",
"icons/Icon-512.png": "d80d5c49cce2971609f757b423cf52f8",
"icons/Icon-maskable-512.png": "d80d5c49cce2971609f757b423cf52f8",
"manifest.json": "3a66427c078472c438ac577d71c1d5d4",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"version.json": "2895eecf5d892bfcd8a7d77755209568",
"index.html": "1cae0ba249817ca3454a7f29dee89407",
"/": "1cae0ba249817ca3454a7f29dee89407",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
