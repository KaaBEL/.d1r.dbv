//@ts-check
"use strict";
// v.0.1.34
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
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAYA\
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";
var imgMask = document.createElement("img");
imgMask.src = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACACAIAAAD\
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";
var imgColor = document.createElement("img");
imgColor.src = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAOACAIAAA\
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\
15jfY/ScgLVmGaracAAAAASUVORK5CYII=";
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
function check_contentScript() {
  var contentScript = GE("contentScript"), data = "";
  if (contentScript && (data = contentScript.innerText)) {
    (contentScript.parentNode || OC()).removeChild(contentScript);
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
  check_contentScript();
};

function onlyConsole(m,s,l,c,e) {
  if (e && e.stack)
    return "" + m + "\n" + e.stack;
  return "" + m + "\n\t" + s + ":" + l + ":" + c;
};
