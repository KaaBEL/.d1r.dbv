//@ts-check v.0.2.43
/** @TODO implement settings with sw and localstorage as IE fallback */
"use strict";
// ^ also the global version of project, the initial source:
// https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/service-worker.js
/** @type {ServiceWorkerGlobalScope} *///@ts-expect-error
const SW = self;
/** version for storage, updated when cache should be cleard */
const V = "D1R.0.2.43", DIR = "/.d1r.dbv/", FL = "editor.html";
// const main = new RegExp(DIR + "?(?:" +
//   FL.replace(/\./g, "\\.") + ")?(?:#[^?]*)?($|\\?[^=]*)");
SW.oninstall = ev => {
  ev.waitUntil((async () => {
    const o = await caches.open(V);
    await o.add(FL);
    await o.put("_k_api.js", await fetch("code/_k_api.js"));
    await o.put("code.js", await fetch("code/code.js"));
    await o.put("editor.js", await fetch("code/editor.js"));
  })());
};

const srcName = /^[^?#]*\/([^?#]*)/, idsMap = {
  "workshop.html": "example.html",
  "editor.html.ts": "defs.ts",
  "code.d.ts": "defs.d.ts",
  "service-worker.js": "offline_test.js"
};
/** @param {FetchEvent} ev */
SW.onfetch = ev => {
  const url = new URL(ev.request.url);
  if (url.host !== "kaabel.github.io" && location.host !== url.host)
    return;
  const response = (async () => {
    const name = srcName.exec(url.href)?.[1] ?? "";
    /** @type {string} */
    const id = idsMap[name] || name;
    /** @type {Response|null} */
    let result = null;
    try {
      result = await fetch(ev.request.url);
    } catch (e) {
      console.warn(e, JSON.stringify(id));
    }
    if (!result || !result.ok)
      try {
        const preloaded = await ev.preloadResponse;
        if (preloaded instanceof Response && preloaded.ok)
          result = preloaded;
      } catch (e) {
        console.warn(e, "preloaded:" + JSON.stringify(id));
      }
    if (result && result.ok) {
      const cloned = result.clone();
      caches.open(V).then(o => {
        o.put(id, cloned);
      });
      return result;
    }
    return await caches.match(id) || new Response(null, {status: 404});
  })();
  ev.respondWith(response);
  response.catch(console.error);
};

SW.onactivate = event => {
  caches.keys().then(ks => ks.map(e => e !== V && caches.delete(e)));
// from MDNs: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker
// _API/Using_Service_Workers#service_worker_navigation_preload
  event.waitUntil(SW.registration?.navigationPreload.enable());
};

console.log("the service-worker.js is there");
