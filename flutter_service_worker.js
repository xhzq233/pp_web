'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7de1e9212d94e39005647d374d936d1b",
"index.html": "90d8f9e95eb7ae1d81300927a7ea2116",
"/": "90d8f9e95eb7ae1d81300927a7ea2116",
"main.dart.js": "44bae35e012b0397c103b2de94f32eb0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cdb4bf092dc36864573e7e7e798055dc",
".git/config": "4b21646b3bccab516b50952f21a213fd",
".git/objects/59/0c161ebfbef171cf0f0e1edb54bac32f12414c": "1a65cd274a023d080f534105eddd4e61",
".git/objects/9e/a87ac158ec536903e1d8cb04be6e9ac2e06d68": "b3e8626f1eb7581cd0d7ae15f083dd74",
".git/objects/3c/fe70bc953e3e48c3ac85f73354a212052ad092": "a7c625bc1dedcca838d4d15f702ef749",
".git/objects/34/6d39fa217805e45d8193ea1f221cfa6857d91a": "472da571ab5c7513e3a2001238c9b225",
".git/objects/a4/faeab74c362f22268f9289778a8a0da40ab5b6": "a5df74c21ebe99f1ef9e2899e153f114",
".git/objects/a3/4568c586b39417e032d1af96f4b88b2869535c": "22bf5a78fd3ccf5524812ae85e7fb699",
".git/objects/b5/cb8e1bd56acac18f0138a54256bdc307e9cc84": "f76d1c022b6da5c23bdd31cd96c547dc",
".git/objects/b2/a9239f2cfdcb6a7f365753b04c887eb9ae8288": "76211aba604baeba1056656a9147fa2b",
".git/objects/bb/5deac920c81a39a786ff3c101b8f46fb0ed479": "2ff0fe284e308f32bb0b88827c074f4d",
".git/objects/d7/c36d4ef708aa76daff38b3350a2cd8bef8b992": "86919f2a044cecb1e6bf66f0c98846b0",
".git/objects/b3/1979990111c74211cc1a8754237c61213bc72c": "25882689b14f36ed062cf208e256057e",
".git/objects/a5/1b08115484b97785400bdc7ce183a5f2690d77": "ea352fa74aa6385a1fbcbd17ce6fdd7b",
".git/objects/bd/bf08a85d82b2a3f9318f96480a448802c3b02d": "412a9087ad41e9f88e7417552f65893f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/1a8e9d99e46ec91297228c579f247124fe3eab": "b17b83d191f494e129bdcc943512941f",
".git/objects/e5/3e0686733983e2cb008dcb1526c94617a516e6": "e8f354185a106bf53b5fd4488207a62c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/8642b47b43db5f67161c22864752440299febf": "8a159cb633307481e82d2943950e8671",
".git/objects/ee/bb7115ee53aa8a9aa3191d3b21cfe1987ab79c": "752d4ecb26aa5e5c501c7937511ec5ec",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/fe/15513a01e0e27b8b7301a9b7f864142cd3e724": "3d748c5500b26bee66b99c91c02cd263",
".git/objects/fe/9eed12a5dec6abf752e16a19b1f5b20d39b009": "6959f93288ac27bcbc0b3831178c30f8",
".git/objects/c8/c54874faaf74050358303bb9e82dd6e473feeb": "205adeef4458edf13a7a498c033f29b3",
".git/objects/fb/2a3b53d6383c93bba9873b37a6a2f7531184df": "832cb0313f8f42d9cb8dce0b36310998",
".git/objects/ed/2abc0912ad7c12348fe221b856068a38525f94": "a091bf7e782d825ff10f0063f2388048",
".git/objects/c1/b4e87ba42c87190610969705fb8dbfe996821f": "8c364973eb46e4ac0c5ac2df1341e743",
".git/objects/20/298ea2180df148ec5128f529522f8f11edf124": "7093feca1d285d8e273490603cc8b1c4",
".git/objects/18/4fff5d6dfd313374786a261f1188c5176232cc": "c3d1c6c33061ebb3010f7d87585d4a44",
".git/objects/27/db8c6095614106186991ffa41369724accd722": "423615447bf711502eb007b6c19ec7bf",
".git/objects/29/921aa8d714c16d20062c51f6ddb9be300e41d8": "1982b5a70d928b670435e0953109431a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/4ef56b955ad1c72eaba3b12aad896579a99d42": "5fd524a6bcc531275701823acf111b8b",
".git/objects/89/9e88e6b07b0b5d363776edc0cd548109400a2e": "6c55d9c862009abe534fc2f7f4db6782",
".git/objects/74/c86de113d01ad6ca45c56e45c10a7d5e3d145c": "177ea6c839eed17c9882028879927d31",
".git/objects/74/b4a5570820343528d99bf44c0469432b0c44fe": "d229c2416d30f4b53b46872d435a6c14",
".git/objects/74/b5e689abe13445e4f027d0a6bafd9172f0ba18": "76e8f94cd61ae6483b8c543a9fb14953",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/0b3ed62c28b71d588c4114ef11dd6da049cc2b": "e2dd2d671b576131f38d1e3da1e1363b",
".git/objects/7b/3b1415abc92fb881449510b0bbf0a14994cb85": "9d8b899f3bd5a807359e9519807bb9e2",
".git/objects/8f/15fb49d474e3201606656ac50296929a9e0fc6": "338183e4df3dfbd698eccb11a087bfb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/47255eafcc31a298e6bf1bca67ea9699913983": "1fffe78b1c78f9b32e1b03ad51769336",
".git/objects/26/626e5a1c37887d9f77ec1649724abd35c305be": "8f9e8562392df7f4b17825a34ce6fae1",
".git/objects/75/30aec0a14e627fa3dedc9be90c4456aa4b2cff": "6544a8df300064167e56547cf199c540",
".git/objects/72/ea44132ae8c1cc18b9c999bb793d3786265e58": "0e2012e3eafdd9820282cbedbf5b0f59",
".git/objects/72/f258a49eb6805bcf8841bdedcd38b203087afa": "9051b106171b6a60a65a86dc847096e9",
".git/objects/43/45b76f7e024a6d6e1c936db1cc953f0a7cd0ac": "3647a713e6a74314c5f518d37ad8f4dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/40ed4d4ce78add6b4dea1d3f5aece33d18d1f9": "b1b58af9431be2692b3c0d1844e0ae79",
".git/objects/38/e9c3c4f13234561c57b06e3c1d03c56cf7c357": "5e25735b1f9384ad730cca31d2ede3cf",
".git/objects/00/503b1b9bdc4a10733466f7583d6e39b1751064": "9bc5fd5c75ebb808f49c4154ec852dc2",
".git/objects/09/bd8868819300c51a97ffcc2a47bbe585421f3d": "b6df5276f4df20a367cfe3e61e970dd5",
".git/objects/09/980cfff200dc4370829a34f97aaead55fd9c71": "2897c3f0a65bbbef79cab4c945eea25b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/7c7bdcfdf81116a83377074943bb8bf5bb4185": "5a63beffbe0883b5d485b91a63be59a9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/c27f732ffdb68c45797ffd44d4f53645e932af": "38bdf3eff2886a22b2c75772b1cd6439",
".git/objects/06/cabc3ec27d9b84ca0e919312a107c0689be29e": "87365484ccbb87115f989af22556ade7",
".git/objects/52/763266640c11c04410a559b6cbab3559ee2b07": "95a186a0a8d27ca52083bd4f8928e277",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/165fc638c4d107c9a4f5b277e10cf690858ce3": "4b1a3f1e5bd0bfd606dc6d64a6a4769f",
".git/objects/64/8c2deb22ea38508f2bd508483aa43b911831b4": "c61ac3797a3952d15d0cef90e0b2f272",
".git/objects/64/449048878cda4423414b273c93c2a7f76e029c": "fc4b00adeca089e28fd6162579e7ffff",
".git/objects/dc/ca16c85a4be01a8ea452cf103cc5dcaa17f4d3": "564c56e1dc18eb6ad7e1138dcd0eb941",
".git/objects/aa/64cb8bc727e5f3f08571fcc6d1eeca5a23054e": "cf90d5358b6c3d44a15134749548aed4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/abfcb80dd1410bd7e9252c92081271a1a08dbe": "be357e11e52994d06c18981b6e921748",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/b270cbef42608205cd84a9b30b4f08fda31f8d": "e08acaa0c69b987175474153c2076bf9",
".git/objects/a6/78b07a58c69faf2aeb508a65776e42e4f46c4b": "ee7d56e510747f106e9a8553df689afa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/cda67d9162cfb25ff1ae88340dde66b656a4d5": "5381ede98bb99aed29e860c68d3d4339",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/784b8a02acc4af7f62f6a3d531d0121b15e906": "156d38d02a155ab78238ba1c9cb5a42b",
".git/objects/ff/0af503dd7afd617be1d004cbdd6f05d3b682b2": "fdd47b0d090a3dfbad32c5821fd16e0a",
".git/objects/ff/5186f5e3ad8d1084d2fd07a6f77bed120a2b49": "eb080a725ec151d5c03b1d87ad08ab56",
".git/objects/c2/cc51c03b51b84ed4463c39027709a40cc342ec": "03dbe5cd74d8ec331d1cad81b58b102b",
".git/objects/c2/a579fba62d7062801ab7b08467c041fdd29354": "843fc8f887da45122c968c1fdf48ac5a",
".git/objects/f8/eb028e50ad9734431f74f7863b4d47e5c4e2c7": "6ead6ad36117aa6dfcf8877bdd81b286",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/41/488b18ffe47b5f94ea8668d339bf859f591c92": "2fecd06efa6256b9127d041da7f1ee6c",
".git/objects/1b/b346f5c956c975370de927dfd83f1d7c110dbb": "85d6c60da761c89110455da01a87e336",
".git/objects/4f/9164e62222ef1cddea2c592c208577682eaf8a": "1cf9b6deaf7738c0c4867aae130e22e5",
".git/objects/15/5fbefd5fffe0c8daa536b4413be09c36a3025a": "a559c4fa386ef46b197b2760f303c675",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/7758823a061e35c256fec44718908882a44453": "cb178149eb9a049751a36832052bc581",
".git/objects/7f/305fc0a97b2ccc99785c843d7100aabaf8186c": "3b9bd8c31e0d7a66a73930327c5d7592",
".git/objects/7f/a1c13cf6e8d639ef96c6c01edc1eb98fa8c8a7": "75c69696987f7adec79b04f9df6f9b6d",
".git/objects/7a/4147e13f7051b0075d5a76fcc979b21c218649": "11c8e328617467e833125e7e9e8edfb4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "335c2f579c221580f276bdb700ec20b3",
".git/logs/refs/heads/main": "335c2f579c221580f276bdb700ec20b3",
".git/logs/refs/remotes/origin/main": "3728d0634e1f59ed3c42e1697ac535fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "34b373bfff8b67beb6091d16a4d6d5d7",
".git/refs/remotes/origin/main": "34b373bfff8b67beb6091d16a4d6d5d7",
".git/index": "ef50279323a1f0b68ae60d1f336bba05",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"assets/AssetManifest.json": "69da5bb13080541917b94e0d4e9bad17",
"assets/NOTICES": "6978ed7087717572fc61a10cd93cb0fa",
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
