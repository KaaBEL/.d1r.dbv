//@ts-check
/// <reference path="./code.js" />
"use strict";
/** @readonly */
var version_editor_js = "v.0.2.6";
/** @TODO check @see {defaults} for setting a setting without saveSettings */
/** @typedef {HTMLElementTagNameMap} N @overload @returns {HTMLDivElement} */
/** @template {keyof N} K @overload @param {K} e @returns {N[K]} */
/** @overload @param {string} e @returns {HTMLElement} */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}
/** @param {string} data */
var tN = function (data) {
  return document.createTextNode(data);
};

var storage = typeof localStorage == "undefined" ? {
    /** @param {string} key */
    getItem: function (key) {
      return null;
    },
    /** @param {string} key @param {string} value */
    setItem: function (key, value) {}
  } :
  localStorage;
if (typeof TouchEvent == "undefined")
  //@ts-ignore
  var TouchEvent = function TouchEvent() {};

function throwErrors() {
  if (/\[ ?native code ?\]/.test(
    Function.prototype.toString.call(console.error)))
    console.err = console.error;
  console.error = function () {
    console.err && console.err.apply(console, Array.prototype.map.call(
      arguments,
      function (e) {
        return e;
      }
    ));
    throw "See error over --^";
  };
}

if (storage.getItem("D1R_DBV_no_offline") !== null)
  console.log("Service Worker registration is disabled.");
else if (/https?/.test(location.protocol) && navigator.serviceWorker)
  try {
    // @type {ServiceWorkerContainer}
    var swc = navigator.serviceWorker, sw = swc.controller;
    // is it good to have completely relative path for ServiceWorker?
    sw || swc.register("./service-worker.js",
      {scope: "./"}).then(function (swr) {
        sw = (swr.installing || swr.waiting || swr.active);
        (sw || OC()).onstatechange = function () {
          console.log.apply(console, Array.prototype.map.call(
            arguments,
            function (e) {
              return e;
            }
          ).concat("sw_change"));
        };
      }).catch(function (reason) {
        console.log(reason, "sw_js")
      });
  } catch (e) {
    console.log(e, "sw_js");
  }
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

canvas.addEventListener("contextlost", function () {
  console.warn("CONTEXT LOST!");
});
canvas.addEventListener("contextrestored", function () {
  console.log("%cCONTEXT RESTOERED!", "color:#4f3");
  rend_checkColors();
  console.log("D1R DBV rendering restorations initiated...");
});

/** @typedef addingStyles */
(function addingStyles(css) {
  var s = "style", e = GE(s) || document.head.appendChild(EL(s)), t = null;
  for (e.id = s; t = e.childNodes[0];)
    e.removeChild(t);
  e.appendChild(tN(css));
})(
  "#commandsTab" +
  "{position:fixed;width: 350px;height: " +
  (innerHeight > 500 ? 500 : innerHeight) + "px;border-radius: 10px;" +
  "background-color: #000000db;}" +
  "#commandsTab, #commandsTab button, #commandsTab .loading" +
  "{color: #999;font-size: 16px;" +
  "font-family:monospace,sans-serif,Courier,Consolas;}" +
  "#commandsTab header:first-child" +
  "{display: flex;flex-direction: row;border-bottom: 1px solid #777;}" +
  "#commandsTab button{border: 2px solid #0000;" +
  "background-color: inherit;-webkit-user-select: text;}" +
  "#commandsTab header:first-child button{font-weight: bold;}" +
  "#commandsTab button:hover, #commandsTab button:focus," +
  " #commandsTab .loading{border: 2px solid #777;}" +
  "#commandsTab button:active{background-color: #333;color: #bbb;}" +
  "#commandsTab .loading" +
  "{width: 300px;height: fit-content;position: relative;}" +
  "#commandsTab .loading div:nth-child(1){height: 100%;padding: 0;" +
  "position: absolute;top: 0;left: 0;transition: .2s;}" +
  "#commandsTab .loading div:nth-child(2){position: relative;" +
  "z-index: 1;background-color: #0000;text-align: center;}" +
  "#commandsTab header div" +
  "{padding: 5px;flex-grow: 1;cursor: pointer;text-align: center;}" +
  "#commandsTab header div:active{cursor: grab;}" +
  "#commandsTab .content button, #commandsTab .items button" +
  "{display: block;position: relative;width: 333px;}" +
  "#commandsTab button div" +
  "{display: inline-block;position: absolute;right: 5px;}" +
  "#commandsTab .items, #commandsTab .content" +
  "{overflow-x: hidden;max-height: " +
  (innerHeight > 500 ? 470 : innerHeight - 40) + "px;}" +
  "#commandsTab input, #commandsTab textarea, #commandsTab select" +
  "{background-color: #000;color: #bbb;border: 1px solid #888;}"
);

/** originally settings variable, defines type for settings */
var defaults = {
  /** (default) true: image pattern, false: color */
  editorBackground: typeof DOMMatrix != "undefined",
  /** mumst be in #xxxxxx hex color format */
  editorBackgroundColor: "#111111",
  /** (default) 0: dbc, 1: db, ... 63: unassigned */
  editorBackgroundImage: 0,
  //** mumst be in #xxxxxx hex color format */
  highlightColor: "#ff0000",
  highlightWidth: 2,
  logicPreviewAlpha: .5,
  buildReplace: !1,
  /** (default) 1: Lunar, 0: none, ... 31: unassigned */
  editorBackgroundStage: 1,
  /** (default) false: PC, true: touchscreen device detected */
  fullscreenInitialized: false,
  /** (default) false: enabled, true: disabled */
  fullscreenDisabled: false,
  // not saved ** (default) false */
  renderSharp: false,
  /** (default) true: position inputs use dbc units */
  meterPositions: true,
  editorLaunchpadBorder: false,  
  /** (default) false: displayed, true: not used */
  hideInventoryTile: false
},
  /** @type {typeof defaults|null} nullable alternative to original */
  settings = defaults;
// naming may change? + meaningless comment
function saveSettings() {
  var n = 0, arr = [+defaults.editorBackground];
  if (isNaN(n = Number("0x" + defaults.editorBackgroundColor.slice(1))))
    throw new Error("Wrong format of editorBackgroundColor setting");
  arr[0] += (n & 0x7fff) << 1;
  arr[1] = n >> 15 & 0xffff;
  arr[1] += defaults.editorBackgroundImage << 15 & 1 << 15;
  arr[2] = defaults.editorBackgroundImage >> 1 & 31;
  arr[2] += +defaults.fullscreenInitialized << 5
  arr[2] += +defaults.fullscreenDisabled << 6;
  arr[2] += defaults.editorBackgroundStage << 7;
  arr[2] += +defaults.meterPositions << 12;
  arr[2] += +defaults.hideInventoryTile << 13;
  storage.setItem("D1R_DBV_editor", String.fromCharCode.apply(String, arr));
}
function loadSettings() {
  var s = storage.getItem("D1R_DBV_editor") || "";
  if (!s.length)
    return;
  if (s.length > 3)
    return console.error("Unsupported length of localStorage item");
  var n = 0, arr = s.split("").map(function (e) {
    return e.charCodeAt(0);
  });
  defaults.editorBackground = !!(arr[0] & 1);
  s = ((arr[0] & 0x7fff) + ((arr[1] & 0x01ff) << 16) >> 1).toString(16);
  defaults.editorBackgroundColor = "#" + "000000".slice(s.length) + s;
  n = arr[1] >> 15;
  defaults.editorBackgroundImage = ((arr[2] & 31) << 1) + n;
  defaults.fullscreenInitialized = !!(arr[2] >> 5 & 1);
  defaults.fullscreenDisabled = !!(arr[2] >> (5 + 1) & 1);
  defaults.editorBackgroundStage = (arr[2] >> 7 & 31);
  defaults.meterPositions = !!(arr[2] >> 12 & 1);
  defaults.hideInventoryTile = !!(arr[2] >> 13 & 17);
}
loadSettings();

/** to be able to include some fun when editor is initialized */
var init_funMode = F;
(function (reg) {
  var expr = (reg.exec("" + location) || [])[1] || "";
  // taken from: https://stackoverflow.com/a/8831937
  for (var i = 0, l = (expr += "ABCD").length, hash = 0; i < l;) {
    hash = (hash << 5) - hash + expr.charCodeAt(i++);
    // Convert to 32bit integer
    hash |= 0;
  }
  // end of taken
  expr = (hash < 0 ? hash + 0xffffffff : hash).toString(16);
  function fun1() {
    vX -= 16;
    vY -= 16;
    expensiveRenderer();
    vX = (vX + 17) % innerWidth;
    vY = (vY + 17) % innerHeight;
    expr && requestAnimationFrame(fun1);
  }
  switch (expr.toLocaleLowerCase()) {
    case "ccb21872":
    case "4dbb2442":
    case "f34b79a5":
    case "f37f55d2":
      console.info("Fun mode 1");
      var el = GE("info_help"), parent = el && el.parentNode, img, nxt;
      if (!parent || !el)
        break;
      (img = EL("img")).src = "./assets/just_use_common_sense.png";
      while ((nxt = el.nextSibling) && !(nxt instanceof Element &&
        nxt.getAttribute("itemprop")))
        parent.removeChild(nxt);
      nxt && parent.appendChild(img) && parent.appendChild(nxt);
      break;
    case "3a613b4c":
    case "2b675e07":
    case "ab235503":
      console.info("Fun mode 2");
      setTimeout(function () {
        var oldPress = press, oldContme = contextmenu;
        press = contextmenu = function () {
          press = oldPress;
          contextmenu = oldContme;
          expr = "";
        };
      }, 1500);
      requestAnimationFrame(fun1);
      break;
    case "c96679af":
    case "ec4dca90":
      console.info("Fun mode 3.1");
      setTimeout(function () {
        ship = Ship.fromObject({n: "", dt: "", b: []});
        placingBlock = function () {return "__unknown__";};
      });
      break;
    case "47f76cb8":
      console.info("Fun mode 4");
      ship = Ship.fromObject(B64Key.decode(B64Key.b64ToU8arr("gAALU3RhcnRlcl\
NoaXCAAQBnyR+wATjRE/MIg+/jGIhC4AC4AAgsIpEBBBAEDoFSLDKADKAEIFCSGTKAEQAAABClwm\
uwSAQAIUQIkAEAGAEAACghWoXSoJToICaAFiADAHBCYCgRSlIIIQC0ABkAgBMCWIQEEZlkABkAAA\
AnAAAAEQAACi9AC5ABAAAA4AQAQBVKgBYAQAYAAMAJAIA4VBApQAqQAQA4AQAgKwDIAACcAAAARA\
AAABBoATIAAAAAnAAA2AAQKAFaAAAZAAAAJwAA4lABtAAZAAAAJwAAJAUAGQAAACcAAAARAAAKDU\
ALkAEAAADgBABAFU6AFgBABgAAwAkAgDiAAJACZAAATgAAyAsARgAAAECMCo1BIxEAhBAhQAYAYA\
QAAGCFWBVOg1Oig7gALoAMAMAJsTCcCCcphBAXwAWQAQA4IRawCAkiYWQQhUABUAAQaEQiAwBBoB\
AoxSIDyABKAAIlTviFogQ=")));
      defaults.editorBackgroundStage = 0;
      break;
    case "17a472d":
    case "25f75d93":
    case "9e808430":
    case "91c5cddf":
    case "aebec1df":
      console.info("Fun mode 5");
      ship = Ship.fromObject(B64Key.decode(B64Key.b64ToU8arr("gIAEEFN0YXJ0ZX\
IgRHJvbmVib2kABD9TDSCAv6/65vbGnas+ELMGgvIGgrKuIChrYKhuICjrCoKyBpQ34LgncNaA6g\
ak9QRBWQPKGnDcFQjauHnfBwJbWzAsMTYsMCwxNiwwLDE2LDAsMTYsMCwxNiwwLDE2LDAsMTYsMC\
wxNiwwLDE2LDAsMTYsMCwxNiwwLDE2LDAsMTYsMCwxNiwwLDE2LDAsMTYsMCwxNl0sIntcImNvbG\
9yXCI6XCJMaW1lXCJ9Il0=")));
    case "8bb3bad8":
      console.info("Fun mode 7");
      setTimeout(function () {
        backgHangarInit.ready = NaN;
      });
      break;
    case "123897b6":
      console.info("Debug mode (8)");
      test_debug = !0;
      break;
    case "b6f47340":
      console.info("Fun mode 9");
    case "ae3c8f3b": // ?.html
      init_funMode = function () {
        enableLogicEditing();
        ship = Ship.fromObject(B64Key.decode(B64Key.b64ToU8arr(("gIAEDEFOT05\
fU2h1dHRsZQAEXVy0aoC/TzvnFnWt0z4R4pYUZx2CorwBRXLToKjrQJPehCK9CdKboLhB4MUPQVw\
DhrgGiGuAuAaIa4C1XkER14AjrgFBjHHEFUWbA4oxBxTVDSjWu1FsOeBYccQw3YRiywPBlnFsGcG\
WcTR3YGgxji0HODKK5gYEzYXmQnOhrhXKGhDENSCIa0DR5oKjywFFigOOFQcczw0obnxxxDXgqGs\
SmGvBE1uuied3AltbMCw0NSw0NSw2OCwwLDQ1LDAsNDUsMTEzLDcxLDAsNDUsMCw0NSwwLDQ1LDA\
sNDUsMTg0LDY4LDI1Miw2OSwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0LDMyMSw\
0NCwzMjEsNDQsMzIxLDQ0LDM2NSw1OSwzMjEsNDQsNDI0LDcwLDQ5NCw2NCw1NTgsNzAsNjI4LDQ\
5LDY3Nyw2Miw3MzksNTYsNzk1LDY3LDg2Miw2Miw5MjQsNjIsOTg2LDYyLDEwNDgsNjIsMTExMCw\
2NSwxMTc1LDU5LDEyMzQsNjIsMTI5Niw2MiwxMzU4LDY1LDE0MjMsNjUsMTQ4OCw2NSwxNTUzLDY\
1LDE2MTgsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMTY2Miw3MCwxNzMyLDYyLDE3OTQsMzksMTg\
zMyw1NiwxODg5LDY2LDE5NTUsNjEsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0XSwie1wiY29\
sb3JcIjpcIk9yYW5nZVwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclw\
iOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzNdLFwid2V\
sZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzE4MDAwXSx\
cIm5vZGVJbmRleFwiOlsyLDFdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF\
5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzRdLFwid2VsZEdyb3VwXCI6MH1\
7XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbWzAsMCwwLDBdXSxcIm5vZGVJbmRleFw\
iOls1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W10\
sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJcIixcImNvbnRyb2xcIjpbMSwwXSxcIm5vZGV\
JbmRleFwiOlszNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJ\
vbFwiOltdLFwibm9kZUluZGV4XCI6WzIzLDIyLDIxLDIwXSxcIndlbGRHcm91cFwiOjB9e1wiY29\
sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTksMThdLFwid2V\
sZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiTGlnaHQgR3JheVwiLFwiY29udHJvbFwiOls3NTAwXSx\
cIm5vZGVJbmRleFwiOlsyNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJMaWdodCBHcmF\
5XCIsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFw\
iY29udHJvbFwiOlswXSxcIm5vZGVJbmRleFwiOlsxN10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9\
yXCI6XCJcIixcImNvbnRyb2xcIjpbXSxcIm5vZGVJbmRleFwiOlsxMV0sXCJ3ZWxkR3JvdXBcIjo\
wfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiOlsyNzAwMF0sXCJub2RlSW5kZXhcIjp\
bNyw2XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzB\
dLFwibm9kZUluZGV4XCI6WzM3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCI\
sXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM2XSxcIndlbGRHcm91cFwiOjB9e1wiY29\
sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM4XSxcIndlbGR\
Hcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV\
4XCI6WzM1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI\
6WzExMjVdLFwibm9kZUluZGV4XCI6WzMxXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlw\
iLFwiY29udHJvbFwiOlsxLDBdLFwibm9kZUluZGV4XCI6WzMzXSxcIndlbGRHcm91cFwiOjB9e1w\
iY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzMyXSxcInd\
lbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUl\
uZGV4XCI6WzI1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9\
sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzI3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjp\
cIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzMwXSxcIndlbGRHcm9\
1cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV\
4XCI6WzI4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI\
6WzExMjVdLFwibm9kZUluZGV4XCI6WzI5XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJ\
sYWNrXCIsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVw\
iLFwiY29udHJvbFwiOltdLFwibm9kZUluZGV4XCI6WzE2LDE1LDE0LDEzXSxcIndlbGRHcm91cFw\
iOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzE\
yXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY29udHJvbFwiOltdLFwid2VsZEd\
yb3VwXCI6MH17XCJjb2xvclwiOlwiXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTB\
dLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbNDUwMF0\
sXCJub2RlSW5kZXhcIjpbOSw4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCI\
sXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMjZdLFwid2VsZEdyb3VwXCI6MH0" +
        "iXQ==").replace(/ /g, ""))));
        ship.fixPositionAdjustment(!0);
        if (location.href.slice(-3) === "=uh")
          return;
        Math.random() > .5 ?
          rend_collisions = true :
          test_collbxs = true;
      };
      break;
    case "bad106e2":
    case "ebbbcdda":
      console.info("Fun mode 10");
      ship = Ship.fromObject(JSON.parse('{"n":"Ingame logic prev iew","gv":"\
","dt":"15.09.2024 11:29:59","ls":0,"b":[{"n":"Core","p":[0,0],"r":180,"f":f\
alse,"s":"White","c":[],"ni":[],"wg":0},{"n":"Small Battery","p":[1,0.5],"r"\
:180,"f":false,"s":"White","c":[],"ni":[],"wg":0},{"n":"Small Battery","p":[\
-1,0.5],"r":180,"f":false,"s":"White","c":[],"ni":[],"wg":0},{"n":"Small Sto\
rage Rack","p":[1,-0.5],"r":180,"f":false,"s":"White","c":[],"ni":[],"wg":0}\
,{"n":"Small Storage Rack","p":[-1,-0.5],"r":180,"f":false,"s":"White","c":[\
],"ni":[],"wg":0},{"n":"Reaction Wheel","p":[1,1.5],"r":180,"f":false,"s":"W\
hite","c":[7500],"ni":[13],"wg":0},{"n":"Distance Sensor","p":[0,-1],"r":180\
,"f":false,"s":"White","c":[],"ni":[2],"wg":0},{"n":"Speed Sensor","p":[0,1]\
,"r":180,"f":false,"s":"White","c":[0],"ni":[3],"wg":0},{"n":"AND Gate","p":\
[0,2],"r":180,"f":false,"s":"White","c":[],"ni":[6,5,4],"wg":0},{"n":"Small \
Hydraulic Drill","p":[1,-1.5],"r":180,"f":false,"s":"White","c":[],"ni":[7],\
"wg":0},{"n":"Small Hydraulic Drill","p":[-1,-1.5],"r":180,"f":false,"s":"Wh\
ite","c":[],"ni":[8],"wg":0},{"n":"Small Ion Thruster","p":[1,2.5],"r":180,"\
f":false,"s":"White","c":[4500],"ni":[10,9],"wg":0},{"n":"Small Ion Thruster\
","p":[-1,2.5],"r":180,"f":false,"s":"White","c":[4500],"ni":[12,11],"wg":0}\
,{"n":"Threshold Gate","p":[-0.5,1.5],"r":270,"f":false,"s":"White","c":[0,1\
],"ni":[14,1],"wg":0},{"n":"Threshold Gate","p":[-1.5,1.5],"r":90,"f":false,\
"s":"White","c":[0,1],"ni":[16,15],"wg":0},{"n":"Tiny Ion Thruster","p":[2,-\
0.5],"r":0,"f":false,"s":"White","c":[1125],"ni":[17],"wg":0},{"n":"Tiny Ion\
 Thruster","p":[2,2],"r":0,"f":false,"s":"White","c":[1125],"ni":[20],"wg":0\
},{"n":"Tiny Ion Thruster","p":[-1.5,2],"r":0,"f":false,"s":"White","c":[112\
5],"ni":[21],"wg":0},{"n":"Tiny Ion Thruster","p":[-1.5,-0.5],"r":0,"f":fals\
e,"s":"White","c":[1125],"ni":[18],"wg":0},{"n":"Small Solar Panel","p":[2,0\
],"r":270,"f":false,"s":"White","c":[],"ni":[19],"wg":0},{"n":"Small Solar P\
anel","p":[2,1],"r":270,"f":false,"s":"White","c":[],"ni":[22],"wg":0},{"n":\
"Small Solar Panel","p":[-2,0],"r":90,"f":false,"s":"White","c":[],"ni":[23]\
,"wg":0},{"n":"Small Solar Panel","p":[-2,1],"r":90,"f":false,"s":"White","c\
":[],"ni":[24],"wg":0}],"nc":[{"Item1":24,"Item2":4},{"Item1":23,"Item2":4},\
{"Item1":22,"Item2":4},{"Item1":19,"Item2":4},{"Item1":16,"Item2":2},{"Item1\
":14,"Item2":3},{"Item1":8,"Item2":15},{"Item1":7,"Item2":15},{"Item1":6,"It\
em2":1},{"Item1":5,"Item2":15}],"ci":[],"significantVersion":20}'));
      break;
    case "d4d00d64":
    case "c058adcc":
      console.info("Fun mode 11");
      defaults =
        /** @type {typeof defaults} */
        ({});
      loadSettings();
      defaults.renderSharp = true;
      saveSettings();
      (GE("style") || EL()).appendChild(tN("#commandsTab,#info,#commandsTab \
*,#info *{border-radius: 0;filter: contrast(7) brightness(0.7);font-weight: \
bolder;}#commandsTab button:hover,#commandsTab button:focus{font-weight: nor\
mal;}"));
  }
})(/\/[0-9a-zA-Z._+\-:]+\/editor(?:\.html)?(?:#[^?]*)?($|\?[^=]*)/);

var imgOverlay = document.body.appendChild(document.createElement("img"));
imgOverlay.style.display = "none";
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAYACAMA\
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\
TkSuQmCC";
var imgMask = document.createElement("img");
imgMask.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAYACAIAAAA\
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";
var imgColor = document.createElement("img");
imgColor.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAOgCAIAAA\
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\
Jggg==";
var imgBackg = document.createElement("img");
var helpCanvas = document.createElement("canvas"),
  rc = function (rc) {
    return rc instanceof CanvasRenderingContext2D ?
       rc : new CanvasRenderingContext2D;
  }(helpCanvas.getContext("2d",
    // shut up chromium browsers
    {willReadFrequently: true}));

canvas.style.backgroundColor = document.body.style.backgroundColor =
  defaults.editorBackground ? "#132122" : defaults.editorBackgroundColor;
imgBackg.src = "./assets/_" + [
  "dbc",
  "db",
  "editor",
  "dbve2",
  "dbve"
][defaults.editorBackgroundImage] + "_background.png";

/** @this {any} */
function del(i) {
  if (i < 0)
    return this.length;
  while (++i < this.length)
    this[i - 1] = this[i];
  return --this.length;
}
/**
 * @type {{input:HTMLInputElement,curr:HTMLInputElement|null,
 * files:(File|null)[],open:number[],upload:HTMLButtonElement}}
 */
var file = {
  input: EL("input"),
  curr: null,
  files: [null],
  open: [0],
  upload: EL("button")
};
function fileNames() {}
/**
 * @callback fileExecute
 * @param {Uint8Array} fileData
 * @param {number} mode to determine way/place of parser used
 * @param {File} file
 * @returns {boolean} true if file is invalid (to process next)
 */
/**
 * Executes when the files have been checked with at least one success
 * @callback fileExecuteFinally
 */
/**
 * Executes callback with readed file data for files supporting a loadbar
 * @param {fileExecute} f_exec returns true if data are correct
 * @param {string} error
 * @param {fileExecuteFinally} [f_final]
 * @param {HTMLElement|null} [loadBar]
 * @param {number} [mode] 0 to check all, else stop after first valid
 */
function fileOpener(f_exec, error, f_final, loadBar, mode) {
  var final = f_final || F;
  var btn = loadBar || EL();
  mode = mode || 0;
  if (!file.open.length)
    return console.error("No files chosen");
  var fl_i = file.open[0], succ = 0, st, barE = function (n, b) {
    bar.style.width = n * 100 + "%";
  }, barF = function () {
    st.width = "100%";
    if (!succ)
      st.backgroundColor = "#744";
    setTimeout(function () {
      st.transition = "0.3s";
      st.backgroundColor = "#0000";
    }, 130);
    setTimeout(function () {
      btn.style.display = "";
      (fill.parentElement || EL()).removeChild(fill);
    }, 400);
  }, fl_o = 0;
  function nextCLi() {
    for (var i = 0, o = file.open; !o.length || fl_i >= o[i];)
      if (++i >= o.length)
        return !1;
    fl_i = o[fl_o = i];
    return !0;
  }
  function readFile() {
    var reader = new FileReader();
    if (file.files[fl_i] instanceof Blob)
      reader.readAsArrayBuffer(file.files[fl_i] || new Blob());
    else {
      del.call(file.open, fl_o);
      if (nextCLi())
        return readFile();
      else {
        try {
          console.log(succ ? final() : console.error(error), succ);
        } catch (e) {}
        barF();
        return fileNames();
      }
    }
    reader.addEventListener("loadend", function event() {
      if (this.error !== null) {
        if (this.error.name === "NotReadableError")
          //@ts-ignore
          console.warn("file " + file.files[fl_i].name + " changed");
        else
          console.error(this.error + "\nat fileOpener");
        del.call(file.open, fl_o);
        fileNames();
      }
      try {
        //@ts-expect-error
        var ar = new Uint8Array(this.result),
        /** @see {fileExecute} returns true for succes, continue otherwise */
        //@ts-expect-error
          next = !f_exec(ar, mode, file.files[fl_i]);
      } catch (e) {
        next = !!+console.error(e && e instanceof Error ?
            e.message || e :
            e,
          " fileOpener:?", e && typeof e == "object" && "stack" in e ?
            e.stack + "" :
            "");
      }
      barE((fl_i + 1) / file.files.length, succ |= +!next);
      if (next || mode)
        if (nextCLi())
          return readFile();
        else
          console.log(succ ? final() : console.error(error), succ);
      else
        final();
      barF();
    }, false);
  }
  function pdg(s, px) {
    return fill.style["padding" + s] = px;
  }
  if (loadBar !== null) {
    // <btn.parentNode>
    //   <btn(button)>#btn.innerText</btn>
    // </btn.parentNode>
    var w = btn.offsetWidth, fill = EL();
    fill.className = "loading";
    var bar = fill.appendChild(EL());
    (btn.parentNode || EL()).insertBefore(fill, btn);
    fill.appendChild(EL()).appendChild(tN(btn.innerText));
    btn.style.display = "none";
    (st = bar.style).width = "1%";
    st.backgroundColor = "#474";
    // require styles for: .loading; .loading div:nth-child(1);
    // .loading div:nth-child(1);
    // <btn.parentNode>
    //   <fill(div) class="loading">
    //     <bar(div) style="width:0;background-color:#474;"></bar>
    //     <(variableless)div>#btn.innerText</div>
    //   </fill>
    //   <btn(button) style="display:none;">#btn.innerText</btn>
    // </btn.parentNode>
    if (fill.offsetWidth !== w) {
      pdg("", "0px");
      pdg("Left", pdg("Right", (w - fill.offsetWidth >> 1) + "px"));
      // (GE(45) || EL()).classList.remove("corr1");
      pdg("Top", pdg("Bottom", ""));
    }
  } else
    barE = barF = F;
  readFile();
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop(e) {
  e.preventDefault();
  var i = 0, l = file.files.length, t = e.dataTransfer, a = t.files, f;
  if (a && a.length)
    f = function () {
      return a[i];
    };
  else if ((a = t.items) && a.length)
    f = function () {
      return a[i].getAsFile();
    };
  for (; i < a.length; i++, l++) {
    //@ts-ignore
    file.files.push(f() || null);
    file.open.push(l);
  }
  setTimeout(fileNames);
}
(function (delay) {
  var el = file.input, btn = file.upload = EL("button");
  el.id = "2";
  el.type = "file";
  el.multiple = true;
  el.style.display = "none";
  bd && bd.appendChild(el);
  file.open.length = 0;
  btn.appendChild(tN("Upload DBV+JSON from file/files"));
  btn.onclick = function () {
    if (delay < Date.now()) {
      file.input.click();
      delay = Date.now() + 900;
    }
  };
  var pN = btn.parentNode instanceof HTMLElement ? btn.parentNode : EL();
  pN.ondragover = dragOver;
  pN.ondrop = dragDrop;
})(0);
/** @this {GlobalEventHandlers} */
function onFile(e) {
  if (!(this instanceof HTMLInputElement))
    return;
  var i = 0, a = this.files, el;
  if (a && a.length) {
    file.curr = this;
    file.files = [];
    for (file.open = []; i < a.length; i++)
      file.files[file.open[i] = i] = a[i];
    fileNames();
    el = file.input = EL("input");
    el.id = "2";
    el.type = "file";
    el.multiple = true;
    el.style.display = "none";
    this.parentNode && this.parentNode.replaceChild(el, this);
    el.onchange = onFile;
  }
  // temporary solution: single purpuse file load
  fileOpener(onFile.temporaray, "Invalid DBV file I guess.", F,
    file.upload);
}
/** @param {Uint8Array} uar */
onFile.temporaray = function (uar) {
  return true;
};
file.input.onchange = onFile;

/** @type {()=>string} */
var placingBlock = function () {
  return ["Core", "Block", "Wedge", "Small Hydrogen Thruster",
    "Reaction Wheel","Small Hydrogen Tank", "Small Battery"
    ][Math.random() * 7 | 0];
};
/** @param {string} s @param {boolean} b @returns */
function blockBind(s, b) {
  return function () {
    placingBlock = function () {
      blockBind.changingColor = b;
      return s;
    };
  };
}
blockBind.changingColor = !1;
blockBind.changingPosition = !1;

/** @param {string} tag @returns {[HTMLButtonElement,HTMLDivElement]} */
function utilities(tag) {
  var el = EL(), btn = EL("button");
  el.style.display = "none";
  btn.appendChild(tN(tag));
  btn.style.color = "#569cd6";
  var br = btn.appendChild(EL("br")),
    text = btn.appendChild(tN("v"));
  btn.onclick = function () {
    var isHide = !el.style.display;
    el.style.display = isHide ? "none" : "";
    br.style.display = isHide ? "" : "none";
    text.data = isHide ? "v" : " <";
  };
  return [btn, el];
}
utilities.rend_UI = F;
/** class is sealed
 * @typedef {{name:string,type:string,fn:(ev:Event)=>any}} CommandItem
 * @param {string} name
 * @param {string} description
 * @param {{name:string,type:string,fn:(ev:Event)=>any}[]|((items:{
 * appendChild:typeof document.appendChild})=>void)} items indefinite
 * @param {boolean|string} [setting=false] */
function Command(name, description, items, setting) {
  this.name = name;
  this.group = typeof setting == "string" ? setting : "";
  this.description = !setting ? description : "";
  if (setting && items.length !== 1)
    throw new Error("Setting must contain only boolean handler.");
  this.items = items;
  this.setting = typeof setting != "string" ? !!setting : !1;
  Object.freeze(this);
}
/** @type {Command[]} */
Command.list = [];
Command.groupName = "";
Command.rend_UI = F;
Command.listening = -1;
Command.NAME = {"Setup Properties": "Setup Properties"};
/**
 * @type {{
 *   (name: string, items: [{name:string,type:string,
 *     fn:(ev:Event)=>any}], setting: true): number,
 *   (name: string, items: {name:string,type:string,
 *     fn:(ev:Event)=>any}[], description: string): number
 * }}
 * @param {string} name @param {CommandItem[]} items
 * @param {string|true} desc */
Command.add = function add(name, items, desc) {
  if (desc === !0)
    var o = new Command(name, "", items, !0);
  else
    o = new Command(name, desc, items, !1);
  Command.initItem(o);
  return this.list.push(o);
};
/**
 * @callback CmdInit
 * @param {(Node|{name:string,inp:HTMLInputElement})[]} items
 * @param {typeof utilities} collapsed utilities interface:
 * itself is a function for making item groups also having plenty
 * of other properties for more funtionalities @see {utilities}
 * @returns {void} */
/** use items poperty intialize callback by pushing items
 * (items: Array<Node | {name: string, inp: HTMLInputElement}>) => void
 * you can use named inputs or Elemets to build up command menu
 * the fancy stuff is done by utilities inteface (collapsed)
 * @param {string} name @param {string} description
 * @param {CmdInit} initialize @param {{group?:string,
 * reloads?:boolean}} [settings]
 */
Command.push = function (name, initialize, description, settings) {
  name = Command.NAME[name] || name;
  settings = settings || {};
  function itemsInit(el) {
    /** @type {(Node|{name:string,inp:HTMLInputElement})[]} */
    var items = [];
    initialize(items, utilities);
    for (var i = 0, itm; i < items.length; i++)
      if ((itm = items[i]) instanceof Node)
        el.appendChild(itm);
      else {
        el.appendChild(tN(itm.name + ": "));
        el.appendChild(itm.inp);
        el.appendChild(EL("br"));
      }
  }
  return this.list.push(Command.initItem(new Command(name, description,
    itemsInit, settings.group)));
};
/** after Commands Tab was initialized new commands are added live
 * @param {Command} cmd */
Command.initItem = function (cmd) {
  return cmd;
};
Object.seal(Command);

Command.push("Select Block", function (items, collapsed) {
  var tags = [
      "Core and Basic",
      "Core and Basic",
      "Core and Basic",
      "Movement",
      "Storage",
      "Drills and Weapons",
      "Misc",
      "Logic",
      "Logic",
      "Station parts",
      "Station parts",
      "",
      "",
      "",
      "",
      "",
      "",
      "Juhus",
      "",
      "",
      "",
      "Droneboi (classic)",
      "Droneboi (classic)",
      "Droneboi (classic)"
    ],
    /** @type {{[kye:string]:[HTMLButtonElement,HTMLDivElement]}} */
    groups = {
      "Core and Basic": collapsed("Core and Basic"),
      "Movement": collapsed("Movement"),
      "Storage": collapsed("Storage"),
      "Drills and Weapons": collapsed("Drills and Weapons"),
      "Misc": collapsed("Misc"),
      "Logic": collapsed("Logic"),
      "Station parts": collapsed("Station parts"),
      "Droneboi (classic)": collapsed("Droneboi (classic)"),
      "Juhus": collapsed("Juhus")
    }, btn = EL("button");
  btn.appendChild(tN("remove block"));
  btn.onclick = blockBind("remove", !1);
  items.push(btn);
  for (var i = 690, s = ""; i < 1092; i++)
    if (s = Data.titles[i] || "") {
      btn = EL("button");
      btn.appendChild(tN(s));
      btn.onclick = blockBind("" + Block.NAME[i], !1);
      var one = groups[tags[i - 690 >> 4]];
      one && one[1].appendChild(btn);
    }
  /** @type {(...args:HTMLElement[][])=>void} */
  function pushCollapsed() {
    for (var i = 0; i < arguments.length;)
      Array.prototype.push.apply(items, arguments[i++]);
  }
  pushCollapsed(groups["Core and Basic"], groups.Movement);
  pushCollapsed(groups.Storage, groups["Drills and Weapons"]);
  pushCollapsed(groups.Misc, groups.Logic, groups["Station parts"]);
  pushCollapsed(groups["Droneboi (classic)"], groups.Juhus, groups.Bruh);
  var opt = EL("input");
  opt.type = "checkbox";
  opt.checked = blockBind.changingPosition;
  opt.onchange = function () {
    if (!(this instanceof HTMLInputElement))
      return;
      blockBind.changingPosition = this.checked;
  };
  items.push({name: "Precise position", inp: opt});
}, "Select block from list of blocks, clicking into space will place that, c\
licking on existing block rotates it. First item \"remove\" removes existing\
 block.\nCredits to KKJKJH specialy for station blocks sources and Beau for \
source textures of most blocks.");

Command.add("Select Color", function () {
  /** @type {CommandItem[]} */
  var items = [];
  for (var i = 0, s = ""; i < Color.NAME.length; i++)
    if (s = Color.NAME[i] || "White")
      items.push({name: s, type: "button", fn: blockBind(s, !0)});
  items.push({name: "[custom color]", type: "input", fn: function () {
    if (!(this instanceof HTMLInputElement))
      return;
    rc.fillStyle = this.value;
    if (rc.fillStyle === this.value) {
      helpCanvas.width = helpCanvas.height = 32;
      rc.fillStyle = this.value;
      rc.fillRect(0, 0, 32, 32);
      rend_colors[22] = ctx.createPattern(helpCanvas, "repeat") || "";
      render();
    }
  }});
  return items;
}(), "Select color from list of colors, clicking on existing block will reco\
lor it.");

Command.push("Setup Properties", function (items, collapsed) {
  var idx = 0, span = EL("span"), text = span.appendChild(tN(""));
  span.id = "block-idx";
  span.onchange = F;
  var index = EL("input");
  var posX = EL("input"), posY = EL("input"), setPos = EL("button");
  var name = EL("input"), props = EL(), focus = EL("input");
  props.style.textAlign = "middle";
  /** fost @param {any} reference @param {number|string} property */
  function Ref(reference, property) {
    this.ref = reference;
    this.p = property;
    Object.freeze(this);
  }
  function displayProperties() {
    /** @param {WeldGroups} item */
    function addWeldGroups(item) {
      var b0 = item.default[0] instanceof Array;
      (b0 && weldSelects[0].p == "weldGroup" ? weldSelects = [] : b0) ?
        /** @type {[number,number,number,number]} */
        (customParam[item.idx]).forEach(function (e, i, a) {
            weldSelects.push(new Ref(a, i));
          }) :
        weldSelects.push(new Ref(customParam, item.idx));
    }
    /** @param {Ref} ref */
    function initWeldGroup(ref) {
      // onchange event handler has live reference to the value
      // kept in its own scope and assigned from properties.customParameter
      var node =
        /** @type {HTMLSelectElement} */
        (weldGroup.cloneNode(!0));
      node.selectedIndex = +ref.ref[ref.p] || 0;
      node.onchange = function () {
        if (this instanceof HTMLSelectElement)
          ref.ref[ref.p] = this.selectedIndex;
      };
      props.appendChild(node);
    }
    /** @type {Block} */
    var block = ship.blocks[text.data = "" + idx],
      /** Block.PROP defeinition of type of current processed block */
      p;
    if (!block)
      return render();
    name.value = block.internalName;
    var units = +defaults.meterPositions + 1;
    posX.value = block.position[1] / units + "";
    posY.value = block.position[2] / units + "";
    try {
      span.onchange &&
        /** @type {Function} */
        (span.onchange)();
    } catch (e) {
      console.error(e);
    }
    for (var itm; props.lastChild;)
      props.removeChild(props.lastChild);
    var weldSelects = [new Ref(block.properties, "weldGroup")];
    if (!(p = Block.PROP[Block.ID[block.internalName]])) {
      props.appendChild(tN("Weld group: "));
      initWeldGroup(weldSelects[0]);
      return render();
    }
    var customParam = block.properties.customParameter || [""];
    for (var i = 0, Items = Block.Properties.Items; i < p.length; i++) {
      p[i].name && props.appendChild(tN(p[i].name + ": "));
      switch ((itm = p[i].item) && p[i].type) {
        case "Slider":
          if (!(itm instanceof Items.Slider))
            break;
          // !!! only one Item of this property type possible
          // (because the slider element referenced by local variable)
          var slider = props.appendChild(EL("input")),
            input = props.appendChild(EL("input"));
          var sldI = i;
          slider.type = "range";
          input.type = "number";
          slider.min = input.min = "" + itm.min;
          slider.max = input.max = "" + itm.max;
          slider.step = "0.1";
          slider.value = input.value = "" + customParam[sldI];
          slider.oninput = input.oninput = function () {
            if (!(this instanceof HTMLInputElement))
              return;
            slider.value = this.value;
            this.type == "range" ? input.value = slider.value : 0;
            customParam[sldI] = Number(slider.value) || 0;
          };
        case "Integer Slider":
          if (!(itm instanceof Items["Integer Slider"]))
            break;
          // !!! only one Item of this property type possible
          var intSlider = props.appendChild(EL("input")),
            intInp = props.appendChild(EL("input"));
          var intI = i;
          intSlider.type = "range";
          intInp.type = "number";
          intSlider.min = intInp.min = "" + itm.min;
          intSlider.max = intInp.max = "" + itm.max;
          intSlider.step = "1";
          intSlider.value = intInp.value = "" + customParam[intI];
          intSlider.oninput = intInp.oninput = function () {
            if (!(this instanceof HTMLInputElement))
              return;
            intSlider.value = this.value;
            this.type == "range" ? intInp.value = intSlider.value : 0;
            customParam[intI] = Number(intSlider.value) || 0;
          };
        case "Dropdown":
          // !!! only one Item of this property type possible
          if (!(itm instanceof Items.Dropdown))
            break;
          var dropdown = props.appendChild(EL("select")), dpdwnI = i;
          var list = itm.options, j = 0;
          if (block.internalName === "Control Block") {
            var inputs = ship.prop && ship.prop.customInputs || [];
            list = list.concat(inputs.map(String));
          }
          for (; j < list.length; j++) {
            var opt = EL("option");
            opt.appendChild(tN(list[j]));
            opt.value = block.internalName === "Control Block" ?
              list[j] :
              "" + j;
            dropdown.add(opt);
          }
          j = p[i].name === "Controls" ?
            list.indexOf("" + customParam[dpdwnI]) :
            +customParam[dpdwnI];
          j < 0 ?
            (dropdown.item(j) || OC()).selected = !0 :
            console.error("Not existing custom input selected!");
          dropdown.onchange = function () {
            customParam[dpdwnI] = block.internalName === "Control Block" ?
              dropdown.value :
              +dropdown.value;
          };
        case "Number Inputs":
          if (!(itm instanceof Items["Number Inputs"]))
            break;
          itm;
        case "Text Inputs":
          // !!! only one Item of this property type possible
          if (!(itm instanceof Items["Text Inputs"]))
            break;
          var txtI = i, txtInput = props.appendChild(EL("input"));
          txtInput.value = "" + customParam[txtI];
          txtInput.oninput = function () {
            customParam[txtI] = txtInput.value;
          };
          if (itm.default.length > 1) {
            props.appendChild(tN("INTERNAL ERROR WITH PROPERTY EDIT!"));
            console.error("Can't display and edit more than one text.");
            i += itm.default.length - 1;
          }
        case "WeldGroups":
          itm instanceof Items.WeldGroups && addWeldGroups(itm);
          i += itm.default.length - 1;
      }
      p[i].type !== "WeldGroups" && props.appendChild(EL("br"));
    }
    props.appendChild(tN("Weld group: "));
    for (var i = 0; i < weldSelects.length;)
      initWeldGroup(weldSelects[i++]);
    render();
  }
  function updateFocus() {
    if (!focus.checked)
      return;
    var pos = ship.blocks[idx].position;
    vX = (pos[1] / 2 + 1) * sc * 2 + canvas.width / 2;
    vY = -pos[2] / 2 * sc * 2 + canvas.height / 2;
  }
  items.push(tN("Current order position: "), span);
  items.push(EL("br"), {name: "Destination order", inp: index});
  var select = EL("button"), next = EL("button");
  select.appendChild(tN("Select destination block"));
  select.onclick = function () {
    var l = ship.blocks.length - 1;
    idx = Number(index.value) || 0;
    text.data = "" + (idx > l ? idx = l : idx);
    updateFocus();
    displayProperties();
  };
  next.appendChild(tN("Move to next block"));
  next.onclick = function () {
    text.data = "" + (idx < ship.blocks.length - 1 ? idx += 1 : idx);
    updateFocus();
    displayProperties();
  };
  focus.type = "checkbox";
  focus.id = "focus";
  var insert = EL("button"), exchange = EL("button");
  insert.appendChild(tN("Insert"));
  insert.onclick = function () {
    var blocks = ship.blocks, temp = blocks[idx];
    var dest = Number(index.value) || 0;
    dest < blocks.length ? 0 : dest = blocks.length - 1;
    if (idx > dest)
      for (; idx-- > dest;)
        blocks[idx + 1] = blocks[idx];
    else
      for (; idx < dest; idx++)
        blocks[idx] = blocks[idx + 1];
    blocks[text.data = "" + (idx = dest)] = temp;
    displayProperties();
  };
  exchange.appendChild(tN("Exchange"));
  exchange.onclick = function () {
    var temp = ship.blocks[idx], dest = Number(index.value) || 0;
    dest < ship.blocks.length ? 0 : dest = ship.blocks.length - 1;
    ship.blocks[idx] = ship.blocks[dest];
    ship.blocks[text.data = "" + (idx = dest)] = temp;
    displayProperties();
  };
  items.push(select, next, {name: "focus", inp: focus}, insert, exchange);
  setPos.appendChild(tN("Set position"));
  setPos.onclick = function () {
    var units = +defaults.meterPositions + 1;
    var pos = ship.blocks[idx].position;
    [posX, posY].map(function (e, i) {
      pos[i + 1] = Math.round((Number(e.value) || 0) * units);
    });
    render();
  };
  items.push({name: "Position X", inp: posX},
    {name: "Position Y", inp: posY});
  name.oninput = function () {
    var n = Block.ID[name.value];
    if (!(n > 689 && n < 946))
      return;
    ship.blocks[idx].internalName = name.value;
    displayProperties();
  };
  items.push(setPos, {name: "Block name", inp: name}, props);
  for (var i = 0, weldGroup = EL("select"); i < 5;) {
    var option = EL("option");
    option.style.backgroundColor = [
      "white",
      "blue",
      "red",
      "green",
      "yellow"
    ][i];
    option.appendChild(tN("" + i++));
    weldGroup.add(option);
  }
  weldGroup.onchange = function () {
    ship.blocks[idx].properties.weldGroup = Number(weldGroup.value);
  }
  collapsed.rend_UI = function () {
    var block = ship.blocks[idx], s = block.internalName, pos;
    if (!(pos = block.position))
      return;
    // calculations from expensiveRenderer
    var size = Block.Size.VALUE[Block.ID[s]] || {w: .5, h: .5};
    var ow = size.w, oh = size.h, rot = 10 - block.rotation[2] & 3;
    var w = ow + (ow & 16), h = oh + (oh & 16), tiny = (oh | ow) & 16;
    var dx = -pos[1] * sc + vX, dy = pos[2] * sc + vY;
    dx += (block.rotation[1] ?
      rot === 0 ? 32 - w : rot === 3 ? 32 - h : tiny :
      rot === 2 ? 32 - w : rot === 3 ? 32 - h : tiny) * sc / 16;
    rot === 0 ?
      dy += (32 - h - tiny) * sc / 16 :
      rot === (block.rotation[1] ? 1 : 3) ?
        dy += (32 - w - tiny) * sc / 16 :
        0;
    ctx.strokeStyle = defaults.highlightColor;
    ctx.lineWidth = defaults.highlightWidth;
    ctx.strokeRect(dx, dy, (rot & 1 ? h : w) * sc / 16,
      (rot & 1 ? w : h) * sc / 16);
  };
  displayProperties();
}, "Properties Command simply explained: index of selected block in blocks l\
ist, index in block list chosen by user (you), selects block at chosen index\
, selects next block in list, centers selected block to middle of window, pu\
ts block  at chosen index and other blocks will move by 1 towards new empty \
space, swaps block at chosen index with selected block, axis position specif\
ied or 0, axis position specified or 0, sets axis positions of selected bloc\
k, block type is set to valid block name, optionally some block properties (\
not explained), 0 is white 1 is blue 2 is red 3 is green 4 is yellow, this d\
escri.");
Command.push("Display Logic", function (items, collapsed) {
  function updateNodeSelect() {
    /** uses #text node to recover index selected from blocks selector of
     * "Setup Properties" command */
    var idx = Number(text.data), block = ship.blocks[idx];
    if (!block)
      return;
    /** @type {(Logic<any>|undefined)[]} */
    var logics = ship.prop && ship.prop.nodeList || [], temp = EL();
    temp.appendChild(tN("Logic block: " + idx + " " + block.internalName));
    temp.appendChild(EL("br"));
    /** @type {HTMLSelectElement|null} */
    var numerical = EL("select"),
      /** @type {(Logic<3>|undefined)[]} */
      nums = [UDF],
      /** @type {HTMLSelectElement|null} */
      logical = EL("select"),
      /** @type {(Logic<2>|undefined)[]} */
      logs = [UDF];
    numerical.appendChild(EL("option")).appendChild(tN("none"));
    logical.appendChild(EL("option")).appendChild(tN("none"));
    for (var i = logics.length; i-- > 0;) {
      var option = EL("option"), node = logics[i];
      if (!node || typeof node.pairs == "number")
        continue;
      if (!node.owner) {
        console.warn("Missing node.owner - logics[" + i + "]:", node);
        continue;
      }
      option.appendChild(tN(ship.blocks.indexOf(node.owner) + " " +
        node.owner.internalName));
      option.value = "" + i;
      (node.type & 1 ?
        (nums.push(node), numerical) :
        (logs.push(node), logical)).add(option);
    }
    var ni = block.properties.nodeIndex || [];
    for (i = 0; i < ni.length; i++) {
      if (!(node = logics[ni[i]]) || node.pairs instanceof Array)
        continue;
      var b = node.type & 1,
        /** @type {HTMLSelectElement} *///@ts-ignore
        select = (b ? numerical : logical).cloneNode(!0),
        pairsN = b ?
          nums.indexOf(logics[node.pairs]) :
          logs.indexOf(logics[node.pairs]);
      temp.appendChild(tN(b ? "set numerical: " : "set logical: "));
      select.name = "" + i;
      (select.item(pairsN < 0 ? 0 : pairsN) || OC()).selected = !0;
      select.onchange = function () {
        if (!(this instanceof HTMLSelectElement))
          return;
        var n = ni[+this.name], ref = +this.value;
        var input = logics[n], output = logics[ref];
        // output won't be assigned, but old node still needs disconnect
        if (this.value === "none")
          (output = new Logic(3, 0, 0)).pairs = [ref = -1];
        if (!input || !output)
          throw new Error((input ? "" : "input" + (output ?
            " and" :
            "")) + (output ? "" : " output") + " node was removed.");
        if (input.pairs instanceof Array)
          throw new Error("Node is supposed to be input.");
        if (typeof output.pairs == "number")
          throw new Error("Node is supposed to be output.");
        // if input wasn't connected before, *idk just leave it alone*
        var old = logics[+input.pairs] || {pairs: 0};
        if (old === output)
          throw new Error("Selected output haven't changed.");
        // asigns new connection/disconnection
        input.pairs = ref;
        // asigns new connection
        ref !== -1 && output.pairs.push(n);
        if (old.pairs instanceof Array) {
          for (n = old.pairs.indexOf(n); ++n < old.pairs.length;)
            old.pairs[n - 1] = old.pairs[n];
          old.pairs.length--;
        }
        render();
      };
      temp.appendChild(select);
      temp.appendChild(EL("br"));
    }
    connections.parentNode &&
      connections.parentNode.replaceChild(temp, connections);
    connections = temp;
  }
  var inp = EL("input"), connections = EL(), text = tN("#text error");
  inp.type = "checkbox";
  inp.checked = Logic.rend = !0;
  inp.oninput = function () {
    Logic.rend = inp.checked;
    render();
  };
  items.push({name: "Display Logic", inp: inp});
  // uses some elements from "Setup Properties" Command
  Command.list.some(function (e) {
    if (e.name !== Command.NAME["Setup Properties"] ||
      typeof e.items != "function")
      return;
    e.items({
      /** @type {typeof document.appendChild} */
      appendChild: function (node) {
        items.push(node);
        if (!(node instanceof HTMLElement))
          return node;
        node.id === "focus" ?
          this.appendChild = function (e) {
            return e;
          } : 0;
        if (node.id === "block-idx") {
          text = node.firstChild instanceof Text ?
            node.firstChild :
            text;
          node.onchange = updateNodeSelect;
        }
        return node;
      }
    });
    return true;
  });
  updateNodeSelect();
  /** @param {string} old @param {string} replacer */
  function updateControlParams(old, replacer) {
    /** @param {unknown} param custom parameter (DBV block's "c") property */
    function checkControlBlock(param) {
      if (!(param instanceof Array))
        return console.error("Control Block custom parameter is not an Array\
.");
      if (typeof param[0] != "string")
        console.warn("Index 0 of Control Block custom parameter property isn\
't string.");
      if ((param[0] += "") === old)
        return void (param[0] = replacer);
      if (options.indexOf(param[0]) === -1)
        param[0] = "Up";
    }
    /** @type {Block} */
    var block, options = Block.Properties.getInputOptions(ship.prop);
    for (B64Key.i = ship.blocks.length; B64Key.i-- > 0;)
      if ((block = ship.blocks[B64Key.i]).internalName === "Control Block")
        checkControlBlock(block.properties.customParameter);
  }
  var customInputs = EL(), template = EL("button");
  /**
   * @this {GlobalEventHandlers|void}
   * @param {MouseEvent|Ship.CustomInput} e */
  function addCustomInput(e) {
    var isInit = e instanceof Ship.CustomInput,
      remove = EL("button");
    if (!(this instanceof HTMLButtonElement || isInit))
      return;
    var custom = new Ship.CustomInput("Button", 0),
      prop = isInit ? OC() : ship.prop || (ship.prop = OC())
    isInit || (prop.customInputs instanceof Array ?
      (inputs = prop.customInputs).push(custom) :
      prop.customInputs = inputs = []);
    /** @type {Node} */
    var from = this instanceof HTMLButtonElement ? this : template,
      /** @type {Node|null} */
      prev;
    /** @type {Node&{onclick?:typeof template.onclick}} */
    var add = EL("button"), toggle = EL("input"), name = EL("input");
    while ((prev = from.previousSibling) && prev.nodeName !== "BR")
      from = prev;
    toggle.type = "checkbox";
    toggle.checked = isInit && e.type === 1;
    toggle.indeterminate = isInit && e.type === -1;
    toggle.oninput = function () {
      custom.name = name.value = (custom.type = +toggle.checked) ?
        /** @TODO unique names 'switching' */
        "Switch" :
        "Button";
      toggle.indeterminate = !1;
      updateControlParams("", "Up");
    };
    customInputs.insertBefore(toggle, from);
    name.type = "text";
    name.value = e instanceof Ship.CustomInput ? e.name : "Button";
    name.oninput = function () {
      updateControlParams(custom.name, name.value);
      custom.name = name.value;
    };
    customInputs.insertBefore(name, from);
    customInputs.insertBefore(add = template.cloneNode(!0), from);
    add.onclick = template.onclick;
    remove.style.width = "unset";
    remove.style.display = "initial";
    remove.appendChild(tN("Remove"));
    /** @type {Node&{onclick?:typeof template.onclick}} */
    (
      customInputs.insertBefore(remove, from)
    ).onclick = function () {
      if (!(this instanceof HTMLButtonElement))
        return;
      customInputs.removeChild(toggle);
      customInputs.removeChild(name);
      customInputs.removeChild(add);
      customInputs.removeChild(remove);
      customInputs.removeChild(br);
      // removes cutom property from Ship.props.customInputs of ship
      del.call(inputs, inputs.indexOf(custom));
      // non-existing controlInput values (removed one now too) set to default
      updateControlParams("", "Up");
    };
    var br = customInputs.insertBefore(EL("br"), from);
  };
  template.style.width = "unset";
  template.style.display = "initial";
  customInputs.appendChild(template).appendChild(tN("Add"));
  template.onclick = addCustomInput;
  var inputs = ship.prop && ship.prop.customInputs || [];
  for (var j = 0; j < inputs.length;)
    addCustomInput(inputs[j++]);
  items.push(connections, tN("Custom inputs:"), EL("br"), customInputs);
}, "Gives the option to toggle displaying logics, it may cause errors but tu\
rning it off might not get rid of all bugs related to Logic blocks either. U\
ses block selection from \"Setup Properties\" Command and the focus option. \
Inputs not yet with tags are listed with option field to select logic output\
 of the same type.");

Command.push("Import/Export DBV", function (items, collapsed) {
  var dbv = EL("input"), elBtn = EL("button"), error = EL();
  var gridCheck = EL("input"), grid = EL("select");
  gridCheck.type = "checkbox";
  gridCheck.oninput = function () {
    defaults.editorLaunchpadBorder = gridCheck.checked;
    render();
  };
  for (var i = Ship.Grid.VALUE.length; i-- > 0;) {
    var gridValue = Ship.Grid.VALUE[i];
    if (!gridValue)
      continue;
    var option = grid.appendChild(EL("option"));
    option.value = "" + i;
    option.appendChild(tN(gridValue.name));
  }
  grid.onchange = function () {
    var gridValue = Ship.Grid.VALUE[+grid.value];
    if (!gridValue)
      return;
    (ship.prop || (ship.prop = {})).gridSize = gridValue;
    ship.prop.launchpadSize = gridValue.dbvIndex;
    defaults.editorLaunchpadBorder && render();
  };
  i = Number(((ship.prop || {}).gridSize || {}).gridIndex);
  grid.value = isNaN(i) ? "null" : "" + i;
  items.push(tN("Grid size: "), gridCheck, grid, EL("br"));
  elBtn.onclick = function () {
    error.innerText = "";
    try {
      dbv.id = "saveFile";
      dbv.value = JSON.stringify(Ship.toDBV(Ship.checkDBV(ship)));
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Export"));
  items.push({name: ".DBV file content", inp: dbv},elBtn);
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      ship = Ship.fromObject(JSON.parse(dbv.value));
      ship.fixVersion_1_3();
      i = Number(((ship.prop || {}).gridSize || {}).gridIndex);
      grid.value = isNaN(i) ? "null" : "" + i;
      render();
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Import"));
  error.style.color = "red";
  onFile.temporaray = function (buffer) {
    if (buffer[0] !== 123 || buffer[buffer.length - 1] !== 125)
      return false;
    var s = "";
    try {
      s = String.fromCharCode.apply(String, [].slice.apply(buffer));
      var obj = JSON.parse(s);
      Ship.fromObject(obj);
      !(obj.significantVersion > 15) && ship.fixPositionAdjustment(!0);
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
      console.log(s);
      return !1;
    }
    json.value = dbv.value = s;
    return !0;
  };
  items.push(elBtn, error, file.upload);
  var json = EL("input"), download = EL("a"), div = EL();
  items.push({name: ".JSON save file", inp: json});
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      var logics = ship.prop && ship.prop.nodeList || [];
      if (ship.prop && ship.prop.nodeList) {
        ship.prop.nodeConnections = logics.map(function (e, i) {
          var node = e || {pairs: []}, n = node.pairs;
          return !!(typeof n == "number" && logics[n]) && [i, n] || [];
        }) 
        ship.prop.nodeList = UDF;
      }
      var s = JSON.stringify(ship);
      ship.prop && (ship.prop.nodeList = logics);
      download.href = URL.createObjectURL(
        new Blob([s], {type: "application/json"})
      );
      download.download = ship.name + ".json";
      json.value = s.slice(0, 69);
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
    }
    if (ship.getMode().mode !== "Ship")
      console.warn(error.innerText += "\nConverting Ship that isn't " +
        "Ship.Mode \"Ship\"!");
  };
  elBtn.appendChild(tN("Export"));
  items.push(elBtn);
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      var obj = JSON.parse(json.value);
      ship = Ship.fromObject(obj);
      !(obj.significantVersion > 15) && ship.fixPositionAdjustment(!0);
      i = Number(((ship.prop || {}).gridSize || {}).gridIndex);
      grid.value = isNaN(i) ? "null" : "" + i;
      render();
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Import"));
  download.appendChild(tN("Download but only .JSON"));
  download.href = "javascript:void(0)";
  div.appendChild(download);
  div.style.textAlign = "center";
  items.push(elBtn, div);
}, "Export and Import are functions using displayed vehicle as target.\nExpo\
rting creates JSON key of ship and puts it in text input, the key doesn't in\
clude nonexistent or blocks unavailable in game.\nImporting displays vehicle\
 of JSON key from text input.\nUpload from file/files button is used to load\
 file content into text input.\nNotice that there is nothing mentioned about\
 JSON save file input, it's mostly meant for stations.\nJSON key is the cont\
ent of .dbv savefile. It contains textual data and can be opened using text \
editor.");
Command.push("Base64 key EXPERIMENTAL", function (items, collapsed) {
  var inp = EL("input"), elBtn = EL("button"), error = EL();
  items.push({name: "Base64 key", inp: inp});
  elBtn.onclick = function () {
    error.innerText = "";
    var bs = ship.blocks;
    try {
      ship.withPositionAdjustment(function (temp) {
        inp.value = B64Key.u8arrToB64(B64Key.encode(temp));
      });
      render();
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
    }
    ship.blocks = bs;
  };
  elBtn.appendChild(tN("Export"));
  items.push(elBtn);
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    var old = ship, s = inp.value;
    try {
      if (!/^(:?UGxheWVy)?VmVoaWNsZT/.test(s.slice(0, 18))) {
        var obj = B64Key.decode(B64Key.b64ToU8arr(s));
        ship = Ship.fromObject(obj);
        if (typeof obj != "string")
          ship.fixPositionAdjustment(!(obj.significantVersion > 15));
      } else
        ship = Ship.fromDBKey(atob(s));
      render();
    } catch (err) {
      error.innerText = "" + err;
      console.error(err);
      inp.value = JSON.stringify(ship);
      ship = old;
    }
  };
  elBtn.appendChild(tN("Import"));
  items.push(elBtn);
  error.style.color = "red";
  items.push(error);
}, "Works the same way as Import/Export DBV, the key goes into/appears in te\
xt input named base64 key. Export/Import is related to displayed ship: Expor\
ing puts base64 key of displayed ship into input, Import uses base64 key fro\
m input to replace displayed ship with one from key. It can also store unimp\
lemented blocks like TNT, station blocks and more. Be aware that the key lim\
its vehicle in and will refuse to compress too big vehicle. There are also b\
ugs since I wasn't going down the rabbit hole of debugging every last one.");

Command.push("Transform tool", function (items, collapsed) {
  var selectX0 = EL("input"), selectY0 = EL("input");
  var selectX1 = EL("input"), selectY1 = EL("input");
  var select = EL("button"), inpX = EL("input"), inpY = EL("input");
  selectX0.type = selectY0.type = selectX1.type = "number";
  selectY1.type = inpX.type = inpY.type = "number";
  /** for copied in blockSelect selection */
  var offset = [0, 0], copied = Block.arrayFromObjects([]);
  select.appendChild(tN("Select rectangle"));
  var xy = [0, 0, 0, 0], locked = EL("input"), posUnits = EL("input");
  /** FORMAT INPUTS @this {GlobalEventHandlers} */
  function formatSelection() {
    var i = 4, input = selectX0, units = +defaults.meterPositions + 1;
    while (input = [selectX0, selectY0, selectX1, selectY1][--i])
      this !== input ?
        input.value = "" + (xy[i] = +input.value * units || 0) * units :
        isNaN(+input.value) ?
          0 :
          xy[i] = +input.value / units || 0;
    if (xy[0] !== xy[2] && xy[1] !== xy[3])
      selecting = 0;
    render();
  }
  /** SELECT @param {Event} [isLocking] */
  function getSelected(isLocking) {
    if (isLocking || !locked.checked)
      selecting ?
        ship.selectRect() :
        ship.selectRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    return ship;
  }
  /** @type {Ship|null} */
  var trackPoints = null;
  function getSelectPoints() {
    trackPoints = Ship.fromObject({n: "", b: [
      new Block("Block", [0, xy[0], xy[1]], [0, !1, 0]),
      new Block("Block", [0, xy[2], xy[3]], [0, !1, 0])
    ]});
    trackPoints.selectRect();
    return trackPoints;
  }
  function updateSelectPoints() {
    if (!trackPoints)
      return console.error("trackPoints unset, AT Command.\"Transfrom\"");
    var point0 = trackPoints.blocks[0], point1 = trackPoints.blocks[1];
    var units = +defaults.meterPositions + 1;
    selectX0.value = (xy[0] = point0.position[1]) / units + "";
    selectY0.value = (xy[1] = point0.position[2]) / units + "";
    selectX1.value = (xy[2] = point1.position[1]) / units + "";
    selectY1.value = (xy[3] = point1.position[2]) / units + "";
    trackPoints = null;
  }
  selectX0.oninput = selectY0.oninput = formatSelection;
  selectX1.oninput = selectY1.oninput = formatSelection;
  var selecting = 2;
  select.onclick = function () {
    var units = +defaults.meterPositions + 1;
    selectX0.value = selectY0.value = "";
    selectX1.value = selectY1.value = "";
    selecting = 2;
    press = function (x, y) {
      x = Math.floor((vX - x) / sc + 1);
      y = Math.floor((y - vY) / sc);
      if (selecting)
        if (--selecting) {
          selectX0.value = (xy[0] = xy[2] = x) / units + "";
          selectY0.value = (xy[1] = xy[3] = y) / units + "";
        } else {
          selectX1.value = (xy[2] = x) / units + "";
          selectY1.value = (xy[3] = y) / units + "";
          press = old_UI;
        }
      render();
    };
    render();
  };
  locked.type = "checkbox";
  locked.oninput = getSelected;
  items.push(
    {name: "Selection X0", inp: selectX0},
    {name: "Selection Y0", inp: selectY0},
    {name: "Selection X1", inp: selectX1},
    {name: "Selection Y1", inp: selectY1},
    select,
    {name: "Lock selection", inp: locked}
  );
  var move = EL("button"), rotate = EL("button"), flip = EL("button");
  move.appendChild(tN("Move action"));
  move.onclick = function () {
    var units = +defaults.meterPositions + 1;
    var x = +inpX.value * units || 0, y = +inpY.value * units || 0;
    Edit.move(getSelected(), 0, x, y);
    Edit.move(getSelectPoints(), 0, x, y);
    updateSelectPoints();
    render();
  };
  rotate.appendChild(tN("Rotate action"));
  rotate.onclick = function rotateDBV() {
    // rotation around axis
    var units = +defaults.meterPositions + 1;
    var rx = +inpX.value * units || +inpY.value * units || 0;
    Edit.rotate(getSelected(), rx);
    Edit.rotate(getSelectPoints(), rx);
    updateSelectPoints();
    render();
  };
  flip.appendChild(tN("Size action"));
  flip.style.borderColor = flip.style.backgroundColor = "#0000";
  flip.style.color = "#A88F";
  var mirror = EL("button"), copy = EL("button"), paste = EL("button");
  mirror.appendChild(tN("Mirror action"));
  mirror.onclick = function () {
    getSelected();
    selecting ?
      ship.mirror2d() :
      ship.mirror2d(0, xy[0], xy[1], 0, xy[2], xy[3]);
    render();
  };
  /** COPY SELECTION */
  function updateCopied() {
    offset = [Math.max(xy[0], xy[2]), Math.min(xy[1], xy[3])];
    return "Copied: " + copied.length + " blocks: " +
      copied.slice(0, 21).map(function (e) {
        return e.internalName;
      }) + (copied.length > 21 ? ", ..." : "");
  }
  var text = tN(updateCopied()), coloring = EL("select");
  var arr = ["defaults"].concat([].slice.apply(Color.NAME));
  for (var i = 0, l = arr.length; i < l;) {
    var option = EL("option");
    option.appendChild(tN(arr[i++]));
    coloring.add(option);
  }
  copy.appendChild(tN("Copy action"));
  copy.onclick = function () {
    if (selecting)
      return;
    copied = ship.selectRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    text.data = updateCopied();
    // also deselect the selection
    selecting = 2;
    selectX0.value = selectY0.value = "";
    selectX1.value = selectY1.value = "";
    render();
  };
  paste.appendChild(tN("Paste action"));
  paste.onclick = function () {
    if (selecting > 1)
      return;
    //var x = Math.min(x, xy[2]), y = Math.max(, xy[3]);
    ship.setSelected(copied);
    ship.paste(0, xy[0] - offset[0], xy[1] - offset[1]);
    // also deselect the selection
    selecting = 2;
    selectX0.value = selectY0.value = "";
    selectX1.value = selectY1.value = "";
    render();
  };
  var remove = EL("button"), paint = EL("button"), fill = EL("button");
  remove.appendChild(tN("Remove action"));
  remove.onclick = function () {
    !selecting && ship.removeRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    render();
  };
  paint.appendChild(tN("Paint action"));
  paint.onclick = function () {
    Edit.paint(getSelected(), Color.ID[coloring.value] || -1);
    render();
  };
  fill.appendChild(tN("Fill action"));
  fill.onclick = function () {
    if (selecting)
      return;
    defaults.buildReplace = !0;
    ship.fillRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    defaults.buildReplace = !1;
    render();
  };
  posUnits.type = "checkbox";
  posUnits.checked = defaults.meterPositions;
  posUnits.oninput = function (e) {
    defaults.meterPositions = posUnits.checked;
    formatSelection.call(this);
    saveSettings();
  };
  items.push(copy, paste, fill, remove, {name: "Axis X", inp: inpX});
  items.push({name: "Axis Y", inp: inpY}, move, rotate, flip, mirror);
  items.push(tN("Color: "), coloring, paint, text, EL("br"));
  items.push({name: "Meter units (db3)", inp: posUnits});
  collapsed.rend_UI = function () {
    if (selecting > 1)
      return;
    // calculations from Setup Properties rend_UI
    var x = Math.max(xy[0], xy[2]), y = Math.min(xy[1], xy[3]);
    var w = x - Math.min(xy[0], xy[2]), h = Math.max(xy[1], xy[3]) - y;
    var dx = -x * sc + vX, dy = y * sc + vY;
    ctx.strokeStyle = defaults.highlightColor;
    ctx.lineWidth = defaults.highlightWidth;
    if (selecting) {
      ctx.beginPath();
      ctx.moveTo(dx + sc * 2, dy);
      ctx.lineTo(dx, dy);
      ctx.lineTo(dx, dy + sc * 2);
      return ctx.stroke();
    }
    ctx.strokeRect(dx, dy, (w + 1) * sc, (h + 1) * sc);
  };
}, "Not yet completed actually. Each action uses some specific inputs to pro\
vide its function. Values inside inputs are integers that means that full bl\
ock is 2x2 and 0.5 by 0.5 is 1x1.\n[Select rectangle]:\nThe four inputs toge\
ther with Select rectangle button are used to select area with blocks, start\
ing with left top point [x0, y0] making rectangle with second right bottom p\
oint [x1, y1]. Blocks aren't selected by collision with selected area nor be\
ing fully covered by the area, it selects blocks of which position is inside\
 the area. It's' quite confusing indeed, but there was no collisions detecti\
on back then.\n>Lock selection<:\nWhen checkboxes is enabled, actions will b\
e applied to the same blocks selected at that moment of checkbox getting ena\
bled. When it is disabled, the block positions inside selection at a time of\
 doing one of the actions are used.\n[Copy action]:\nIt stores current selec\
tion of which amount of blocks and types of few first blocks can be seen at \
the bottom, at the \"Copied:\".\n[Paste action]:\nReplicates copied selectio\
n and also logic connections to output nodes. In other to prevent accidental\
 blocks stacking the selection is deselected after both Copy and Paste actio\
n.\n[Fill action]:\nFills the selection with pseudo randomly selected blocks\
 from copied selection, by replicating them with all properties except logic\
 connections to output nodes.\n[Remove action]:\nRemoves all blocks inside s\
election\n{Axis X} {Axis Y}:\nAre two additional inputs for actions below.\n\
[Move action]:\nMove selected blocks by specified x and y distance.\n[Rotate\
action]:\nRotates selected blocks by amount in either Axis x or Axis y input\
 around center of editor space [0, 0].\n[Size action]:\nNot implemented yet.\
\n[Mirror action]:\nMirrors blocks from left to right and from right to left\
 around center of editor space. \n[Paint action]:\nUses the selected \"Color\
:\" above to paint selected blocks with it. Custom color option is texture t\
hat uses custom hex color. The custom hex color can be set in \"Select Color\
\" Command.");

Command.push("Vehicle stats", function (items, collapsed) {
  var sums = {
    cost: 0,
    weight: 0,
    strenght: 0,
    store: {fuel: 0, energy: 0, cargo: 0},
    use: {fuel: 0, energy: 0, cargo: 0},
    blocks: [0],
    xforce: 0,
    yforce: 0
  },
    /** @readonly */
    stringify = JSON.stringify(sums),
    /** @type {typeof sums} */
    skipped = JSON.parse(stringify);
  /** @param {string} stat @param {any} value @param {Function} [parse] */
  function checkStat(stat, value, parse) {
    // properties stack for stats counter dictionary
    var stack = stat.split("."), tmpSums = sums, tmpSkip = skipped;
    for (var i = 0; ++i < stack.length; tmpSkip = tmpSkip[stack[i - 1]])
      tmpSums = tmpSums[stack[i - 1]];
    typeof value != "undefined" ?
      tmpSums[stack[i - 1]] += parse ? parse(value) : value :
      tmpSkip[stack[i - 1]]++;
  }
  for (var j = 0, texts = [], l = 14; j < l;)
    items.push(texts[j++] = tN(""), EL("br"));
  var riftLY = items[items.length - l * 2 + 19] = EL("input"),
    /** @type {Text|HTMLSpanElement} */
    red = items[items.length - l * 2 + 21] = EL("span");
  red.style.color = "red";
  red = red.appendChild(tN(""));
  riftLY.type = "number";
  riftLY.oninput = function () {
    if (!(red instanceof Text))
      return;
    function rcAmount() {
      return crystals + (crystals > 1 ? " RCs" : " RC") +
        " (reach " + (10000 / sums.weight * crystals) + " LY)";
    }
    texts[9].data = "Rift drive distance: ";
    var dist = +riftLY.value,
      crystals = Math.ceil(Math.abs(sums.weight * dist / 10000));
    texts[10].data = "LY ";
    red.data = texts[11].data = "";
    dist ?
      crystals > (sums.blocks[796] || 0) * 4 ?
        red.data = " You don't have enough Rift Drives to use " +
          rcAmount() + ", lighter vehicle needs less RCs." :
        texts[11].data = " requires " + rcAmount() + ", remember to t" +
          "ake more crystals for further travelling and enough for re" +
          "turn." :
      texts[10].data += riftLY.value ?
        dist === 0 ?
          " doesn't require any Rift Crystals since you don't seem go" +
            "ing anywhere." :
          " Distance format is not a number." :
        " Type desired Rift Driving Light Years (LY) distance into th" +
          "e input.";
    if (sums.blocks[796] > 1)
      red.data += " You can't buy more then one Small Rift Drive in C" +
        "onquest! ";
    if (dist < 0)
      texts[11].data = " Unless you own Time Travel Machine block, y" +
        "ou can't regain the Rift Crystals by travelling back. ";
  };
  texts[12].data = "Rift drive distances within the same star system" +
    " are measured in Mega Meters (Mm), assume cost for those travel" +
    "s to be always one RC.";
  function updateStats() {
    var xForce = 0, yForce = 0, xWeight = 0, yWeight = 0;
    var useVal = 0;
    function anyUse(val) {
      var n = +(prop.customParameter || [])[0];
      return useVal = val instanceof Array ?
        val[0] / val[1] :
        // TODO: what about this, will it do? I should test it...
        isNaN(n) ? val : n / 1E6 * val;
    }
    sums = JSON.parse(stringify);
    skipped = JSON.parse(stringify);
    texts[13].data = '';
    for (var blocks = ship.blocks, i = blocks.length; i-- > 0;) {
      var block = blocks[i], prop = block.properties || OC();
      var id = Block.ID[block.internalName];
      var rot = 10 - block.rotation[2] & 3, size = Block.Size.VALUE[id];
      // (v.0.1.64T13) why was this missing
      if (!size)
        continue;
      var ow = size.w, oh = size.h, w = ow + (ow & 16), h = oh + (oh & 16);
      var x = (ow & 16) / 32, y = (oh & 16) / 32;
      /** @type {number[]} */
      var xys = [x, y, -x, -y], position = block.position;
      x = position[1] + (rot & 1 ? h / 32 : w / 32) + xys[rot];
      y = position[2] + (rot & 1 ? w / 32 : h / 32) + xys[rot + 3 & 3];
      //texts[13].data += " id"+id+'x'+x+'y'+y;
      checkStat("cost", Block.COST[id], function (val) {
        return val < 0 ? 0 : val;
      });
      checkStat("weight", Block.WEIGHT[id]);
      checkStat("strenght", Block.STRENGTH[id]);
      checkStat("store.fuel", Block.FUEL_STORE[id]);
      checkStat("use.fuel", Block.FUEL_USE[id], anyUse);
      checkStat("store.energy", Block.ENERGY_STORE[id]);
      checkStat("use.energy", Block.ENERGY_USE[id], anyUse);
      xWeight += x * (Block.WEIGHT[id] || 0);
      yWeight += y * (Block.WEIGHT[id] || 0);
      if (id > 737 && id < 746 || id === 70) {
        rot & 1 ?
          yForce += y * useVal :
          xForce += x * useVal;
        rot & 1 ?
          sums.yforce += useVal :
          sums.xforce += useVal;
        //texts[13].data += 'r'+rot+'t';
      }
      checkStat("store.cargo", Block.CARGO_STORE[id]);
      checkStat("use.cargo", Block.CARGO_USE[id], anyUse);
      sums.blocks[id] ? sums.blocks[id]++ : sums.blocks[id] = 1;
    }
    /** for code compacting and adding more fanciness to stat values
     * @param {number} index @param {string} name
     * @param {number} stat @param {number} skipped */
    function amount(index, name, stat, skipped) {
      texts[index].data = name + ": " + stat + (skipped ?
        " (" + (blocks.length - skipped) + "/" + blocks.length + ")" :
        "");
    }
    amount(0, "Blocks amount", blocks.length, 0);
    amount(1, "Weight", sums.weight, skipped.weight);
    amount(2, "Cost", sums.cost, skipped.cost);
    amount(3, "Fuel capacity", sums.store.fuel, skipped.store.fuel);
    amount(4, "Fuel use", sums.use.fuel, skipped.use.fuel);
    amount(5, "Electricity capacity", sums.store.energy,
      skipped.store.energy);
    amount(6, "Electricity use", sums.use.energy, skipped.use.energy);
    amount(7, "Cargo capacity", sums.store.cargo, skipped.store.cargo);
    amount(8, "Ore mined", -sums.use.cargo, skipped.use.cargo);
    //texts[12].data = "WIP debugging data: " +
    //  "(Force: " + sums.xforce + ", x: " + xForce + ", y: " +
    //  yForce + ", result: " + (xForce / sums.xforce) + "; Weight: " +
    //  sums.weight + ", x: " + xWeight + ", y: " + yWeight + ", result: " +
    //  (xWeight / sums.weight) + ", " + (yWeight / sums.weight) + ")";
    // correct for typescript
    riftLY.oninput && riftLY.oninput([][0]);
    // after adding more text lines don't forget changing j < <texts.length>
    utilities.rend_UI = function () {
      ctx.lineWidth = 1.5;
      var weight = xWeight / sums.weight || 0,
        force = xForce / sums.xforce || 0;
      if (weight !== force) {
        ctx.strokeStyle = "#33d";
        ctx.strokeRect(vX + force * sc, 0, 0, canvas.height);
        ctx.strokeStyle = "#d33";
      } else
        ctx.strokeStyle = "#5b5";
      ctx.strokeRect(vX + weight * sc, 0, 0, canvas.height);
      weight = yWeight / sums.weight || 0;
      force = yForce / sums.yforce || 0;
      if (weight !== force) {
        ctx.strokeStyle = "#d33";
        ctx.strokeRect(0, vY + force * sc, canvas.width, 0);
        ctx.strokeStyle = "#33d";
      } else
        ctx.strokeStyle = "#5b5";
      ctx.strokeRect(0, vY + weight * sc, canvas.width, 0);
    };
  }
  updateStats();
  Command.listening === -1 ?
    Command.listening = Edit.listeners.push(updateStats) - 1 :
    Edit.listeners[Command.listening] = updateStats;
  render();
}, "Lists all kind of vehicle stats, number captures resulting sum of blocks\
 values next in parenthesis it shows amount of blocks for which the stat can\
 be calculated. Usage stats are counted as units/items per second. Rift driv\
e distance requires target distance values and gives relevant information fo\
r vehicles travel distance. There are also lines displaying center of mass (\
red) and center of thrust (blue). If vehicle is balanced in a direction, the\
re line will be one green line.");
Command.push("Rift Drive calculator", function (items, collapsed) {
  var weight = 0, drives = 0, unknown = 0, all = ship.blocks;
  for (var i = all.length; i-- > 0;) {
    var id = Block.ID[all[i].internalName], v = Block.WEIGHT[id];
    id === 796 && drives++;
    v ? weight += v : unknown++;
  }
  var riftCrystals = EL("input"), dist = tN("");
  riftCrystals.type = "number";
  riftCrystals.value = "4";
  //@ts-ignore
  (riftCrystals.oninput = function () {
    var n = Number(riftCrystals.value) || 0;
    dist.data = "" + (10000 / weight * (n > drives * 4 ?
      drives * 4 :
      n)) + " Ly units.";
  })();
  items.push({name: "RC", inp: riftCrystals});
  items.push(tN("The vehicle from " + new Date() + " contains " +
    all.length + " blocks of which " + unknown + " have not defined weight. \
The weight of that vehicle is " + weight + " mass units and with " +
    drives + " Small Rift Drives it can rift drive distance of "), dist);
}, "Shows weight and distance the vehicle can travel, it takes amount of Sma\
ll Rift Drives into account, although in the game you are allowed to buy onl\
y 1. It also shows ammount of blocks in it and time when the vehicle had the\
se stats, because it doesn't update after this command have been opened, onl\
y changing amount of RC recalculates distance. Rift drive distances within t\
he same star system are measured in Mega Meters (Mm), assume cost for those \
travels to be always one RC.\nThanks to catcat9999 for sharing block capacit\
y/use stats from source code in Discord.");
Command.push("Editing Mode", function (items) {
  var button0 = EL("button"), button1 = EL("button");
  button0.appendChild(tN("Enable Logic Editing"));
  button0.onclick = enableLogicEditing;
  button1.appendChild(tN("Enable Ship Editing"));
  button1.onclick = enableShipEditing;
  var inventory = EL("input"), fullscreen = EL("input");
  inventory.type = "checkbox";
  inventory.checked = DefaultUI.inventoryTile;
  inventory.oninput = function () {
    defaults.hideInventoryTile =
      !(DefaultUI.inventoryTile = inventory.checked);
    saveSettings();
    render();
  };
  items.push(button1, button0, inventory);
  items.push({name: "Show inventory tile", inp: inventory});
  fullscreen.type = "checkbox";
  fullscreen.checked = defaults.fullscreenDisabled;
  fullscreen.oninput = function () {
    defaults.fullscreenDisabled = fullscreen.checked;
    saveSettings();
  };
  items.push({name: "Disable fullscreen", inp: fullscreen});
  var touchScreen = EL("button"),
    detectionText = tN(defaults.fullscreenInitialized ?
      "Disable touch screen detected" :
      "Touch screen is not detected");
  touchScreen.appendChild(detectionText);
  touchScreen.onclick = function () {
    defaults.fullscreenInitialized = false;
    saveSettings();
    touchdevice = null;
    detectionText.data = "Touch screen is not detected";
  };
  var undo = EL("button"), redo = EL("button");
  function editioning(doo) {
    return function () {
      if (ship.getMode().mode !== "Ship")
        return alert("Functions only in Ship editing mode");
      doo(ship);
      render();
    };
  };
  undo.appendChild(tN("Undo"));
  undo.onclick = editioning(Edit.undo);
  redo.appendChild(tN("Redo"));
  redo.onclick = editioning(Edit.redo);
  items.push(touchScreen, EL("br"), undo, redo);
}, "Editing modes is the newest feature that is Work In Progress. Be aware t\
hat non of the older commands were designed to be compatible with other mode\
s in there. \nYou can use inventoryTile to enable inventory icon item. By en\
abling disabled fullscreen you will have browser experience of when it wasn'\
t implemented. \nFor proper display of UI and mobile experience there is aut\
omatic detection of touchscreen, this feature changes resolution and turns o\
n fullscreen whenever the browser allows it, if it was somehow incorrectly d\
etected you can use designated button to reset it. In case it still keeps de\
tecting and it is not supposed to, that's a bug then.");
Command.push("Debug Logic circuit", function (items, collapsed) {
  /** @param {Block|LogicBlock} block @returns {LogicBlock|undefined} */
  function checkEndComponent(block) {
    if (!(block instanceof LogicBlock))
      return;
    var logic = Logic.VALUE[Block.ID[block.internalName]] || [];
    for (var i = logic.length; i-- > 0;)
      if (logic[i].type > 1)
        return;
    return block;
  }
  items.push(tN("In-game controls, buttons, switches:"), EL("br"));
  /** @type {string[]} */
  var inputs = ship.getPhysics().selectedInputs = [];
  var inputOptions = Block.Properties.getInputOptions(ship.prop);
  for (var i = 0; i < inputOptions.length; i++) {
    var option = EL("input");
    option.type = "checkbox";
    option.oninput = function () {
      if (!(this instanceof HTMLInputElement))
        return;
      var n = inputs.indexOf(this.name);
      n === -1 ? inputs.push(this.name) : delete inputs[n];
    };
    // there's nothing to restrict from selecting up + down and more at once
    items.push(option, tN(option.name = inputOptions[i]), EL("br"));
  }
  var runTick = EL("button"), display = EL("input");
  display.type = "checkbox";
  display.onclick = function () {
    Physics.rend.reporter = display.checked;
    render();
  };
  items.push({name: "Display reporters", inp: display});
  runTick.appendChild(tN("Run tick for logic circuit"));
  runTick.onclick = function () {
    Physics.rend.reporter = display.checked = true;
    Logic.expensiveExec(ship);
    render();
  };
  var moveBack = EL("button"), err = tN(""), el = EL("div");
  moveBack.appendChild(tN("Reset end components"));
  moveBack.onclick = function () {
    if (ship.getMode().mode !== "Logic")
      return err.data = "Logic mode only command";
    for (var i = ship.blocks.length, narr = [], block; i-- > 0;)
      if (block = checkEndComponent(ship.blocks[i])) {
        block.position =
          /** @type {XYZPosition} */
          (block.logicPosition.slice());
        var n = block.position[1];
        block.position[1] += (++narr[n] || (narr[n] = 0)) / 512;
      }
    render();
  };
  el.style.color = "red";
  el.appendChild(err);
  items.push(runTick, EL("br"), moveBack, el);
}, "Reset end components puts all logic blocks with only inputs e.g. thruste\
rs, drills, weapons... visually at their original positions in vehicle to he\
lp indetify them.");
Command.groupName = "";
Command.push("Set camera view", function (items, collapsed) {
  function setCode() {
    code.value = "vX " + vX + " vY " + vY + " sc " + sc;
  }
  /** @param {string} s @param {number} def default */
  function execRegEx(s, def) {
    var res = new RegExp(s + "[ \\t]*(?:([+\-]?(?:\\.\\d|\\d+\\.|\\d)\\d*(?:\
[Ee][+\\-]?\\d+)?)|(0x[0-9A-Fa-f]+))(?:[yYvVsScC \\t]|$)").exec(code.value);
    return res ? isNaN(+res[1]) ? +res[2] / 1024 : +res[1] : def;
  }
  var code = EL("input"), get = EL("button"), set = EL("button");
  (get.onclick = setCode)();
  get.appendChild(tN("Retreive key"));
  set.onclick = function () {
    vX = execRegEx("[vV]?[Xx]", 99);
    vY = execRegEx("[vV]?[Yy]", 99);
    sc = execRegEx("[sScC][cC]?", 1) * 16;
  };
  set.appendChild(tN("Apply key"));
  items.push({name: "View key", inp: code}, set, get)
  var viewX = EL("input"), viewY = EL("input"), zoom = EL("input");
  var elBtn = EL("button");
  viewX.type = viewY.type = zoom.type = "number";
  items.push({name: "View x", inp: viewX},
    {name: "View y", inp: viewY},
    {name: "Zoom", inp: zoom});
  elBtn.onclick = function () {
    viewX.value = vX + "";
    viewY.value = vY + "";
    zoom.value = "" + sc / 16;
    render();
  };
  elBtn.appendChild(tN("Get"));
  items.push(elBtn);
  (elBtn = EL("button")).onclick = function () {
    vX = Number(viewX.value) || 99;
    vY = Number(viewY.value) || 99;
    sc = (Number(zoom.value) || 1) * 16;
    render();
  };
  elBtn.appendChild(tN("Set"));
  items.push(elBtn);
}, "Let's you to set zoom and camera position to desired values. It is usefu\
ll for reseting to intial view by pressing set while inputs are empty. The n\
ewer Retreive/Apply variant with key allows you to save your build location.\
 Usually moving mouse with left mouse button pressed or zooming with scrolli\
ng is used. For touch screen devices use two fingers to move and zoom.");
Command.push("Change editor background", function (items, collapsed) {
  var backgImg = EL("input"), backgClr = EL("input");
  backgImg.type = "checkbox";
  backgImg.checked = defaults.editorBackground;
  backgImg.onchange = function () {
    if (!(this instanceof HTMLInputElement))
      return;
    rend_background =
      (defaults.editorBackground = this.checked) ?
        rend_backgPattern :
        rend_backgColor;
    saveSettings()
    render();
  };
  var select = EL("select"), option = EL("option");
  option.label = option.value = "_dbc_background";
  select.add(option);
  option = EL("option");
  option.label = option.value = "_db_background";
  select.add(option);
  option = EL("option");
  option.label = option.value = "_editor_background";
  select.add(option);
  option = EL("option");
  option.label = option.value = "_dbve2_background";
  select.add(option);
  option = EL("option");
  option.label = option.value = "_dbve_background";
  select.add(option);
  option = select.item(defaults.editorBackgroundImage) || option;
  option.selected = !0;
  select.onchange = function () {
    if (!(this instanceof HTMLSelectElement))
      return;
    defaults.editorBackgroundImage = this.selectedIndex;
    saveSettings();
    var newImg = EL("img");
    newImg.onload === null ? newImg.onload = function () {
      imgBackg = newImg;
      render();
    } : (imgBackg = newImg);
    newImg.src = "./assets/" + this.value + ".png";
  };
  backgClr.value = defaults.editorBackgroundColor;
  backgClr.oninput = function () {
    var r = this instanceof HTMLInputElement ?
      new RegExp("#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])|#(\
[0-9a-f])([0-9a-f])([0-9a-f])").exec(this.value.slice(0, 7)) :
      null;
    if (r)
      defaults.editorBackgroundColor = "#" + (r[0].length < 5 ?
        r[4] + r[4] + r[5] + r[5] + r[6] + r[6] :
        r[1] + r[2] + r[3]);
    saveSettings();
    render();
  };
  var backgHgr = EL("input");
  backgHgr.type = "checkbox";
  backgHgr.checked = !!defaults.editorBackgroundStage;
  backgHgr.onchange = function () {
    if (!(this instanceof HTMLInputElement))
      return;
    defaults.editorBackgroundStage = +this.checked;
    saveSettings();
    render();
  };
  items.push(
    {name: "Image pattern", inp: backgImg},
    tN("Background Image: "),
    select,
    EL("br"),
    {name: "Background color", inp: backgClr},
    {name: "Background hangar", inp: backgHgr}
  );
}, "When \"Image pattern\" checkbox is checked, Droneboi: Conquest backgroun\
d is used. Else color from \"Background color\" input is used. If it is in h\
exadecimal format #111133 for example, the setting will update.");
Command.push("Current version", function(items, collapsed) {
  var version_sw = tN(""), s = "data";
  items.push(
    tN("Ship.VERSION: " + Ship.VERSION),
    EL("br"),
    tN("[editor.html]: " + (document.childNodes[1][s] || "")),
    EL("br"),
    tN("[code.js]: " + version_code_js),
    EL("br"),
    tN("[editor.js]: " + version_editor_js),
    EL("br"),
    version_sw
  );
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./service-worker.js");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)
      return;
    try {
      var res =
        / v(?:\.[0-9a-zA-Z]+)+/.exec(xhr.responseText.slice(0,1024));
      version_sw.data = res ? "[service-worker.js]:" + res[0] : "";
    } catch (e) {
      console.error(xhr.responseText ? e : "xhr empty response");
    }
  };
  xhr.send();
}, "Gives information about versions of loaded source code components. For e\
xample Ship.VERSION is significantVersion number attached to vehicle savefil\
es encoded by D1R DBV editor, this number is increased by 1 when public webp\
age update messes with vehicle editing funtionalities to allow for backward \
compatibility in case of bug causing corrupted savefiles.");
Command.push("About Commands tab", function (items) {}, "OPENING AND MOVING \
AROUND\nCommands tab is opened or moved by activating contextmenu, the optio\
ns, usually from right click or long press on touch screen, not on already o\
pened Commands tab. The Commands tab them opens and/or moves centered to whe\
re contextmenu was activated, but it will align with top, right or left edge\
 of the page if it was going to 'display partialy behind them'. This is to c\
reate 'grabable' surface for touch screens at any time any time.\nTo move th\
e Commands tab around you can grab it 'with' top part, where changes to poin\
ter hand, you can move it slightly behind edges on right and left side.\nCON\
TEXTMENU NOTES\nSome browsers have option to save or copy image in the canva\
s in 'rightclick options', it can be used to make precise image of your vehi\
cle in high quality. When the Commands tab is right clicked the tab dissapea\
rs and activated contextmenu is able to capture to visual.\n\nMENU\nIn menu \
there is list of Commands, click one of the buttons to open coresponding Com\
mand, optionaly sorted in collapsed groups. X sign in top right corner close\
s the Commands tab.\n\nCOMMAND\nWhen Command is opened its name displays in \
'top part', there's also < sign to return back to menu, X sign won't do that\
. Each command has some inputs/buttons, their purpouse is explained in descr\
iption.\nFINISHED READING\nNow so you are familiar with the basic, if Welcom\
e message will ever bother you, use https://kaabel.github.io/.d1r.dbv/editor\
.html?funmode&no=info for example to skip it.\n");
// DBVE contributors:
// Thanks to Beau for Deltarealm and Droneboi: Conquest that DBVE is made
// for.
// Thanks to contributors:
//   KKJKJH for blocks texture sources
//   Brothernova for being the alpha tester
// Also thank to cacat9999 for sharing block capacity/use stats from source
// code in Discord, you all for using DBVE, your feedback, and db
// suggestions to take inspiration from.

/** @callback ToolExec @param {number} x @param {number} y @returns {void} */
/** @typedef {ToolExec|Tool.Tab} ToolMethods */
/** instance is sealed
 * @param {string} name @param {string} icon @param {ToolMethods} [exec]
 * @param {boolean} [permanent] slected until reselected or deselected */
function Tool(name, icon, exec, permanent) {
  /** subclass @see {Tool.Tab} is defined further below */
  if (exec instanceof Tool.Tab) {
    var execute = exec.exec, init = exec.init;
  } else {
    execute = exec || F;
    init = F;
  }
  this.name = name;
  this.icon = icon;
  this.exec = permanent ? execute : Tool.execClick(execute);
  this.init = init;
  /** used to determim whether (true) the tile gets enebled instantly
   * (for DefaultUI it's selectedClickTile property) or
   * (false) the tile is enabled until deselected (selected in
   * DefaultUI.selectedTile property) */
  this.clickType = !permanent;
  Object.seal(this);
}
/** @type {Tool[]} */
Tool.list = [];
/** @param {Tool} tool @param {number} [size] */
Tool.drawPathRc = function (tool, size) {
  /** @param {string} s */
  function parseParam(s) {
    return (s[0] === "-" ? -("0x" + s.slice(1)) : +("0x" + s)) / 1024;
  }
  defaults.renderSharp ? size = (size || 0) * 8 : 1;
  if (size) {
    rc.canvas.width = rc.canvas.height = size;
    rc.scale(size / 256, size / 256);
    rc.fillStyle = "#dbecfe";
  }
  rc.beginPath();
  var ctxCommands = {
    M: rc.moveTo,
    L: rc.lineTo,
    C: rc.bezierCurveTo,
    Z: rc.closePath,
    H: function horizontalTo(n) {
      this.lineTo(n, rY);
    },
    V: function verticalTo(n) {
      this.lineTo(x = rX, rY = n);
    }
  };
  var rX = 0, rY = 0, x = 0, y = 0;
  tool.icon.split(" ").map(function (e, i) {
    var c = e[0].toUpperCase();
    var params = e.slice(1).split(",").map(e.charCodeAt(0) & 32 ?
      function (e, i) {
          var n = parseParam(e);
          return i & 1 || c === "V" ? y = rY + n : x = rX + n;
        } :
      function (e, i) {
          var n = parseParam(e);
          return i & 1 ? y = n : x = n;
        });
    if (!e.length)
      return console.error("No command at: " + i + "th \" \"");
    var c = e[0].toUpperCase(), cmd = ctxCommands[c];
    if (!cmd)
      return console.error("Missing command " + c);
    if (params.length < cmd.length)
      return console.error("Not enough args for command " + c);
    cmd.apply(rc, params);
    rX = x;
    rY = y;
  });
  rc.fill();
}
/** @param {ToolExec} [execMain] */
Tool.execClick = function (execMain) {
  if (!execMain)
    return F;
  /** @this {Tool} @type {ToolExec} */
  return function (x, y) {
    execMain(x, y);
    var thisTile = this;
    setTimeout(function () {
      var tile = DefaultUI.getSelectedTile(DefaultUI.selectedClickTile);
      if (tile instanceof Tool && tile === thisTile) {
        DefaultUI.selectedClickTile = -1;
        render();
      }
    }, 75);
  };
};
/**
 * @typedef Tool.Tab.Options
 * @type {{[key:string]:unknown,text?:string}} */
/** @callback @param {Tool.Tab} setup @returns {void} */
/** @param {ToolExec} initialise @param {ToolExec} execute */
Tool.Tab = function (initialise, execute) {
  this.init = initialise;
  this.exec = execute;
  /** @type {Node[]} */
  this.elements = [];
  Object.seal(this);
};
/** Uses global flag! */
Tool.Tab.cssEscapeRegExp = (/\\[0-9A-Fa-f]{1,5} |\\[0-9A-Fa-f]{6}/g);
Tool.Tab.cssQueryRegExp = function (name, escape) {
  return new RegExp(/(<name>)?(#<name>)?((?:\.<name>)+)/.source.replace(
    /<name>/g, name.source.replace(/<esc>/g, escape.source)));
}(/(?:[^#.:\[\]= +<>]|<esc>)+/, Tool.Tab.cssEscapeRegExp);
/** @param {Node} element @param {Tool.Tab.Options} options */
Tool.Tab.prototype.setElementProperties = function (element, options) {
  if (options.text)
    element.appendChild(document.createTextNode("" + options.text));
  delete options.text;
  for (var property in options)
    if (OP.call(options, property))
      element[property] = options[property];
};
//* @param {Node|string} element @param {any} query @param {any} [handler]
//* @param {{[P in string]:P extends "text"?string:unknown}} [options] */
Tool.Tab.prototype.append = (
/** append element to tool tab menu (Tab utility, no use of global constants)
 * @template {string} P @overload append from node @param {Node} node
 * @param {string} query @param {function&{name:string}} handler
 * @param {Tool.Tab.Options} [options]
 * @overload no css selector @param {keyof HTMLElementTagNameMap} element
 * @param {function&{name:string}} handler
 * @param {Tool.Tab.Options} [options]
 * @overload using css selector only for compact arguments list
 * @param {string} query @param {function&{name:string}} handler
 * @param {Tool.Tab.Options} [options]
 * @overload @param {Node|keyof HTMLElementTagNameMap} [element]
 * @param {string} [query] @param {function&{name:string}} [handler]
 * @param {Tool.Tab.Options} [options] */
 function (element, query, handler, options) {
  var handlerNext = false, argsCopy = [].slice.call(arguments);
  if (argsCopy[0] instanceof Node)
    element = argsCopy[0];
  else if (typeof argsCopy[0] == "string") {
    element = "";
    handlerNext = typeof argsCopy[1] != "string";
    handlerNext ? query = argsCopy[0] : element = argsCopy[0];
  } else
    throw new TypeError("Invalid arg0: element/query");
  if (!handlerNext) {
    if (typeof argsCopy[1] != "string")
       throw new TypeError("Invalid arg1: query");
    query = argsCopy[1];
  }
  var n = handlerNext ? 1 : 2;
  if (typeof argsCopy[n] != "function")
    throw new TypeError("Invalid arg" + n + ": handler");
  handler = argsCopy[n++];
  options = typeof argsCopy[n] == "object" ? argsCopy[n] : void 0;

  var result = query && Tool.Tab.cssQueryRegExp.exec(query) || [];
  /** @param {"name"|"id"|"className"} property @param {unknown} value */
  function setFromQuery(property, value) {
    if (typeof value != "string")
      return "";
    var isName = property === "name", string = value;
    Tool.Tab.cssEscapeRegExp.lastIndex = 0;
    if (property === "className")
      string = string.replace(/\./g, " ");
    string = string.slice(+!isName).replace(Tool.Tab.cssEscapeRegExp,
      function (match) {
        match[0] !== "\\" && console.error("CSS escape sequence");
        return String.fromCharCode(+("0x" + match.trim().slice(1)));
      });
    return isName ? string : el[property] = string;
  }
  // return JSON.stringify(result);
  var el = element instanceof Node ?
    element :
    document.createElement(element || setFromQuery("name", result[1]));
  setFromQuery("id", result[2]);
  setFromQuery("className", result[3]);
  var event = Data.getFunctionName(handler) ||
    (el instanceof HTMLButtonElement ? "onclick" : "oninput");
  if (event)
    el[event] = handler;
  if (options)
    Tool.Tab.prototype.setElementProperties(el, options);
  //console.log(JSON.stringify({name: el.nodeName, id: el.id, class: el.class
  //Name, fn: handler}));
  return el;
});
/** @TODO comment out before update v.0.2.6 */
//var test_evil = "Tool.Tab.prototype.append('div#\\\\31 0.nice.fool.mwwwwwww
//ww.wwwing - hard.none', function () {});";var test_evil = 'JSON.stringify(T
//ool.Tab.cssQueryRegExp.exec("textarea#i-d.nice.fool")); ';
Tool.Tab.cssQueryTest = function (regExp) {
  function test(example, result) {
    var correct = JSON.stringify(regExp.exec(example)) === result;
    correct || console.error(example + " !=> " + result);
    pass &= +correct;
  }
  var pass = 1;
  return !!pass;
};
/** @callback ToolSetup @param {Tool.Tab} methods */
/** @param {string} name @param {ToolSetup} setup @param {string} icon */
Tool.Tab.addItem = function (name, setup, icon) {
  var methods = new Tool.Tab(F, F);
  setup(methods);
  Tool.list.push(new Tool(name, icon, methods));
};

Tool.list.push(new Tool("Tune", "M4a4,24265 c51,2f0,273,ad3,931,f85 c8da,714\
,103d,642,13d7,615 c1ea0,-178,3dbe,974,552e,20cc c2c36,2c08,2c5b,7392,53,9fc\
9 c-867,7af,-a8f,ddf,-b1e,1559 c-1ef,7c7,317,107b,4f9,1362 c8b3,d64,146d,1a9\
e,26e0,2d98 c1373,1401,1fab,1b72,306a,2858 c257,1cd,965,5e8,117b,472 cb43,-1\
45,fe6,-715,1251,-9c1 c1495,-16ba,324a,-250c,535e,-252b c3e66,-39,712a,322e,\
7163,7095 c0,5d4,92,c04,744,16f2 c424,6dc,dcc,9ca,113d,a29 c0,0,20fd,324,376\
c,329 c16ff,4,3469,-26b,419e,-41d c2ee,-60,ad3,-273,f85,-932 c713,-8da,641,-\
103e,614,-13d7 c-17a,-1ea0,971,-3dbf,20c7,-5530 c2c06,-2c39,7390,-2c62,9fc9,\
-5c cd1,d0,7c5,9ed,129d,bf5 cf64,225,1922,-777,1922,-777 cfb8,-cc5,1805,-12c\
7,2cc2,-284c c147d,-1543,199b,-1c93,253a,-2b8e c1cf,-255,5f0,-960,481,-1177 \
c-13b,-b44,-707,-fec,-9b1,-1259 c-16a8,-14a8,-24e1,-3269,-24e3,-537e c-3,-3e\
66,328f,-70ff,70f6,-7102 c977,b9,1148,-196,16f8,-677 c6e0,-41e,9d5,-e7d,a37,\
-11ed c0,0,31b,-2617,2d7,-42b0 c-3b,-196d,-129,-24ee,-393,-37ce c-60,-2ee,-2\
72,-ad3,-930,-f86 c-8d9,-714,-103d,-643,-13d7,-617 c-1ea0,176,-3dbd,-979,-55\
2c,-20d2 c-2c33,-2c0b,-2c53,-7395,-47,-9fc9 c699,-5e0,a90,-dde,b20,-1558 c1f\
0,-7c6,-2d2,-10ac,-4f8,-1362 c-1b2d,-2241,-31ad,-36cb,-5683,-5516 c-242,-1e7\
,-914,-5f0,-112b,-482 c-b44,13b,-fec,706,-125a,9b0 c-14a9,16a7,-326c,24de,-5\
380,24de c-3e66,0,-70fc,-3295,-70fc,-70fc c0,-693,-24e,-1148,-72f,-16f9 c-41\
d,-6e0,-dc9,-9aa,-1134,-a38 c-dca,-23e,-2664,-437,-3d26,-41a c-1714,-90,-28b\
2,22c,-3d58,4cf c-2ee,5f,-ad3,271,-f86,92f c-715,8d9,-644,103c,-618,13d6 c17\
4,1ea0,-97c,3dbd,-20d7,552a c-2c0e,2c31,-7398,2c4d,-9fc9,3e c-666,-771,-d25,\
-a91,-149e,-b21 c-7c6,-137,-1168,2cd,-141b,4f7 c0,0,-1a53,123e,-2a8c,2349 c-\
177b,18a9,-1bbe,1fba,-2a89,32ce c-1cf,255,-5f0,960,-481,1177 c13b,b44,707,fe\
c,9b1,1259 c16a8,14a8,24e1,326a,24e3,537e c3,3e66,-328f,70ff,-70f6,7102 c-a8\
d,0,-1148,24f,-16f8,730 c-6e0,41e,-9e9,dc2,-a37,1134 c-19c,1232,-330,1df2,-3\
b0,37fa c-aa,2277,294,3088,486,4273 z M2fd6e,297fb c0,0,-80e5,-8034,-80e5,-8\
034 c979,-15f8,eb9,-2e30,eb9,-47a2 c0,-63fe,-510f,-b50d,-b50d,-b50d c-11c2,0\
,-22ec,28e,-3323,752 c-c13,365,-fcd,129f,-738,1da6 c3c,8e,5938,5b41,5938,5b4\
1 l-8dc,4b9e l-4af8,93d c0,0,-5c72,-5aa3,-5cb3,-5abf c-6f5,-6c0,-1857,-49d,-\
1b7f,5b6 c-51f,10c3,-7e1,228f,-7e1,34ff c0,63fe,510f,b50d,b50d,b50d c17f7,0,\
2ed8,-4a8,43c8,-d1d l8497,8218 c-2dcd,1d59,-6443,2e5d,-9eb3,2e5d c-a2ac,0,-1\
268b,-83df,-1268b,-1268b c0,-a2ac,83df,-1268b,1268b,-1268b ca2ac,0,1268b,83d\
f,1268b,1268b c0,36c5,-ef3,6a0d,-28fe,95fc z"));
Tool.list.push(new Tool("Rotate90", "M13,1ffd8 c0,-16a2,a0,-221b,a0,-26cc c0\
,-d1a,94f,-1818,15dd,-1b1c c239,-88,3bbb,-cf6,41df,-e1c c1c6,-54,39b,-81,57a\
,-81 cfe9,0,1cd0,c80,1cd0,1bed c0,c8,-13e,173b,-1c4,290a c-1d,3e3,-2c,7cb,-2\
c,bb6 c0,d80e,af26,18734,18734,18734 c65d9,0,c29c,-26ec,10837,-66b4 c0,0,-22\
88,-234b,-239b,-2445 c-592,-517,-90d,-c50,-90d,-1453 c0,-ce5,905,-17c1,1548,\
-1af6 c266,-a0,b8fb,-3be8,bf45,-3e46 c33b,-137,6bf,-1e1,a6b,-1e1 cfe9,0,1cd0\
,c80,1cd0,1bed c0,214,-3c,41c,-ae,60f c-64,1b6,-2b6f,d70d,-2b9c,d7c9 c-2f1,c\
64,-e66,15a2,-1c14,15a2 c-78f,0,-e71,-2d2,-1395,-771 c-6c,-61,-1e3a,-1e85,-1\
e42,-1e7e c-5b73,5550,-d631,8984,-15d21,8984 c-11abb,0,-1ffee,-e532,-1ffee,-\
1ffee z M3ffec,20027 c0,16a2,-a0,221b,-a0,26cc c0,d1a,-94f,1818,-15dd,1b1c c\
-239,88,-3bbb,cf6,-41df,e1c c-1c6,54,-39b,81,-57a,81 c-fe9,0,-1cd0,-c80,-1cd\
0,-1bed c0,-c8,13e,-173b,1c4,-290a c1d,-3e3,2c,-7cb,2c,-bb6 c0,-d80e,-af26,-\
18734,-18734,-18734 c-65d9,0,-c29c,26ec,-10837,66b4 c0,0,2288,234b,239b,2445\
 c592,517,90d,c50,90d,1453 c0,ce5,-905,17c1,-1548,1af6 c-266,a0,-b8fb,3be8,-\
bf45,3e46 c-33b,137,-6bf,1e1,-a6b,1e1 c-fe9,0,-1cd0,-c80,-1cd0,-1bed c0,-214\
,3c,-41c,ae,-60f c64,-1b6,2b6f,-d70d,2b9c,-d7c9 c2f1,-c64,e66,-15a2,1c14,-15\
a2 c78f,0,e71,2d2,1395,771 c6c,61,1e3a,1e85,1e42,1e7e c5b73,-5550,d631,-8984\
,15d21,-8984 c11abb,0,1ffee,e532,1ffee,1ffee z", function () {
  DefaultUI.tilesRotation[2] = DefaultUI.tilesFlippableRotation[2] =
    /** @type {0|1|2|3} */
    (DefaultUI.tilesRotation[2] + 1 & 3);
}));
Tool.list.push(new Tool("Skin", "M2b144,2d362 c0,0,-4d72,4e17,-4d7d,4e21 c-6\
e7,65c,-1048,a45,-1a9c,a45 c-ab5,0,-1464,-433,-1b5c,-afc c-520,-4fd,-454c,-4\
679,-4a44,-4b4c c-c03,-ba9,-1c66,-12d7,-2e77,-12d7 c-173c,0,-2bb3,be1,-37a5,\
1de5 c-3b0,590,-9298,df16,-9552,e385 c-1613,23e6,-3db8,3bd6,-6af4,3bd6 c-454\
b,0,-7d25,-382c,-7d25,-7d78 c0,-26dd,11ca,-499a,2d89,-609e ca03,-84e,edd5,-9\
d74,f33b,-a153 c10e2,-c1b,1be2,-1fe5,1be2,-3642 c0,-1388,-864,-251b,-15c5,-3\
14e c-572,-4f7,-44e4,-449f,-475f,-46c5 c-7cd,-6c0,-cb5,-1088,-cb5,-1b69 c0,-\
9a5,3da,-126d,a2a,-1900 c183,-193,4f49,-4f2a,4f49,-4f2a z M7edc,3b238 c1b9d,\
0,314d,-145e,314d,-2ffb c0,-1b9d,-1662,-3200,-3200,-3200 c-1b9d,0,-2ffb,15e1\
,-2ffb,317e c0,1b9d,1511,307c,30ae,307c z M2e440,29ff9 c0,0,111b3,-1140f,112\
67,-114ca c54f,-583,88e,-ce3,88e,-14fe c0,-7fb,-326,-f41,-851,-14be c-34e,-3\
82,-3563,-3816,-39d6,-3b78 c-57e,-42d,-c70,-6ab,-13fd,-6ab c-660,0,-c51,1c6,\
-1151,4d8 c-233,159,-712d,4dd6,-712d,4dd6 c0,0,4b83,-6f75,4e90,-7539 c3fc,-6\
68,5e2,-185b,-4d7,-2330 c-354,-35c,-70d9,-715b,-744c,-74a9 c-5d4,-594,-de0,-\
8b5,-16c0,-906 c-c44,-70,-26d5,f20,-26d5,f20 c0,0,1181,-18e9,11f2,-2556 c3e,\
-6e8,-21b,-d30,-627,-123c c-1dc,-251,-2951,-2a0d,-2954,-2a10 c-5dd,-5de,-e1d\
,-95f,-1741,-95f c-969,0,-11e1,3b9,-17c5,9e6 c-1ec,203,-112c8,11207,-112c8,1\
1207 z"));
Tool.list.push(new Tool("Inventory", "M2400,0 c-12d2,0,-2400,112d,-2400,23ff\
 vda22 c0,12d2,112d,2400,23ff,2400 hda22 c12d2,0,2400,-112d,2400,-2400 v-da2\
2 c0,-12d2,-112d,-2400,-2400,-2400 z M2400,16666 c-12d2,0,-2400,112d,-2400,2\
3ff vda22 c0,12d2,112d,2400,23ff,2400 hda22 c12d2,0,2400,-112d,2400,-2400 v-\
da22 c0,-12d2,-112d,-2400,-2400,-2400 z M2400,2cccc c-12d2,0,-2400,112d,-240\
0,23ff vda22 c0,12d2,112d,2400,23ff,2400 hda22 c12d2,0,2400,-112d,2400,-2400\
 v-da22 c0,-12d2,-112d,-2400,-2400,-2400 z M27155,2222 c-ea3,0,-1bff,d5c,-1c\
00,1bff v94cc c0,ea3,d5c,1bff,1bff,1c00 h94cc cea3,0,1c00,-d5c,1c00,-1c00 v-\
94cc c0,-ea3,-d5c,-1c00,-1c00,-1c00 z M1ee22,16666 c-12d2,0,-2400,112d,-2400\
,23ff v0 c0,12d2,112d,2400,23ff,2400 h1b400 c12d2,0,2400,-112d,2400,-2400 v0\
 c0,-12d2,-112d,-2400,-2400,-2400 z M1ba22,1eeee c-12d2,0,-2400,112d,-2400,2\
400 v0 c0,12d2,112d,2400,23ff,2400 h21c00 c12d2,0,2400,-112d,2400,-2400 v0 c\
0,-12d2,-112d,-2400,-2400,-2400 z M21a22,27777 c-12d2,0,-2400,112d,-2400,23f\
f v0 c0,12d2,112d,2400,23ff,2400 h13c00 c12d2,0,2400,-112d,2400,-2400 v0 c0,\
-12d2,-112d,-2400,-2400,-2400 z M1e622,30000 c-12d2,0,-2400,112d,-2400,23ff \
v0 c0,12d2,112d,2400,23ff,2400 h1c400 c12d2,0,2400,-112d,2400,-2400 v0 c0,-1\
2d2,-112d,-2400,-2400,-2400 z M1fe22,38888 c-12d2,0,-2400,112d,-2400,23ff v0\
 c0,12d2,112d,2400,23ff,2400 h19400 c12d2,0,2400,-112d,2400,-2400 v0 c0,-12d\
2,-112d,-2400,-2400,-2400 z", function () {
  cmds.style.display = cmds.style.display ? "" : "none";
  if (!cmds.style.top)
    cmds.style.top = "0px";
}));
Tool.list.push(new Tool("Flip", "M2497,3d3e7 c-1420,0,-2470,-1050,-2470,-247\
0 c0,-4ef,fb,-9a3,2c1,-dee c3fe,-9a4,1662c,-35d83,16900,-362b1 c62e,-b51,123\
2,-12ff,2000,-12ff c1420,0,2470,1050,2470,2470 c0,5a3,0,351a7,0,35f70 c0,142\
0,-1050,2470,-2470,2470 c-87d,0,-15eba,-41,-16752,-41 z M27458,3d429 c-1420,\
0,-2470,-1050,-2470,-2470 c0,-dc8,0,-359cd,0,-35f70 c0,-1420,1050,-2470,2470\
,-2470 cdce,0,19d1,7ad,2000,12ff c2d4,52e,16502,3590c,16900,362b1 c1c6,44a,2\
c1,8ff,2c1,dee c0,1420,-1050,2470,-2470,2470 c-898,0,-15ed5,41,-16752,41 z M\
3a5de,38baa l-10dfa,-287d3 v287d7 z M22770,6dd0" +
  "$ins; M22770,14947$ins; M22778,224b6$ins; M22770,3002d$ins; M22770,3db79$\
ins;".replace(/\$ins;/g, " c0,142a,-1059,2483,-2483,2483 c-142a,0,-2483,-105\
9,-2483,-2483 v-4949 c0,-142a,1059,-2483,2483,-2483 c142a,0,2483,1059,2483,2\
483 c0,708,0,4316,0,4949 z"), function () {
  DefaultUI.tilesFlippableRotation[1] =
    !DefaultUI.tilesFlippableRotation[1];
}));
Tool.list.push(new Tool("Clone", "M2ba5a,2bab5 vda5e c0,33ca,-29fc,5dc6,-5dc\
6,5dc6 h-1fdbd c-33ca,0,-5dc6,-29fc,-5dc6,-5dc6 v-1fd62 c0,-33ca,29fc,-5dc6,\
5dc6,-5dc6 hda3f l11,-daf0 c0,-33ca,29fc,-5dc6,5dc6,-5dc6 h1fda6 c33ca,0,5dc\
6,29fc,5dc6,5dc6 v1fdf3 c0,33ca,-29fc,5dc6,-5dc6,5dc6 z M25a7a,18270 c-5e82,\
30,-1bfcd,e4,-1f71e,d4 c-f11,-4,-180c,a9e,-1815,19ce c-3a,5fa0,-10c,1baf6,-b\
6,1f335 c16,edc,8e7,18b9,1948,18b7 l1f71e,-37 cc02,-1,15a5,-862,15a8,-1707 l\
83,-1f5a7 c6,-de2,-7ef,-19b0,-16a8,-19a9 z M394a4,4b8f l-1fa26,-1ac c-e4d,70\
,-169d,c12,-16a6,1820 l-a3,d63a ld185,67 c3c14,9,66ad,2841,6729,5855 l-33,de\
f3 ld5ec,1a6 cba6,-76,175b,-a4c,17d6,-1935 l-61,-1f52a c-5,-f8c,-a81,-17f3,-\
146b,-17a5 z"));
Tool.list.push(new Tool("Undo", "M3f6f3,19ab0 cc15,c15,c15,1fad,0,2bc2 c-c15\
,c15,-1fad,c15,-2bc2,0 c0,0,-334f,-32bd,-ba42,-2670 c-c4f3,ef0,-12d5f,89d9,-\
12d5f,89d9 c42b1,42b1,7222,7222,732f,732f cc15,c15,c15,1fad,0,2bc2 c-4b5,4b5\
,-a8f,795,-10aa,89f c-6aa,122,-21ce2,5967,-22309,59df c-8af,a8,-1198,-254,-1\
83c,-8f9 c-6b7,-6b7,-9b3,-fc1,-8f3,-1888 c85,-615,5940,-21dea,599b,-2210e cc\
3,-6b4,3b8,-d35,8dc,-1259 cc15,-c15,1fad,-c15,2bc2,0 c62,62,733f,733f,733f,7\
33f c0,0,76,-a5,152,-152 c88c2,-6b53,1cea0,-db12,2f024,5037 z", function () {
  if (ship.getMode().mode !== "Ship")
    return alert("Functions only in Ship editing mode");
  Edit.undo(ship);
}));
Tool.list.push(new Tool("Redo", "Mb37,19889 c12184,-12b4a,26761,-bb8b,2f024,\
-5037 cdb,ac,152,152,152,152 c0,0,72dc,-72dc,733f,-733f cc15,-c15,1fad,-c15,\
2bc2,0 c524,524,818,ba5,8dc,1259 c5b,324,5916,21af9,599b,2210e cc0,8c7,-23b,\
11d0,-8f3,1888 c-6a4,6a4,-f8d,9a2,-183c,8f9 c-626,-77,-21c5f,-58bd,-22309,-5\
9df c-61a,-109,-bf4,-3e9,-10aa,-89f c-c15,-c15,-c15,-1fad,0,-2bc2 c10d,-10d,\
307e,-307e,732f,-732f c0,0,-686c,-7ae9,-12d5f,-89d9 c-86f2,-c4d,-ba42,2670,-\
ba42,2670 c-c15,c15,-1fad,c15,-2bc2,0 c-c15,-c15,-c15,-1fad,0,-2bc2 z",
function () {
  if (ship.getMode().mode !== "Ship")
    return alert("Functions only in Ship editing mode");
  Edit.redo(ship);
}));
Tool.list.push(new Tool("Next", "M10200,0 L10200,40000 L40000,20000 z"));
Tool.list.push(new Tool("Previous", "M2fc00,0 L0,20000 L2fc00,40000 z"));
Tool.list.push(new Tool("Stats", "M2e6b3,388fc c0,1052,d3b,1d8e,1d8e,1d8e c1\
13,0,da03,0,de2d,0 c1052,0,1d8e,-d3b,1d8e,-1d8e c0,-4f7,0,-287bf,0,-28dbc c0\
,-1052,-d3b,-1d8e,-1d8e,-1d8e c-5ba,0,-d6a7,0,-de2d,0 c-1052,0,-1d8e,d3b,-1d\
8e,1d8e c0,35a,0,28a4a,0,28dbc z M19032,3a68a c-1052,0,-1d8e,-d3b,-1d8e,-1d8\
e c0,-5a6,0,-35d59,0,-3643c c0,-1052,d3b,-1d8e,1d8e,-1d8e c88f,0,db66,0,de2d\
,0 c1052,0,1d8e,d3b,1d8e,1d8e c0,94,0,35e4d,0,3643c c0,1052,-d3b,1d8e,-1d8e,\
1d8e c-5a0,0,-d9c6,0,-de2d,0 z M11958,1d2d2 c0,-1052,-d3b,-1d8e,-1d8e,-1d8e \
c-6b6,0,-d69e,0,-de2d,0 c-1052,0,-1d8e,d3b,-1d8e,1d8e c0,80c,0,1b1a5,0,1b629\
 c0,1052,d3b,1d8e,1d8e,1d8e c5e9,0,d9f1,0,de2d,0 c1052,0,1d8e,-d3b,1d8e,-1d8\
e c0,-754,0,-1b5c7,0,-1b629 z"));
Tool.list.push(new Tool("Node", "Mf70a,34a28 c0,f1b,0,7296,0,8060 c0,1e09,-1\
859,3663,-3663,3663 c-fa9,0,-73b3,0,-8944,0 c-1e09,0,-3663,-1859,-3663,-3663\
 c0,-bcb,0,-7be7,0,-89f4 c0,-1e09,1859,-3663,3663,-3663 h81d1 l251bf,-250eb \
v-81e2 c0,-1e09,1859,-3663,3663,-3663 cb18,0,7b71,0,8944,0 c1e09,0,3663,1859\
,3663,3663 c0,eac,0,7ff7,0,89f4 c0,1e09,-1859,3663,-3663,3663 h-81b3 z"));
Tool.list.push(new Tool("History", "Mc400,0 c-238d,0,-4400,2072,-4400,4400 v\
37800 c0,238d,2072,4400,4400,4400 h27800 c238d,0,4400,-2072,4400,-4400 v-378\
00 c0,-238d,-2072,-4400,-4400,-4400 z M31beb,a445 c6cc,548,6cc,dd8,0,1320 c-\
6cc,548,-11d1,548,-189d,0 c0,0,-1cdc,-162d,-68c5,-10cd c-6ec9,687,-a986,3c41\
,-a986,3c41 c2584,1d27,4033,31e3,40cb,3259 c6cc,548,6cc,dd8,0,1320 c-2a6,20f\
,-5f1,350,-95f,3c4 c-3bf,7e,-13040,2714,-133b6,2748 c-4e2,49,-9e5,-104,-da2,\
-3ec c-3c7,-2ef,-574,-6e2,-508,-ab9 c4a,-2a8,3234,-ece0,3267,-ee3f c6e,-2ee,\
217,-5c5,4fc,-805 c6cc,-548,11d1,-548,189d,0 c37,2b,40d3,3260,40d3,3260 c0,0\
,42,-48,be,-93 c4ced,-2ee9,1043b,-5fc2,1a715,2310 Me7cd,1c954 ca2da,-82d2,15\
a28,-51fa,1a715,-2310 c7b,4b,be,93,be,93 c0,0,409c,-3235,40d3,-3260 c6cc,-54\
8,11d1,-548,189d,0 c2e4,23f,48d,517,4fc,805 c33,15f,321c,eb96,3267,ee3f c6c,\
3d6,-141,7c9,-508,ab9 c-3bc,2e7,-8bf,435,-da2,3ec c-375,-34,-12ff6,-26c9,-13\
3b6,-2748 c-36e,-74,-6b9,-1b5,-95f,-3c4 c-6cc,-548,-6cc,-dd8,0,-1320 c97,-75\
,1b47,-1532,40cb,-3259 c0,0,-3abc,-35b9,-a986,-3c41 c-4be8,-560,-68c5,10cd,-\
68c5,10cd c-6cc,548,-11d1,548,-189d,0 c-6cc,-548,-6cc,-dd8,0,-1320 Me7cd,2f5\
54 ca2da,-82d2,15a28,-51fa,1a715,-2310 c7b,4b,be,93,be,93 c0,0,409c,-3235,40\
d3,-3260 c6cc,-548,11d1,-548,189d,0 c2e4,23f,48d,517,4fc,805 c33,15f,321c,eb\
96,3267,ee3f c6c,3d6,-141,7c9,-508,ab9 c-3bc,2e7,-8bf,435,-da2,3ec c-375,-34\
,-12ff6,-26c9,-133b6,-2748 c-36e,-74,-6b9,-1b5,-95f,-3c4 c-6cc,-548,-6cc,-dd\
8,0,-1320 c97,-75,1b47,-1532,40cb,-3259 c0,0,-3abc,-35b9,-a986,-3c41 c-4be8,\
-560,-68c5,10cd,-68c5,10cd c-6cc,548,-11d1,548,-189d,0 c-6cc,-548,-6cc,-dd8,\
0,-1320 z"));
Tool.list.push(new Tool("Flip180", "M2c3a,2475 c0,-1420,1050,-2470,2470,-247\
0 c4ef,0,9a3,fb,dee,2c1 c9a4,3fe,35d83,1662c,362b1,16900 cb51,62e,12ff,1232,\
12ff,2000 c0,1420,-1050,2470,-2470,2470 c-5a3,0,-351a7,0,-35f70,0 c-1420,0,-\
2470,-1050,-2470,-2470 c0,-87d,41,-15eba,41,-16752 z M2bf8,27437 c0,-1420,10\
50,-2470,2470,-2470 cdc8,0,359cd,0,35f70,0 c1420,0,2470,1050,2470,2470 c0,dc\
e,-7ad,19d1,-12ff,2000 c-52e,2d4,-3590c,16502,-362b1,16900 c-44a,1c6,-8ff,2c\
1,-dee,2c1 c-1420,0,-2470,-1050,-2470,-2470 c0,-898,-41,-15ed5,-41,-16752 z \
M7476,3a5bd l287d3,-10dfa l-287d7,0 z M39250,2274f$ins; M2b6d9,2274f$ins; M1\
db6b,22757$ins; Mfff3,2274f$ins; M24a8,22169$ins;".replace(/\$ins;/g, " c-14\
2a,0,-2483,-1059,-2483,-2483 c0,-142a,1059,-2483,2483,-2483 c547,0,422c,0,49\
49,0 c142a,0,2483,1059,2483,2483 c0,142a,-1059,2483,-2483,2483 c-708,0,-4316\
,0,-4949,0 z"), function () {
  DefaultUI.tilesRotation[2] = DefaultUI.tilesFlippableRotation[2] =
    /** @type {0|1|2|3} */
    (DefaultUI.tilesRotation[2] + 2 & 3);
  DefaultUI.tilesFlippableRotation[1] =
    !DefaultUI.tilesFlippableRotation[1];
}));
Tool.list.push(new Tool("Rotate", "M3ffec,1ffd8 c0,11abb,-e532,1ffee,-1ffee,\
1ffee c-86ef,0,-101ad,-3434,-15d21,-8984 c-7,-7,-1dd5,1e1c,-1e42,1e7e c-523,\
49e,-c05,771,-1395,771 c-dae,0,-1922,-93d,-1c14,-15a2 c-2c,-bc,-2b38,-d613,-\
2b9c,-d7c9 c-72,-1f3,-ae,-3fa,-ae,-60f c0,-f6c,ce6,-1bed,1cd0,-1bed c3ac,0,7\
30,aa,a6b,1e1 c64a,25d,bcde,3da5,bf45,3e46 cc42,335,1548,e10,1548,1af6 c0,80\
2,-37a,f3b,-90d,1453 c-112,fa,-239b,2445,-239b,2445 c459b,3fc8,a25d,66b4,108\
37,66b4 cd80e,0,18734,-af26,18734,-18734 c0,-3ea,-e,-7d2,-2c,-bb6 c-86,-11ce\
,-1c4,-2841,-1c4,-290a c0,-f6c,ce6,-1bed,1cd0,-1bed c1df,0,3b4,2c,57a,81 c62\
4,125,3fa5,d93,41df,e1c cc8e,303,15dd,e02,15dd,1b1c c0,4b0,a0,102a,a0,26cc z\
 M13,20027 c0,-11abb,e532,-1ffee,1ffee,-1ffee c86ef,0,101ad,3434,15d21,8984 \
c7,7,1dd5,-1e1c,1e42,-1e7e c523,-49e,c05,-771,1395,-771 cdae,0,1922,93d,1c14\
,15a2 c2c,bc,2b38,d613,2b9c,d7c9 c72,1f3,ae,3fa,ae,60f c0,f6c,-ce6,1bed,-1cd\
0,1bed c-3ac,0,-730,-aa,-a6b,-1e1 c-64a,-25d,-bcde,-3da5,-bf45,-3e46 c-c42,-\
335,-1548,-e10,-1548,-1af6 c0,-802,37a,-f3b,90d,-1453 c112,-fa,239b,-2445,23\
9b,-2445 c-459b,-3fc8,-a25d,-66b4,-10837,-66b4 c-d80e,0,-18734,af26,-18734,1\
8734 c0,3ea,e,7d2,2c,bb6 c86,11ce,1c4,2841,1c4,290a c0,f6c,-ce6,1bed,-1cd0,1\
bed c-1df,0,-3b4,-2c,-57a,-81 c-624,-125,-3fa5,-d93,-41df,-e1c c-c8e,-303,-1\
5dd,-e02,-15dd,-1b1c c0,-4b0,-a0,-102a,-a0,-26cc z", function () {
  DefaultUI.tilesRotation[2] = DefaultUI.tilesFlippableRotation[2] =
    /** @type {0|1|2|3} */
    (DefaultUI.tilesRotation[2] + 3 & 3);
}));
Tool.list.push(new Tool("Erase", "M21cbd,3933e c-fa8,c27,-2353,1363,-38af,13\
63 l-affd,11 c-16fe,0,-2c08,-863,-3c37,-1645 l-de68,-da2c c-f83,-108c,-1904,\
-26cd,-1904,-3f47 c0,-19f4,aaf,-316a,1be6,-4238 l2182b,-219f0 c10ae,-104b,27\
7f,-1a57,40a9,-1a57 c17a9,0,2d40,8e1,3d9d,177e l13941,13b1d cd12,ff5,14eb,24\
5d,14eb,3a9a c0,16b2,-82c,2b7d,-15bc,3b96 z M1e360,34780 l96a9,-935f l-12979\
,-12ae9 l-eff8,ee4e ld536,d073 z", function (x, y) {
  var found = ship.blockAtPonit2d((vX - x) / sc, (y - vY) / sc);
  if (!found)
    return;
  ship.removeBlocks([found.id]);
  render();
}, true));
Tool.list.push(new Tool("Classic", "M4030e,2bac1 c-1838,-80aa,-8930,-e200,-1\
10e4,-e200 c-7669,0,-db83,4a1d,-10372,b27c l-a7c8,-a v-2884d h1fd7a c693b,0,\
be8b,554f,be8b,be8b z M33a,c1a9 l0,0 c0,-693b,554f,-be8b,be8b,-be8b h3299 l-\
5,288a5 h-5dd5 c-382a,0,-6b90,146c,-932a,3640 z M2d3df,40281 c-8b1d,-f18,-f7\
65,-84ee,-f765,-1140f c0,-4b5,1e,-963,59,-e0a l-14939,f c-5016,0,-9102,40ec,\
-9102,9102 c0,5016,40ec,9102,9102,9102 z M22bf9,2ee91 c0,-6e03,57d3,-c732,c4\
2a,-c732 c6c57,0,c42a,592e,c42a,c732 c0,6e03,-57d3,c732,-c42a,c732 c-6c57,0,\
-c42a,-592e,-c42a,-c732 z M3061d,29da1 c0,-1657,-121c,-2873,-2873,-2873 c-16\
57,0,-2873,121c,-2873,2873 v6982 c0,1657,121c,2873,2873,2873 h5090 c1657,0,2\
873,-121c,2873,-2873 c0,-1657,-121c,-2873,-2873,-2873 h-282b z",
function (x, y) {
  old_UI(x, y);
}, true));
Tool.list.push(new Tool("Oldschool", "M105e7,3d210 c-3a97,3a97,-9997,3a97,-d\
42f,0 c-3a97,-3a97,-3a97,-9997,0,-d42f l1b0b,-1b0b ld429,d429 z M803a,2adde \
l7e92,-7e92 ld429,d429 l-7e8b,7e96 z M22c1b,101fd l8428,-8428 ld429,d429 l-8\
420,842b z M3ecd6,eb15 l-3144,314e l-d430,-d42e l314a,-314a lcc78,-e09 ccdd,\
0,174a,a6d,174a,174a z M696f,13e22 c-3391,-3391,-5e3f,-5e3f,-5e3f,-5e3f c-90\
d,-90d,-90d,-17bb,0,-20c9 lb458,-b458 c90d,-90d,17bb,-90d,20c9,0 l318fa,318f\
a c90d,90d,90d,17bb,0,20c9 l-b458,b458 c-90d,90d,-17bb,90d,-20c9,0 c0,0,-258\
6,-2592,-5e74,-5e8c l2c8a,-2c8e ccd8,-cd8,cd8,-21ab,0,-2e83 c-cd8,-cd8,-21ab\
,-cd8,-2e83,0 l-2c94,2c7b c-e96,-e99,-1de9,-1dee,-2dc4,-2dcb l492c,-48fb ccd\
8,-cd8,cd8,-21ab,0,-2e83 c-cd8,-cd8,-21ab,-cd8,-2e83,0 l-491e,4903 c-f80,-f8\
2,-1f4e,-1f51,-2f41,-2f44 l2c7b,-2c83 ccd8,-cd8,cd8,-21ab,0,-2e83 c-cd8,-cd8\
,-21ab,-cd8,-2e83,0 l-2c89,2c74 c-f73,-f73,-1f2f,-1efc,-2e79,-2e46 l489f,-48\
79 ccd8,-cd8,cd8,-21ab,0,-2e83 c-cd8,-cd8,-21ab,-cd8,-2e83,0 l-48ad,486b c-1\
02a,-102a,-1ffb,-1ffb,-2f43,-2f43 l2c0c,-2bed ccd8,-cd8,cd8,-21ab,0,-2e83 c-\
cd8,-cd8,-21ab,-cd8,-2e83,0 l-2c1a,2bde c-fd3,-fd3,-1eb7,-1eb7,-2c66,-2c66 l\
4926,-4929 ccd8,-cd8,cd8,-21ab,0,-2e83 c-cd8,-cd8,-21ab,-cd8,-2e83,0 l-4934,\
491a c-f12,-f12,-1f19,-1f19,-2f2f,-2f2f l2c80,-2caf ccd8,-cd8,cd8,-21ab,0,-2\
e83 c-cd8,-cd8,-21ab,-cd8,-2e83,0 z"));

// db3 styled icon (cardboard box)
// https://www.flaticon.com/free-icon/package_7625482?term=time+product&page=2&position=30&origin=search&related_id=7625482

/** May throw error, use asynchronously! @throws {TypeError} */
function check_contentScript() {
  var contentScript = GE("contentScript"), data = "";
  if (contentScript && (data = contentScript.innerText)) {
    //@ts-ignore no problem if it throws error
    contentScript.parentNode.removeChild(contentScript);
    document.body.appendChild(EL("script")).appendChild(tN(data));
  }
}
function test_blocks1_2_10() {
  var temp = B64Key.decode(B64Key.b64ToU8arr("gIAZDWJsb2Nrc18xLjIuMTCBggoFQJ\
qtpoC/L0rXJus9jD4A8gYIqBsgOG6AAK0BArMGCMgaIODrIBDoNUCA1wCBXQMEdG0QyLVAANcAgV\
sDBGwNEKi1QYDWAvwaIFDuLBBIdxYIkJsioO4nILoNAucWCJgbIDBuBsQNENB3EQjQ2yKQ7yoQuD\
dBwN4EgXkrBPA9BQL1VkDeChz8CwQMDhAoOECA4ACBgQMEBH4GAhuPAgGNAwQyDhDAOEDA4gCBiw\
MEKg4QoLhAYOIAAYkDBDgOEKBZIDBzgIDMAQL/BQjEHCAAc4DAywECLgcItBwgwHOAAMsBAisHCK\
gcIJBygADKAQInBwiYHCBQcoAAyQECIwcIiBwgsPMsENA5QCDnAIH/AoBzgMDNAQI2BwjUHCAAXc\
2T6QcAW1swLDE3LDAsMTddLCJ7XCJjb2xvclwiOlwiV2hpdGVcIn0iXQ=="));
  typeof temp == "object" && temp.blocks.forEach(function (e) {
    e.properties = {color: e.properties.color || null};
    var rot = e.rotation, pos = e.position;
    e.position = [pos[1] / 2, pos[2] / 2];
    e.rotation = rot[2];
    e.flipped = rot[1];
  });
  ship = Ship.fromObject(temp);
  render();
};
test_debugbox2collisions = function (rend) {
  if (rend !== UDF && typeof rend != "function")
    return;
  var running = false, rc2d = EL("canvas").getContext("2d") || rc;
  (test_debugbox2collisions = function (rend) {
    if (rend === false) {
      var val = running;
      running = false;
      return val;
    }
    var oB = test_collbxs, oRC = rend_collisions, oTC = test_collisions;
    if (typeof rend != "function" && rend !== UDF) {
      if (!running)
        return;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "copy";
      ctx.drawImage(rc2d.canvas, 0, 0);
      ctx.restore();
      if (rend instanceof Array && rend[0] instanceof Block.Box2d) {
        rend_collisions = false;
        test_collisions = "true";
        Block.Box2d.visualize(rend, Infinity, Infinity, true);
          // (vX + 99) / sc, -(vY + 99) / sc, true);
        rend_collisions = oRC;
        test_collisions = oTC;
      }
      return true;
    }
    var oDD = devt_debugger;
    test_collbxs = rend_collisions = false;
    test_collisions = "";
    expensiveRenderer();
    rc2d.globalCompositeOperation = "copy";
    rc2d.canvas.width = canvas.width;
    rc2d.canvas.height = canvas.height;
    rc2d.drawImage(canvas, 0, 0);
    rend_collisions = devt_debugger = true;
    running = true;
    typeof rend == "function" ? rend() :
      Block.Box2d.collisions(Block.Box2d.GRID.Small
      // does this work? (v.0.1.69.K1)
      , ship.blocks, true);
    running = false;
    test_collbxs = oB;
    rend_collisions = oRC;
    test_collisions = oTC;
    devt_debugger = oDD;
  })(rend);
};

function devt_bug_testing() {
  // devt_... stands for dev tools functions and variables
  var scr = EL("script");
  scr.src = "./code/unit_tests.js";
  document.body.appendChild(scr);
}
var devt_debugger = false;

/** @typedef {Block|LogicBlock|Tool|null} TileType */
function DefaultUI() {
  throw new TypeError("Illegal constructor");
  this.mode = "any";
}
/** used in DefaultUI.createTile for rotatable blocks */
DefaultUI.tilesRotation =
  /** @type {Rotation} */
  ([0, !1, 0]);
DefaultUI.tilesFlippableRotation =
  /** @type {Rotation} */
  (DefaultUI.tilesRotation.slice());
//- what was this supposed to store? 
//- DefaultUI.TILE = {};
DefaultUI.rend = F;
/** @type {(TileType[]&{type:TileType})[]} */
DefaultUI.blockBars = [];
DefaultUI.selectedFolder = 0;
/** The value of selected tile consists of:
 * enum `value & 3` where 0 = selected in toolBar, 1 = selected in BlockBar,
 * 2 = selected inventoryTile, 3 = reserved for selected in inventory,
 * `value >> 2` gives index of selected tile,
 * if `value === -1` it means no tile is selected; */
DefaultUI.selectedTile = -1;
/** The value of selected tile consists of:
 * enum `value & 3` where 0 = selected in toolBar, 1 = selected in BlockBar,
 * 2 = selected inventoryTile, 3 = reserved for selected in inventory,
 * `value >> 2` gives index of selected tile,
 * if `value === -1` it means no tile is selected; */
DefaultUI.selectedClickTile = -1;
DefaultUI.inventoryTile = !defaults.hideInventoryTile;
DefaultUI.createTile = function () {
  /** @type {XYZPosition} */
  var pos = [0, 0, 0], id = 0;
  /** @param {unknown} val */
  return function (val) {
    if (typeof val == "number" && typeof Block.NAME[val] == "string")
      var name = Block.NAME[id = val];
    else if (typeof (id = Block.ID["" + val]) == "number")
      name = Block.NAME[id];
    if (typeof name == "string")
      return new Block(name, pos, Block.isFlippable(id) ?
          DefaultUI.tilesFlippableRotation :
          DefaultUI.tilesRotation,
        0, Color.default(name));
    if (val instanceof Tool)
      return val;
    for (var i = Tool.list.length; i-- > 0;)
      if (Tool.list[i].name === "" + val)
        return Tool.list[i];
    return null;
  };
}();
/** @type {TileType[]} */
DefaultUI.toolBar = [
  DefaultUI.createTile("Undo"),
  DefaultUI.createTile("Redo"),
  DefaultUI.createTile("Rotate90"),
  DefaultUI.createTile("Rotate"),
  DefaultUI.createTile("Flip"),
  DefaultUI.createTile("Flip180"),
  DefaultUI.createTile("Erase"),
  DefaultUI.createTile("Classic"),
  DefaultUI.createTile("Node")
];
/** used at @typedef {"@see"} SeeRenderingFolders */
DefaultUI.offsetsFolders = 0;
DefaultUI.previousFolders = false;
DefaultUI.nextFolders = true;
/** DefaultUI.press, .move, .contextmenu, .over are memory for
 * 'default' action bind 'callback' for current Ship.Mode,
 * for example used in Command.stop() */
DefaultUI.press = press;
DefaultUI.move = move;
DefaultUI.contextmenu = contextmenu;
DefaultUI.over = over;
/** @see {DefaultUI.createTile} @see {DefaultUI.createFolder} */
DefaultUI.defaultFoldersData = [
  {type: "Core", tiles: [690, 691, 692, 739, 746, 754, 757], range: []},
  {type: "Wedge", tiles: [703], range: [692, 703]},
  {type: "Small Hydrogen Thruster", tiles: [], range: [738, 747]},
  {type: "Small Hydrogen Tank", tiles: [], range: [754, 763]},
  {type: "Cannon", tiles: [], range: [771, 777]},
  {type: "Small Hydraulic Drill", tiles: [770], range: []},
  {type: "Separator", tiles: [796, -1], range: [786, 790]},
  {type: "Separator", tiles: [791, 790], range: [792, 796]},
  {type: "AND Gate", tiles: [], range: [802, 813]},
  {type: "AND Gate", tiles: [828], range: [813, 817]},
  {type: "AND Gate", tiles: [-1, 817, -1], range: [818, 828]},
  {type: "__placeholder853__", tiles: [], range: [834, 858]},
  {type: "Afterburner", tiles: [1035, 1037, 1043, 1060], range: []}
];
/** @type {ToolExec} */
DefaultUI.defaultPress = function (_x, _y) {};
DefaultUI.canDefaultPress = true;
/** @param {number|string} type @param {unknown[]} [tiles=[]] */
DefaultUI.createFolder = function (type, tiles) {
  var folder =
    /** @type {TileType[]&{type:TileType}} */
    ((tiles || []).map(DefaultUI.createTile));
  folder.type = DefaultUI.createTile(type);
  return folder;
};
/** selctively finds which UI area was interacted with
 * @param {number} x @param {number} y @returns {boolean} over GUI area */
DefaultUI.actionArea = function (x, y) {
  var tile = -1;
  if (x < 277) {
    // toolBar side of canvas: static tile slots
    var row = (canvas.height - y - 13) / 87 | 0,
      column = (x - 10) / 87 | 0;
    /** @see {DefaultUI.selectedTile} for tile indexing */
    if (y > canvas.height - 277)
      tile = (row > 2 ? 2 : row) * 3 + (column > 2 ? 2 : column) << 2;
    else
      return false;
  } else if (y > canvas.height - 103) {
    // items for blockBar rect part of canvas: dynamic tile slots
    if (DefaultUI.inventoryTile && x > canvas.width - 103)
      tile = 2;
    else if (x - 277 < (DefaultUI.blockBars[DefaultUI.selectedFolder] ||
      []).length * 87)
      tile = (x - 283) / 87 << 2 | 1;
      // STOPPED HERE
  } else if (x - 277 + DefaultUI.offsetsFolders <
    DefaultUI.blockBars.length * 57 && y > canvas.height - 170) {
    // folders for blockBar rect part of canvas:
    // resizes with folders amount changed
    var folder = (x - 277 + DefaultUI.offsetsFolders) / 57 | 0;
    if (DefaultUI.previousFolders && x < 333)
      DefaultUI.offsetsFolders -= 57;
    else if (DefaultUI.nextFolders && x > canvas.width - 61)
      DefaultUI.offsetsFolders += 57;
    else if ((DefaultUI.selectedTile & 3) === 1 && folder !==
      DefaultUI.selectedFolder)
      DefaultUI.selectedFolder = folder;
    else
      DefaultUI.selectedFolder = folder;
  } else
    // the rest of canvas area is handled for building area
    return false;
  /** @type {{clickType?:boolean}} */
  (DefaultUI.getSelectedTile(tile) || {}).clickType ?
    // currently this place is dictates the clickType like properties of Tool
    DefaultUI.selectedClickTile = tile :
    DefaultUI.selectedTile =
      DefaultUI.selectedTile === tile ? -1 : tile;
  render();
  return true;
}
/** @param {TileType} tile */
DefaultUI.getCode = function tileCode(tile) {
  return tile instanceof Tool ?
    tile.name :
    tile instanceof Block ?
      tile.internalName :
      NaN;
}; 
/** usually used before @see {DefaultUI.renderHotBars} @param {number} w */
DefaultUI.reflowBlockBars = function (w) {
  function pushToSame() {
    sameTypes = sameTypes.concat(bars[i] || []);
  }
  /** plus = also adds bars[i] to sameTypes afterwards */
  var checkAndPush = (DefaultUI.selectedTile & 3) === 1 ? function () {
    if (i === DefaultUI.selectedFolder)
      selectCode = sameTypes.length + (DefaultUI.selectedTile >> 2);
    pushToSame();
  } : pushToSame;
  /** 380 = distance to the end of first tile + distance */
  var i = 0,
    maxItems = ((w - 380) / 87 | 0) - +DefaultUI.inventoryTile + 1,
    selectCode = -1,
    bars = DefaultUI.blockBars,
    prevType = (bars[0] || {}).type || null,
    /** @type {TileType[]} */
    sameTypes = [],
    /** @type {(TileType[]&{type:TileType})[]} */
    updated = DefaultUI.blockBars = [];
  checkAndPush();
  maxItems < 1 && (maxItems = 1);
  for (i++; i <= bars.length; i++) {
    var tiles = bars[i] || {}, nowCode = DefaultUI.getCode(tiles.type);
    if (nowCode === DefaultUI.getCode(prevType) && i < bars.length)
      checkAndPush();
    else {
      for (var j = 0; j < sameTypes.length; j += maxItems) {
        if (selectCode !== -1 && j + maxItems > selectCode) {
          DefaultUI.selectedTile = selectCode % maxItems << 2 | 1;
          DefaultUI.selectedFolder = updated.length;
          checkAndPush = pushToSame;
          selectCode = -1;
        }
        var folder =
          /** @type {TileType[]&{type:TileType}} */
          (sameTypes.slice(j, j + maxItems));
        folder.type = prevType;
        updated.push(folder);
      }
      sameTypes = [];
      checkAndPush();
    }
    prevType = tiles.type;
  }
  if (DefaultUI.offsetsFolders > (i = updated.length * 57))
    DefaultUI.offsetsFolders = 0;
  DefaultUI.previousFolders = DefaultUI.offsetsFolders > 0;
  DefaultUI.nextFolders = 277 + i - DefaultUI.offsetsFolders > w - 8;
};
// live expression used for debugging:
// https://github.com/KaaBEL/.d1r.dbv/blob/fb90bf5/code/editor.js#L2706-L2726
// (fb90bf5e0ce42dd2bcbcb00f8a6e64b4a2242da7)
/** gives selectedTile on default
 * @param {number} [tileIndex] pass DefaultUI.selectedClickTile
 * to get selectedClickTile (for single exec inventoryTiles) */
DefaultUI.getSelectedTile = function (tileIndex) {
  var select = tileIndex === UDF ? DefaultUI.selectedTile : tileIndex;
  return (select & 3) === 1 ?
    (DefaultUI.blockBars[DefaultUI.selectedFolder] || [])[select >> 2] :
    (select & 3) === 0 ?
      DefaultUI.toolBar[select >> 2] :
      select === 2 ? DefaultUI.createTile("Inventory") : null;
};
DefaultUI.setPixelRatio = function () {
  var n = window.devicePixelRatio;
  if (defaults.fullscreenInitialized && n > 1) {
    pR = n;
    /** @type {()=>void} */
    (onresize || F)();
  }
};
/** Warning: resets DefaultUI.selectedTile!, ...you know, ... (xD)
 * @param {boolean} logicOnly */
DefaultUI.getDefaultFolders = function (logicOnly) {
  DefaultUI.selectedTile = -1;
  for (var i = DefaultUI.defaultFoldersData.length, yk = []; i-- > 0;) {
    var the = DefaultUI.defaultFoldersData[i], tiles = [];
    for (var j = 0; j < the.tiles.length; j++)
      (!logicOnly || Logic.VALUE[the.tiles[j]] || the.tiles[j] === -1) &&
        tiles.push(the.tiles[j] > -1 ? the.tiles[j] : null);
    for (j = the.range[0]; the.range.length && j < the.range[1]; j++)
      (!logicOnly || Logic.VALUE[j]) && tiles.push(j);
    yk[i] = DefaultUI.createFolder(the.type || "unknown", tiles);
  }
  return yk;
};
/** render both toolBar and blockBar: all hotbar tile slots
 * @param {number} w @param {number} h */
DefaultUI.renderHotBars = function (w, h) {
  var radius = defaults.renderSharp ? 0 : 5;
  /** @param {Block|LogicBlock} block */
  function drawBlockRc(block) {
    var size = Block.Size.VALUE[Block.ID[block.internalName]];
    if (!size)
      console.warn("No Block.Size definition for: " +
        block.internalName);
    if (size.h <= 0 || size.w <= 0)
      return void (rc.canvas.width = rc.canvas.width);
    /** detection of tiny block case, smallest texsture is 16x16 px */
    var w = (size.w & 16) + size.w,
      h = (size.h & 16) + size.h,
      /** side of square sized canvas, larger one of width & height */
      a = w > h ? w : h,
      x = (a - w) / 2,
      y = (a - h) / 2;
    helpCanvas.width = helpCanvas.height = a;
    var rot = 10 - block.rotation[2] & 3;
    rc.rotate(rot * Math.PI / 2);
    if (block.rotation[1]) {
      rc.scale(-1, 1);
      rc.translate(rot > 1 ? 0 : -a, rot && rot < 3 ? -a : 0);
    } else
      rc.translate(rot > 1 ? -a : 0, rot && rot < 3 ? -a : 0);
    rc.fillStyle = rend_colors[Color.ID[block.properties.color || ""]];
    block.internalName !== "Ghost Block" && rc.fillRect(x, y, w, h);
    rc.globalCompositeOperation = "destination-in";
    rc.drawImage(imgMask, x - size.x, y - size.y);
    rc.globalCompositeOperation = "source-over";
    rc.drawImage(imgOverlay, size.x, size.y, w, h, x, y, w, h);
  }  
  /** @param {TileType} type @param {number} size */
  function drawIconFn(type, size) {
    if (type instanceof Tool)
      Tool.drawPathRc(type, size);
    if (type instanceof Block)
      drawBlockRc(type);
  }
  /** @param {TileType} tile @param {unknown} selected boolean */
  function drawItemCtx(tile, selected) {
    tx += 87;
    if (!tile)
      return;
    ctx.beginPath();
    ctx.moveTo(tx, ty - 25);
    ctx.arcTo(tx, ty - 15, tx + 78, ty - 15, radius);
    ctx.arcTo(tx + 78, ty - 15, tx + 78, ty - 93, radius);
    ctx.arcTo(tx + 78, ty - 93, tx, ty - 93, radius);
    ctx.arcTo(tx, ty - 93, tx, ty, radius);
    ctx.closePath();
    ctx.stroke();
    if (selected) {
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    }
    drawIconFn(tile, 60);
    ctx.drawImage(helpCanvas, tx + 9, ty - 84, 60, 60);
  }
  /** is drawn relatively to local var tfx and tfy @param {TileType} type */
  function drawFolderCtx(type) {
    ctx.globalAlpha = b ? .9 : .8;
    ctx.beginPath();
    ctx.moveTo(tfx, h - 101);
    ctx.arcTo(tfx, h - tfy, tfx + 12, h - tfy, radius);
    ctx.arcTo(tfx += 54, h - tfy, tfx, h - 146, radius);
    ctx.lineTo(tfx, h - 101);
    ctx.closePath();
    ctx.fillStyle = b ? "#0c243c" : "#000c1c";
    ctx.fill();
    drawIconFn(type || [][0], 40);
    ctx.globalAlpha = 1;
    ctx.drawImage(helpCanvas, tfx - 47, h - (b ? 161 : 146), 40, 40);
  }
  ctx.globalAlpha = .9;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(7, h - 19);
  ctx.arcTo(7, h - 7, 19, h - 7, radius);
  ctx.arcTo(275, h - 7, 275, h - 19, radius);
  ctx.arcTo(275, h - 275, 263, h - 275, radius);
  ctx.arcTo(7, h - 275, 7, h - 263, radius);
  ctx.closePath();
  ctx.moveTo(279, h - 19);
  ctx.arcTo(279, h - 7, 291, h - 7, radius);
  ctx.arcTo(w - 7, h - 7, w - 7, h - 19, radius);
  DefaultUI.nextFolders ?
    ctx.lineTo(w - 7, h - 101) :
    ctx.arcTo(w - 7, h - 101, w - 19, h - 101, radius);
  ctx.lineTo(279, h - 101);
  ctx.closePath();
  ctx.fillStyle = "#0c243c";
  ctx.fill();
  /** @type {(TileType[]&{type:TileType})[]} */
  var bars = DefaultUI.blockBars;
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#5577aa";
  // boolean: b contains fix for reselected item after reflow
  var i = DefaultUI.selectedFolder, b = i !== -1 && i < bars.length;
  for (var j = 0, tx = 200, ty = h; b && j < bars[i].length; j++)
    drawItemCtx(bars[i][j], DefaultUI.selectedTile === (j << 2) + 1);
  /** here @see {SeeRenderingFolders} */
  // tfx + tfy = position reference for folders, tx + ty = ... for items
  var n = DefaultUI.offsetsFolders, tfx = 279 + 56 - (n + 56) % 57;
  for (var i = Math.ceil(n / 57), tfy = 0; i <= bars.length; i++) {
    if (tfx + 7 + 54 > w)
      break;
    if (!bars[i])
      continue;
    tfy = (b = i === DefaultUI.selectedFolder) ? 168 : 153;
    drawFolderCtx(bars[i].type);
    tfx += 3;
  }
  b = !1;
  tfy = 153;
  if (DefaultUI.previousFolders) {
    tfx = 279;
    drawFolderCtx(DefaultUI.createTile("Previous"));
  }
  if (DefaultUI.nextFolders) {
    tfx = w - 7 - 54;
    drawFolderCtx(DefaultUI.createTile("Next"));
  }
  for (var j = 0, tx = -72; j < DefaultUI.toolBar.length; j++) {
    drawItemCtx(
      DefaultUI.toolBar[j],
      DefaultUI.selectedTile === (j << 2) ||
        DefaultUI.selectedClickTile === (j << 2)
    );
    if (tx > 123) {
      ty -= 87;
      tx = -72;
    }
  }
  if (DefaultUI.inventoryTile) { 
    ty = h;
    tx = w - 94 - 87;
    drawItemCtx(
      DefaultUI.createTile("Inventory"),
      (DefaultUI.selectedClickTile & 3) === 2
    );
  }
};
/**  new namings for action binds
 * @typedef ActionBind protoping of new simplified UI interface
 * @property {function} forceAction prevents default editor movement and
 * handles forced action instead
 * @property {function} moveAction
 * @property {function} pressAction
 * @property {function} longAction
 * @property {function} doubleAction
 * @property {function} hoverAction
 * @property {function} contextmenuAction
 **/
/** generator for press action bind handling
 * @param {(x:number,y:number,tile:ShipBlock)=>void} [blockPlacing]
 * @param {boolean} [canDefault=true] @returns {typeof press} */
DefaultUI.basePress = function (blockPlacing, canDefault) {
  var placing = blockPlacing || function (x, y, tile) {
    ship.placeBlock(
      0,
      Math.floor((vX - x) / sc + 2),
      Math.floor((y - vY) / sc),
      tile
    );
    render();
  };
  DefaultUI.canDefaultPress = canDefault !== UDF ? canDefault : false;
  return function (x, y) {
    if (DefaultUI.actionArea(x, y)) {
      var tile = DefaultUI.getSelectedTile(DefaultUI.selectedClickTile);
      tile instanceof Tool && tile.clickType && tile.exec(x, y);
      return true;
    } else
      var tile = DefaultUI.getSelectedTile();
      if (tile instanceof Block) 
        placing(x, y, tile);
      else if (tile instanceof Tool) {
        tile.exec(x, y);
      } else
      DefaultUI.canDefaultPress && DefaultUI.defaultPress(x, y);
  };
};
DefaultUI.baseMove = function () {};
DefaultUI.baseContextmenu = function () {};
DefaultUI.baseOver = function () {};

var cmdsName = EL(), cmds = (function () {
  /** for #commandsTab styles @see {addingStyles} */
  function goHome() {
    cmdsName.innerText = "[Commands tab]";
    content.style.display = "";
    items.style.display = "none";
    back.style.visibility = "hidden";
    utilities.rend_UI = F;
    press = DefaultUI.press;
    move = DefaultUI.move;
    render();
  };
  /** navigation element returned to set cmds variable */
  var nav = EL("nav");
  nav.id = "commandsTab";
  nav.style.display = "none";
  var el = nav.appendChild(EL("header")),
    back = el.appendChild(EL("button"));
  back.appendChild(tN("<"));
  back.onclick = goHome;
  el.appendChild(cmdsName);
  el = el.appendChild(EL("button"));
  el.appendChild(tN("X"));
  el.onclick = function () {
    nav.style.display = "none";
  };
  var content = nav.appendChild(EL()), items = nav.appendChild(EL());
  content.className = "content";
  items.className = "items";
  goHome();
  (el = nav.appendChild(EL())).style.display = "none";
  el.appendChild(tN("Search commads... coming spoon"));
  /** @param {Command} item */
  function initItems(item) {
    function ending() {
      var el = items.appendChild(EL());
      el.innerText = "Description:\n" + item.description;
      el.style.color = "#879b90";
    }
    return function () {
      cmdsName.innerText = item.name;
      content.style.display = "none";
      items.style.display = "";
      back.style.visibility = "visible";
      var i = 0, classic = DefaultUI.createTile("Classic");
      i = DefaultUI.blockBars[DefaultUI.selectedFolder].indexOf(classic);
      if (i !== -1)
        // should it render(); in these?
        DefaultUI.selectedTile = i << 2 | 1;
      else if ((i = DefaultUI.toolBar.indexOf(classic)) !== 1)
        DefaultUI.selectedTile = i << 2 | 0;
      for (; items.firstChild;)
        items.removeChild(items.firstChild);
      var arr = item.items;
      if (typeof arr == "function")
        return arr(items), ending();
      for (i = 0; i < arr.length; i++) {
        var s = arr[i].type, isBtn = s === "button";
        var isChck = s === "checkbox", e = EL(isChck ? "input" : s);
        if (isChck && e instanceof HTMLInputElement)
          e.type = "checkbox";
        e[isBtn ?
          "onclick" :
          isChck ? "onchange" : "oninput"] = arr[i].fn;
        (isBtn ? e : items).appendChild(tN(
          arr[i].name + (isBtn ? "" : ": ")));
        items.appendChild(e);
        !isBtn && items.appendChild(EL("br"));
      }
      ending();
    }
  }
  var group = utilities("");
  Command.initItem = function (item) {
    if (item.group && item.group !== groupName) {
      group = utilities(groupName = item.group);
      content.appendChild(group[0]);
      content.appendChild(group[1]);
    }
    (item.group ? group[1] : content).appendChild(el = EL("button"));
    el.appendChild(tN(item.name));
    el.onclick = initItems(item);
    el.appendChild(EL()).appendChild(tN(">"));
    return item;
  };
  for (var i = 0, groupName = ""; i < Command.list.length; i++)
    Command.initItem(Command.list[i]);
  window.onerror = function (m,s,l,c,e) {
    var pre = content.appendChild(EL("div"));
    pre.style.overflowWrap = "break-word";
    pre.style.wordBreak = "break-all";
    pre.appendChild(tN(e && e.stack ?
      "" + m + "\n" + e.stack :
      "" + m + "\n\t" + s + ":" + l + ":" + c));
  }
  return (bd || EL()).appendChild(nav);
})();

function enableShipEditing() {
  var mode = ship.getMode();
  ship = mode.getShip();
  /** @TODO create lucky block icon for old_UI (day1, oldschool fmode) */
  DefaultUI.press = press = DefaultUI.basePress(UDF);
  DefaultUI.move = move = function (x, y, e) {
    if (e.type === "mousedown" || e.type === "touchstart" ||
      e.type === "mouseenter")
      // #compactDownToExecTiel
      if (DefaultUI.actionArea(x, y)) {
        var tile = DefaultUI.getSelectedTile(DefaultUI.selectedClickTile);
        if (tile instanceof Tool && tile.clickType)
          tile.exec(x, y);
        return true;
      }
    return false;
  };
  DefaultUI.rend = function () {
    DefaultUI.reflowBlockBars(canvas.width);
    DefaultUI.renderHotBars(canvas.width, canvas.height);
  };
  DefaultUI.blockBars = DefaultUI.getDefaultFolders(false);
  render();
};
function enableLogicEditing() {
  var oX = 0, oY = 0, mode = ship.getMode();
  if (mode.mode === "Logic")
    return;
  /** @type {Block[]} */
  var blocks = [], last = blocks[0];
  for (var i = 0, old = mode.getShip().blocks; i < old.length; i++) {
    if (!Logic.VALUE[Block.ID[old[i].internalName]])
      continue;
    var logicBlock = old[i];
    if (logicBlock instanceof LogicBlock) {
      logicBlock.logicBlockIndex = i;
      var temp = logicBlock.logicPosition;
      logicBlock.logicPosition = logicBlock.position;
      logicBlock.position = temp;
    } else
      old[i] = logicBlock = new LogicBlock(logicBlock, i, ship);
    blocks.push(logicBlock);
    if (last && last.position[1] <= logicBlock.position[1])
      logicBlock.position[1] = Math.floor(last.position[1] - 2);
    last = logicBlock;
  }
  mode = Ship.Mode.NONE;
  old = [];
  // updating the global ship to Logic mode, original is included
  ship = new Ship(
    ship.name,
    ship.gameVersion,
    ship.dateTime,
    blocks,
    ship.prop,
    Ship.Mode.useParser("Logic", ship, function (global) {
      old = ship.blocks.sort(function (a, b) {
        return b.position[1] - a.position[1];
      });
      for (var i = 0, indexes = [0]; i < old.length; i++) {
        var block = old[i], temp = block.position;
        if (!(block instanceof LogicBlock)) {
          console.error("Block imposter within Logic mode ship!");
          var logicBlock = new LogicBlock(block, -1, global);
        } else
          logicBlock = block;
        logicBlock.position = logicBlock.logicPosition;
        logicBlock.logicPosition = temp;
        indexes[i] = logicBlock.logicBlockIndex;
      }
      indexes.sort(function (a, b) {
        return a === -1 || b === -1 ? +(a === -1) - +(b === -1) : a - b;
      });
      for (i = old.length; i-- > 0;)
        indexes[i] === -1 ?
          global.blocks.push(old[i]) :
          global.blocks[indexes[i]] = old[i];
      return global;
    }
  ));
  /** @type {Block.Selected|null} */
  var found = null, movingId = -1;
  DefaultUI.press = press = DefaultUI.basePress(function (x, y, tile) {
    ship.placeBlock(0, (vX - x) / sc + 2, (y - vY) / sc, tile);
    render();
  });
  DefaultUI.move = move = edit_logicmove = function (x, y, e) {
    if (e.type === "mousedown" || e.type === "touchstart" ||
      e.type === "mouseenter") {
      // #compactDownToExecTiel
      if (DefaultUI.actionArea(x, y)) {
        var tile = DefaultUI.getSelectedTile(DefaultUI.selectedClickTile);
        if (tile instanceof Tool && tile.clickType)
          tile.exec(x, y);
        return !(found = null);
      }
      if (!(found = ship.blockAtPonit2d((vX - x) / sc, (y - vY) / sc)))
        return !1;
      // offsets
      oX = (vX - x) / sc - found.block.position[1];
      oY = (y - vY) / sc - found.block.position[2];
      blocks = ship.blocks;
      blocks[movingId = blocks.length] = blocks[found.id];
      blocks[found.id] = new Block("__NULL__", [0, 0, 0], [0, !1, 0]);
      render();
      return !0;
    } else if (e.type === "mousemove" || e.type === "touchmove") {
      if (!found)
        return !1;
      found.block.position[1] = (vX - x) / sc - oX;
      found.block.position[2] = (y - vY) / sc - oY;
      render();
    } else if (e.type === "mouseup" || e.type === "touchend" ||
      e.type === "mouseleave") {
      if (!found)
        return !1;
      if ((blocks[movingId] === found.block ?
        movingId :
        movingId = blocks.indexOf(found.block)) === -1)
        throw new Error("Block found not found, at edit_logicmove.");
      if ((blocks[found.id] || {}).internalName === "__NULL__") {
        blocks[found.id] = found.block;
        del.call(blocks, movingId);
      } else
        throw new Error("Block __NULL__ not found, at edit_logicmove.");
      /** unsuccessful attempt for block insert without sorting all at once
    @see https://github.com/KaaBEL/.d1r.dbv/blob/61fec271ff39/editor.js#L2631
       * v.0.1.49, might get usefull once... maybe */
      blocks.sort(function (a, b) {
        return b.position[1] - a.position[1];
      });
      for (var i = blocks.length; i-- > 0;)
        if (blocks[i].internalName === "__NULL__") {
          alert("GHOST __NULL__ BLOCK INFECTED YOUR VEHILCE! D:");
          del.call(blocks, i);
        }
      render();
    } else
      console.error("edit_logicmove unhandled event type: " +
        e.type + " add it!");
    return !1;
  };
  DefaultUI.rend = function () {
    if (found) {
      ctx.lineWidth = defaults.highlightWidth;
      ctx.strokeStyle = defaults.highlightColor;
      var dx = found.x * sc + vX, dy = found.y * sc + vY;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.strokeRect(dx, dy, found.w * sc, found.h * sc);
    }
    DefaultUI.reflowBlockBars(canvas.width);
    DefaultUI.renderHotBars(canvas.width, canvas.height);
  };
  DefaultUI.blockBars = DefaultUI.getDefaultFolders(true);
  render();
};

/** @param {number} x @param {number} y @param {TemporaryEventParam} e */
var edit_logicmove = function (x, y, e) {
  //?? #compactDownToExecTiel
  return e.type === "mousedown" ? DefaultUI.actionArea(x, y) : false;
};

function rend_backgPattern() {
  try {
    var width = imgBackg.naturalWidth || imgBackg.offsetWidth;
    ctx.fillStyle = ctx.createPattern(imgBackg, "repeat") || "";
    if (width === 64) {
      var n = sc / 32, sx = vX - sc, sy = vY - sc, idk = 32;
      canvas.style.backgroundColor = defaults.editorBackgroundColor;
    } else
      var n = sc / 4, sx = vX - sc * 37, sy = vY - sc * 37, idk = 148;
    ctx.translate(sx, sy);
    ctx.scale(n, n);
    ctx.fillRect(-vX / n + idk, -vY / n + idk,
      canvas.width / n, canvas.height / n);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } catch (e) {
    console.debug(e, "at drawing background");
  }
  if (defaults.editorBackgroundStage)
    rend_backgHangar();
}
function rend_backgColor() {
  if (defaults.editorBackgroundStage)
    rend_backgHangar();
  canvas.style.backgroundColor = defaults.editorBackgroundColor;
}
var rend_backgHangar = F;
+function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "https://kaabel.github.io/.d1r.dbv/assets/AlphaLunar.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)
      return;
    try {
      if (/^<!--# [A-Za-z0-9]+--$/.test(xhr.responseText.slice(0, 48)))
        return console.clear();
      backgHangarInit.ship = Ship.fromObject(
        JSON.parse(xhr.responseText));
      backgHangarInit.ready++ && backgHangarInit();
    } catch (e) {
      console.error(xhr.responseText ? e : "xhr empty response");
    }
  };
  xhr.send();
}();
function backgHangarInit() {
  var obackground = rend_background;
  var orend = DefaultUI.rend, hgw = 544, hgh = 654;
  DefaultUI.rend = rend_background = F;
  var octx = ctx, osc = sc, oxV = vX, oyV = vY, oship = ship;
  /** @type {HTMLImageElement|null} */
  var hangarImg = EL("img"), hangarCanv = canvas = EL("canvas");
  canvas.width = hgw;
  canvas.height = hgh;
  ctx = hangarCanv.getContext("2d") || ctx;
  sc = 8;
  vX = 264;
  vY = 464;
  ship = backgHangarInit.ship;
  expensiveRenderer();
  try {
    hangarImg.src = canvas.toDataURL();
    canvas.width = canvas.height = 8;
  } catch (e) {
    hangarImg = null;
  }
  DefaultUI.rend = orend;
  canvas = (ctx = octx).canvas;
  sc = osc;
  vX = oxV;
  vY = oyV;
  ship = oship;
  rend_backgHangar = function () {
    if (sc > 13 || defaults.renderSharp)
      ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = !1;
    ctx.drawImage(
      hangarImg || hangarCanv,
      sc * -33 + vX,
      sc * -58 + vY,
      sc * hgw / 8,
      sc * hgh / 8
    );
  };
  rend_background = obackground;
  render();
};
backgHangarInit.ship = Ship.fromObject({b:[]});
backgHangarInit.ready = 0;
/** @type {(()=>void)&{primary?:()=>void}} */
var rend_background = defaults.editorBackground ?
  rend_backgPattern :
  rend_backgColor;
/** make interface for it if there will already be some uses for it
 * @TODO update this with Render class overhaul */
var rend_initialized = [F], rend_180 = !1;
rend_initialized.push(function () {
  backgHangarInit.ready++ && backgHangarInit();
});
function rend_initColors() {
  helpCanvas.width = helpCanvas.height = 32;
  for (var i = Color.NAME.length, patterns = []; i-- > 0;) {
    try {
      rc.drawImage(imgColor, 0, i * -32);
    } catch (e) {}
    patterns[i] = rc.createPattern(helpCanvas, "repeat") || "";
  }
  return patterns;
}
function rend_checkColors() {
  rc.fillStyle = rend_colors[0];
  rc.fillRect(0, 0, 32, 32);
  var dat = rc.getImageData(0, 0, 32, 32).data;
  rc.fillStyle = rend_colors[1];
  rc.fillRect(0, 0, 32, 32);
  var cpr = rc.getImageData(0, 0, 32, 32).data;
  // Samsung Internet had some anomally 1s in ImageDatas
  for (var i = dat.length, b = 0, itv = 0; i-- > 0 && b < 16;)
    b += +(dat[i] !== cpr[i]);
  b < 16 ?
    // necessary for some browsers to assign color textures properly
    (itv = setInterval(function () {
      helpCanvas.width = helpCanvas.height = 32;
      try {
        rc.drawImage(imgColor, 0, i * -32);
      } catch (e) {
        if (imgColor.complete === !1)
          return i = 0;
      }
      rend_colors[i] = rc.createPattern(helpCanvas, "repeat") || "";
      if (++i >= rend_colors.length) {
        clearInterval(itv);
        rend_initialized.forEach(function (e) {
          e();
        });
        render();
      }
    }, i = 0)) :
    rend_initialized.forEach(function (e) {
      e();
    });
};
var rend_colors = rend_initColors();

DefaultUI.setPixelRatio();
/** @type {(click?: true | undefined) => void} */
function init_touchScreen(click) {
  if (click && !defaults.fullscreenInitialized)
    return;
  var max = 3, logging = function (m, s, l, c, e) {
    /** @type {Function} */
    (window.onerror)(m, s === UDF ? " for Fulscreen." : s, l, c, e);
  };
  if (typeof document.body.requestFullscreen == "function")
    (touchdevice = function () {
      if (!defaults.fullscreenDisabled)
        document.body.requestFullscreen().then(render).catch(logging);
      max-- ;
    })();
  defaults.fullscreenInitialized = true;
  saveSettings();
  DefaultUI.setPixelRatio();
};
touchdevice = init_touchScreen;

var old_UI = DefaultUI.press = press = function (x, y) {
  x = Math.floor((vX - x) / 2 / sc + 1);
  y = Math.floor((y - vY) / 2 / sc);
  var found = [0].slice(1);
  for (var i = 0, arr = ship.blocks; i < arr.length; i++)
    if (Math.floor((arr[i].position[1]) / 2) === x &&
      Math.floor((arr[i].position[2]) / 2) === y)
        found.unshift(i);
  var rand = placingBlock();
  if (rand === "remove") {
    ship.removeBlocks(found);
    return render();
  }
  if (blockBind.changingColor)
    var oldCmd = Edit.oldUIColor.bind(ship, found, Color.ID[rand]);
  else if (blockBind.changingPosition)
    oldCmd = Edit.oldUIMove.bind(ship, found);
  else
    oldCmd = Edit.oldUIRotate.bind(ship, found);
  // placingBlock function modified blockBind.changingColor at beggining
  if (found.length || blockBind.changingColor) {
    oldCmd();
    return render();
  }
  if (rand !== "remove") {
    // BLOK for real!!!
    // TODO: now I could use some unit test for logic,
    // but... how the hack am I supposed to do that
    ship.placeBlock(0, x * 2, y * 2, Block.ID[rand]);
  }
  render();
};

/** @type {(x:number,y:number,e:TemporaryEventParam)=>void} */
function commands(x, y, e) {
  if (e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement)
    return;
  var w = innerWidth - 175, ih = innerHeight - 255, st = cmds.style;
  st.left = (x > 178 ? x < w ? x - 175 : w - 180 : 5) + "px";
  st.top = (y > 45 && y > (ih < 250 ? ih : 255) ? y - 250 : 5) + "px";
  st.display = "";
  // quircky workaround to copying image with contextmenu
  for (var el = e.target, dest = GE("commandsTab"); el instanceof Node;)
    if (el === dest)
      break;
    else if (!(el = el.parentNode)) {
      (e instanceof MouseEvent) && e.button !== -1 && e.cancelable &&
        e.preventDefault();
      return;
    }
  st.display = "none";
}
function devt__share(inp) {
  var el = GE("commandsTab");
  if (!el)
    return;
  if (typeof inp != "string")
    return el.lastChild;
  (el.lastChild instanceof HTMLTextAreaElement ?
    el.lastChild : el.appendChild(EL("textarea"))).value = inp;
  
}
contextmenu = function (x, y, e) {
  var el = GE("info");
  if (el instanceof HTMLElement && el.onclick)
    //@ts-ignore
    el.onclick();
  (DefaultUI.contextmenu = contextmenu = commands)(x, y, e);
};

var cmdsMove = !1, cmdsX = 0, cmdsY = 0;
DefaultUI.over = over = function (e) {
  if (e instanceof TouchEvent)
    return;
  if ((e.type === "mousedown" || e.type === "touchstart") &&
    e.target === cmdsName) {
    var st = cmds.style,
      x = Number(st.left.slice(0, -2)) || 0,
      y = Number(st.top.slice(0, -2)) || 0;
    cmdsX = x - e.pageX - canvas.offsetLeft;
    cmdsY = y - e.pageY - canvas.offsetTop;
    cmdsMove = !0;
    cmds.style["" + "webkitUserSelect"] = cmds.style.userSelect = "none";
  } else if (cmdsMove && (e.type === "mousemove" ||
    e.type === "touchmove")) {
    if (e instanceof MouseEvent && !e.buttons && !e.button) {
      cmdsMove = !1;
      return;
    }
    var st = cmds.style,
      x = cmdsX + e.pageX - canvas.offsetLeft,
      y = cmdsY + e.pageY - canvas.offsetTop,
      w = innerWidth - 86;
    st.left = (x > -269 ? x < w ? x : w : -269) + "px";
    st.top = (y > 5 ? y : 5) + "px";
  } else if (e.type === "mouseup" ||
    e.type === "touchend" || e.type === "touchcancel")
    cmdsMove = !1;
  else
    cmds.style["" + "webkitUserSelect"] = cmds.style.userSelect = "";
  // TODO: some nice system to account for end/'hoverleave'
  // ^ will hopefully inherit final form which also "doublepress" and
  // other advanced gestures will be provided with
};

/** should serve its purpouse by providing up to date rendering function
 * however to meet requirements of many various uses, and be aware of
 * possible optimizations, a system of global and local (single use)
 * settings to provide interface with multiple rendering methods */
render = function () {
  var rq = -1;
  return function requestRendering() {
    cancelAnimationFrame(rq);
    rq = requestAnimationFrame(function () {
      rq = -1;
      expensiveRenderer();
    });
  };
}();

function rend_showrc() {
  bd && bd.appendChild(rc.canvas);
  var style = rc.canvas.style;
  style.position = "fixed";
  style.top = style.left = "0";
  style.width = style.height = "auto";
}
/** @param {number|{x:number,y:number}} x @param {number} [y] */
function rend_vehiclePoint(x, y) {
  if (typeof Path2D != "function")
    throw new Error("Path2D is not supported by this user agent.");
  if (typeof x == "object" && "x" in x && "y" in x) {
    y = x.y;
    x = x.x;
  } else
    y = y || 0;
  x = vX - (x - 2) * sc;
  y = (y + 2) * sc + vY;
  ctx.strokeStyle = "#000";
  ctx.stroke(new Path2D("M" + x + "," + (y - 3) + "l3,-18h-6z"));
  ctx.stroke(new Path2D("M" + (x - 3) + "," + y + "l-18,3v-6z"));
  ctx.fillStyle = "#fff";
  ctx.fill(new Path2D("M" + x + "," + (y - 3) + "l3,-18h-6z"));
  ctx.fill(new Path2D("M" + (x - 3) + "," + y + "l-18,3v-6z"));
}

var rend_speeeeed = {}, rend_logs = 69, rend_collisions = false;
/** @type {{[key:string]:ShipBlock|Box2dPath}|null} */
var test_bugged = null, test_collisions = "";
function expensiveRenderer() {
  var t = Date.now(), AT = ", at expensiveRenderer();";
  canvas.width = canvas.width;
  rend_background();
  ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = !1;
  var objs = ship.blocks, n = 0, logics =
    /** @type {(Logic|undefined)[]&{ownerShip:Ship}} */
    (ship.prop && ship.prop.nodeList || [UDF]);
  if (Logic.rend)
    ctx.globalAlpha = defaults.logicPreviewAlpha;
  var mult = sc / 16;
  for (var i = 0, id = 0, pos = [0, 0, 0]; i < objs.length; i++) {
    pos = objs[i].position;
    if ((id = Block.ID[objs[i].internalName]) < 12) {
      ctx.save();
      B64Key.drawBlock(rc, objs[i]);
      ctx.globalAlpha = .7;
      ctx.scale(mult + 1E-7, mult + 1E-7);
      ctx.drawImage(rc.canvas,
        -pos[0] * 16 + vX / mult - 24, pos[2] * 16 + vY / mult - 24);
      ctx.restore();
      continue;
    }
    /** @see {Block} @see {Block.Size.VALUE} */
    var size = Block.Size.VALUE[id], logic = Logic.VALUE[id] || [];
    if (!size) {
      rend_logs > 0 && rend_logs-- && console.error(objs[i], AT);
      continue;
    } else if (size.w <= 0 || size.h <= 0)
      continue;
    var rot = 10 - objs[i].rotation[2] & 3;
    var ow = size.w, oh = size.h, sw = 0, sh = 0;
    var w = ow + (ow & 16), h = oh + (oh & 16), tiny = (oh | ow) & 16;
    // position to draw block in canvas
    var dx = -pos[1] * sc + vX, dy = pos[2] * sc + vY;
    // position correction for tiny blocks and rotations
    dy -= rot === (objs[i].rotation[1] ? 1 : 3) ?
      (w - 32) * sc / 16 :
      rot === 0 ? (h - 32) * sc / 16 : 0;
    dx -= rot === (objs[i].rotation[1] ? 0 : 2) ?
      (w - 32) * sc / 16 :
      rot === 3 ? (h - 32) * sc / 16 : 0;
    // update logic nodes render posiotions
    /** @type {typeof logics[number]} */
    var node, indexes = objs[i].properties.nodeIndex;
    if (Logic.rend && indexes instanceof Array)
      for (var j = indexes.length; j-- > 0;) {
        // I don't like these logic nodes checks
        if (!indexes || !indexes[j]) {
          console.error("Logic node: " + j + " missing from ship.blocks[" +
            i + "]: " + JSON.stringify(objs[i]) + AT);
          break;
        }
        if (!(node = logics[n = indexes[j]])) {
          console.error("Logic node: " + n + " missing of ship.blocks[" +
            i + "]: " + JSON.stringify(objs[i]) + " is missing in Logic." +
            "nodes" + AT);
          break;
        }
        //@ts-ignore
        logic[j] || (logic[j] = {x: j / 3, y: j / 3});
        // facepalm No.1: works now actually
        var x = logic[j].x - (ow & 16) / 32,
          y = logic[j].y - (oh & 16) / 32,
          /** @type {number[]} */
          xys = [x, y, -x, -y];
        x = (rot & 1 ? h / 32 : w / 32) + xys[rot];
        y = (rot & 1 ? w / 32 : h / 32) + xys[rot + 3 & 3];
        node.x = dx + x * sc;
        node.y = dy + y * sc;
      };
    helpCanvas.width = sw = rot & 1 ? h : w;
    helpCanvas.height = sh = rot & 1 ? w : h;
    // apply color texture
    if (objs[i].rotation[1]) {
      // handles block flipping
      rc.scale(1 - (~rot << 1 & 2), 1 - (rot << 1 & 2));
      rc.translate(~rot & 1 ? -w : 0, rot & 1 ? -w : 0);
    }
    // apply rotation
    rc.rotate(rot * Math.PI / 2);
    rc.translate(rot > 1 ? -w : 0, rot && rot < 3 ? -h : 0);
    // apply textures
    rc.fillStyle = rend_colors[Color.ID[objs[i].properties.color || ""]];
    id !== 794 && rc.fillRect(0, 0, w, h);
    rc.globalCompositeOperation = "destination-in";
    rc.drawImage(imgMask, size.x, size.y, w, h, 0, 0, w, h);
    rc.globalCompositeOperation = "source-over";
    rc.drawImage(imgOverlay, size.x, size.y, w, h, 0, 0, w, h);
    ctx.drawImage(helpCanvas, dx, dy, sw * sc / 16, sh * sc / 16);
    if (Physics.rend.reporter && objs[i] instanceof LogicBlock) {
      var str = objs[i].getPhysics().reporter;
      ctx.save();
      ctx.font = "24px sans-serif";
      ctx.globalAlpha = defaults.logicPreviewAlpha;
      ctx.fillStyle = "#000000";
      ctx.fillRect(dx, dy, ctx.measureText(str).width + 8, 32);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(str, dx + 4, dy + 25);
      ctx.restore();
    }
    if (test_debug) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(-pos[1] * sc + vX - 7, pos[2] * sc + vY - 7, 14, 14);
    }
  }
  ctx.globalAlpha = 1;
  if (defaults.editorLaunchpadBorder) {
    ctx.strokeStyle = defaults.highlightColor;
    ctx.lineWidth = 2;
    var grid = (ship.prop && ship.prop.gridSize || OC()).box2d,
      box2d = grid instanceof Array ? grid : Block.Box2d.GRID.Small;
    x = (2 - box2d[1].x) * sc + vX;
    y = (box2d[1].y + 2) * sc + vY;
    w = (box2d[1].x - box2d[3].x) * sc;
    ctx.strokeRect(x, y, w, (box2d[3].y - box2d[1].y) * sc);
  }
  if (Logic.rend) {
    ctx.lineCap = "round";
    for (var j = logics.length; j-- > 0;) {
      if (!(node = logics[j]) || (n = node.type) < 2)
        continue;
      n = node.type;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = n & 1 ? "#3e4" : "#e23";
      ctx.fill();
    }
    ctx.lineWidth = 4;
    ctx.lineDashOffset = Logic.dashOff = Logic.dashOff + 1 || 1;
    for (j = logics.length; j-- > 0;) {
      if (!(node = logics[j]) || node.pairs instanceof Array)
        continue;
      ctx.strokeStyle = node.type & 1 ? "#3e4" : "#e23";
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      (node = logics[node.pairs]) ?
        ctx.lineTo(node.x, node.y) : 0;
      ctx.setLineDash([sc, sc / 2]);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    for (j = logics.length; j-- > 0;) {
      if (!(node = logics[j]) || (n = node.type) > 1)
        continue;
      n = node.type;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = n & 1 ? "#3e4" : "#e23";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
  }
  utilities.rend_UI();
  if ((test_collbxs) && objs[0])
    Block.Box2d.collisions(objs[0], objs);
  else if (rend_collisions)
    for (i = objs.length; i-- > 0;)
      Block.Box2d.collisions(objs[i], objs);
  DefaultUI.rend();
  if (rend_180 || 0) {
    ctx.setTransform(1, 0, 0, 1, canvas.width, canvas.height);
    ctx.rotate(Math.PI);
    ctx.globalCompositeOperation = "copy";
    ctx.drawImage(canvas, 0, 0);
  }
  var t = Date.now() - t | 0;
  rend_speeeeed[t] = rend_speeeeed[t] + 1 || 0;
}
/** @type {typeof Block.Box2d.visualize} */
Block.Box2d.visualize = function (path, x, y, green) {
  //try{
  var visuals = test_collisions || (test_collbxs && green !== UDF) ||
    (rend_collisions && green === UDF);
  if (!visuals)
    return;
  var coll = green === UDF ? x === UDF ? path.slice(2, 4) : [] : null;
  ctx.beginPath();
  ctx.strokeStyle = green ? "#33bb33" : coll ? "#db9725" : "#bb3333";
  if (coll && coll.length > 1) {
    path.length = 2;
    ctx.moveTo(vX - (coll[0].x - 2) * sc, (coll[0].y + 2) * sc + vY);
    ctx.lineTo(vX - (coll[1].x - 2) * sc, (coll[1].y + 2) * sc + vY);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.beginPath();
  }
  ctx.lineWidth = green === UDF ? 8 : green ? 4 : 2;
  if (path[0])
    ctx.moveTo(vX - (path[0].x - 2) * sc, (path[0].y + 2) * sc + vY);
  //@ts-ignore
  for (var i = path.length; i-- > 1;)
  //0&&window.onerror(i+'=x:',(path[0].x + x) * sc + vX,'y',(path[i].y + y)
    ctx.lineTo(vX - (path[i].x - 2) * sc, (path[i].y + 2) * sc + vY);
  ctx.closePath();
  if (!("range" in path))
    return ctx.stroke();
  x = (x || 0) - 2;
  y = (y || 0) + 2;
  ctx.moveTo(vX - (x - path.range) * sc, (y) * sc + vY);
  ctx.arc(vX - (x) * sc, (y) * sc + vY, path.range * sc, 0, Math.PI * 2);
  ctx.stroke();
  //@ts-ignore
  //}catch(e){console.error(e && e.message || e);}
};

init = function () {
  enableShipEditing();
  DefaultUI.selectedTile = (7 << 2) | 0;
  rend_checkColors();
  init_funMode();
  check_contentScript();
};
