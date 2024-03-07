//@ts-check
"use strict";
// v.0.1.2
/** @typedef {HTMLElementTagNameMap} N @overload @returns {HTMLDivElement} */
/** @template {keyof N} K @overload @param {K} e @returns {N[K]} */
/** @overload @param {string} e @returns {HTMLElement} */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}

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

/** @typedef addingStyles */
(function addingStyles(css) {
  var s = "style", e = GE(s) || document.head.appendChild(EL(s)), t = null;
  for (e.id = s; t = e.childNodes[0];)
    e.removeChild(t);
  e.appendChild(document.createTextNode(css));
})(
  "#commandsTab" +
  "{position:fixed;width: 350px;height: 500px;border-radius: 10px;" +
  "background-color: #000a;}" +
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
  "#commandsTab header div{flex-grow: 1;}" +
  "#commandsTab .content button, #commandsTab .items button" +
  "{display: block;width: 350px;}" +
  "#commandsTab button div" +
  "{display: inline-block;position: absolute;right: 5px;}"
);

var imgOverlay = document.body.appendChild(document.createElement("img"));
imgOverlay.id = "3";
imgOverlay.style.display = "none";
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAgCAYA\
AAALxXRVAAAAAXNSR0IArs4c6QAABShJREFUeF7tXc1O20AQdhyCAmqVQ0+gHsvD9BmQKhAI9RlK\
SPgpnHiACgGHvkRfppE4VNx6qhRCQxLKbCZZD17vrONduzC5uMbrndmZ+fbbGa/dWhRFk0h+ugVq\
gc1RCfvHcQzDrtXU8EejUaodlhrLoO9kPEo1k+m+er2u7puo4Y7H48T9zWZYqw8GYeWZpD0ZuRIB\
UA1zqBgMrEsl7C8ADOz1qTgdgGUHXlXkIyBC6TOVF38PGwLjT7q8vb09OF1fX4fjyclJqjoHBweZ\
ap6dnSGDJo6Hh4dwfnt7C8fLy0vKhKHsjfrTia8U+QLAeTihAwSAAsAQcyHEmQDwOQDpDOl7ZgwN\
+MT4anEdzrsdxWzIUNfX13DebrcTwYjXTRGKDIrXkRG3trYSDPv1VDHlw/AvNvVtZ6qyMCCxSNUc\
EAoYoeSkBqAAcGaWUuJPGNDMgKGYsFQAYtGpFqsqZTwNQ8z1KONRhqOoNrXHnHI0mlVPy1ryL5oD\
2opmXCDLEpTJwL4B4rt/02oxIVcAyK5+CwALypBdcwBfQLE5tKDhGruBGRsBSHNByniuOSC2x36w\
Gqo97smsAi8tqWrt8rKbGfp9bG+qLierwIzHTwk/fZx8Tij0o/aNKmhjQmFAJgP6XooKAMHC6UAR\
AM6j1DVQWDOABgJbe7cp0N7alQF9A9G2VITrm5ubcFxbW0ttf35+7joTQ3vc4dLe/wLnlLno87t6\
XVVP8TccDuGf9Hki7UfLBUkOGO+nDajZnJw+/b3Xe2P3qNZiY+MPnPX76f1G0Rj61X62+IN4ocxH\
ldKYkNWfSxFGAKis7WspagqwhN0FgDwcvlgA/n7/IdMC7379xOusGcBhBuJZnt8qLwOihFBABDnd\
bpc/sn8JzdHRkZMf6E4VzNmQwS4uLqC/RqMBx+FwmPDvysoK6Hl3dwfXHZgwU89mU014vd5bp/HP\
AWgsrrj6vxoMKACcxYEAUIOEAFAZw/sSVAD4bCL2BcTUpSeVXkAuCHK4DGirFjYaDehve3sbVKVM\
SveapjwXTAxRGHBuDjCsAFAAmLUWFADOHkewUjDnIowA0Bh+RTNhrtyPasfIBYUBldFYgCm9CioA\
FAAKA5otIDkgv1bmWgXj9rwoE7Jyv9XV1YQ+rVYrVT/bc0HbDhju+3u49MScbnd3NzMH5L4NITmg\
5IBc4GE7AWAURQJA3pLWOQd0iEbWmlrrz9beQTSrqS8GXBSIheR+rrkglwmvrq6ga/y2C5VjA17e\
vaA3N+o54PSTNVYHaw/iDV8ayLcXtPQc0DryeQMboHwDwKaqb/l5mVAAqHkO94IKAG3h7H7dNwBs\
GoWSzwVirtyPDtJXLohyPL4NkboXtNVSe0Hv76m7bO5V1weDl7MXlDdifqtQADBpFEq+AFB7IJ+x\
BBUA8rFTSMtQACgbgNyc0MvSk5sL4tsQ49ED3NLpdOBY1Bvxx8fH0xxOZSba90O5E1QhQad14hp/\
rhTMSsFcijBlG+B/l28LNAFg0R7O7k8ASOxjmzGKdo+rA4qST4FYSO63QC4It5q+24lMiP275oD4\
/t/Ozg504boXtCijp/RTlv8TKyJhwLlnQk0AAkDtu6O2zdgCQH8WqMQMpA0vFABpTgjnru/7LeoW\
bY8odEXf38OdKhpAlJ7T74ea5Nvu4+6sWXR8jPsrEX/CgOEZUAAon6Z/igGYAHQAMiYNafKKLJC6\
IsAdM6b/HSnjrQLXKuKrMLUA8FW4OdcgBYC5zOZ20yPEnS490BNrKwAAAABJRU5ErkJggg==";
var imgMask = document.body.appendChild(document.createElement("img"));
imgMask.style.display = "none";
imgMask.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAgCAYAAAA\
LxXRVAAACWUlEQVR4Xu2d4XqDIAxF6/s/9Oa+1a1lstwgJKinf0sTuORwo7bb8uCFAiiQpsCSlpn\
EKIACjx8AP9ZXpB7L+nrNN0v+cl5RmmSvP2qdtTzZ68/KD4DPitg2AABzUMwCYFttVn4ALADcNiQ\
axKwCyMHtb9bs9WflB0AAnILBLABwwAoAo6tCvQaNcsLsAhyttxU/e/1qfqsevHFwQOMAsAS3Ckt\
9X904NZ41Lmpd1jyyHcib39JN3cctDgCKDmwJrxYa4/YVqBXuUd3VuBY43nmo8QAQAKc4E1RQvJN\
V46rAqPnVeDKAo04AbwugCmCNU68ByzheHax58P63AiooXr3UuCowan41HgCKDrgJD4BqCfrGqaD\
4oupgq8Co+dV4AOgEEBD3HevowQSAqwL/0e0VWD0BztaCAiAAKi6o1j8O2OiAdwVRLSylSF/H4IA\
4YNOX0b2dgbcwZxsPgNqOqDrhgAcd8G5OqBaWVqa/o3BAHLDJAQHwHbXWjgAAAfAQgHcHsRU86yZ\
cVNzezq7GowXt1IIC4PsPrGlBtacKANgZwLuB6AWtNp4WlBa0SwsKgG1IAqABYJus9U+1fhez1zy\
i8h+9hum13tnjACAAdnVAnNCHPAAC4BAAAVED0bprqEXRR3k7IG8nY62HH+QG/1lE7wbqpXSNkVb\
B9l4lAAYDUG6gdwN6FQAg7is5O4C99r/siOTHEKMmYD2I7Z231hJGFQAAAuCXArSgkznwqIPmLHG\
jDsDsAxgHfCqQ1YJyUwYH3HXAs5yUzBMFrqQA/x3pSrvJWk6nwCc1MChOzix1CgAAAABJRU5ErkJ\
ggg==";
var imgBackg = document.body.appendChild(document.createElement("img"));
imgBackg.style.display = "none";
imgBackg.src = "./assets/_dbc_background.png";
var helpCanvas = document.createElement("canvas"),
  rc = function (rc) {
    return rc instanceof CanvasRenderingContext2D ?
       rc : new CanvasRenderingContext2D();
  }(helpCanvas.getContext("2d"));

/**
 * @typedef {[number,number,number]} XYZPosition
 * @typedef {[0|1|2,boolean,0|1|2|3]} Rotation
 * @param {string} name
 * @param {XYZPosition} pos
 * @param {Rotation} rot
 * @param {object} [prop={}]
 * @param {string} [color=""] */
function Block(name, pos, rot, prop, color) {
  this.internalName = name;
  this.position = pos;
  this.rotation = rot;
  this.properties = prop || {};
  this.properties.color = color || "";
  Object.seal(this);
}
/** @param {Array<object>|object} blocks */
Block.arrayFromObjects = function arrayFromObjects(blocks) {
  var bs = blocks instanceof Array ? blocks : [blocks];
  throw new Error("Not implemented");
  return [new Block("Block", [0, 0, 0], [0, !0, 0])];
};
/** @param {number} n */
Block.generateArray = function generateArray(n) {
  if (n !== -69)
    throw new Error("Not implemented. (only arg0: n = -69 works)");
  /** @type {Block[]} */
  var blocks = [];
  for (var i = 12, SH = "Small Hydrogen "; i-- > 0;)
    blocks.push(new Block((i % 3 !== 1 ?
      [SH + "Thruster", SH + "Tank", "Small Battery", "Wedge"] :
      ["", "Block", "Core", "Reaction Wheel"])[i / 3 | 0],
      [(i / 3 | 0) * 2 - 4, 0, i * 2 % 6 - 2],
      [0, !0, i === 9 ? 1 : 0]));
  blocks[10] = blocks[11];
  blocks.length--;
  // blocks.push(new Block("Wedge", [4, 0, 2], [0, !0, 2]),
  //   new Block(SH + "Thruster", [4, 0, -4], [0, !0, 1]));
  return blocks;
};

/**
 * @param {string} name
 * @param {Array<number>} version
 * @param {string} time
 * @param {Array<Block>} blocks
 * @param {object|null} [properties=null] */
function Ship(name, version, time, blocks, properties) {
  this.name = name;
  this.gameVersion = version;
  this.dateTime = time;
  this.blocks = blocks;
  /** Ship properties (shorthened since it is db/dr non-standard) */
  this.prop = properties || null;
  Object.seal(this);
}
/** @param {object} object */
Ship.fromObject = function fromObject(object) {
  var o = {
    name: object.name || object.n,
    ver: object.gameVersion || object.version || object.gv,
    time: object.dateTime || object.time || object.dt,
    blocks: object.blocks || object.b,
    props: object.properties,
    add: object.ls || object.nc ? {
      grid: object.ls,
      logic: object.nc
    } : null
  };
  var name = typeof o.name === "string" ? o.name : "[unnamed]",
    ver = (typeof o.ver === "string" ?
      o.ver.split(",") :
      o.ver instanceof Array ?
        o.ver:
        []).map(Number),
    time = typeof o.time === "string" ? o.time : dateTime(),
    blocks = o.blocks instanceof Array ?
      Block.arrayFromObjects(o.blocks) :
      Block.generateArray(-69),
    // something more was supposed to be done like ...?
    props = o.props;
  return new Ship(name, ver, time, blocks, props);
};

var settings = {
  /** (default) true: image pattern, false: color */
  editorBackground: typeof DOMMatrix != "undefined",
  /** mumst be in #xxxxxx hex color format */
  editorBackgroundColor: "#111111"
};
// naming may change? + meaningless comment
function saveSettings() {
  var n = 0, arr = [+settings.editorBackground];
  if (isNaN(n = Number("0x" + settings.editorBackgroundColor.slice(1))))
    throw new Error("Wrong format of editorBackgroundColor setting");
  arr[0] += (n & 0x7fff) << 1;
  arr[1] = n >> 15 & 0xffff;
  storage.setItem("D1R_DBV_editor", String.fromCharCode.apply(String, arr));
}
function loadSettings() {
  var s = storage.getItem("D1R_DBV_editor") || "";
  if (s.length !== 2)
    return !s.length ? void 0 :
      console.error("Unsupported length of localStorage item");
  var n = 0, arr = s.split("").map(function (e) {
    return e.charCodeAt(0);
  });
  settings.editorBackground = !!(arr[0] & 1);
  s = ((arr[0] & 0x7fff) + ((arr[1] & 0x01ff) << 16) >> 1).toString(16);
  settings.editorBackgroundColor = "#" + "000000".slice(s.length) + s;
}
loadSettings();

var renderedShip = Ship.fromObject({name: "Starter Droneboi"});
// var block = new Block("Block", [0, 0, 0], [0, 0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);

/** timeToString @param {number} [t=Date.now()] @param {number} [f=1] ?1 */
function dateTime(t, f) {
  // uses unix timestamp input
  if (typeof t !== "number")
    t = Math.floor(Date.now() / 1000);
  var i = 0, n, s, months = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30];
  n = ((t % 60) * (f || 1) | 0) / (f || 1);
  s = ":" + (n < 10 ? "0" + n : n);
  n = (t = Math.floor(t / 60)) % 60;
  s = ":" + (n > 9 ? n : "0" + n) + s;
  s = " " + (t = Math.floor(t / 60)) % 24 + s;
  n = Math.floor(t / 24);
  t = Math.ceil(n % 365.25);
  if (t === 365 && !(n / 365.25 & 2))
    return "01.01." + Math.floor(n / 365.25 + 1971) + s;
  s = "." + (n / 365.25 + 1970 | 0) + s;
  if (n % 1461 > 788)
    t--;
  while (t > months[i])
    t -= months[i++] + 1;
  s = "." + (++i > 9 ? i : "0" + i) + s;
  t += 1 + +(n % 1461 === 789);
  return (t > 9 ? "" : "0") + t + s;
}

/** @function base64ToUint8array */
function base64ToUint8array(base64) {
  var uint8array = [], buffer = 0, i = 0, p = 0, c;
  for (; i < base64.length; i++) {
    c = base64.charCodeAt(i);
    if (c > 64)
      (c & 223) < 91 ? c -= c & 32 ? 71 : 65 : c = 128;
    else if (c < 58)
      c > 46 ? c === 47 ? c = 63 : c += 4 : c === 43 ? c = 62 : c = 128;
    else if (c === 61) {
      if (i & 2) {
        i & 1 ?
          i + 1 === base64.length ?
            p = 0 :
            c = 129 :
            i + 2 === base64.length && base64.charAt(i + 1) === "=" ?
              p = +!(i += 2) :
              c = 137;
        buffer !== 0 ? c = 145 : 0;
      } else
        c = 130;
    } else
      c = 128;
    if (c & 128)
      throw new Error(["char", "padding", "padding char"][c & 7] +
        " error " + (c >> 3 & 3 ) + " : " + buffer + " pos.: " + i);
    buffer = (buffer << 6) | c;
    if (p) {
      uint8array.push(buffer >> (p -= 2) & 255);
      buffer &= 63 >> (i << 1 & 6);
    } else
      p = 6;
  }
  return new Uint8Array(uint8array);
}

function dbv_findPos() {
  var posArr = renderedShip.blocks.map(function (e) {
    return e.position;
  });
}
var placingBlock = function () {
  return ["Core", "Block", "Wedge", "Small Hydrogen Thruster",
    "Reaction Wheel","Small Hydrogen Tank", "Small Battery"
    ][Math.random() * 7 | 0];
};
/** @param {string} s */
function blockBind(s) {
  return function () {
    placingBlock = function () {
      return s;
    };
  };
}

/**
 * @typedef {{name:string,type:string,fn:(ev:Event)=>any}} CommandItem
 * @param {string} name 
 * @param {string} description 
 * @param {CommandItem[]} items indefinite
 * @param {boolean} [setting=false] */
function Command(name, description, items, setting) {
  this.name = name;
  this.description = !setting ? description : "";
  if (setting && items.length !== 1)
    throw new Error("Setting must contain only boolean handler.");
  this.items = items;
  this.setting = !!setting;
  Object.freeze(this);
}
Command.list = [new Command("Select block", "Select block from list of block\
s. Last item \"remove\" removes existing block.", function () {
  var ar = "remove,Small Battery,Small Hydrogen Tank,Reaction Wheel,Small Hy\
drogen Thruster,Wedge,Block,Core".split(","),
    /** @type {CommandItem[]} */
    items = [];
  for (var i = ar.length; i-- > 0;)
    items.push({
      name: ar[i],
      type: "button",
      fn: blockBind(ar[i])
    });
  return items;
}())];
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
Command.add("Change editor background", [
  {name: "Image pattern", type: "checkbox", fn: function (ev) {
    if (!(this instanceof HTMLInputElement))
      return;
    render_background =
      (settings.editorBackground = this.checked) ?
        render_backgPattern :
        render_backgColor;
    saveSettings()
    render();
  }},
  {name: "Background color", type: "input", fn: function (ev) {
    var r = this instanceof HTMLInputElement ?
      new RegExp("#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])|#(\
[0-9a-f])([0-9a-f])([0-9a-f])").exec(this.value.slice(0, 7)) :
      null;
    console.log(r);
    if (r)
      settings.editorBackgroundColor = "#" + (r[0].length < 5 ?
        r[4] + r[4] + r[5] + r[5] + r[6] + r[6] :
        r[1] + r[2] + + r[3]);
    saveSettings()
    render();
  }}
], "");

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
  e1.appendChild(document.createTextNode("<"));//\xa0
  back.visibility = "hidden";
  e1.onclick = function () {
    content.style.display = cmdsHeader.innerText = "";
    items.style.display = "none";
    back.visibility = "hidden";
  }
  e0.appendChild(cmdsHeader);
  e1 = e0.appendChild(EL("button"));
  e1.appendChild(document.createTextNode("X"));//\xa0
  e1.onclick = function () {
    nav.style.display = "none";
  };
  var content = nav.appendChild(EL()), items = nav.appendChild(EL());
  content.className = "content";
  items.className = "items";
  (e1 = nav.appendChild(EL())).style.display = items.style.display = "none";
  e1.appendChild(document.createTextNode("Search commads... coming spoon"));
  /** @param {Command} item */
  function initItems(item) {
    return function () {
      var arr = item.items;
      cmdsHeader.innerText = item.name;
      content.style.display = "none";
      items.style.display = "";
      back.visibility = "visible";
      for (; items.firstChild;)
        items.removeChild(items.firstChild);
      for (var i = 0; i < arr.length; i++) {
        var s = arr[i].type, isBtn = s === "button";
        var isChck = s === "checkbox", e = EL(isChck ? "input" : s);
        if (isChck && e instanceof HTMLInputElement)
          e.type = "checkbox";
        e[isBtn ? "onclick" : isChck ? "onchange" : "oninput"] = arr[i].fn;
        (isBtn ? e : items).appendChild(document.createTextNode(
          arr[i].name + (isBtn ? "" : ": ")));
        items.appendChild(e);
        !isBtn && items.appendChild(EL());
      }
      items.appendChild(EL()).innerText = item.description;
    }
  }
  for (var i = 0; i < Command.list.length; i++) {
    var item = Command.list[i];
    content.appendChild(e0 = EL("button"));
    e0.appendChild(document.createTextNode(item.name));
    e0.onclick = initItems(item);
    e0.appendChild(EL()).appendChild(document.createTextNode(">"));
  };
  return (bd || EL()).appendChild(nav);
})();

function render_backgPattern() {
  try {
    helpCanvas.width = imgBackg.naturalWidth || imgBackg.offsetWidth;
    helpCanvas.height = imgBackg.naturalHeight || imgBackg.offsetHeight;
    ctx.fillStyle = ctx.createPattern(imgBackg, "repeat") || "";
    var n = sc / 2, sx = vX - sc * 37, sy = vY - sc * 37;
    // ctx.fillStyle instanceof CanvasPattern &&
    //   ctx.fillStyle.setTransform(new DOMMatrix([n, 0, 0, n, sx, sy]));
    ctx.translate(sx, sy);
    ctx.scale(n, n);
    ctx.fillRect(-vX / n + 74, -vY / n + 74, canvas.width / n, canvas.height / n);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } catch (e) {
    console.debug(e, "at drawing background");
  }
}
function render_backgColor() {
  canvas.style.backgroundColor = settings.editorBackgroundColor;
}
var render_background = settings.editorBackground ?
  render_backgPattern : render_backgColor;

press = function press(x, y) {
  x = Math.floor((x - vX - 1) / 2 / sc) * 2;
  y = Math.floor((y - vY - 1) / 2 / sc) * 2;
  for (var i = 0, arr = renderedShip.blocks; i < arr.length; i++)
    if (arr[i].position[0] === y && arr[i].position[2] === -x) {
      if (placingBlock() === "remove") {
        arr[i] = arr.slice(-1)[0];
        arr.length--;
      } else
        //@ts-ignore
        arr[i].rotation[2] = arr[i].rotation[2] + 1 & 3;
      return render();
    }
  placingBlock() !== "remove" &&
    arr.push(new Block(placingBlock(), [y, 0, -x], [0, !0, 0]));
  render();
};
contextmenu = function commands(x, y) {
  cmds.style.left = (x > 178 ? x - 175 : 5) + "px";
  cmds.style.top = (y > 255 ? y - 250 : 5) + "px";
  cmds.style.display = "";
}

var cmdsMove = !1, cmdsX = 0, cmdsY = 0;
over = function over(e) {
  if (e instanceof TouchEvent)
    return;
  if (e.type === "mousedown" && e.target === cmdsHeader) {
    var st = cmds.style,
      x = Number(st.left.slice(0, -2)) || 0,
      y = Number(st.top.slice(0, -2)) || 0;
    cmdsX = x - e.pageX - canvas.offsetLeft;
    cmdsY = y - e.pageY - canvas.offsetTop;
    cmdsMove = !0;
  } else if (e.type === "mousemove" && cmdsMove) {
    var st = cmds.style,
      x = cmdsX + e.pageX - canvas.offsetLeft,
      y = cmdsY + e.pageY - canvas.offsetTop;
    st.left = (x > 3 ? x : 5) + "px";
    st.top = (y > 5 ? y : 5) + "px";
  } else if (e.type === "mouseup")
    cmdsMove = !1;
  // TODO: some nice system to account for end/'hoverleave'
}

render = function expensiveRenderer() {
  canvas.width = canvas.width;
  render_background();
  ctx.imageSmoothingEnabled = false;
  var objs = renderedShip.blocks, names = ["Core", "Block", "Wedge",
    "Small Hydrogen Thruster", "Reaction Wheel",
      "Small Hydrogen Tank", "Small Battery"];
  for (var i = objs.length, idx = 0, pos = [0, 0, 0]; i-- > 0;) {
    idx = names.indexOf(objs[i].internalName);
    pos = objs[i].position;
    var sx = idx * 32, sy = 0, dx = -pos[2] * sc + vX;
    var dy = pos[0] * sc + vY, dw = sc * 2, dh = sc * 2;
    var rot = 10 - objs[i].rotation[2] & 3;
    helpCanvas.width = helpCanvas.height = 32;
    rc.rotate(rot * Math.PI / 2);
    rc.translate(rot > 1 ? -32 : 0, rot && rot < 3 ? -32 : 0);
    rc.drawImage(imgMask, sx, sy, 32, 32, 0, 0, 32, 32);
    rc.globalCompositeOperation = "source-in";
    rc.fillStyle = ["#fff", "#a1a1a1", "#ffd400", "#cece0c", "#49ff68"
      ][[0, 0, 0, 2, 1, 3, 1][idx]];
    rc.fillRect(0, 0, 32, 32);
    rc.globalCompositeOperation = "source-over";
    rc.drawImage(imgOverlay, sx, sy, 32, 32, 0, 0, 32, 32);
    ctx.drawImage(helpCanvas, dx, dy, dw, dh);
  }
};
