//@ts-check
"use strict";
/** @readonly */
var version_workshop_js = "v.0.2.5";
/** @param {any} v number, string any element ID */
function GE(v){return document.getElementById((+v===v?(GE.i=v+1)-1:v===
  void 0?v=GE.i++:v)+"")}GE.i=0;
/** @typedef {HTMLElementTagNameMap} N */
/**
 * @overload @returns {HTMLDivElement}
 * @template {keyof N} K @overload @param {K} e @returns {N[K]}
 * @overload @param {string} e @returns {HTMLElement}
 * @param {string} [e] */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}
/** @param {string} data */
var tN = function (data) {
  return document.createTextNode(data);
};
if (/^http:\/\/(?:\d+\.\d+\.\d+\.\d+|localhost:\d+)/.exec(location.href))
  +function (globalWebSocket) {
    try {
      sessionStorage = 
      window.WebSocket =
        /** @type {any} disables VS code live server live reload */
        (function WebSocket() {
          this.onmessage = function juhus() {};
          window.WebSocket = globalWebSocket;
        });
    } catch (e) {}
  }(WebSocket);

var vehicleList = GE("vehicleList") || function () {
  throw new Error("vehicleList is missing");
  return EL();
}();
var menu_close = GE("menu_close") || EL();
var fallbackEl = EL();
var menu = GE("menu") || fallbackEl;
var input = GE("input") || fallbackEl;

/** @param {string} id */
function textNodeToElementById(id) {
  var alt = "[" + id.toLocaleLowerCase().replace(/_/g, ".");
  return (GE(id) ||
    fallbackEl).appendChild(document.createTextNode(alt + "]"));
}
var vehicle = {
  name: textNodeToElementById("vehicle_name"),
  creator: textNodeToElementById("vehicle_creator"),
  thubnail:
    /** @type {HTMLImageElement} */
    (GE("vehicle_thumbnail") || EL("img")),
  description: textNodeToElementById("vehicle_description"),
  class: textNodeToElementById("vehicle_class"),
  subclass: textNodeToElementById("vehicle_subclass"),
  tags: GE("vehicle_tags") || EL("")
}
if (menu_close)
  menu_close.onclick = function () {
    menu.style.display = "";
  };
function workshopItemOnclick(data) {
  return function () {
    // if (!/workshop[^]*dev/.test(location.href))
    //   return;
    menu.style.display = "unset";
    vehicle.name.data = data.name;
    vehicle.thubnail.src = data.thubnail;
    vehicle.description.data = data.description;
    vehicle.creator.data = data.creator;
    for (var tags = vehicle.tags; tags.lastChild;)
      tags.removeChild(tags.lastChild);
    (data.description.match(/#[0-9A-Za-z_\-]+/g) ||
      []).forEach(function (e) {
      var a = tags.appendChild(EL("a"));
      a.href = "javascript:void \"https://exa.toastyx.dev/api/workshop/" +
        e + "&pageSize=1&pageIndex=0&and_then_the_rest\";";
      a.appendChild(tN(e));
      a.onclick = function () {
        requestVehiclesSearch(e.slice(1));
        menu.style.display = "";
      };
      tags.appendChild(tN(" "));
    });
  };
}
menu.onclick = workshopItemOnclick;
function addWorkshopItem(thubnail, size, name, description, creator) {
  var section = document.createElement("section");
  for (var ch = vehicleList.childNodes, i = ch.length; i-- > 0;) {
    var child = ch[i];
    if (!(child instanceof HTMLElement) || child.className !== "spacer")
      break;
    section = child;
  }
  var span = document.createElement("span");
  span.appendChild(tN(size || "Small"))
  section.appendChild(span);
  thubnail ? 
    section.appendChild(EL("img")).src = thubnail :
    section.appendChild(EL("div")).className =
      "blank";
  var div = EL("div");
  div.appendChild(EL("h1")).appendChild(tN("" + name));
  div.appendChild(EL("p")).appendChild(tN("" + description));
  div.appendChild(EL("footer")).appendChild(tN("Made by " + creator));
  section.appendChild(div).className = "content";
  section.onclick = workshopItemOnclick({
    name: name,
    thubnail: thubnail,
    description: description,
    creator: creator
  });
  section.className = "cell";
  vehicleList.appendChild(EL("section")).className = "spacer";
}
/** @param {unknown} list */
function addVehiclesFromJSON(list) {
  if (!(list instanceof Array && list.length))
    return true;
  for (var i = 0, few = 256, item; i < list.length; i++) {
    /** @type {unknown} */
    if (typeof (item = list[i]) !== "object")
      continue;
    addWorkshopItem(
      item.id && few ? "https://exa.toastyx.dev/api/workshop/" +
        "thumbnail/" + item.id : "",
      "grid",
      item.name || "",
      item.description || "",
      item.creator || ""
    );
    few && few--;
  }
  return false;
}
function clearVehicles() {
  while (vehicleList.lastChild)
    vehicleList.removeChild(vehicleList.lastChild);
  for (var i = 7; i-- > 0;)
    vehicleList.appendChild(EL("section")).className = "spacer";
}
/** @type {(this: GlobalEventHandlers, ev: KeyboardEvent) => any} */
function inputEneterHandler(e) {
  if (e.key !== "Enter")
    return;
  requestVehiclesSearch(input instanceof HTMLInputElement ?
    input.value : "Frog");
};
input.onkeyup = inputEneterHandler;
/**@param {string} search @param {()=>void} [onsuccesful=clearVehicles] */
function requestVehiclesSearch(search, onsuccesful) {
  onsuccesful = onsuccesful || clearVehicles;
  console.log(JSON.stringify(search) + " requested");
  var paged = search[0] !== "$", index = 0, previous = "";
  search = "https://exa.toastyx.dev/api/workshop/" + (paged ?
    "search?q=" + search.replace(/[?=&#]/g, function (s) {
      return "%" + s.charCodeAt(0).toString(16);
    }) :
    search.slice(1));
  /** @this {XMLHttpRequest} */
  function xhrHandler() {
    /** @type {unknown} */
    var response;
    if (this.readyState !== 4)
      return;
    try {
      if (previous === this.responseText)
        throw new Error("Repeating response, stopping next request.");
      response = JSON.parse(previous = this.responseText);
    } catch (e) {
      console.error(this.responseText ? e : "xhr empty response");
      return;
    }
    if (onsuccesful) {
      onsuccesful();
      onsuccesful = void 0;
    }
    if (addVehiclesFromJSON(response))
      return;
    xhrInitiate();
  };
  function xhrInitiate() {
    var xhr = new XMLHttpRequest();
    paged ?
      xhr.open("GET", search + "&pageSize=1&pageIndex=" + index++) :
      xhr.open("GET", search);
    xhr.onreadystatechange = xhrHandler;
    xhr.send();
  }
  xhrInitiate();
}
requestVehiclesSearch("$newest?pageSize=4&pageIndex=0");
