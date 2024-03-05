//@ts-check
"use strict";
// voxorp-bases.js v0.0.2.9

Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
    isFinite(value) && 
    Math.floor(value) === value;
};

var hiddenLogs = [],
/** @type {Array<string>} */
  imgIDs = [],
/** @type {Array<HTMLImageElement|null>} */
  images = [];
/**
 * @typedef {number} integer
 */
/**
 * @param {OldTile|[string,string,integer,integer,integer]|string} type
 * @param {string} [name]
 * @param {integer} [x]
 * @param {integer} [y]
 * @param {integer|null} [rotation]
 */
function OldTile(type, name, x, y, rotation) {
  if (type instanceof OldTile) {
  /** @type {string} */
    this.type = type.type;
  /** @type {string} */
    this.name = type.name;
  /** @type {integer} */
    this.x = type.x;
  /** @type {integer} */
    this.y = type.y;
  /** @type {integer} */
    this.rotation = type.rotation;
    return Object.seal(this);
  }
  var b = !0;;
  if ((b = type instanceof Array) && type.length === 5) {
    name = type[1];
    x = type[2];
    y = type[3];
    rotation = type[4];
    type = type[0];
  } else if (arguments.length !== 5 || b)
    throw new TypeError("OldTile costructor requires 5 arguments:" +
      " type, x, y, rotation");
  var n = ["building", "ship"].indexOf(type);
  if (typeof type != "string")
    throw new TypeError("1. argument \"type\" is not type of string");
  if (n < 0)
    // keys: building, ship
    throw new TypeError("unknown key value of 1. argument \"type\"");
  if (typeof name != "string")
    throw new TypeError("2. argument \"name\" is not type of string");
  if (typeof x != "number" || !Number.isInteger(x))
    throw new TypeError("3. argument \"x\" is not an integer");
  if (typeof y != "number" || !Number.isInteger(y))
    throw new TypeError("4. argument \"y\" is not an integer");
  if (n ? !Number.isInteger(rotation) : rotation !== null)
    throw new TypeError("5. argument \"rotation\" is not " +
      (n ? "an integer" : "null"));
  this.type = type;
  this.name = name;
  this.x = x;
  this.y = y;
  this.rotation = rotation || 0;
  Object.seal(this);
}

/** unsealed Typed array!
 * @constructor
 * @param {Array<object|null|Array<any>>} arr
 */
function RenderedOldObjects(arr) {
  Object.setPrototypeOf(this, Array.prototype);
  for (var i = this.length = arr.length; i-- > 0;)
  /** @type {OldTile} */
    this[i] = new OldTile(arr[i]);
  /** @type {function} attaches existing or creates new VoxTile */
  this.push = function push() {
    for (var i = arguments.length, args = [], a; i-- > 0;) {
      a = arguments[i];
      args[i] = a instanceof OldTile ? a : a ? new OldTile(a) : null;
    }
    return [].push.apply(this, args);
  }
  this.toString = function toString() {
    for (var i = 0, s = ""; i < this.length; i++)
      if (this[i] === null)
        s += "null; "
      else
        s += this[i].name + "," + this[i].x + "," + this[i].y + "; ";
    return s;
  }
}
/** position which tile has to be inserted in or replaced for
 * @typedef {object} index
 * @property {number} index.i
 * @property {boolean} index.insert
 */
/** binary search in (where) RenderedOldObjects 
 * @param {RenderedOldObjects} where
 * @param {number} x tile position
 * @param {number} y tile position
 * @returns {index} index to insert or replace tile
*/
function binaryFindPos(where, x, y) {
  var bottom = 0, top = where.length - 1, middle;
  while (1) {
    if (bottom === top)
      break;
    middle = Math.floor((bottom + top + 1) / 2);
    if (x > where[middle].x || x === where[middle].x && y > where[middle].y)
      bottom = middle;
    else if (y === where[middle].y && x === where[middle].x)
      return {i: middle, insert: !1};
    else
      top = middle - 1;
  }
  middle = top + +(x > where[top].x ||
    x === where[top].x && y > where[top].y);
  if (middle === where.length)
    return {i: middle, insert: !1};
  return {i: middle, insert: (y !== where[top].y || x !== where[top].x)};
}

var rendered = new RenderedOldObjects([["building", "Wall", 0, 0, null]]);

function placeRandomTile(x, y) {
  var rand = Math.random() * 5 | 0, index = binaryFindPos(rendered, x, y);
  var name = "Wall,Scorer,Dynamo empty,Crate,Laser tile".split(",")[rand];
  var tile = new OldTile("building", name, x, y, null);
  var i = index.i;
  if (index.insert)
    while (i < rendered.length && rendered[i])
      i++;
  if (i >= rendered.length)
    rendered.length++;
  if (index.insert)
    for (; i > index.i; i--)
      rendered[i] = rendered[i - 1];
  rendered[i] = tile;
  render();
}
// D1R DBV editor v0.1

var imgOverlay = document.body.appendChild(document.createElement("img"));
imgOverlay.id = "3";
imgOverlay.style.display = "none";
imgOverlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAgCAYAAAA\
LxXRVAAAAAXNSR0IArs4c6QAABShJREFUeF7tXc1O20AQdhyCAmqVQ0+gHsvD9BmQKhAI9RlKSPg\
pnHiACgGHvkRfppE4VNx6qhRCQxLKbCZZD17vrONduzC5uMbrndmZ+fbbGa/dWhRFk0h+ugVqgc1\
RCfvHcQzDrtXU8EejUaodlhrLoO9kPEo1k+m+er2u7puo4Y7H48T9zWZYqw8GYeWZpD0ZuRIBUA1\
zqBgMrEsl7C8ADOz1qTgdgGUHXlXkIyBC6TOVF38PGwLjT7q8vb09OF1fX4fjyclJqjoHBweZap6\
dnSGDJo6Hh4dwfnt7C8fLy0vKhKHsjfrTia8U+QLAeTihAwSAAsAQcyHEmQDwOQDpDOl7ZgwN+MT\
4anEdzrsdxWzIUNfX13DebrcTwYjXTRGKDIrXkRG3trYSDPv1VDHlw/AvNvVtZ6qyMCCxSNUcEAo\
YoeSkBqAAcGaWUuJPGNDMgKGYsFQAYtGpFqsqZTwNQ8z1KONRhqOoNrXHnHI0mlVPy1ryL5oD2op\
mXCDLEpTJwL4B4rt/02oxIVcAyK5+CwALypBdcwBfQLE5tKDhGruBGRsBSHNByniuOSC2x36wGqo\
97smsAi8tqWrt8rKbGfp9bG+qLierwIzHTwk/fZx8Tij0o/aNKmhjQmFAJgP6XooKAMHC6UARAM6\
j1DVQWDOABgJbe7cp0N7alQF9A9G2VITrm5ubcFxbW0ttf35+7joTQ3vc4dLe/wLnlLno87t6XVV\
P8TccDuGf9Hki7UfLBUkOGO+nDajZnJw+/b3Xe2P3qNZiY+MPnPX76f1G0Rj61X62+IN4ocxHldK\
YkNWfSxFGAKis7WspagqwhN0FgDwcvlgA/n7/IdMC7379xOusGcBhBuJZnt8qLwOihFBABDndbpc\
/sn8JzdHRkZMf6E4VzNmQwS4uLqC/RqMBx+FwmPDvysoK6Hl3dwfXHZgwU89mU014vd5bp/HPAWg\
srrj6vxoMKACcxYEAUIOEAFAZw/sSVAD4bCL2BcTUpSeVXkAuCHK4DGirFjYaDehve3sbVKVMSve\
apjwXTAxRGHBuDjCsAFAAmLUWFADOHkewUjDnIowA0Bh+RTNhrtyPasfIBYUBldFYgCm9CioAFAA\
KA5otIDkgv1bmWgXj9rwoE7Jyv9XV1YQ+rVYrVT/bc0HbDhju+3u49MScbnd3NzMH5L4NITmg5IB\
c4GE7AWAURQJA3pLWOQd0iEbWmlrrz9beQTSrqS8GXBSIheR+rrkglwmvrq6ga/y2C5VjA17evaA\
3N+o54PSTNVYHaw/iDV8ayLcXtPQc0DryeQMboHwDwKaqb/l5mVAAqHkO94IKAG3h7H7dNwBsGoW\
SzwVirtyPDtJXLohyPL4NkboXtNVSe0Hv76m7bO5V1weDl7MXlDdifqtQADBpFEq+AFB7IJ+xBBU\
A8rFTSMtQACgbgNyc0MvSk5sL4tsQ49ED3NLpdOBY1Bvxx8fH0xxOZSba90O5E1QhQad14hp/rhT\
MSsFcijBlG+B/l28LNAFg0R7O7k8ASOxjmzGKdo+rA4qST4FYSO63QC4It5q+24lMiP275oD4/t/\
Ozg504boXtCijp/RTlv8TKyJhwLlnQk0AAkDtu6O2zdgCQH8WqMQMpA0vFABpTgjnru/7LeoWbY8\
odEXf38OdKhpAlJ7T74ea5Nvu4+6sWXR8jPsrEX/CgOEZUAAon6Z/igGYAHQAMiYNafKKLJC6IsA\
dM6b/HSnjrQLXKuKrMLUA8FW4OdcgBYC5zOZ20yPEnS490BNrKwAAAABJRU5ErkJggg==";
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
/** mask in binary for bit 0 not include texture bit 1 include that pixel */
var imgIdkActually = base64ToUint8array("///////////////////////////////////////\
////////////////////////////////////AAAADwAAAA8/////AAAAD/////8AAAAPAAAADwAA\
AA8AAAAPP////wAAAA//////AAAADwAAAA8AAAAPAAAADw////8AAAAP/////wAAAA8AAAAPAAAA\
DwAAAA8P////AAAAD/////8AAAAPAAAADwAAAA8AAAAPA////wAAAA//////AAAADwA/wA8AAAAP\
AAAADwP///8AAAAP/////wAAAA8AP8APAAAADwAAAA8A//////////////8D//wPAP/wDwAAAA8A\
AAAPAP//////////////A//8DwD/8A8A//APAAAADwA//////////////wP//A8A//APAP/wDwAA\
AA8AP/////////////8D//wPAP/wDwD/8A8AAAAPAA//////////8P//A//8DwD/8A8A//APAAAA\
DwAP//////////D//wP//A8A//APAP/wDwAAAA8AA//////////AP/8D//wPAP/wDwD/8A8AAAAP\
AAP/////////wD//A//8DwD/8A8A//APAAAADwAA/////////8A//wP//A8A//APAP/wDwAAAA8A\
AP/////////AP/8D//wPAP/wDwD/8A8AAAAPAAA/////////8P//A//8DwD/8A8A//APAAAADwAA\
P/////////D//wP//A8A//APAP/wDwAAAA8AAA////////////8D//wPAP/wDwD/8A8AAAAPAAAP\
////////////A//8DwD/8A8AAAAPAAAADwAAA////////////wP//A8A//APAAAADwAAAA8AAAP/\
//////////8D//wPAP/wDwAAAA8AAAAPAAAA////////////AAAADwD/8A8AAAAPAAAADwAAAP//\
/////////wAAAA8A//APAAAADwAAAA8AAAA///////////8AAAAPAAAADwAAAA8AAAAPAAAAP///\
////////AAAADwAAAA8AAAAPAAAADwAAAA///////////wAAAA8AAAAPAAAADwAAAA8AAAAP////\
//////8AAAAPAAAAD///////////////////////////////////////////////////////////\
///////////////8=");
// background attempt 
var background = document.body.appendChild(document.createElement("img"));
background.style.display = "none";
background.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/2112360/\
library_hero.jpg?t=1702830673"; 

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

/*function placeRect(x0, y0, x1, y1) {
  var i = 0, ;
  while (x0 < x1)
    ;
}*/

// ! overwrites function press for handling UIs from previous scripts
press = function press(x, y) {
  x = Math.floor((x - vX - 1) / 2 / sc) * 2;
  y = Math.floor((y - vY - 1) / 2 / sc) * 2;
  for (var i = 0, arr = renderedShip.blocks; i < arr.length; i++)
    if (arr[i].position[0] === y && arr[i].position[2] === -x) {
      //@ts-ignore
      arr[i].rotation[2] = arr[i].rotation[2] + 1 & 3;
      return render();
    }
  arr.push(new Block(["Core", "Block", "Wedge", "Small Hydrogen Thruster",
    "Reaction Wheel","Small Hydrogen Tank", "Small Battery"
    ][Math.random() * 7 | 0],[y, 0, -x], [0, !0, 0]));
  render();
};

var helpCanvas = document.createElement("canvas"),
  rc = function (rc) {
    return rc instanceof CanvasRenderingContext2D ?
       rc : new CanvasRenderingContext2D();
  }(helpCanvas.getContext("2d"));
render = function expensiveRenderer() {
  canvas.width = canvas.width;
  try {
    helpCanvas.width = helpCanvas.height = 620;
    rc.drawImage(background, -1300, 0);
    ctx.fillStyle = ctx.createPattern(helpCanvas, "repeat") || "";
    var n = sc / 8, sx = vX - sc * 37, sy = vY - sc * 37;
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


function oldRender() {
  var i = rendered.length, img, r = rendered;
  function imageByName(name) {
    var id = imgIDs.indexOf(name);
    img = images[id];
    if (id >= 0 && img !== null)
      return img;
    img = new Image();
    img.src = "./voxorp tiles/" + name + ".svg";
    img.id = "" + images.length;
    imgIDs.push(name);
    images.push(null);
    img.onload = function setImage() {
      if (this instanceof HTMLImageElement)
        images[this.id] = this;
      oldRender();
    };
  }

  canvas.width = canvas.width;
  while (i-- > 0) {
  // null in array rendered is empty position
  // unloaded images returns null, undefined image returns undefined
    ctx.fillStyle = ["#800", "#080", "#008"][Math.random() * 3 | 0];
    ctx.fillRect(r[i].x * sc + vX, r[i].y * sc + vY, sc, sc);
    continue;
    if (r[i] && imageByName(r[i].name)) {
      ctx.drawImage(img, r[i].x * sc + vX, r[i].y * sc + vY, sc, sc);
    }
  }
}
