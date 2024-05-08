//@ts-check
"use strict";
// v.0.1.29
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

if (/https?/.test(location.protocol) && navigator.serviceWorker)
  try {
    var swc = navigator.serviceWorker, sw = swc.controller;
    sw || swc.register("/.d1r.dbv/offline_test.js",
      {scope: "/.d1r.dbv/"}).then(function (swr) {
        sw = (swr.installing || swr.waiting || swr.active);
        (sw || OC()).onstatechange = function () {
          console.log.apply(console, Array.prototype.map.call(
            arguments,
            function (e) {
              return e;
            }
          ).concat("sw_change"));
        };
      }).catch(F);
  } catch (e) {
    console.log(e, "sw_js");
  }
if (/^http:\/\/(?:\d+\.\d+\.\d+\.\d+|localhost:\d+)/.exec(location.href))
  window.WebSocket =
    /** @type {any} disables VS code live server live reload */
    (function () {
      this.juhus = "yes";
      var e = window.onerror;
      window.onerror = function () {
        window.onerror = e;
      };
      throw ":P";
    });

canvas.addEventListener("contextlost", function () {
  console.warn("CONTEXT LOST!");
});
canvas.addEventListener("contextrestored", function () {
  console.log("%cCONTEXT RESTOERED!", "color:#4f3");
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
  "#commandsTab, #commandsTab button{color: #999;" +
  "font-size: 16px;font-family:monospace,sans-serif,Courier,Consolas;}" +
  "#commandsTab header:first-child" +
  "{display: flex;flex-direction: row;border-bottom: 1px solid #777;}" +
  "#commandsTab header:first-child div{padding: 5px;}" +
  "#commandsTab button{border: 2px solid #0000;" +
  "background-color: inherit;-webkit-user-select: text;}" +
  "#commandsTab header:first-child button{font-weight: bold;}" +
  "#commandsTab button:hover, #commandsTab button:focus" +
  "{border: 2px solid #777;}" +
  "#commandsTab button:active{background-color: #333;color: #bbb;}" +
  "#commandsTab header div{flex-grow: 1;cursor: pointer;}" +
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

(function (reg) {
  var expr = (reg.exec("" + location) || [])[1] || "";
  // taken from: https://stackoverflow.com/a/8831937
  for (var i = 0, l = (expr += "ABCD").length, hash = 0; i < l;) {
    hash = (hash << 5) - hash + expr.charCodeAt(i++);
    hash |= 0; // Convert to 32bit integer
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
      console.log("Fun mode 1");
      /** @type {ChildNode|null} */
      var el = GE("auth"), parent = (el && el.parentNode) || EL();
      for (var text; el && (text = el).nodeName !== "H2";) {
        el = el.previousSibling;
        text && parent.removeChild(text);
      }
      parent.appendChild(EL("img")).src =
        "./assets/just_use_common_sense.png";
      break;
    case "3a613b4c":
    case "2b675e07":
    case "ab235503":
      console.log("Fun mode 2");
      /** @type {(x:number,y:number)=>void} */
      var oldPress = F;
      setTimeout(function () {
        oldPress = press;
        press = function () {
          press = oldPress;
          expr = "";
        };
      }, 1500);
      requestAnimationFrame(fun1);
      break;
    case "c96679af":
    case "ec4dca90":
      console.log("Fun mode 3.1");
      setTimeout(function () {
        ship = Ship.fromObject({n: "", dt: "", b: []});
        placingBlock = function () {return "__unknown__";};
      });
      break;
  }
})(/\/[0-9a-zA-Z._+\-]+\/editor\.html(?:#[^?]*)?($|\?[^=]*)/);

var imgOverlay = document.body.appendChild(document.createElement("img"));
imgOverlay.style.display = "none";
if(null)
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAYA\
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";
imgOverlay.src = "data:image/png;base64,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";
var imgMask = document.createElement("img");
if(null)
imgMask.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAYAAAB\
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\
JZcuTrC47AAAAAElFTkSuQmCC";
imgMask.src = "data:image/jpg;base64,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";
var imgColor = document.createElement("img");
if(null)
imgColor.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAALACAYAAA\
DyoXBfAAAAAXNSR0IArs4c6QAACwhJREFUeF7tnW2MVFcZx/9nZnZ2t7tTyOK+87KwW3kpNVtAtC\
20JKYf1KZR2sQPUhP9Qo0fjJomtib6QaXEQNtE4wc1aSjSGj/UNE2jaZv6VlteFIgBBHYXRGDZ7h\
YozL7P7Fwz594zMPdy5tzZ3blnlP/50Bsy95zzf373nOd5znNvQTiO48BiExRAAiRAAiRAAiRAAi\
RAAiRAAiRAAiRgncCePXvs1gcogARIgARIgARIgARIgARIgARIgARIwDqB3t5eu/UBCiABEiABEi\
ABEiABEiABEiABEiABErBOIJVK2a0PUAAJkAAJkAAJkAAJkAAJkAAJkAAJkIB1As4x2K0PUAAJkA\
AJkAAJkAAJkAAJkAAJkAAJkIB9At+xXR+gABIgARIgARIgARIgARIgARIgARIgAdsELnZ32f1+gA\
JIgARIgARIgARIgARIgARIgARIgASsE3hh8ya79QEKIAESIAESIAESIAESIAESIAESIAESsE7A2d\
5ntz5AASRAAiRAAiRAAiRAAiRAAiRAAiRAAtYJ7Gx8zm59gAJIgARIgARIgARIgARIgARIgARIgA\
SsE1i5z7FbH6AAEiABEiABEiABEiABEiABEiABEiAB6wRaHnnWbn2AAkiABEiABEiABEiABEiABE\
iABEiABKwTaP/k43brAxRAAiRAAiRAAiRAAiRAAiRAAiRAAiRgncDnnCft1gcogARIgARIgARIgA\
RIgARIgARIgARIwDqBJdua7NYHKIAESIAESIAESIAESIAESIAESIAESMA6gcOHG+3WByiABEiABE\
iABEiABEiABEiABEiABEjAOgHnGErWB8RalGzOsdK/m/qLqhVgUj5Xy1V/LQFrAqKaWK2cAAFrAq\
KeOEDAmgCgtB+Yr9Wu8xaiagVU3HLPw2oJWBMQ1cSFXeBfA9YERD1xgIA1AVUbjguIbCUklXbN2m\
gYleXWwrGaWJsRRYU+ICDqiSPPB/zota7YH7fn6qB0E1e/gEpbbiRgTUBkE+syImsCop543vMB03\
bTxRjhOKX/fcPBnuUlCwAd/WdL/m7qX70CTMrnarnqryVgTUBUE9+Ihr5FaE1A1BMHCFgTcLG7q2\
SdcL5Wu7Y+ULUCKm25euRCR8CagKgmLuwCPwFrAqKeOEDAmgDmAzoClXbN2miofrAmIKqJtRmRNQ\
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\
kWXuoAAAAASUVORK5CYII=";
imgColor.src = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAOACAIAAADU7ObQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJeklEQVR42u3d228cVx0H8O+Zmb3Y2U1sx16762trN4lLEqUmMmpTlIAUXkqQKA8gaCLBA/BcCQnoI6raBy5/ABKVHIFASCDIAxJBAUogbUqcqHXbYNe5OPY6tmNHYZ1d7+7sHB7Gtdf2zmXJXHaj78iKVrsz/vx+58w5vzNjZyyklPBzU+DzRoAAAQIECBAgQIAAAa82bWxsjE1EgAABAgQIECBAgAABABBHjhxhExEgQIAAAQIECBAgQAAARDKZZBMRIECAAAECBAgQIEAAAIScYBMRIECAAAECBAgQIEAAAKDhTTYRAQIECBAgQIAAAQIEAABibnCATUSAAAECBAgQIECAAAEA0H6b7mETESBAgAABAgQIECBAAACE/M4Um4gAAQIECBAgQIAAAQIAIN5I/JRNRIAAAQIECBAgQIAAAQAQ+3/Jv59MgAABAgQIECBAgAAB8/og9cXX2UQECBAgQIAAAQIECBAAAE1duMImIkCAAAECBAgQIECAAABoz15uZxMRIECAAAECBAgQIEAAAETvy21sIgIECBAgQIAAAQIECACAGB9PsIkIECBAgAABAgQIECAAAEJOWHxwsPr7te7v/29I+Re7uX+wGXgbe7B94EfsQY0Dqw+8Gh9hZODt2A42Az/mpaAy8G9OZT0Isx6EkYG3sQdb0fyIvdHqQT1VNK9iDyMDb2MPtqL5EXtg9UBWf75pZujJqu+nP75Z0/5h1AOvYjf3DzYDb2MPtg/8iD2ocTA3OOBT7OGNA69iN/cPNgNvYw+2D/yInfUg/HoQRgbexh5sRfMj9karB6FVNM2/2MPIwNvYg61ofsQedj0QovoldK37h3K/yKPYzf0Dvl/kaezB9oEfsYd+v8ij8RHK/SJPx3bA94t8mJcCu1/k25zKehBmPQgjA29jD7ai+RF7o9WDeqpoXsUeRgbexh5sRfMj9qD64EI67XLXl19RARgpAPjV98sujwpqLjLbsjuZ3LzOymbtWl+Y5bDies3i2MCuMiv8ynfs83BzLH/Pzm0fmO3V7aInhG3rh3cW7ZStzqKPZQHAO9A2PrU/38JY2VmN5On2AoCnRAzAlbNpANdP33EcK/7Ppukf9wJYn9iFc+l4dyQNYHQ8A2CyowDg6aXYxmy2c3//+8Cc380AhG3wU7IAYGg2A+DKSHrjNTqqH2SIICuafRcMn+0FcPRqBkA5BQA3jAKAt3+o1c1ctHP0mq/7f3AfwKUzdwBMvaYDGEQMwKVXtY2M628kV86Rt19vBTA81gJg6GoGgExV37P+anJlLJnTWQB4Ra36KWuylzU5bbuyW59xK/41X85ZHCsCzcDU5i1WD5+s+itWpTs+tTrW/wy+/obqcteplz4EkNiVAJBe7Ns2quvhNK3lL0ELCGFfwQOfTc2avFiRT6q2b2R1bBj1wPTNiNzkUblnZR5hZGAVxbYMHfMIuyZbtruUANbOpgEIRFyeb/5nYLadm2Gp/u5pAPHTGQD//tsLAI6OzwKQFsdKBHLfVGRXs5sjWQjH8yd7+SSA5Oj5jZzKL01VrSBBZWDetTKkYZOB+a55/ph9cPevzwPoPPHPzVJXbcYNJIOusV5YXyCYb1zpSQN44sS/AEAoAPJjXQAGRdSxjoR3nbx+bSwLAAZnMwCmz6YBNJ2ZBzBkXlmmnKtgKD/DqZhNn0rFAIz3pAEYo3+p2lH2dTDgn+FY1KaR2QyAqVHbUW5RB8PrA/erCvs6GHBN7rArveasteWOu7Q9VrgYaC7XkTbLAc3ycqDK9YHY+FdWvT0jQrnjZfVTjEa7yty56WsPZank6hpASiUaV2NNLk5TKZcun38weXXt3rxQ1C39qwibJYGUEoYRT3W37P/03mePV++DhUt/Wnrnz1CiQtMSnW3RZFxRVfO01/PF3NKD0lpJjapCUapKpmHoRaNUfOLEV9oOPbcFmP71z/KLmWhyd3pkMDGQggQMuXliCwFVLa1k71678d/MshaP2mej57LJJ5/pe/Gb68DtP/w8OzPVMtDdc/wgijrKhsUJIRCLrN5avP2PD7SmqP0iSs+vth061vXZLyn5hZnszY8SXR09nzuMfNHyuwMwJPLFRF977/MHyoWSwzozvuve+IXyWk5ZvnYRSrTv2DPIFVyddwV991A6tmeXNAz7Ya81JZavvaXk5m/G23YriTjcj7ii3tKfMsqGwxhWtNz8LcUoFSNNURi1jGcptXjE+bpaCKNUULTE7vz9Vai1DGlFKTzIQRFOYRiRxB4lOTCs5/K52XvQXBuqWJmeV5xikqVion9YSY1+AUZx5uKH0A1XE0NUm33rA+e1vpTSKLd+6jOKULXuk1/T1/ILEzNQVcdmLT3ILd+4K4Uolw2br2LuYf+Xv7s+FzV3D8IoK+6aSAKruWLEqYeLq9nmroF1QBp6LR0sWluatXjUfjdd06U0BJSGva0pw7jjRSB0wOky/1EAKSFQLumOEyQEDL0Ml6Fs/BKZ1pQAjJXpeRgGIipUxfKrObbw/i3HSUVKKcu6okXWpwqtORlrTem51eu/f7vzYJ8Wi1ZZTwpAYmV6Pr+yqkYd1uRGcW334KEtyxZplCff/JGeeyil9aW7gFAVxWl2MfRSrK1z6Bvfq7L4zWVu6vmsebPg/9wMI7Jnb1NH92O0uq753J8ZmeFcRIAAAQKPHyBqnd/7xvvYBwQIECDwGNaDoy9+m01EgAABAgQIECBAgAABANCaRI5NRIAAAQIECBAgQIAAAQDQ2tt1NhEBAgQIECBAgAABAgQAQDsWuQ/gq5/f/KNsH03eBvDebNaT98N+2kOt228uTATeB95+u8M9yQbPYHhff9Bn0WPzNDj353WjZbDzvDbnnMbJYOd5zYpWL3OR+/FRrxm4Hx/1moH78cFx4LYPHn3eDzuDR5/3w87g0ef90DIQf1zZ/B/W39q3/dHVv5hc2ni977kD+OT5se2Xrzb4bGpuh7rtHvb1/txiHWdgH3vlPsFmcHHv3m0fTzbMSH71+GEAiO54GsvxwwBe+/t7dZ+BGaM5kpeWlgB0dHRsG8n1ncGpVgC48xMFwNpY58ZrnOsEcP7UQh3Pptf376/pADd/2yTYPqg1InOzek58GH3g/pkh/zmwWdFWJ+YAnDzXWXXP+JkFAOfu139FM8dHlfF/qlH6YH0OttjM+a2++8CM0VwvbamDl643yLrI3F5YXt6+Hgx0LjLXX27WaNG6rmhmjA15jfY/ScgLVmGaracAAAAASUVORK5CYII=";
var imgBackg = document.createElement("img");
var helpCanvas = document.createElement("canvas"),
  rc = function (rc) {
    return rc instanceof CanvasRenderingContext2D ?
       rc : new CanvasRenderingContext2D();
  }(helpCanvas.getContext("2d", 
    // shut up chromium browsers                      
    {willReadFrequently: true}));

var defaults = {
  /** (default) true: image pattern, false: color */
  editorBackground: typeof DOMMatrix != "undefined",
  /** mumst be in #xxxxxx hex color format */
  editorBackgroundColor: "#111111",
  /** (default) 0: dbc, 1: db, ... */
  editorBackgroundImage: 0,
  /** mumst be in #xxxxxx hex color format */
  highlightColor: "#ff0000",
  highlightWidth: 2,
  logicPreviewAlpha: .5,
  buildReplace: !1,
  editorBackgroundStage: 1
},
  /** @type {typeof defaults|null} */
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
}
loadSettings();
canvas.style.backgroundColor = document.body.style.backgroundColor =
  defaults.editorBackground ? "#132122" : defaults.editorBackgroundColor;
imgBackg.src = "./assets/_" + [
  "dbc",
  "db",
  "editor",
  "dbve2",
  "dbve"
][defaults.editorBackgroundImage] + "_background.png";

/** @this {Array} */
function del(i) {
  while (++i < this.length)
    this[i - 1] = this[i];
  return --this.length;
}
/**
 * @type {{input:HTMLInputElement,curr:File|null,files:(File|null)[],
 * open:number[],upload:HTMLButtonElement}}
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
        //@ts-ignore
        var ar = new Uint8Array(this.result),
        //@ts-ignore
          next = f_exec(ar, mode, file.files[fl_i]);
      } catch (e) {
        //@ts-ignore
        next = !!console.error(e.message || e, " fileOpener:?", e.stack || "");
      }
      barE(fl_i / file.open.length, succ |= +!next);
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
    fill.appendChild(tN(btn.innerText));
    btn.style.display = "none";
    (st = bar.style).width = "0";
    st.backgroundColor = "#474";
    // <btn.parentNode>
    //   <fill(div) class="loading">
    //     <bar(div) style="width:0;background-color:#474;"></bar>
    //     #btn.innerText
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
function onFile(e) {
  var i = 0, a = this.files, el;
  if (a.length) {
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
    this.parentNode.replaceChild(el, this);
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

function dbv_findPos() {
  var posArr = ship.blocks.map(function (e) {
    return e.position;
  });
}
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
utilities.groupName = "";
/**
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
 * @param {CmdInit} initialize */
Command.push = function (name, initialize, description) {
  name = Command.NAME[name] || name;
  return this.list.push(new Command(name, description, function (el) {
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
  }, utilities.groupName));
};
Command.NAME = {"Setup Properties": "Setup Properties"};

Command.push("Select Block", function (items, collapsed) {
  var bcks = {
      776: "TNT",
      834: "station wall 4 sides LBRU",
      835: "station wall 2 sides corner LB",
      836: "station wall 1 side B",
      837: "station wall 0 sides",
      838: "station wall 3 sides LBR",
      839: "station wall 2 sides opposite LR",
      840: "station solar block",
      841: "station launchpad door casing",
      842: "station launchpad door middle",
      843: "station launchpad door ending",
      844: "station floor 1 1x1",
      845: "station floor 1 2x2",
      846: "station floor 2 2x2",
      847: "station door casing",
      848: "station door middle",
      849: "station door ending",
      850: "station launch terminal",
      851: "station bench",
      852: "station wardrobe",
      853: "station telescope",
      854: "station market terminal",
      855: "station wedge",
      856: "station floor 2 1x1",
      857: "station floor 3 1x1"
    },
    tags = [
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
      "",
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
      "Droneboi (classic)": collapsed("Droneboi (classic)")
    }, btn = EL("button");
  btn.appendChild(tN("remove block"));
  btn.onclick = blockBind("remove", !1);
  items.push(btn);
  for (var i = 690, s = ""; i < Block.NAME.length; i++)
    if (s = bcks[i] || Block.NAME[i])
      if (!/__placeholder\d+__/.test(s)) {
        btn = EL("button");
        btn.appendChild(tN(s));
        btn.onclick = blockBind(Block.NAME[i], !1);
        groups[tags[i - 690 >> 4]][1].appendChild(btn);
      }
  /** @type {(...args:HTMLElement[][])=>void} */
  function pushCollapsed() {
    for (var i = 0; i < arguments.length;)
      Array.prototype.push.apply(items, arguments[i++]);
  }
  pushCollapsed(groups["Core and Basic"], groups.Movement);
  pushCollapsed(groups.Storage, groups["Drills and Weapons"]);
  pushCollapsed(groups.Misc, groups.Logic, groups["Station parts"]);
  pushCollapsed(groups["Droneboi (classic)"]);
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
    if (s = Color.NAME[i])
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
        //@ts-ignore
        control[item.idx].forEach(function (e, i, a) {
            weldSelects.push(new Ref(a, i));
          }) :
        weldSelects.push(new Ref(control, item.idx));
    }
    /** @param {Ref} ref */
    function initWeldGroup(ref) {
      // onchange event handler has live reference to the value
      // kept in its own scope and assigned from properties.control
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
    var block = ship.blocks[text.data = "" + idx], p;
    if (!block)
      return render();
    name.value = block.internalName;
    posX.value = block.position[1] / 2 + "";
    posY.value = block.position[2] / 2 + "";
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
    for (var i = 0, Items = Block.Properties.Items; i < p.length; i++) {
      p[i].name && props.appendChild(tN(p[i].name + ": "));
      switch ((itm = p[i].item) && p[i].type) {
        case "Slider":
          if (!(itm instanceof Items.Slider))
            break;
          // !!! only one Item of this property type allowed
          var slider = props.appendChild(EL("input")),
            input = props.appendChild(EL("input"));
          var sldI = i, control = block.properties.control || [""];
          slider.type = "range";
          input.type = "number";
          slider.min = input.min = "" + itm.min;
          slider.max = input.max = "" + itm.max;
          slider.value = input.value = "" + control[sldI];
          slider.oninput = input.oninput = function () {
            if (!(this instanceof HTMLInputElement))
              return;
            slider.value = this.value;
            this.type == "range" ? input.value = slider.value : 0;
            control[sldI] = Number(slider.value) || 0;
          };
        case "Integer Slider":
          if (!(itm instanceof Items["Integer Slider"]))
            break;
          itm;
        case "Dropdown":
          if (!(itm instanceof Items.Dropdown))
            break;
          itm;
        case "Number Inputs":
          if (!(itm instanceof Items["Number Inputs"]))
            break;
          itm;
        case "Text Inputs":
          if (!(itm instanceof Items["Text Inputs"]))
            break;
          itm;
        case "WeldGroups":
          var control = block.properties.control || [""];
          itm instanceof Items.WeldGroups && addWeldGroups(itm);
      }
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
    var pos = ship.blocks[idx].position;
    [posX, posY].map(function (e, i) {
      pos[i + 1] = Math.round((Number(e.value) || 0) * 2);
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
    var block = ship.blocks[idx] || {}, s = block.internalName, pos;
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
    var idx = Number(text.data), block = ship.blocks[idx];
    /** @type {(Logic<any>|undefined)[]} */
    var logics = (ship.prop || OC()).nodeList || [], temp = EL();
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
  items.push(connections);
}, "Gives the option to toggle displaying logics, it may cause errors but tu\
rning it off might not get rid of all bugs related to Logic blocks either. U\
ses block selection from \"Setup Properties\" Command and the focus option. \
Inputs not yet with tags are listed with option field to select logic output\
 of the same type.");

Command.push("Import/Export DBV", function (items, collapsed) {
  var dbv = EL("input"), elBtn = EL("button"), error = EL();
  items.push({name: ".DBV file content", inp: dbv});
  elBtn.onclick = function () {
    error.innerText = "";
    try {
      dbv.id = "saveFile";
      dbv.value = JSON.stringify(Ship.toDBV(ship));
      render();
    } catch (err) {
      error.innerText = err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Export"));
  items.push(elBtn);
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      ship = Ship.fromObject(JSON.parse(dbv.value));
      render();
    } catch (err) {
      error.innerText = err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Import"));
  error.style.color = "red";
  onFile.temporaray = function (buffer) {
    if (buffer[0] !== 123 || buffer.slice(-1)[0] !== 125)
      return false;
    try {
      var s = String.fromCharCode.apply(String, buffer);
      Ship.fromObject(JSON.parse(s));
    } catch (err) {
      error.innerText = err;
      console.error(err);
      console.log(s);
      return !1;
    }
    json.value = dbv.value = s;
    return !0;
  };
  items.push(elBtn, error, file.upload);
  var json = EL("input"), download = EL("a"), div = EL();
  items.push({name: ".JSON save fle", inp: json});
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      var s = JSON.stringify(ship);
      download.href = URL.createObjectURL(
        new Blob([s], {type: "application/json"})
      );
      download.download = ship.name + ".json";
      json.value = s.slice(0, 69);
    } catch (err) {
      error.innerText = err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Export"));
  items.push(elBtn);
  (elBtn = EL("button")).onclick = function () {
    error.innerText = "";
    try {
      ship = Ship.fromObject(JSON.parse(json.value));
      render();
    } catch (err) {
      error.innerText = err;
      console.error(err);
    }
  };
  elBtn.appendChild(tN("Import"));
  download.appendChild(tN("Download but only JSON"));
  download.href = "javascript:void(0)";
  div.appendChild(download);
  div.style.textAlign = "center";
  items.push(elBtn, div);
}, "Export and Import are functions using displayed vehicle as target.\nExpo\
rting creates JSON key of ship and puts it in text input, the key doesn't in\
clude non existent or blocks inavalable in game.\nImporting displays vehicle\
 of JSON key from text input.\nUpload from file/files button is used to load\
 file content into text input.\nJSON key is the content of .dbv savefile. It\
 contains textual data and can be opened using text editor.");
Command.push("Base64 key EXPERIMENTAL", function (items, collapsed) {
  var inp = EL("input"), elBtn = EL("button"), error = EL();
  items.push({name: "Base64 key", inp: inp});
  elBtn.onclick = function () {
    error.innerText = "";
    var bs = ship.blocks;
    try {
      inp.value = uint8arrayToBase64(encodeCmprsShip(ship));
      render();
    } catch (err) {
      error.innerText = err;
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
      ship = s.slice(0, 18) === "UGxheWVyVmVoaWNsZT" ?
        Ship.fromDBKey(atob(s)) :
        Ship.fromObject(decodeCmprsShip(base64ToUint8array(s)));
      render();
    } catch (err) {
      error.innerText = err;
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

var test_selct = ship.selectRect(.1, 0, 0, .1, 0, 0);
Command.push("Transfrom tool", function (items, collapsed) {
  var selectX0 = EL("input"), selectY0 = EL("input");
  var selectX1 = EL("input"), selectY1 = EL("input");
  var select = EL("button"), inpX = EL("input"), inpY = EL("input");
  select.appendChild(tN("Select rectangle"));
  var xy = [0, 0, 0, 0];
  function formatSelection() {
    var i = 4, input = selectX0;
    while (input = [selectX0, selectY0, selectX1, selectY1][--i])
      this !== input ?
        input.value = "" + (xy[i] = +input.value || 0) :
        isNaN(+input.value) ?
          0 :
          xy[i] = +input.value || 0;
    if (xy[0] !== xy[2] && xy[1] !== xy[3])
      selecting = 0;
    render();
  }
  function getSelected() {
    return selecting ?
      ship.blocks :
      ship.selectRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
  }
  selectX0.oninput = selectY0.oninput = formatSelection;
  selectX1.oninput = selectY1.oninput = formatSelection;
  var selecting = 2;
  select.onclick = function () {
    selectX0.value = selectY0.value = "";
    selectX1.value = selectY1.value = "";
    selecting = 2;
    press = function (x, y) {
      x = Math.floor((vX - x) / sc + 1);
      y = Math.floor((y - vY) / sc);
      if (selecting)
        if (--selecting) {
          selectX0.value = "" + (xy[0] = xy[2] = x);
          selectY0.value = "" + (xy[1] = xy[3] = y);
        } else {
          selectX1.value = "" + (xy[2] = x);
          selectY1.value = "" + (xy[3] = y);
          press = old_UI;
        }
      render();
    };
    render();
  };
  items.push(
    {name: "Selection X0", inp: selectX0},
    {name: "Selection Y0", inp: selectY0},
    {name: "Selection X1", inp: selectX1},
    {name: "Selection Y1", inp: selectY1},
    select
  );
  var move = EL("button"), rotate = EL("button"), flip = EL("button");
  move.appendChild(tN("Move action"));
  move.onclick = function () {
    var x = +inpX.value || 0, y = +inpY.value || 0;
    [selectX0, selectY0, selectX1, selectY1].forEach(function (e, i) {
      e.value = "" + xy[i]
    });
    getSelected().forEach(function (e) {
      e.position[1] += x;
      e.position[2] += y;
    });
    selectY0.value = "" + (xy[0] += x);
    selectX0.value = "" + (xy[1] += y);
    selectY1.value = "" + (xy[2] += x);
    selectX1.value = "" + (xy[3] += y);
    render();
  };
  rotate.appendChild(tN("Rotate action"));
  rotate.style.border = "2px solid #0000";
  flip.appendChild(tN("Size action"));
  flip.style.border = "2px solid #0000";
  var mirror = EL("button"), copy = EL("button"), paste = EL("button");
  mirror.appendChild(tN("Mirror action"));
  mirror.style.border = "2px solid #0000";
  function updateCopied() {
    return "Copied: " + test_selct.length + " blocks: " +
      test_selct.slice(0, 21).map(function (e) {
        return e.internalName;
      }) + (test_selct.length > 21 ? ", ..." : "");
  }
  var copied = tN(updateCopied()), coloring = EL("select");
  var arr = ["defaults"];
  for (var i = 0, l = [].push.apply(arr, Color.NAME); i < l;) {
    var option = EL("option");
    option.appendChild(tN(arr[i++]));
    coloring.add(option);
    ship.blocks[0].properties;
  }
  copy.appendChild(tN("Copy action"));
  copy.onclick = function () {
    if (selecting)
      return;
    test_selct = ship.selectRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    copied.data = updateCopied();
    render();
  };
  paste.appendChild(tN("Paste action"));
  paste.style.border = "2px solid #0000";
  var remove = EL("button"), paint = EL("button"), fill = EL("button");
  remove.appendChild(tN("Remove action"));
  remove.onclick = function () {
    !selecting && ship.removeRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
    render();
  };
  paint.appendChild(tN("Paint action"));
  paint.onclick = function () {
    getSelected().forEach(coloring.value === "defaults" ?
      function (e) {
        e.properties.color = Color.default(e.internalName);
      } :
      function (e) {
        e.properties.color =
          /** @type {Colors} */
          (coloring.value);
      });
    render();
  };
  fill.appendChild(tN("Fill action"));
  fill.onclick = function () {
    if (selecting)
      return;
    defaults.buildReplace = !0;
    ship.fillRect(0, xy[0], xy[1], 0, xy[2], xy[3], test_selct);
    defaults.buildReplace = !1;
    render();
  };
  items.push(copy, paste, fill, remove, {name: "Axis X", inp: inpX});
  items.push({name: "Axis Y", inp: inpY}, move, rotate, flip, mirror);
  items.push(tN("Color: "), coloring, paint, copied);
  collapsed.rend_UI = function () {
    if (selecting > 1)
      return;
    // calculations from Setup Properties rend_UI
    var x = xy[0], y = xy[1];
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
    ctx.strokeRect(dx, dy, (x - xy[2] + 1) * sc, (xy[3] - y + 1) * sc);
  };
}, "WIP (Work In Progress) Command, meanwhile figure out yourself.");
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
The weight of that vehicle is " + weight + " mass units and with " + drives +
    " Small Rift Drives it can rift drive distance of "), dist);
}, "Shows weight and distance the vehicle can travel, it takes amount of Sma\
ll Rift Drives into account, although in the game you are allowed to buy onl\
y 1. It also shows ammount of blocks in it and time when the vehicle had the\
se stats, because it doesn't update after this command have been opened, onl\
y changing amount of RC recalculates distance.");
utilities.groupName = "";
Command.push("Set camera view", function (items, collapsed) {
  var viewX = EL("input"), viewY = EL("input"), zoom = EL("input");
  var elBtn = EL("button");
  items.push({name: "View x", inp: viewX},
    {name: "View y", inp: viewY},
    {name: "Zoom", inp: zoom});
  elBtn.onclick = function () {
    viewX.value = "" + vX;
    viewY.value = "" + vY;
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
ll for reseting to intial view by pressing set while inputs are empty. Usual\
ly moving mouse with left mouse button pressed or zooming with scrolling is \
used. For touchscreen devides use two fingers to move and zoom.");
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
  items.push({name: "Image pattern", inp: backgImg},
    tN("Background Image: "),
    select,
    EL("br"),
    {name: "Background color", inp: backgClr});
}, "When \"Image pattern\" checkbox is checked, Droneboi: Conquest backgroun\
d is used. Else color from \"Background color\" input is used. If it is in h\
exadecimal format #111133 for example, the setting will update.");
Command.push("About Commands tab", function (items) {}, "OPENING AND MOVIGN \
AROUND\nCommands tab is opened or moved by activating contextmenu, the optio\
ns usually from right click or long press on touch screen, not on already op\
ened Commands tab. The Commands tab them opens and/or moves centered to wher\
e contextmenu was activated, but it will align with top, right or left edge \
of the page if it was going to 'display partialy behind them'. This is to cr\
eate 'grabable' surface for touch screens at any time any time.\nTo move the\
 Commands tab around you can grab it 'with' top part, where changes to point\
er hand, you can move it slightly behind edges on right and left side.\nCONT\
EXTMENU NOTES\nSome browsers have option to save or copy image in the canvas\
, it can be used to make precise image of your vehicle in high quality. When\
 the Commands tab is right clicked the tab dissapears and activated contextm\
enu is able to capture to visual.\n\nMENU\nIn menu there is list of Commands\
, click one of the buttons to open coresponding Command, optionaly sorted in\
 collapsed groups. X sign in top right corner closes the Commands tab.\n\nCO\
MMAND\nWhen Command is opened its name displays in 'top part', there's also \
< sign to return back to menu, X sign won't do that. Each command has some i\
nputs/buttons, their purpouse is explained in description.");

var cmdsHeader = EL(), cmds = (function () {
  /** for #commandsTab styles @see {addingStyles} */
  var nav = EL("nav");
  nav.id = "commandsTab";
  nav.style.display = "none";
  /** @type {HTMLElement} */
  var e0 = nav.appendChild(EL("header")),
    /** @type {HTMLElement} */
    e1 = e0.appendChild(EL("button")),
    back = e1.style;
  e1.appendChild(tN("<"));
  back.visibility = "hidden";
  e1.onclick = function () {
    content.style.display = cmdsHeader.innerText = "";
    items.style.display = "none";
    back.visibility = "hidden";
    utilities.rend_UI = F;
    press = old_UI;
    render();
  };
  e0.appendChild(cmdsHeader);
  e1 = e0.appendChild(EL("button"));
  e1.appendChild(tN("X"));
  e1.onclick = function () {
    nav.style.display = "none";
    utilities.rend_UI = F;
    press = old_UI;
    render();
  };
  var content = nav.appendChild(EL()), items = nav.appendChild(EL());
  content.className = "content";
  items.className = "items";
  (e1 = nav.appendChild(EL())).style.display = items.style.display = "none";
  e1.appendChild(tN("Search commads... coming spoon"));
  /** @param {Command} item */
  function initItems(item) {
    function ending() {
      var el = items.appendChild(EL());
      el.innerText = "Description:\n" + item.description;
      el.style.color = "#879b90";
    }
    return function () {
      cmdsHeader.innerText = item.name;
      content.style.display = "none";
      items.style.display = "";
      back.visibility = "visible";
      for (; items.firstChild;)
        items.removeChild(items.firstChild);
      var arr = item.items;
      if (typeof arr == "function")
        return arr(items), ending();
      for (var i = 0; i < arr.length; i++) {
        var s = arr[i].type, isBtn = s === "button";
        var isChck = s === "checkbox", e = EL(isChck ? "input" : s);
        if (isChck && e instanceof HTMLInputElement)
          e.type = "checkbox";
        e[isBtn ? "onclick" : isChck ? "onchange" : "oninput"] = arr[i].fn;
        (isBtn ? e : items).appendChild(tN(
          arr[i].name + (isBtn ? "" : ": ")));
        items.appendChild(e);
        !isBtn && items.appendChild(EL("br"));
      }
      ending();
    }
  }
  var group = utilities("");
  for (var i = 0, groupName = ""; i < Command.list.length; i++) {
    var item = Command.list[i];
    if (item.group && item.group !== groupName) {
      group = utilities(groupName = item.group);
      content.appendChild(group[0]);
      content.appendChild(group[1]);
    }
    (item.group ? group[1] : content).appendChild(e0 = EL("button"));
    e0.appendChild(tN(item.name));
    e0.onclick = initItems(item);
    e0.appendChild(EL()).appendChild(tN(">"));
  };
  window.onerror = function (m,s,l,c,e) {
    var pre = content.appendChild(EL("div"));
    pre.style.overflowWrap = "break-word";
    pre.style.wordBreak = "break-all";
    pre.appendChild(tN(onlyConsole(m,s,l,c,e)));
  }
  return (bd || EL()).appendChild(nav);
})();

/** renderedShip moved to @see {ship} */

function rend_backgPattern() {
  try {
    helpCanvas.width = imgBackg.naturalWidth || imgBackg.offsetWidth;
    helpCanvas.height = imgBackg.naturalHeight || imgBackg.offsetHeight;
    ctx.fillStyle = ctx.createPattern(imgBackg, "repeat") || "";
    if (helpCanvas.width === 64) {
      var n = sc / 32, sx = vX - sc, sy = vY - sc, idk = 32;
      canvas.style.backgroundColor = defaults.editorBackgroundColor;
    } else
      var n = sc / 2, sx = vX - sc * 37, sy = vY - sc * 37, idk = 74;
    ctx.translate(sx, sy);
    ctx.scale(n, n);
    ctx.fillRect(-vX / n + idk, -vY / n + idk,
      canvas.width / n, canvas.height / n);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } catch (e) {
    console.debug(e, "at drawing background");
  }
}
function rend_backgColor() {
  canvas.style.backgroundColor = defaults.editorBackgroundColor;
}
var rend_background = defaults.editorBackground ?
  rend_backgPattern : rend_backgColor;
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
  for (var i = dat.length, b = !0, itv = 0; i-- > 0;)
    b = b && dat[i] === cpr[i];
  b && (itv = setInterval(function () {
    helpCanvas.width = helpCanvas.height = 32;
    try {
      rc.drawImage(imgColor, 0, i * -32);
    } catch (e) {
      if (imgColor.complete === !1)
        return i = 0;
    }
    rend_colors[i] = rc.createPattern(helpCanvas, "repeat") || "";
    if (++i >= rend_colors.length) {
      clearInterval(itv)
      render();
    }
  }, i = 0));
};
var rend_colors = rend_initColors();

/** @type {Block[]} */
var foundBlocks = [];

var old_UI = press = function (x, y) {
  x = Math.floor((vX - x) / 2 / sc + 1);
  y = Math.floor((y - vY) / 2 / sc);
  var found = [];
  for (var i = 0, arr = ship.blocks; i < arr.length; i++)
    if (Math.floor((arr[i].position[1]) / 2) === x &&
      Math.floor((arr[i].position[2]) / 2) === y)
        found.unshift(i);
  found = found.map(function (i) {
    var e = arr[i];
    if (placingBlock() === "remove") {
      Logic.removeLogic(arr[i], (ship.prop || OC()).nodeList);
      arr[i] = arr.slice(-1)[0];
      arr.length--;
    } else if (blockBind.changingColor)
      //@ts-ignore
      e.properties.color = placingBlock();
    else if (blockBind.changingPosition) {
      var pos = e.position;
      pos[1] & 1 ?
        pos[2] & 1 ? --pos[1] : ++pos[2] :
        pos[2] & 1 ? --pos[2] : ++pos[1];
    } else {
      var s = e.internalName, rot = e.rotation[2], pos = e.position;
      [
        "Wedge",
        "Wedge 1x2",
        "Wedge 1x4",
        "Smooth Corner",
        "Smooth Corner 1x2",
        "Smooth Corner 1x4"
      ].indexOf(s) < 0 ||
        rot === 3 && (e.rotation[1] = !e.rotation[1]);
      var size = Block.Size.VALUE[Block.ID[s]];
      if ((size.w | size.h) & 16)
        rot > 1 ?
          rot === 3 ? --pos[2] : --pos[1] :
          rot === 1 ? ++pos[2] : ++pos[1];
      //@ts-ignore
      e.rotation[2] = rot + 1 & 3;
    }
    return e;
  })
  // placingBlock function executed sets blockBind.changingColor
  var rand = placingBlock();
  if (found.length || blockBind.changingColor) {
    foundBlocks = found;
    return render();
  }
  if (rand !== "remove") {
    var blok = new Block(rand, [0, x * 2, y * 2], [0, !1, 0],
      Block.Properties.addProperty(rand, Logic.addLogic(
        rand,
        {color: Color.default(rand)},
        (ship.prop || OC()).nodeList || [],
        ship.blocks
      )));
    (blok.properties.nodeIndex || []).forEach(function (e) {
      (ship.prop || OC()).nodeList[e].owner = blok;
    });
    arr.push(blok);
  }
  render();
};
/** @type {(x:number,y:number,e:MouseEvent)=>void} */
function commands(x, y, e) {
  /** also problem initial low resolution on touchscreen devices...
   * @TODO since I've just found out it's not a bug, but a matter
   * of different devicePixelRatio update for this is coming */
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
      e.button !== -1 && e.cancelable && e.preventDefault();
      return;
    }
  st.display = "none";
}
function devt_share(inp) {
  var el = GE("commandsTab");
  if (el)
    (el.lastChild instanceof HTMLTextAreaElement ?
      el.lastChild : el.appendChild(EL("textarea"))).value = inp;
}
contextmenu = function (x, y, e) {
  var el = GE("info");
  if (el instanceof HTMLElement && el.onclick)
    //@ts-ignore
    el.onclick();
  (contextmenu = commands)(x, y, e);
};

var cmdsMove = !1, cmdsX = 0, cmdsY = 0;
over = function over(e) {
  if (e instanceof TouchEvent)
    return;
  if ((e.type === "mousedown" || e.type === "touchstart") &&
    e.target === cmdsHeader) {
    var st = cmds.style,
      x = Number(st.left.slice(0, -2)) || 0,
      y = Number(st.top.slice(0, -2)) || 0;
    cmdsX = x - e.pageX - canvas.offsetLeft;
    cmdsY = y - e.pageY - canvas.offsetTop;
    cmdsMove = !0;
    cmds.style.webkitUserSelect = cmds.style.userSelect = "none";
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
    cmds.style.webkitUserSelect = cmds.style.userSelect = "";
  // TODO: some nice system to account for end/'hoverleave'
};

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
var rend_speeeeed = {}, rend_logs = 69;
/*async*/ function expensiveRenderer() {
  var t = Date.now(), AT = ", at expensiveRenderer();";
  canvas.width = canvas.width;
  rend_background();
  ctx.imageSmoothingEnabled = false;
  var objs = ship.blocks, n = 0;
  if (Logic.rend &&
    (Logic.nodes = (ship.prop || OC()).nodeList || []))
    ctx.globalAlpha = defaults.logicPreviewAlpha;
  for (var i = 0, id = 0, pos = [0, 0, 0]; i < objs.length; i++) {
    pos = objs[i].position;
    if ((id = Block.ID[objs[i].internalName]) < 12) {
      ctx.save();
      ctx.fillStyle = "#888";
      ctx.globalAlpha = .7;
      ctx.fillRect(-pos[0] * sc + vX, pos[2] * sc + vY, sc + 1, sc + 1);
      ctx.restore();
      continue;
    }
    /** @see {Block} @see {Block.Size.VALUE} */
    var size = Block.Size.VALUE[id], logic = Logic.VALUE[id] || [];
    if (!size) {
      rend_logs > 0 && rend_logs-- && console.error(objs[i], AT);
      continue;
    }
    var rot = 10 - objs[i].rotation[2] & 3;
    var ow = size.w, oh = size.h, sw = 0, sh = 0;
    var w = ow + (ow & 16), h = oh + (oh & 16), tiny = (oh | ow) & 16;
    // position to draw block in canvas
    var dx = -pos[1] * sc + vX, dy = pos[2] * sc + vY;
    // position corrections for rotations and tiny blocks
    dx += (objs[i].rotation[1] ?
      rot === 0 ? 32 - w : rot === 3 ? 32 - h : tiny :
      rot === 2 ? 32 - w : rot === 3 ? 32 - h : tiny) * sc / 16;
    rot === 0 ?
      dy += (32 - h - tiny) * sc / 16 :
      rot === (objs[i].rotation[1] ? 1 : 3) ?
        dy += (32 - w - tiny) * sc / 16 :
        0;
    // update logic nodes render posiotions
    /** @type {typeof Logic.nodes[number]} */
    var node, indexes = objs[i].properties.nodeIndex;
    if (Logic.rend && indexes instanceof Array)
      for (var j = indexes.length; j-- > 0;) {
        // I don't like these logic nodes checks
        if (!indexes || !indexes[j]) {
          console.error("Logic node: " + j + " missing from ship.blocks[" +
            i + "]: " + JSON.stringify(objs[i]) + AT);
          break;
        }
        if (!(node = Logic.nodes[n = indexes[j]])) {
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
    rc.fillStyle = rend_colors[Color.ID[objs[i].properties.color]];
    rc.fillRect(0, 0, w, h);
    rc.globalCompositeOperation = "destination-in";
    rc.drawImage(imgMask, size.x, size.y, w, h, 0, 0, w, h);
    rc.globalCompositeOperation = "source-over";
    rc.drawImage(imgOverlay, size.x, size.y, w, h, 0, 0, w, h);
    ctx.drawImage(helpCanvas, dx, dy, sw * sc / 16, sh * sc / 16);
    // await new Promise(function (res) {
    //   var tfn = expensiveRenderer;//@ts-ignore
    //   clearTimeout(tfn.tOut);tfn.tOut = setTimeout(res, 100);
    // }); /// ASYNC!!!!!!!!
  }
  ctx.globalAlpha = 1;
  if (Logic.rend) {
    ctx.lineCap = "round";
    for (var j = Logic.nodes.length; j-- > 0;) {
      if (!(node = Logic.nodes[j]) || (n = node.type) > 1)
        continue;
      n = node.type;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = n & 1 ? "#3e4" : "#e43";
      ctx.fill();
    }
    ctx.lineWidth = 4;
    ctx.lineDashOffset = Logic.dashOff = Logic.dashOff + 1 || 1;
    for (j = Logic.nodes.length; j-- > 0;) {
      if (!(node = Logic.nodes[j]) || node.pairs instanceof Array)
        continue;
      ctx.strokeStyle = node.type & 1 ? "#3e4" : "#e43";
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      (node = Logic.nodes[node.pairs]) ?
        ctx.lineTo(node.x, node.y) : 0;
      ctx.setLineDash([sc, sc / 2]);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    for (j = Logic.nodes.length; j-- > 0;) {
      if (!(node = Logic.nodes[j]) || (n = node.type) < 2)
        continue;
      n = node.type;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = n & 1 ? "#3e4" : "#e43";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
  }
  utilities.rend_UI();
  var t = Date.now() - t | 0;
  rend_speeeeed[t] = rend_speeeeed[t] + 1 || 0;
}

init = function () {
  rend_checkColors();
};

function onlyConsole(m,s,l,c,e) {
  if (e && e.stack)
    return "" + m + "\n" + e.stack;
  return "" + m + "\n\t" + s + ":" + l + ":" + c;
};
