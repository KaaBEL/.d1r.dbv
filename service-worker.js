"use strict";
// v.0.1.53
// ^ also the global version of project, the initial source:
// https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/service-worker.js
/** @type {ServiceWorkerGlobalScope} */
const SW = self;
const V = "v.0.1.28", DIR = "/.d1r.dbv/", FL = "editor.html";
// const main = new RegExp(DIR + "?(?:" +
//   FL.replace(/\./g, "\\.") + ")?(?:#[^?]*)?($|\\?[^=]*)");
SW.oninstall = ev => {
  ev.waitUntil((async () => {
    const o = await caches.open(V);
    await o.add(FL);
  })());
};

// const updateCached = () => {
//   caches.open(V).then(o => {
//     fetch(DIR + FL).then(r => {
//       r.ok && o.put(DIR + FL, r);
//     }).catch(console.debug);
//   });
// };

const srcName = /^[^?#]*\/([^?#]*)/, idsMap = {
  "editor.html.ts": "defs.ts",
  "code.d.ts": "defs.d.ts",
  "service-worker.js": "offline_test.js"
};
/** @param {FetchEvent} ev */
SW.onfetch = ev => {
  const response = (async () => {
    let r = null;
    const s = srcName.exec(new URL(ev.request.url).href)[1] || "";
    const id = idsMap[s] || s;
    try {
      r = await fetch(ev.request.url);
    } catch (e) {
      console.warn(e, id);
    }
    if (r && r.ok) {
      const cr = r.clone();
      caches.open(V).then(o => {
        o.put(id, cr);
      });
      return r;
    }
    return await caches.match(id);
  })();
  ev.respondWith(response);
  response.catch(console.error);
};

SW.onactivate = event => {
// from MNDs: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker
// _API/Using_Service_Workers#service_worker_navigation_preload
//   event.waitUntil(SW.registration?.navigationPreload.enable());
  caches.keys().then(ks => ks.map(e => e !== V && caches.delete(e)));
};

console.log("the offline_test.js is there");
