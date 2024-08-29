//@ts-check
"use strict";
// v.0.1.51
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
      break;
    case "123897b6":
      console.log("Debug mode (8)");
      test_debug = !0;
  }
})(/\/[0-9a-zA-Z._+\-]+\/editor\.html(?:#[^?]*)?($|\?[^=]*)/);

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
       rc : new CanvasRenderingContext2D();
  }(helpCanvas.getContext("2d", 
    // shut up chromium browsers
    {willReadFrequently: true}));

/** original settings variable, defines type for settings */
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
  /** @type {typeof defaults|null} alternative to original */
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
  return this.list.push(new Command(name, description, itemsInit,
    settings.group));
};

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
      if (!/__(?:placeholder\d+|NULL)__/.test(s)) {
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
    var block = ship.blocks[text.data = "" + idx],
      /** Block.PROP defeinition of type of current processed block */
      p;
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
          // !!! only one Item of this property type possible
          if (!(itm instanceof Items["Text Inputs"]))
            break;
          var txtI = i, txtInput = props.appendChild(EL("input"));
          txtInput.value = "" + control[txtI];
          txtInput.oninput = function () {
            control[txtI] = txtInput.value;
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
  /** @param {string} old @param {string} replace */
  function updateControlParams(old, replace) {
    /** @type {Block} */
    var block, options = Block.Properties.VALUE[803][0].item.options;
    var strMap = (ship.prop && ship.prop.customInputs || []).map(String);
    /** @param {unknown} param */
    function checkControlBlock(param) {
      if (!(param instanceof Array))
        return console.error("Control Block custom parameter is not an Array\
.");
      if (typeof param[0] != "string")
        return console.error("Index 0 of Control Block parameter property is\
n't string.");
      if (param[0] === old)
        return void (param[0] = replace);
      if (options.indexOf(param[0]) === -1 ||
        strMap.indexOf(param[0]) === -1)
        param[0] = "Up";
    }
    for (i = ship.blocks.length; i-- > 0;)
      if ((block = ship.blocks[i]).internalName === "Control Block")
        checkControlBlock(block.properties.control);
  }
  var customInputs = EL(), template = EL("button");
  /** @param {MouseEvent|Ship.CustomInput} e */
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
    var from = this || template,
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
    if (buffer[0] !== 123 || buffer[buffer.length - 1] !== 125)
      return false;
    try {
      var s = String.fromCharCode.apply(String, buffer),
        obj = JSON.parse(s);
      Ship.fromObject(obj);
      !(obj.significantVersion > 15) && ship.fixPositionAdjustment(!0);
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
      if (ship.prop) {
        var logics = ship.prop.nodeList;
        ship.prop.nodeList = UDF;
      }
      var s = JSON.stringify(ship);
      if (ship.prop && typeof logics != "undefined")
        ship.prop.nodeList = logics;
      download.href = URL.createObjectURL(
        new Blob([s], {type: "application/json"})
      );
      download.download = ship.name + ".json";
      json.value = s.slice(0, 69);
    } catch (err) {
      error.innerText = err;
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
      render();
    } catch (err) {
      error.innerText = err;
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
 file content into text input.\nJSON key is the content of .dbv savefile. It\
 contains textual data and can be opened using text editor.");
Command.push("Base64 key EXPERIMENTAL", function (items, collapsed) {
  var inp = EL("input"), elBtn = EL("button"), error = EL();
  items.push({name: "Base64 key", inp: inp});
  elBtn.onclick = function () {
    error.innerText = "";
    var bs = ship.blocks;
    try {
      ship.withPositionAdjustment(function (temp) {
        inp.value = uint8arrayToBase64(encodeCmprsShip(temp));
      });
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
      if (!/^(:?UGxheWVy)?VmVoaWNsZT/.test(s.slice(0, 18))) {
        var obj = decodeCmprsShip(base64ToUint8array(s));
        ship = Ship.fromObject(obj);
        if (typeof obj != "string")
          ship.fixPositionAdjustment(!(obj.significantVersion > 15));
      } else
        ship = Ship.fromDBKey(atob(s));
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
  locked.type = "checkbox";
  locked.oninput = function () {
    if (locked.checked)
      test_selctLocked = getSelected(!0);
  };
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
}, "Not yet completed actually. Each action uses some specific inputs to pro\
vide its function. Values inside inputs are integers that means that full bl\
ock is 2x2 ad 0.5 by 0.5 is 1x1.\nSelect rectangle:\nThe four inputs togethe\
r with Select rectangle button are used to select area with blocks, starting\
 with left top point [x0, y0] making rectangle with second right bottom poin\
t [x1, y1]. Blocks are selected not by collision with selected area or being\
 fully covered by the area, it select blocks of which position is inside the\
 area, which is quite confusing, because there's no collisions detection yet\
.\nLock selection:\nWhen checkboxes is enabled, actions will be applied to t\
he same blocks selected at that moment of checkbox getting enabled. When it \
is disabled, the block positions inside selection at a time of doing one of \
the actions are used.\nCopy action:\nIt stores current selection of which am\
ount of blocks and types of few first blocks can be seen at the bottom, at t\
he \"Copied:\".\nPaste action:\nReplicates copied selection and also logic c\
onnections to output nodes. In other to prevent accidental blocks stacking t\
he selection is deselected after both Copy and Paste action.\nFill action:\n\
Fills the selection with pseudo randomly selected blocks from copied selecti\
on, by replicating them with all properties except logic connections to outp\
ut nodes.\nRemove action:\nRemoves all blocks inside selection\nAxis X, Axis\
 Y:\nAre two additional inputs for actions below.\nMove action:\nMove select\
ed blocks by specified x and y distance.\nRotate action:\nRotates selected b\
locks by amount in either Axis x or Axis y input around center of editor spa\
ce [0, 0].\nSize action:\nNot implemented yet.\nMirror action:\nMirrors bloc\
ks from left to right and from right to left around center of editor space.\
\nPaint action:\nUses the selected \"Color:\" above to paint selected blocks\
 with it. Custom color option is texture that uses custom hex color. The cus\
tom hex color can be set in \"Select Color\" Command.");

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
    use: {fuel: 0, energy: 0, cargo: 0},
    blocks: [0]
  },
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
      +(crystals > sums.blocks[796] || 0) * 4 ?
        texts[11].data = "requires " + rcAmount() +
          ", remember to take mo\
re crystals for further travelling and enough for return." :
        red.data = "you don't have enough Rift Drives to use " +
          rcAmount() + " for the jump, lighter vehicle needs less RCs." :
      texts[11].data = riftLY.value ?
        dist === 0 ?
          "doesn't require any Rift Crystals since you don't seem going any\
where." :
          "Distance format is not a number." :
          "Type desired Rift Driving Light Years (LY) distance into the inp\
ut.";
    if (sums.blocks[796] > 1)
      red.data += "You can't buy more then one Small Rift Drive in Conquest\
! ";
    if (dist < 0)
      texts[10].data += "Unless you own Time Travel Machine block, you can'\
t regain the Rift Crystals by travelling back. ";
  };
  function updateStats() {
    var xForce = 0, yForce = 0, forces = 0, xWeight = 0, yWeight = 0;
    var useVal = 0;
    function anyUse(val) {
      var n = +(prop.control || [])[0];
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
      var ow = size.w, oh = size.h, w = ow + (ow & 16), h = oh + (oh & 16);
      var x = (ow & 16) / 32, y = (oh & 16) / 32;
      /** @type {number[]} */
      var xys = [x, y, -x, -y], position = block.position;
      x = position[1] + (rot & 1 ? h / 32 : w / 32) + xys[rot];
      y = position[2] + (rot & 1 ? w / 32 : h / 32) + xys[rot + 3 & 3];
      xWeight += x * (Block.WEIGHT[id] || 0);
      yWeight += y * (Block.WEIGHT[id] || 0);
      texts[13].data += " id"+id+'x'+x+'y'+y;
      checkStat("cost", Block.COST[id], function (val) {
        return val < 0 ? 0 : val;
      });
      checkStat("weight", Block.WEIGHT[id]);
      checkStat("strenght", Block.STRENGTH[id]);
      checkStat("store.fuel", Block.FUEL_STORE[id]);
      checkStat("use.fuel", Block.FUEL_USE[id], anyUse);
      checkStat("store.energy", Block.ENERGY_STORE[id]);
      checkStat("use.energy", Block.ENERGY_USE[id], anyUse);
      if (id > 737 && id < 747 || id === 70) {
        forces += useVal;
        rot & 1 ?
          yForce += y * useVal :
          xForce += x * useVal;
        texts[13].data += 'r'+rot+'t';
      }
      checkStat("store.cargo", Block.CARGO_STORE[id]);
      checkStat("use.cargo", Block.CARGO_USE[id], anyUse);
      sums.blocks[id] ? sums.blocks[id]++ : sums.blocks[id] = 1;
    }
    texts[0].data = "Blocks amount: " + blocks.length;
    texts[1].data = "Weight: " + sums.weight + '/' +
    // why no error from skipped.weigh
      (blocks.length - skipped.weight);
    texts[2].data = "Cost: " + sums.cost + "/" +
      (blocks.length - skipped.cost);
    texts[3].data = "Fuel capacity: " + sums.store.fuel + "/" +
      (blocks.length - skipped.store.fuel);
    texts[4].data = "Fuel use: " + sums.use.fuel + "/" +
      (blocks.length - skipped.use.fuel);
    texts[5].data = "Electricity capacity: " + sums.store.energy + "/" +
      (blocks.length - skipped.store.energy);
    texts[6].data = "Electricity use: " + sums.use.energy + "/" +
      (blocks.length - skipped.use.energy);
    texts[7].data = "Cargo capacity: " + sums.store.cargo + "/" +
      (blocks.length - skipped.store.cargo);
    texts[8].data = "Ore mined: " + -sums.use.cargo + "/" +
      (blocks.length - skipped.use.cargo);
    texts[12].data = "WIP debugging data: "
      "(Force: " + forces + ", x: " + xForce + ", y: " +
      yForce + ", result: " + (xForce / forces) + "; Weight: " +
      sums.weight + ", x: " + xWeight + ", y: " + yWeight + ", result: " +
      (xWeight / sums.weight) + ", " + (yWeight / sums.weight) + ")";
    // correct for typescript
    riftLY.oninput && riftLY.oninput([][0]);
    // after adding more text lines don't forget changing j < <texts.length>
  }
  updateStats();
  Command.listening === -1 ?
    Command.listening = Edit.listeners.push(updateStats) - 1 :
    Edit.listeners[Command.listening] = updateStats;
}, "TODO: create Vehicle stats descriptions when command gets released.");
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
y changing amount of RC recalculates distance.\nThanks to catcat9999 for sha\
ring block capacity/use stats from source code in Discord.");
Command.add("Editing Mode", [
  {name: "Enable Logic Editing", type: "button", fn: enableLogicEditing},
  {name: "Enable Ship Editing", type: "button", fn: enableShipEditing}
], "Editing modes is the newest feature that is Work In Progress.");
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
  items.push(moveBack, el);
}, "Reset end components puts all logic blocks with only inputs e.g. thruste\
rs, drills, weapons... visually at their original positions in vehicle to he\
lp indetify them. THIS COMMAND IS LOGIC MODE ONLY.");
Command.groupName = "";
Command.push("Set camera view", function (items, collapsed) {
  // TODO: one input with code like vX<vX>vY<vY>sc<sc> so can save a view
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
 in 'rightclick menu', it can be used to make precise image of your vehicle \
in high quality. When the Commands tab is right clicked the tab dissapears a\
nd activated contextmenu is able to capture to visual.\n\nMENU\nIn menu ther\
e is list of Commands, click one of the buttons to open coresponding Command\
, optionaly sorted in collapsed groups. X sign in top right corner closes th\
e Commands tab.\n\nCOMMAND\nWhen Command is opened its name displays in 'top\
 part', there's also < sign to return back to menu, X sign won't do that. Ea\
ch command has some inputs/buttons, their purpouse is explained in descripti\
on.");

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
    utilities.rend_UI = F;
    press = DefaultUI.press;
    move = DefaultUI.move;
    render();
  };
  e0.appendChild(cmdsHeader);
  e1 = e0.appendChild(EL("button"));
  e1.appendChild(tN("X"));
  e1.onclick = function () {
    nav.style.display = "none";
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

/** instance is sealed @param {string} name @param {string} icon */
function Tool(name, icon) {
  this.name = name;
  this.icon = icon;
  Object.seal(this);
}
/** @type {Tool[]} */
Tool.list = [];

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
5dd,-e02,-15dd,-1b1c c0,-4b0,-a0,-102a,-a0,-26cc z"));
Tool.list.push(new Tool("Skin", "M2b144,2d362 c0,0,-4d72,4e17,-4d7d,4e21 c-6\
e7,65c,-1048,a45,-1a9c,a45 c-ab5,0,-1464,-433,-1b5c,-afc c-520,-4fd,-454c,-4\
679,-4a44,-4b4c c-c03,-ba9,-1c66,-12d7,-2e77,-12d7 c-173c,0,-2bb3,be1,-37a5,\
1de5 c-3b0,590,-9298,df16,-9552,e385 c-1613,23e6,-3db8,3bd6,-6af4,3bd6 c-454\
b,0,-7d25,-382c,-7d25,-7d78 c0,-26dd,11ca,-499a,2d89,-609e ca03,-84e,edd5,-9\
d74,f33b,-a153 c10e2,-c1b,1be2,-1fe5,1be2,-3642 c0,-1388,-864,-251b,-15c5,-3\
14e c-572,-4f7,-44e4,-449f,-475f,-46c5 c-7cd,-6c0,-cb5,-1088,-cb5,-1b69 c0,-\
9a5,3da,-126d,a2a,-1900 c183,-193,4f49,-4f2a,4f49,-4f2a z M7edc,3b238 c1b9d\
,0,314d,-145e,314d,-2ffb c0,-1b9d,-1662,-3200,-3200,-3200 c-1b9d,0,-2ffb,15e\
1,-2ffb,317e c0,1b9d,1511,307c,30ae,307c z M2e440,29ff9 c0,0,111b3,-1140f,11\
267,-114ca c54f,-583,88e,-ce3,88e,-14fe c0,-7fb,-326,-f41,-851,-14be c-34e,-\
382,-3563,-3816,-39d6,-3b78 c-57e,-42d,-c70,-6ab,-13fd,-6ab c-660,0,-c51,1c6\
,-1151,4d8 c-233,159,-712d,4dd6,-712d,4dd6 c0,0,4b83,-6f75,4e90,-7539 c3fc,-\
668,5e2,-185b,-4d7,-2330 c-354,-35c,-70d9,-715b,-744c,-74a9 c-5d4,-594,-de0,\
-8b5,-16c0,-906 c-c44,-70,-26d5,f20,-26d5,f20 c0,0,1181,-18e9,11f2,-2556 c3e\
,-6e8,-21b,-d30,-627,-123c c-1dc,-251,-2951,-2a0d,-2954,-2a10 c-5dd,-5de,-e1\
d,-95f,-1741,-95f c-969,0,-11e1,3b9,-17c5,9e6 c-1ec,203,-112c8,11207,-112c8,\
11207 z"));
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
2,-112d,-2400,-2400,-2400 z"));
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
483 c0,708,0,4316,0,4949 z")));
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
Tool.list.push(new Tool("Undo", "M3f6f3,16ab0 cc15,c15,c15,1fad,0,2bc2 c-c15\
,c15,-1fad,c15,-2bc2,0 c0,0,-334f,-32bd,-ba42,-2670 c-c4f3,ef0,-12d5f,89d9,-\
12d5f,89d9 c42b1,42b1,7222,7222,732f,732f cc15,c15,c15,1fad,0,2bc2 c-4b5,4b5\
,-a8f,795,-10aa,89f c-6aa,122,-21ce2,5967,-22309,59df c-8af,a8,-1198,-254,-1\
83c,-8f9 c-6b7,-6b7,-9b3,-fc1,-8f3,-1888 c85,-615,5940,-21dea,599b,-2210e cc\
3,-6b4,3b8,-d35,8dc,-1259 cc15,-c15,1fad,-c15,2bc2,0 c62,62,733f,733f,733f,7\
33f c0,0,76,-a5,152,-152 c88c2,-6b53,1cea0,-db12,2f024,5037 z"));
Tool.list.push(new Tool("Redo", "Mb37,16889 c12184,-12b4a,26761,-bb8b,2f024,\
-5037 cdb,ac,152,152,152,152 c0,0,72dc,-72dc,733f,-733f cc15,-c15,1fad,-c15,\
2bc2,0 c524,524,818,ba5,8dc,1259 c5b,324,5916,21af9,599b,2210e cc0,8c7,-23b,\
11d0,-8f3,1888 c-6a4,6a4,-f8d,9a2,-183c,8f9 c-626,-77,-21c5f,-58bd,-22309,-5\
9df c-61a,-109,-bf4,-3e9,-10aa,-89f c-c15,-c15,-c15,-1fad,0,-2bc2 c10d,-10d,\
307e,-307e,732f,-732f c0,0,-686c,-7ae9,-12d5f,-89d9 c-86f2,-c4d,-ba42,2670,-\
ba42,2670 c-c15,c15,-1fad,c15,-2bc2,0 c-c15,-c15,-c15,-1fad,0,-2bc2 z"));
function check_contentScript() {
  var contentScript = GE("contentScript"), data = "";
  if (contentScript && (data = contentScript.innerText)) {
    //@ts-ignore no problem if it throws error
    contentScript.parentNode.removeChild(contentScript);
    document.body.appendChild(EL("script")).appendChild(tN(data));
  }
}

/** @param {number} x @param {number} y */
function edit_logic(x, y) {
  ;
}
/** @param {number} x @param {number} y @param {MouseEvent} e */
var edit_logicmove = function (x, y, e) {
  return !1;
};

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
  var backgPrimary = rend_background;
  var defRend = DefaultUI.rend, hgw = 544, hgh = 654;
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
  DefaultUI.rend = defRend;
  canvas = (ctx = octx).canvas;
  sc = osc;
  vX = oxV;
  vY = oyV;
  ship = oship;
  function backgSecondary() {
    backgPrimary();
    ctx.drawImage(
      hangarImg || hangarCanv,
      sc * -33 + vX,
      sc * -58 + vY,
      sc * hgw / 8,
      sc * hgh / 8
    );
  };
  backgSecondary.primary = backgPrimary;
  rend_background = backgSecondary;
  render();
};
backgHangarInit.ship = Ship.fromObject({b:[]});
backgHangarInit.ready = 0;
/** @type {(()=>void)&{primary?:()=>void}} */
var rend_background = defaults.editorBackground ?
  rend_backgPattern :
  rend_backgColor;
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
/** @param {Block} block @param {number} index -1 for no index */
function LogicBlock(block, index) {
  this.internalName = block.internalName;
  this.position = 
    /** @type {XYZPosition} */
    (block.position.slice());
  this.rotation = block.rotation;
  this.properties = block.properties;
  this.logicPosition = block.position;
  this.logicBlockIndex = index;
}
__extends(LogicBlock, Block);
function DefaultUI() {
  throw new TypeError("Illegal constructor");
  this.mode = "any";
}
DefaultUI.createTile = function () {
  /** @type {XYZPosition} */
  var pos = [0, 0, 0],
    /** @type {Rotation} */
    rot = [0, !1, 0];
  /** @param {unknown} val */
  return function (val) {
    if (typeof val == "number" && typeof Block.NAME[val] == "string")
      return new Block(Block.NAME[val], pos, rot);
    if (typeof Block.ID["" + val] == "number")
      return new Block("" + val, pos, rot);
    if (val instanceof Tool)
      return val;
    for (var i = Tool.list.length; i-- > 0;)
      if (Tool.list[i].name === "" + val)
        return Tool.list[i];
    return null;
  };
}();
/** @typedef {Block|LogicBlock|Tool|null} TileType */
/** @param {number|string} type @param {unknown[]} [tiles=[]] */
DefaultUI.createFolder = function (type, tiles) {
  var folder =
    /** @type {TileType[]&{type:TileType}} */
    ((tiles || []).map(DefaultUI.createTile));
  folder.type = DefaultUI.createTile(type);
  return folder;
};
DefaultUI.TILE = {};
DefaultUI.rend = F;
/** @type {(TileType[]&{type:TileType})[]} */
DefaultUI.blockBars = [
  DefaultUI.createFolder("Tune", [690, "Tune"]),
  DefaultUI.createFolder("Rotate", ["Rotate", 802]),
  DefaultUI.createFolder("Skin", ["Skin", 832]),
  DefaultUI.createFolder("Inventory", ["Inventory", 815]),
  DefaultUI.createFolder("Clone"),
  DefaultUI.createFolder("Redo"),
  DefaultUI.createFolder("Flip", ["Flip", 822, "Undo"])
];
DefaultUI.selectedFolder = DefaultUI.blockBars.length - 1;
DefaultUI.inventoryIcon = !0;
/** @type {TileType[]} */
DefaultUI.toolBar = [
  DefaultUI.createTile("Tune"),
  DefaultUI.createTile("Rotate"),
  DefaultUI.createTile("Skin"),
  DefaultUI.createTile("Clone"),
  DefaultUI.createTile("Flip"),
  null,
  DefaultUI.createTile("Undo"),
  DefaultUI.createTile("Redo")
];
/** DefaultUI.press, .move, .contextmenu, .over are memory for
 * 'default' action bind 'callback' for current Ship.Mode,
 * for example used in Command.stop() */
DefaultUI.press = press;
DefaultUI.move = move;
DefaultUI.contextmenu = contextmenu;
DefaultUI.over = over;

function enableShipEditing() {
  var mode = ship.getMode();
  ship = mode.getShip();
  press = DefaultUI.press = old_UI;
  move = DefaultUI.move = function (x, y, z) {
    return false;
  };
  DefaultUI.rend = F;
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
      var temp = logicBlock.logicPosition;
      logicBlock.logicPosition = logicBlock.position;
      logicBlock.position = temp;
    } else
      old[i] = logicBlock = new LogicBlock(logicBlock, i);
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
          var logicBlock = new LogicBlock(block, -1);
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
  DefaultUI.press = press = edit_logic;
  DefaultUI.move = move = edit_logicmove = function (x, y, e) {
    if (e.type === "mousedown") {
      if (!(found = ship.blockAtPonit2d((vX - x) / sc, (y - vY) / sc)))
        return !1;
      // offsets
      oX = (vX - x) / sc - found.block.position[1];
      oY = (y - vY) / sc - found.block.position[2];
      //-console.log("oX:", oX, "oY:", oY);
      blocks = ship.blocks;
      blocks[movingId = blocks.length] = blocks[found.id];
      blocks[found.id] = new Block("__NULL__", [0, 0, 0], [0, !1, 0]);
      render();
      return !0;
    } else if (e.type === "mousemove") {
      if (!found)
        return !1;
      found.block.position[1] = (vX - x) / sc - oX;
      found.block.position[2] = (y - vY) / sc - oY;
      render();
    } else if (e.type === "mouseup") {
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
      render();
    } else
      console.error("edit_logicmove unhandled event type: " +
        e.type + " add it!");
    return !1;
  };
  var oldWidth = 0, oldHeight = 0;
  DefaultUI.rend = function () {
    if (found) {
      ctx.lineWidth = defaults.highlightWidth;
      ctx.strokeStyle = defaults.highlightColor;
      var dx = found.x * sc + vX, dy = found.y * sc + vY;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.strokeRect(dx, dy, found.w * sc, found.h * sc);
    }
    var w = canvas.width, h = canvas.height;
    if (oldWidth !== w || oldHeight !== h) {
      // TODO: reflow for blockbar items
    }
    test_juhus(w, h);
  };
  render();
};
function test_juhus(w, h) {
  /** @param {Block|LogicBlock} block */
  function blockIcon(block) {
    helpCanvas.width = helpCanvas.height = 32;
    rc.fillStyle = "#fff";
    rc.fillRect(0, 0, 32, 32);
    var size = Block.Size.VALUE[Block.ID[block.internalName]];
    rc.drawImage(imgOverlay, -size.x, -size.y);
  }
  function parseParam(s) {
    return (s[0] === "-" ? -("0x" + s.slice(1)) : +("0x" + s)) / 1024;
  }
  /** @param {Tool} tool @param {number} size */
  function toolIcon(tool, size) {
    rc.canvas.width = rc.canvas.height = size;
    rc.scale(size / 256, size / 256);
    rc.beginPath();
    var ctxCommands = {
      M: rc.moveTo,
      L: rc.lineTo,
      C: rc.bezierCurveTo,
      Z: rc.closePath,
      H: function (n) {
        this.lineTo(n, rY);
      },
      V: function (n) {
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
      var c = e[0].toUpperCase();
      if (!ctxCommands[c])
        return console.error("Missing command " + c);
      ctxCommands[c].apply(rc, params);
      rX = x;
      rY = y;
    });
    rc.imageSmoothingQuality 
    rc.fillStyle = "#dbecfe";
    rc.fill();
  }
  /** @param {TileType} type @param {number} size */
  function doAnIcon(type, size) {
    if (type instanceof Tool)
      toolIcon(type, size);
    if (type instanceof Block)
      blockIcon(type);
  }
  /** @param {TileType} tile */
  function doTheItem(tile) {
    tw += 87;
    if (!tile)
      return;
    ctx.beginPath();
    ctx.moveTo(tw, th - 25);
    ctx.arcTo(tw, th - 15, tw + 78, th - 15, 5);
    ctx.arcTo(tw + 78, th - 15, tw + 78, th - 93, 5);
    ctx.arcTo(tw + 78, th - 93, tw, th - 93, 5);
    ctx.arcTo(tw, th - 93, tw, th, 5);
    ctx.closePath();
    ctx.stroke();
    doAnIcon(tile, 60);
    ctx.drawImage(helpCanvas, tw + 9, th - 84, 60, 60);
  }
  ctx.globalAlpha = .9;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(7, h - 19);
  ctx.arcTo(7, h - 7, 19, h - 7, 5);
  ctx.arcTo(275, h - 7, 275, h - 19, 5);
  ctx.arcTo(275, h - 275, 263, h - 275, 5);
  ctx.arcTo(7, h - 275, 7, h - 263, 5);
  ctx.closePath();
  ctx.moveTo(279, h - 19);
  ctx.arcTo(279, h - 7, 291, h - 7, 5);
  ctx.arcTo(w - 7, h - 7, w - 7, h - 19, 5);
  ctx.arcTo(w - 7, h - 101, w - 19, h - 101, 5);
  ctx.lineTo(279, h - 101);
  ctx.closePath();
  ctx.fillStyle = "#0c243c";
  ctx.fill();
  var bars = DefaultUI.blockBars;
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#5577aa";
  for (var i = 0, sw = 279, th = h; i < bars.length; i++) {
    if (!bars[i])
      continue;
    var b = i === DefaultUI.selectedFolder, tw = b ? 168 : 153;
    ctx.globalAlpha = b ? .9 : .8;
    ctx.beginPath();
    ctx.moveTo(sw, h - 101);
    ctx.arcTo(sw, h - tw, sw + 12, h - tw, 5);
    ctx.arcTo(sw + 54, h - tw, sw += 54, h - 146, 5);
    ctx.lineTo(sw, h - 101);
    ctx.closePath();
    ctx.fillStyle = b ? "#0c243c" : "#000c1c";
    ctx.fill();
    doAnIcon(bars[i].type || [][0], 40);
    ctx.globalAlpha = 1;
    ctx.drawImage(helpCanvas, sw - 47, h - (b ? 161 : 146), 40, 40);
    sw += 3;
    tw = 200;
    for (var j = 0; b && j < bars[i].length; j++)
      doTheItem(bars[i][j]);
  }
  for (var j = 0, tw = -72; j < DefaultUI.toolBar.length; j++) {
    doTheItem(DefaultUI.toolBar[j]);
    if (tw > 123) {
      th -= 87;
      tw = -72;
    }
  }
  if (DefaultUI.inventoryIcon) {
    th = h;
    tw = w - 94 - 87;
    doTheItem(DefaultUI.createTile("Inventory"));
  }
};

/** @type {Block[]} */
var foundBlocks = [];

var old_UI = DefaultUI.press = press = function (x, y) {
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
        "Slab Wedge",
        "Wedge",
        "Wedge 1x2",
        "Wedge 1x4",
        "Smooth Corner",
        "Smooth Corner 1x2",
        "Smooth Corner 1x4"
      ].indexOf(s) < 0 ||
        rot === 3 && (e.rotation[1] = !e.rotation[1]);
      // posadj
      // var size = Block.Size.VALUE[Block.ID[s]];
      // if ((size.w | size.h) & 16)
      //   rot > 1 ?
      //     rot === 3 ? --pos[2] : --pos[1] :
      //     rot === 1 ? ++pos[2] : ++pos[1];
      //@ts-ignore
      e.rotation[2] = rot + 1 & 3;
    }
    Edit.eventFire();
    return e;
  })
  // placingBlock function executed sets blockBind.changingColor
  var rand = placingBlock(),
    logics = ship.prop && ship.prop.nodeList || [];
  if (found.length || blockBind.changingColor) {
    foundBlocks = found;
    return render();
  }
  if (rand !== "remove") {
    // BLOK for real!!!
    // TODO: now I could use some unit test for logic,
    // how the hack am I supposed to do that
    var blok = new Block(rand, [0, x * 2, y * 2], [0, !1, 0],
      Block.Properties.addProperty(rand, Logic.addLogic(
        rand,
        {color: Color.default(rand)},
        logics,
        ship.blocks
      )));
    if (logics.length)
      (Logic.nodes =
        /** @type {(Logic<any>|undefined)[]&{ownerShip:Ship;}} */
        (((ship.prop || (ship.prop = OC())).nodeList = logics)
        .concat([]))).ownerShip = ship;
    (blok.properties.nodeIndex || []).forEach(function (e) {
      var node = logics[e];
      node ? node.owner = blok : console.error("no node in temp code");
    });
    arr.push(blok);
  }
  Edit.eventFire();
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
  (DefaultUI.contextmenu = contextmenu = commands)(x, y, e);
};

var cmdsMove = !1, cmdsX = 0, cmdsY = 0;
DefaultUI.over = over = function (e) {
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
  // ^ will hopefully inherit final form which also "doublepress" and
  // other advanced gestures will be provided with
};

/** should serve its purpouse by providing up to date rendering function
 * however to meet requirements of many various uses, and be aware of
 * possible optimisations, a system of global and local (single use)
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
var rend_speeeeed = {}, rend_logs = 69;
/*async*/ function expensiveRenderer() {
  var t = Date.now(), AT = ", at expensiveRenderer();";
  canvas.width = canvas.width;
  rend_background();
  ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = !1;
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
    id !== 794 && rc.fillRect(0, 0, w, h);
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
  DefaultUI.rend();
  if (rend_180) {
    ctx.setTransform(1, 0, 0, 1, canvas.width, canvas.height);
    ctx.rotate(Math.PI);
    ctx.globalCompositeOperation = "copy";
    ctx.drawImage(canvas, 0, 0);
  }
  var t = Date.now() - t | 0;
  rend_speeeeed[t] = rend_speeeeed[t] + 1 || 0;
}

init = function () {
  rend_checkColors();
  check_contentScript();
  enableLogicEditing();
};

function onlyConsole(m,s,l,c,e) {
  if (e && e.stack)
    return "" + m + "\n" + e.stack;
  return "" + m + "\n\t" + s + ":" + l + ":" + c;
};

// Script to showcase Logic editing
ship = Ship.fromObject(decodeCmprsShip(base64ToUint8array("gIAEDEFOT05fU2h1d\
HRsZQAEXVy0aoC/TzvnFnWt0z4R4pYUZx2CorwBRXLToKjrQJPehCK9CdKboLhB4MUPQVwDhrgGi\
GuAuAaIa4C1XkER14AjrgFBjHHEFUWbA4oxBxTVDSjWu1FsOeBYccQw3YRiywPBlnFsGcGWcTR3Y\
Ggxji0HODKK5gYEzYXmQnOhrhXKGhDENSCIa0DR5oKjywFFigOOFQcczw0obnxxxDXgqGsSmGvBE\
1uuied3AltbMCw0NSw0NSw2OCwwLDQ1LDAsNDUsMTEzLDcxLDAsNDUsMCw0NSwwLDQ1LDAsNDUsM\
Tg0LDY4LDI1Miw2OSwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzM\
jEsNDQsMzIxLDQ0LDM2NSw1OSwzMjEsNDQsNDI0LDcwLDQ5NCw2NCw1NTgsNzAsNjI4LDQ5LDY3N\
yw2Miw3MzksNTYsNzk1LDY3LDg2Miw2Miw5MjQsNjIsOTg2LDYyLDEwNDgsNjIsMTExMCw2NSwxM\
Tc1LDU5LDEyMzQsNjIsMTI5Niw2MiwxMzU4LDY1LDE0MjMsNjUsMTQ4OCw2NSwxNTUzLDY1LDE2M\
TgsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMTY2Miw3MCwxNzMyLDYyLDE3OTQsMzksMTgzMyw1N\
iwxODg5LDY2LDE5NTUsNjEsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0XSwie1wiY29sb3JcI\
jpcIk9yYW5nZVwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiR\
GFyayBHcmF5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzNdLFwid2VsZEdyb\
3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzE4MDAwXSxcIm5vZ\
GVJbmRleFwiOlsyLDFdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsX\
CJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzRdLFwid2VsZEdyb3VwXCI6MH17XCJjb\
2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbWzAsMCwwLDBdXSxcIm5vZGVJbmRleFwiOls1X\
SxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJ3Z\
WxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJcIixcImNvbnRyb2xcIjpbMSwwXSxcIm5vZGVJbmRle\
FwiOlszNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiO\
ltdLFwibm9kZUluZGV4XCI6WzIzLDIyLDIxLDIwXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcI\
jpcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTksMThdLFwid2VsZEdyb\
3VwXCI6MH17XCJjb2xvclwiOlwiTGlnaHQgR3JheVwiLFwiY29udHJvbFwiOls3NTAwXSxcIm5vZ\
GVJbmRleFwiOlsyNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJMaWdodCBHcmF5XCIsX\
CJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29ud\
HJvbFwiOlswXSxcIm5vZGVJbmRleFwiOlsxN10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6X\
CJcIixcImNvbnRyb2xcIjpbXSxcIm5vZGVJbmRleFwiOlsxMV0sXCJ3ZWxkR3JvdXBcIjowfXtcI\
mNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiOlsyNzAwMF0sXCJub2RlSW5kZXhcIjpbNyw2X\
SxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwib\
m9kZUluZGV4XCI6WzM3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb\
250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM2XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcI\
jpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM4XSxcIndlbGRHcm91c\
FwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6W\
zM1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExM\
jVdLFwibm9kZUluZGV4XCI6WzMxXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY\
29udHJvbFwiOlsxLDBdLFwibm9kZUluZGV4XCI6WzMzXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb\
3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzMyXSxcIndlbGRHc\
m91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4X\
CI6WzI1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W\
zExMjVdLFwibm9kZUluZGV4XCI6WzI3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoa\
XRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzMwXSxcIndlbGRHcm91cFwiO\
jB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6W\
zI4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExM\
jVdLFwibm9kZUluZGV4XCI6WzI5XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrX\
CIsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY\
29udHJvbFwiOltdLFwibm9kZUluZGV4XCI6WzE2LDE1LDE0LDEzXSxcIndlbGRHcm91cFwiOjB9e\
1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzEyXSxcI\
ndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwX\
CI6MH17XCJjb2xvclwiOlwiXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTBdLFwid\
2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbNDUwMF0sXCJub\
2RlSW5kZXhcIjpbOSw4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb\
250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMjZdLFwid2VsZEdyb3VwXCI6MH0iXQ=="
.replace(/ /g, ""))));
ship.fixPositionAdjustment(!0);
