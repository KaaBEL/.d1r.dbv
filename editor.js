//@ts-check
"use strict";
// v.0.1.36
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
    case "8bb3bad8":
      console.log("Fun mode 7");
      setTimeout(function () {
        backgHangarInit.ready = NaN;
      });
  }
})(/\/[0-9a-zA-Z._+\-]+\/editor\.html(?:#[^?]*)?($|\?[^=]*)/);

var imgOverlay = document.body.appendChild(document.createElement("img"));
imgOverlay.style.display = "none";
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAMA\
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\
DPPOJdBIAAAAAElFTkSuQmCC";
var imgMask = document.createElement("img");
imgMask.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAIAAAD\
cVjJ+AAAABnRSTlMAAAAAAABupgeRAAAKpklEQVR42u3dUa6juBIAUM/TXVgtvZb2PnpaosUkTQK\
Gsn3Oz0Rc4piycZlMKf1PAwAAAK4SQvBCdotPdo5/Grzn/U8IAAAAAKjs59//Roe2c/P6nvazW5x\
697+30cd3dCPOz9Hl4PFJ42t8B+k/q+0f8vYWxB/rD9YH1pk/YS69owILAAAAgNJ+prqaaK35tpL\
a87OZpQ/JtyMC8OyKZHV6Kv6iDcA9+f143gnPjP9NBRYAAAAApf1MeE3RWvNtZSX5dqTWHFOzFEA\
efJUN88MseX/+uiq/V9iHVI42AHPk+u+yvGfGHRVYAAAAAJT2M+2VRWvtum8rc7r45FfxvPZT8kT\
LZikryyXvFJhvDueHd3q4Ny/qZ+72IWnNAeDGnfnxZ2HPjBsqsAAAAAAo7W8VWHmgjSh8fXH4Kqj\
PaAIwou8yVwhct/jHVzsNIwLA+fy+b+FIfvEs3FpTgQUAAABAcT9LXGW01sb/tjI2r9PUNT+Bi+R\
X9yycmTP5dgaaY3fGf7+/En8APDmWpAILAAAAgNJ+FrrWaK2N+W1lTHQtK49jP6Lx3X0EYEVaOUt\
udxRGBABPxOWpwAIAAACgtJ/lrjhaaypWqDcrzEy4U1703hBKGCTL7+/idBcD4Bl2JCqwAAAAACj\
tZ9HrjtbaON9W5qbPbaieG0Hq3EFHZlS/+8v9y/2z+tOZuXI2uSfaT/X/qdlVuf9mPgCeiwekAgs\
AAACA0n6WvvporY1WhwUA8OmeYbvnicF3PmGAAeBFlp+aCiwAAAAASvtbBVYsEINf15gmg7EDYGE\
57P4nD+zi8kDejGL9P3O9AFD/aTSK9ac8FVgAAAAAlPYjBP+K1tpKtTxhyEvOgdXmIXBE3tiy7DB\
HTs/d+G7zS5Tv//uZb5YCMPpTZBTrzyBUYAEAAABQmgqsP0VrTf3L1fE0agDIWRWuJQwzADz6TOo\
Z+QQVWAAAAACUpgLrv0RrTUUPAMDT+zEAkLnO9CfnCbAKLAAAAABK+12BlZ0/Z/T2R7dC/MNMAGC\
x/Kh9+0PA+tPjqaqJz0T9n+hJWQUWAAAAAKX5DSz4U7TWnv5+ukIfAACA1aSr0PO6VGABAAAAUNo\
sFVixeZ2GdWFhDgDw1f7hKnlj+0/FJzu/d5TxBcD+4an9Q37YwynylwosAAAAAEr7pAIrNq+z8DX\
F7kgaaADghTy8o+j3iWEYRBsATuxbFshxKrAAAAAAKG2Nf4UwNq/ToC8z4saa/QrQ4/we/TF7YSZ\
5OGftX4+YZ6NwnwFg7h3F1FRgAQAAAFDasQqseHEkB7zi7bWkCcDbeWKGAHDt3qO92Ids886rHBS\
DXFdNOWCfAaAdeDJdJrupwAIAAACgtJ+lrz5aa6psjC8A9JSHz4nda3rsCsQZgHvy+/EM1ftTpqA\
CCwAAAIDS/laBFQf+moPHYI6rYD5m5lXyRPyf+nTg/vX2zvZz9zpu7I+xTnEGoMwO/8zTSr5oYdI\
cpwILAAAAgNJ+hIDJRWtNFQwA9XIT90c7d3sDYwHATHuGqfOaCiwAAAAASntdgRWH2/h1Zg4eiTm\
uArMCgHUy1HFy2T5uIRwADCtP7w0GpAILAAAAgNLu+g2s6NBmGr4yovx4hTkDAAPuH+wPAeB9pot\
VLl0FFgAAAACl/VcFVnzV0q935eDxmOMq7idiwIirPVB5RxEnzgGAFZ67F8uDKrAAAAAAKO1HCFh\
ItNbUiwFAJfkiX+//Grtsni/eBQAzZcbzZ05BBRYAAAAApf1ZgRWn2/vVQgosE3l2VrunAFghz7a\
v8l0IHwCsQgUWAAAAAKX5Daz/Eq01NS/GFwB4Qm7ydbz4KwCwGBVYAAAAAJT2uwIrLm31V2spvAA\
AfLiHPH8OADAdFVgAAAAAlPa7Ais7f87o7fMs4wtYH7A/ER/rAwAsTAUWAAAAAKX5VwjhmGit+X+\
5ANQgHwGc2dUjfzEgFVgAAAAAlNbnXyG8R974WdG5/+J/PP7ptgWsn8a3cP69s/2n4p+d3zvK/AE\
AbqQCCwAAAIDS/AbWJ3J3JATldvF2RACgR8a/Nvvnpp0RdxfxNkox+Cjb3QFASSqwAAAAAChNBRY\
ji83rFA4OzJNRPt18hmvvi/iq5Xh7fpzu+badV6/rr65ZZr19anwB4M5n3oWfglVgAQAAAFCaCqy\
qslh/onzE4pa4xUOjEyVnBcAc4qssnIdzZXyV64+3b4fw3fjKqgCMlb/ePyfGhzuZAanAAgAAAKA\
0FVgAwNryq3dFmfb5Lv7x9vw0IgA8JF7kpvgwo8Xp3UgxKrAAAAAAKE0FFnOJ1ppfteBP5gM8uyb\
XvyvjRQ/zw+v6tP19zsqv2ufa8W1GAYBB9lTt7R5jOiqwAAAAACjtdwVWCsUBIQQAyD5ifmn7xre\
3/HCU7YoBsIcpSQUWAAAAAKX5DSxmFK21nv8HtXf7AMC1WXsvPzwfAHiUCiwAAAAASpuxAiteHM8\
TbeaHn5umFgDw0J7njFym/3FR//PSaNhDAsALKrAAAAAAKM1vYHGF6NBmXtSrNDwAD7ECV4h/HD5\
ev+ej9B+A1Z5/8/YWlqQCCwAAAIDSVGDRUx44J4QJAC7KtrE5cuR1hYych8+Jt++yowDgKeH59w4\
qsAAAAAAobcYKrDSs3CJun29hhrOZCQD7NSF3R+Lt8ZprWr69ovr9B8ATonzRgQosAAAAAErzG1j\
MLlprqpYAZlnP+S5KYdwB4KEnULnsIiqwAAAAAChNBRY9hRAAAJfuH+wuAPAsvCQVWAAAAACUpgK\
LK6QQgPsL4ztgfLSv/ZXbB8D6PxQVWAAAAACUpgILzonWmu/IgVVXv36sqwA112eAh6jAAgAAAKC\
0WSqwokObaXpMJIzp8qNvfWDN+Wn+i7/1E+MLwBRUYAEAAABQ2ly/gZW7I2GIAYBiO4rctJl2LAA\
Af6cCCwAAAIDS/CuEx0SH81NYAaCAPJDNc3MkP9wb5Nvjcbr9CrG6agcFAPCCCiwAAAAASlOBBVe\
I1pqqOoCR1/CtfLvOx9tz2uHjeVH798iv+pAFeg4ATEEFFgAAAAClqcBiJdFaUycFwJ/y8Dmxe12\
h/Xvi811/al4Rx2cmAJShAgsAAACA0lRgHZNCQBlhTgJ0WFf3eT9fnBMXtR+719+1/1R8jr8rTDI\
A4CwVWAAAAACUNlcFVhhQAKD8jiKG3b3k4T7ngFcHABSmAgsAAACA0vwGFlwnWmt+nQqAGeUm032\
aE0P4AICzVGABAAAAUNosFVhpKAGAxcSNe6Q43HIc7mF0iIk94Vjz0/gCcJgKLAAAAABK8xtYXCE\
6tJmde5uGjUHm/+jtA/PJt6tHnlhbjqxOvVcw7p9LRhOAA1RgAQAAAFCaCix6ygPnhDBh/i/ZPtB\
7tel3h8alK0O+bSF3x2NzPK1I3caxR+7I3Qi+/6sxBWBDBRYAAAAApanAqiqEYPCxS4GAbquZ+8t\
cMmfqyNNjFCdGKszPoWbI9kgcOD9LjjUAD1GBBQAAAEBpKrAAgKqiQzspSuU/PTctx4u/mp8jzs8\
8ELc4fCYAi1GBBQAAAEBpKrDoKYQA81/7AJeuPFanFTKjUQZgRwUWAAAAAKX9IwQAwMeic/spxAA\
l12eQ33mICiwAAAAASvs/WCHnyl95QH0AAAAASUVORK5CYII=";
var imgColor = document.createElement("img");
imgColor.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAOgCAIAAA\
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\
Jggg==";
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
  if (i < 0)
    return this.length;
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
        next = !!console.error(e.message || e,
          " fileOpener:?", e.stack || "");
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
Command.groupName = "";
Command.press = press;
Command.rend_UI = F;
// I probably just made something I will never use #RIPCMDSRLD
Command.currentInit = F;
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
 * @param {CmdInit} initialize @param {{group?:string,
 * reloads?:boolean}} [settings]
 */
Command.push = function (name, initialize, description, settings) {
  name = Command.NAME[name] || name;
  settings = settings || {};
  //-try {
  //-  utilities.refreshes = !
  //-  initialize(
  //-    //@ts-expect-error
  //-    UDF,
  //-    utilities
  //-  );
  //-} catch (e) {}
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
  // #RIPCMDSRLD
  settings.reloads && Edit.listeners.push(function () {
    Command.currentInit();
  });
  return this.list.push(new Command(name, description, itemsInit,
    settings.group));
};
/** used to pause ongoing functionalities when Command hides */
Command.stop = function () {
  Command.rend_UI = utilities.rend_UI;
  utilities.rend_UI = F;
  press = old_UI;
  render();
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
    var control = block.properties.control || [""];
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
          // !!! only one Item of this property type possible
          var intSlider = props.appendChild(EL("input")),
            intInp = props.appendChild(EL("input"));
          var intI = i;
          intSlider.type = "range";
          intInp.type = "number";
          intSlider.min = intInp.min = "" + itm.min;
          intSlider.max = intInp.max = "" + itm.max;
          intSlider.step = "1";
          intSlider.value = intInp.value = "" + control[intI];
          intSlider.oninput = intInp.oninput = function () {
            if (!(this instanceof HTMLInputElement))
              return;
            intSlider.value = this.value;
            this.type == "range" ? intInp.value = intSlider.value : 0;
            control[intI] = Number(intSlider.value) || 0;
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
            list.indexOf("" + control[dpdwnI]) :
            +control[dpdwnI];
          j < 0 ?
            (dropdown.item(j) || OC()).selected = !0 :
            console.error("Not existing custom input selected!");
          dropdown.onchange = function () {
            control[dpdwnI] = dropdown.value;
          };
        case "Number Inputs":
          if (!(itm instanceof Items["Number Inputs"]))
            break;
          itm;
        case "Text Inputs":
          if (!(itm instanceof Items["Text Inputs"]))
            break;
          itm;
        case "WeldGroups":
          itm instanceof Items.WeldGroups && addWeldGroups(itm);
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
  /** @param {string} old @param {string} replace */
  function updateControlParams(old, replace) {
    /** @param {unknown} param */
    function checkControlBlock(param) {
      if (typeof param != "string")
        return console.error("Index 0 of Control Block parameter property is\
n't string.");
      if (param === old)
        return void (block.properties[0] = replace);
      if (options.indexOf(param) === -1 || custom.indexOf(param) === -1)
        block.properties[0] = "Up";
    }
    /** @type {Block} */
    var block, options = Block.Properties.VALUE[803][0].item.options;
    var custom = (ship.prop && ship.prop.customInputs || []).map(String);
    for (i = ship.blocks.length; i-- > 0;)
      if ((block = ship.blocks[i]).internalName === "Control Block")
        checkControlBlock(block.properties[0]);
  }
  var customInputs = EL(), add = EL("button"), remove = EL("button");
  add.style.width = remove.style.width = "unset";
  add.style.display = remove.style.display = "initial";
  customInputs.appendChild(add).appendChild(tN("Add"));
  add.onclick = function () {
    if (!(this instanceof HTMLButtonElement))
      return;
    var custom = new Ship.CustomInput("Button", 0);
    (ship.prop && ship.prop.customInputs || []).push(custom);
    var toggle = EL("input"), name = EL("input");
    toggle.type = "checkbox";
    toggle.oninput = function () {
      custom.name = (custom.type = +toggle.checked) ?
        "Switch" :
        "Button";
      updateControlParams("", "Up");
    };
    customInputs.insertBefore(toggle, this);
    name.type = "text";
    name.oninput = function () {
      custom.name = name.value;
      updateControlParams("", "Up");
    };
    customInputs.insertBefore(name, this);
    /** @type {Node&{onclick?:typeof add.onclick}} */
    (customInputs.insertBefore(add.cloneNode(!0), this)
      ).onclick = add.onclick;
    /** @type {Node&{onclick?:typeof add.onclick}} */
    (customInputs.insertBefore(remove.cloneNode(!0), this)
      ).onclick = remove.onclick;
    customInputs.insertBefore(EL("br"), this);
  };
  remove.onclick = function () {
    if (!(this instanceof HTMLButtonElement))
      return;
    // i = elements: remove, add, name(input), type(checkbox), (br)
    for (var i = 5, input = this.previousSibling; i-- > 0;)
      input = i === 1 ? input : this.previousSibling &&
        customInputs.removeChild(this.previousSibling);
    customInputs.removeChild(this);

    var custom = (ship.prop && ship.prop.customInputs || []).map(String);
    if (input instanceof HTMLInputElement)
      // removes cutom property from Ship.props.customInputs of ship
      del.call(custom, custom.indexOf(input.value));
    else
      console.error("Supposed to be name input:", input);
    // non-existing controlInput values (removed one now too) set to default
    updateControlParams("", "Up");
  };
  remove.appendChild(tN("Remove"));
  items.push(connections, customInputs);
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

var test_selct = ship.selectRect(.1, 0, 0, .1, 0, 0),
  test_selctLocked = ship.selectRect();
Command.push("Transfrom tool", function (items, collapsed) {
  var selectX0 = EL("input"), selectY0 = EL("input");
  var selectX1 = EL("input"), selectY1 = EL("input");
  var select = EL("button"), inpX = EL("input"), inpY = EL("input");
  /** for copied in test_select selection */
  var offset = [0, 0];
  select.appendChild(tN("Select rectangle"));
  var xy = [0, 0, 0, 0], locked = EL("input");
  /** FORMAT INPUTS */
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
  /** SELECT @param {boolean} [getLock] */
  function getSelected(getLock) {
    if (!getLock && locked.checked)
      return test_selctLocked;
    return selecting ?
      ship.selectRect() :
      ship.selectRect(0, xy[0], xy[1], 0, xy[2], xy[3]);
  }
  /** @type {BlockSelection|null} */
  var trackPoints = null;
  function pointsSelected() {
    return trackPoints = Ship.fromObject({n: "", b: [
      new Block("Block", [0, xy[0], xy[1]], [0, !1, 0]),
      new Block("Block", [0, xy[2], xy[3]], [0, !1, 0])
    ]}).selectRect();
  }
  function updateSelected() {
    if (!trackPoints)
      return console.error("trackPoints unset, AT Command.\"Transfrom\"");
    var point0 = trackPoints[0], point1 = trackPoints[1];
    selectY0.value = "" + (xy[0] = point0.position[1]);
    selectX0.value = "" + (xy[1] = point0.position[2]);
    selectY1.value = "" + (xy[2] = point1.position[1]);
    selectX1.value = "" + (xy[3] = point1.position[2]);
    trackPoints = null;
  }
  selectX0.oninput = selectY0.oninput = formatSelection;
  selectX1.oninput = selectY1.oninput = formatSelection;
  var selecting = 2;
  select.onclick = function () {
    selectX0.value = selectY0.value = "";
    selectX1.value = selectY1.value = "";
    selecting = 2;
    press = Command.press = function (x, y) {
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
  locked.type = "checkbox";
  locked.oninput = function () {
    if (locked.checked)
      test_selctLocked = getSelected(!0);
  }
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
    var x = +inpX.value || 0, y = +inpY.value || 0;
    Edit.move(getSelected(), 0, x, y);
    Edit.move(pointsSelected(), 0, x, y);
    updateSelected();
    render();
  };
  rotate.appendChild(tN("Rotate action"));
  rotate.onclick = function rotateDBV() {
    // rotation around axis
    var rx = +inpX.value || +inpY.value || 0;
    Edit.rotate(getSelected(), rx);
    Edit.rotate(pointsSelected(), rx);
    updateSelected();
    render();
  };
  flip.appendChild(tN("Size action"));
  flip.style.borderColor = flip.style.backgroundColor = "#0000";
  flip.style.color = "#A88F";
  var mirror = EL("button"), copy = EL("button"), paste = EL("button");
  mirror.appendChild(tN("Mirror action"));
  mirror.onclick = function () {
    selecting ?
      ship.mirror2d() :
      ship.mirror2d(0, xy[0], xy[1], 0, xy[2], xy[3]);
    render();
  };
  /** COPY SELECTION */
  function updateCopied() {
    offset = [Math.max(xy[0], xy[2]), Math.min(xy[1], xy[3])];
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
    ship.paste(0, xy[0] - offset[0], xy[1] - offset[1], test_selct);
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
}, "Not yet completed actually. Each action uses some specific inputs to provide its function. Values inside inputs are integers that means that full block is 2x2 ad 0.5 by 0.5 is 1x1.\nSelect rectangle:\nThe four inputs together with Select rectangle button are used to select area with blocks, starting with left top point [x0, y0] making rectangle with second right bottom point [x1, y1]. Blocks are selected not by collision with selected area or being fully covered by the area, it select blocks of which position is inside the area, which is quite confusing, because there's no collisions detection yet.\nLock selection:\nWhen checkboxes is enabled, actions will be applied to the same blocks selected at that moment of checkbox getting enabled. When it is disabled, the block positions inside selection at a time of doing one of the actions are used.\nCopy action:\nIt stores current selection of which amount of blocks and types of few first blocks can be seen at the bottom, at the \"Copied:\".\nPaste action:\nReplicates copied selection and also logic connections to output nodes. In other to prevent accidental blocks stacking the selection is deselected after both Copy and Paste action.\nFill action:\nFills the selection with pseudo randomly selected blocks from copied selection, by replicating them with all properties except logic connections to output nodes.\nRemove action:\nRemoves all blocks inside selection\nAxis X, Axis Y:\nAre two additional inputs for actions below.\nMove action:\nMove selected blocks by specified x and y distance.\nRotate action:\nRotates selected blocks by amount in either Axis x or Axis y input around center of editor space [0, 0].\nSize action:\nNot implemented yet.\nMirror action:\nMirrors blocks from left to right and from right to left around center of editor space.\nPaint action:\nUses the selected \"Color:\" above to paint selected blocks with it. Custom color option is texture that uses custom hex color. The custom hex color can be set in \"Select Color\" Command.");

Command.push("Vehicle stats", function (items, collapsed) {
  function addLine(text) {
    items.push(tN(text), EL("br"));
  }
  // var blocks = ship.blocks, cost = 0, weight = 0, integrity = 0;
  // var fuelCap = 0, energyCap = 0, cargoCap = 0;
  // var fuelUse = 0, energyUse = 0, cargoUse = 0;
  // stats counter dictionaries
  var sums = {
    cost: 0,
    weight: 0,
    strenght: 0,
    store: {fuel: 0, energy: 0, cargo: 0},
    use: {fuel: 0, energy: 0, cargo: 0}
  },
    skipped = JSON.parse(JSON.stringify(sums));
  /** @param {string} stat @param {any} value @param {Function} [parse] */
  function checkStat(stat, value, parse) {
    // properties stack for stats counter dictionary
    var stack = stat.split("."), tmpSums = sums, tmpSkip = skipped;
    for (var i = 0; ++i < stack.length; tmpSkip = tmpSkip[stack[i - 1]])
      tmpSums = tmpSums[stack[i - 1]];
    stat = stack.slice(-1)[0];
    typeof value != "undefined" ?
      tmpSums += parse ? parse(value) : value :
      tmpSkip++;
  }
  for (var blocks = ship.blocks, i = blocks.length; i-- > 0;) {
    var id = Block.ID[blocks[i].internalName];
    checkStat("cost", Block.COST[id], function (val) {
      return val < 0 ? 0 : val;
    });
    checkStat("weight", Block.WEIGHT[id]);
    checkStat("strenght", Block.STRENGTH[id]);
  }
  addLine("Blocks amount: " + blocks.length);
  addLine("")
  Edit.listeners.push();
}, "TODO: create Vehicle stats descriptions when command gets released.", {
  // ???
});
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
Command.groupName = "";
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
  /** navigation element returned to set cmds variable */
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
    Command.stop();
  };
  e0.appendChild(cmdsHeader);
  e1 = e0.appendChild(EL("button"));
  e1.appendChild(tN("X"));
  e1.onclick = function () {
    nav.style.display = "none";
    Command.stop();
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
    // Command.currentInit #RIPCMDSRLD
    return Command.currentInit = function () {
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
function check_contentScript() {
  var contentScript = GE("contentScript"), data = "";
  if (contentScript && (data = contentScript.innerText)) {
    //@ts-ignore no problem if it throws error
    contentScript.parentNode.removeChild(contentScript);
    document.body.appendChild(EL("script")).appendChild(tN(data));
  }
}

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
var rend_backgHangar = F;
+function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "https://kaabel.github.io/.d1r.dbv/assets/AlphaLunar.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)
      return;
    try {
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
  var backgPrimary = rend_background,
    hgw = 544, hgh = 654;
  rend_background = F;
  var ocw = canvas.width, och = canvas.height;
  canvas.width = hgw;
  canvas.height = hgh;
  var osc = sc, oxV = vX, oyV = vY, oship = ship;
  sc = 8;
  vX = 264;
  vY = 464;
  ship = backgHangarInit.ship;
  expensiveRenderer();
  var hangarBackground = EL('img');
  hangarBackground.src = canvas.toDataURL('image/png');
  canvas.width = ocw;
  canvas.height = och;
  sc = osc;
  vX = oxV;
  vY = oyV;
  ship = oship;
  function backgSecondary() {
    backgPrimary();
    ctx.drawImage(hangarBackground, sc * -33 + vX, sc * -58 + vY,
      sc * hgw / 8, sc * hgh / 8);
  };
  backgSecondary.primary = backgPrimary;
  rend_background = backgSecondary;
  render();
};
backgHangarInit.ship = Ship.fromObject({b:[]});
backgHangarInit.ready = 0;
var rend_background = defaults.editorBackground ?
  rend_backgPattern : rend_backgColor, rend_initialized = [F];
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

/** @type {Block[]} */
var foundBlocks = [];

var old_UI = Command.press = press = function (x, y) {
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
      Logic.removeLogic(arr[i], ship.prop && ship.prop.nodeList || []);
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
  var rand = placingBlock(), logics = [];
  if (found.length || blockBind.changingColor) {
    foundBlocks = found;
    return render();
  }
  if (rand !== "remove") {
    // BLOK for real!!!
    var blok = new Block(rand, [0, x * 2, y * 2], [0, !1, 0],
      Block.Properties.addProperty(rand, Logic.addLogic(
        rand,
        {color: Color.default(rand)},
        ship.prop && ship.prop.nodeList || logics,
        ship.blocks
      )));
    if (logics.length && ship.prop)
      (Logic.nodes =
        /** @type {(Logic<any>|undefined)[]&{ownerShip:Ship;}} */
        ((ship.prop.nodeList = logics).concat([]))).ownerShip = ship;
    (blok.properties.nodeIndex || []).forEach(function (e) {
      var node = logics[e];
      node ? node.owner = blok : console.error("no node in temp code");
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
      utilities.rend_UI = Command.rend_UI;
      press = Command.press;
      return render();
    }
  st.display = "none";
  Command.stop();
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
  if (
    Logic.rend &&
      (Logic.nodes = function (current) {
        var logics = 
          /** @type {(Logic|undefined)[]&{ownerShip:Ship}} */
          (current || [UDF]);
        logics.ownerShip = ship;
        return logics;
      }(ship.prop && ship.prop.nodeList))
  )
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
      if (!(node = Logic.nodes[j]) || (n = node.type) < 2)
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
    for (j = Logic.nodes.length; j-- > 0;) {
      if (!(node = Logic.nodes[j]) || node.pairs instanceof Array)
        continue;
      ctx.strokeStyle = node.type & 1 ? "#3e4" : "#e23";
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      (node = Logic.nodes[node.pairs]) ?
        ctx.lineTo(node.x, node.y) : 0;
      ctx.setLineDash([sc, sc / 2]);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    for (j = Logic.nodes.length; j-- > 0;) {
      if (!(node = Logic.nodes[j]) || (n = node.type) > 1)
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
  var t = Date.now() - t | 0;
  rend_speeeeed[t] = rend_speeeeed[t] + 1 || 0;
}

init = function () {
  rend_checkColors();
  check_contentScript();
};

function onlyConsole(m,s,l,c,e) {
  if (e && e.stack)
    return "" + m + "\n" + e.stack;
  return "" + m + "\n\t" + s + ":" + l + ":" + c;
};
