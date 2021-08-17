/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c894914fd9b0ed063199384c809ddfe5"
  },
  {
    "url": "assets/css/0.styles.3a89626e.css",
    "revision": "90e6d87f127928ede281bd1f7fbde6ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2755d01.js",
    "revision": "b82ab8055599c5ce0ca7d7c7522ef0b1"
  },
  {
    "url": "assets/js/11.68abecf6.js",
    "revision": "bf725d7466187ad871ed505a491c1411"
  },
  {
    "url": "assets/js/12.1b3a4c8d.js",
    "revision": "97c13236f658b3f42e0717a7c810d197"
  },
  {
    "url": "assets/js/13.747df9f6.js",
    "revision": "0584405511ddeb7ff6c31036322528a6"
  },
  {
    "url": "assets/js/14.1ef3f36a.js",
    "revision": "dc43a980d992fb518e5089774112162d"
  },
  {
    "url": "assets/js/15.7ed0ac97.js",
    "revision": "d2d9d0aedb7bc31ffd2938f1a14c8af4"
  },
  {
    "url": "assets/js/16.3040d4a3.js",
    "revision": "e8ab0185b3027a6213b0b3c3c1590882"
  },
  {
    "url": "assets/js/17.695028e7.js",
    "revision": "8a6dd49d1a5d95d102e762d74d56a5f7"
  },
  {
    "url": "assets/js/2.b62fcc60.js",
    "revision": "1b03df5bdc0461bed9017488835133c0"
  },
  {
    "url": "assets/js/3.7e2dff0a.js",
    "revision": "b5668cc67199e46bda0598f415642b39"
  },
  {
    "url": "assets/js/4.522bf0ae.js",
    "revision": "c413308cd3dfb97847006f335baa57ab"
  },
  {
    "url": "assets/js/5.fe2f8bc2.js",
    "revision": "4aef77d9ffce6eb632352837298e73a3"
  },
  {
    "url": "assets/js/6.27ca8aa9.js",
    "revision": "ab841303c3de9af81401e18c7c6767b7"
  },
  {
    "url": "assets/js/7.499676b9.js",
    "revision": "3e98f391c70af27da097e29dc67a0ec9"
  },
  {
    "url": "assets/js/8.31e1eeb3.js",
    "revision": "23d731360fcbadeeaa924c668188beb7"
  },
  {
    "url": "assets/js/9.ea7e7f51.js",
    "revision": "c8880381d44451be859df4835f78815a"
  },
  {
    "url": "assets/js/app.4628758c.js",
    "revision": "cee979c230f34c69e4b1219581757cb8"
  },
  {
    "url": "css/index.html",
    "revision": "989ed1295443c219131ef846f4595ef8"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "924df01510b683bec712aaa7255c4e1f"
  },
  {
    "url": "index.html",
    "revision": "9ed130452214ffbe15a26d3c1398795f"
  },
  {
    "url": "java/API-introduction.html",
    "revision": "29a79422de7108a3e1b5740f391c0930"
  },
  {
    "url": "java/API-io.html",
    "revision": "c3228e7d8b757bf77faf4ba2c169dd8c"
  },
  {
    "url": "java/API-lang.html",
    "revision": "d954be92cacba8603c2546cf0c9d1514"
  },
  {
    "url": "java/API-util.html",
    "revision": "1837e4080a738ad8c51f5c1126367af5"
  },
  {
    "url": "java/grammars.html",
    "revision": "98273bf2d353f80ef13c4a71fb3006e8"
  },
  {
    "url": "java/index.html",
    "revision": "1753454bd9170e98d5e79a1f140e3ac5"
  },
  {
    "url": "java/object-oriented.html",
    "revision": "7ff23eeba9335559eb7ae77125eb4318"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
