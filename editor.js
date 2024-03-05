//@ts-check
"use strict";
// v.0.1.1
/** @typedef {HTMLElementTagNameMap} N @overload @returns {HTMLDivElement} */
/** @template {keyof N} K @overload @param {K} e @returns {N[K]} */
/** @overload @param {string} e @returns {HTMLElement} */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}

/** @typedef addingStyles */
(function addingStyles(css) {
  var s = "style", e = GE(s) || document.head.appendChild(EL(s)), t = null;
  for (e.id = s; t = e.childNodes[0];)
    e.removeChild(t);
  e.appendChild(document.createTextNode(css));
})("#commandsTab" +
  "{position:fixed;width: 350px;height: 500px;border-radius: 10px;" +
  "background-color: #000a;color: #888;" +
  "font-family:monospace,sans-serif,Courier,Consolas;}" +
  "#commandsTab div:first-child" +
  "{display: flex;flex-direction: row;border-bottom: 1px solid #777;}" +
  "#commandsTab div:first-child *{padding: 5px;}" +
  "#commandsTab button" +
  "{border: none;background-color: inherit;color: inherit;}" +
  "#commandsTab div:first-child button" +
  "{font-weight: bold;padding-top: 3px;}" +
  "#commandsTab header{flex-grow: 1;}" +
  "#commandsTab .content button{display: block}"
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
var dbcBackg = document.body.appendChild(document.createElement("img"));
dbcBackg.style.display = "none";
dbcBackg.src = "./assets/_dbc_background.png";
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

var renderedShip = Ship.fromObject({name: "Starter Droneboi"});
// var block = new Block("Block", [0, 0, 0], [0, 0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);

/** timeToString @param {number} [t=Date.now()] @param {number} [f=1] ?1 */
function dateTime(t, f) {
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
  arr.push(new Block(placingBlock() ,[y, 0, -x], [0, !0, 0]));
  render();
};

contextmenu = function commands(x, y) {
  var id = "commandsTab", nav = GE(id) || EL("nav");
  nav.style.left = x - 175 + "px";
  nav.style.top = y - 250 + "px";
  if (GE(nav.id = id))
    return;
  (bd || EL()).appendChild(nav);
  /** for #commandsTab styles @see {addingStyles} */
  var e0 = nav.appendChild(EL()),
  /** @type {HTMLElement} */
    e1 = e0.appendChild(EL("button"));
  e1.appendChild(document.createTextNode("\xa0<"));
  e1 = e0.appendChild(EL("header"));
  e1.appendChild(document.createTextNode("Hello there is h\u0435cker."));
  e1 = e0.appendChild(EL("button"));
  e1.onclick = function () {
    (bd || EL()).removeChild(nav);
  };
  e1.appendChild(document.createTextNode("X\xa0"));
  (e0 = nav.appendChild(EL())).className = "content";
  /** @param {string} s */
  function blockBind(s) {
    e1 = e0.appendChild(EL("button"));
    e1.appendChild(document.createTextNode(s));
    e1.onclick = function () {
      placingBlock = function () {
        return s;
      };
    };
  }
  blockBind("Core");
  blockBind("Block");
  blockBind("Wedge");
  blockBind("Small Hydrogen Thruster");
  blockBind("Reaction Wheel");
  blockBind("Small Hydrogen Tank");
  blockBind("Small Battery");
  blockBind("remove");
}

render = function expensiveRenderer() {
  canvas.width = canvas.width;
  try {
    helpCanvas.width = dbcBackg.naturalWidth || dbcBackg.offsetWidth;
    helpCanvas.height = dbcBackg.naturalHeight || dbcBackg.offsetHeight;
    ctx.fillStyle = ctx.createPattern(dbcBackg, "repeat") || "";
    var n = sc / 2, sx = vX - sc * 37, sy = vY - sc * 37;
    ctx.fillStyle instanceof CanvasPattern &&
      ctx.fillStyle.setTransform(new DOMMatrix([n, 0, 0, n, sx, sy]));
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } catch (e) {
    console.debug(e, "at drawing background");
  }
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
    rc.fillStyle = "#49ff68";
    rc.fillRect(0, 0, 32, 32);
    rc.globalCompositeOperation = "source-over";
    rc.drawImage(imgOverlay, sx, sy, 32, 32, 0, 0, 32, 32);
    ctx.drawImage(helpCanvas, dx, dy, dw, dh);
  }
};
