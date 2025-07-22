//@ts-check
/// <reference path="./editor.html.ts" />
"use strict";
/** @readonly */
var version__k_api_js = "v.0.2.13";
/** @typedef {HTMLElementTagNameMap} N @overload @returns {HTMLDivElement} */
/** @template {keyof N} K @overload @param {K} e @returns {N[K]} */
/** @overload @param {string} e @returns {HTMLElement} */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}
function GE(v){return document.getElementById(+v===v?(GE.i=v+1)-1:v===
  void 0?v=GE.i++:v)}GE.i=0;
// 7th generation GE (Get Element by id) starts with id 0
/** @type {HTMLCanvasElement} */
var canvas = function (canvas) {
  return canvas instanceof HTMLCanvasElement ?
    canvas :
    document.createElement("canvas");
}(GE()),
  ctx = canvas.getContext("2d") || new CanvasRenderingContext2D();

var test_log = [];
console.log = function () {
  test_log.push([].slice.call(arguments));
};
// api v.0.0.29

// press is touch or click

// vX/vY = view x, y (position)
// fX/fY = from x, y (start view position)
// gX/gY = grab x, y (start press posistion)
// sc = scale
// pR = pixel ratio (computed)
// mouseStamp = press start
var vX = 0, vY = 0, fX, fY, gX, gY, sc = 16, pR = 1;
/**
 * @type {HTMLElement&{onmousewheel?:(this: GlobalEventHandlers,
 * ev:WheelEvent&{wheelDelta?:number})=>any}|null}
 */
var bd = GE(8);
// . mouseStamp = 0, tStart = 0, touch = null, touch_2 = null;

/** @typedef {MouseEvent|TouchEvent|TchD} TemporaryEventParam */
/** @type {((click?:true)=>void)|null} */
var touchdevice = null;

/** signals UI API click on canvas */
var press = function press(x, y) {
  return console.debug(x, y);
};

/** return true if move is used outside UI API */
var move = function move(x, y, e) {
  return Boolean(console.debug(x, y));
};

var contextmenu = function contextmenu(x, y, ev) {
  return console.debug(x, y);
};

var over = function (ev) {
  return console.debug(ev);
};

var render = function render() {
  return;
};

var init = function init() {
  return;
};

/** @readonly */
var F = function () {}, UDF = void 0;

/** @typedef {(TouchDat|null)[]} TchDArr */
/** @typedef {(TouchDat|null)[] & {count: number}} AllTchD */
/** fires when action of event doesn't correspond with touches array
 * @callback errorH
 * @param {AllTchD} touches @param {Touch} faulty @param {TouchEvent} event
 * @returns {boolean|void} ? keep current touches : reset to the new action
 * ^ swapped result by boolean (should reset on default: void functions) */
/** fires when event is fired, may give all or portion of changed touches
 * @callback softH
 * @param {AllTchD} touches (all) same as changed but with count property
 * @param {TchDArr} changed TchD|null array with touches at their indexes
 * @param {TouchEvent} ev
 * @returns {void} */
/** fires when all events were collected, possibly one cycle
 * @callback hardH
 * @param {AllTchD} touches
 * @param {TchDArr} added
 * @param {TchDArr} removed
 * @returns {void} */
/** @typedef {(e:TouchEvent)=>void} handler */

/** tested object for touch data
 * @param {HTMLElement} src @param {Touch} touch
 * @param {TouchEvent} touchEvent*/
function TouchDat(src, touch, touchEvent) {
  /** @type {TouchEvent} */
  this.event = touchEvent;
  /** @type {number} */
  this.identifier = touch.identifier;
  /** @type {EventTarget} */
  this.target = touch.target;
  /** @type {string} */
  this.type = touchEvent.type;
  /** @type {number} */
  this.pageX = touch.pageX;
  /** @type {number} */
  this.pageY = touch.pageY;
  /** @type {number} */
  this.clientX = touch.clientX;
  /** @type {number} */
  this.clientY = touch.clientY;
  /** @type {number} */
  this.screenX = touch.screenX;
  /** @type {number} */
  this.screenY = touch.screenY;
  /** @type {number} */
  this.force = touch.force;
  /** @type {number} */
  this.radiusX = touch.radiusX;
  /** @type {number} */
  this.radiusY = touch.radiusY;
  /** @type {number} position within element */
  this.posX = (touch.pageX - src.offsetLeft) * pR;
  /** @type {number} position within element */
  this.posY = (touch.pageY - src.offsetTop) * pR;
  /** @type {number} starting position within element */
  this.sX = this.posX;
  /** @type {number} starting position within element */
  this.sY = this.posY;
  /** @type {number} movement within element */
  this.movX = 0;
  /** @type {number} movement within element */
  this.movY = 0;
  /** @type {number} timestamp */
  this.time = Date.now();
  /** @type {number} timestamp of previous */
  this.pTime = 0;
  /** @type {number} start timestamp */
  this.sTime = this.time;
  /** @type {EventTarget} source target */
  this.srcTarget = this.target;
  /** @type {EventTarget|null} source target */
  this.srcElement = touchEvent.target;
  /** @method update @this {TouchDat} */
  this.update = function (touch, touchEvent) {
    if (!(touch instanceof Touch))
      throw new TypeError("1. arg: touch is not type of Touch");
    if (touch.identifier !== this.identifier)
      throw new Error("attempt to udpdate with different identifier");
    if (!(touchEvent instanceof TouchEvent))
      throw new TypeError("2. arg: touchEvent is not type of TouchEvent");
    this.event = touchEvent;
    this.target = touch.target;
    this.pageX = touch.pageX;
    this.pageY = touch.pageY;
    this.clientX = touch.clientX;
    this.clientY = touch.clientY;
    this.screenX = touch.screenX;
    this.screenY = touch.screenY;
    this.force = touch.force;
    this.radiusX = touch.radiusX;
    this.radiusY = touch.radiusY;
    this.type = touchEvent.type;
    var tmp = (touch.pageX - src.offsetLeft) * pR;
    this.movX = tmp - this.posX;
    this.posX = tmp;
    tmp = (touch.pageY - src.offsetTop) * pR;
    this.movY = tmp - this.posY;
    this.posY = tmp;
    tmp = Date.now()
    this.pTime = this.time;
    this.time = tmp;
    return this;
  };
  return Object.seal(this);
}
TouchDat.workaround = function () {
  try {
    var src = EL(), touch = new Touch({
      identifier: 0, target: src
    });
    return new TouchDat(src, touch, new TouchEvent("cancel")); 
  } catch (e) {
    console.error("TouchDat.workaround could not create TouchDat");
    return {};
  }
};
/** @typedef {TouchDat} TchD */

/** aditional/optional js logging of touch events */
function test_touches(targ, calls, globalArr, customLog) {
  try {
    /** @type {TouchEvent} */
    var TCH = new TouchEvent("ontouchcancel");
  } catch (e) {
    //@ts-expect-error
    TCH = {};
  }
  var a = [], t = {ch: TCH}, custLog = typeof customLog == "function" ?
    customLog : customLog === UDF ? function () { return [] } :
    function () {
        return customLog instanceof Array ? customLog : [customLog];
      };
  var map = Array.prototype.map;
  function tchLog(s, e, ef, n, l, p) {
    n = (t.ch = e).timeStamp % 1E7 | 0;
    // countermeausre in offset left in console logs by array indexes
    l = 7 - ((n) + "").length;
    return Array.prototype.concat.apply([
      n,
      new Array(
        l + 1
      ).join(" ") + s + map.call(ef(e, p = []), function (i) {
        var s = [
          /* empty */,
          i.identifier,
          i.force,
          i.pageX | 0,
          i.pageY | 0
        ].join(" ");
        return s += new Array(
          13 - s.length + 1
        ).join(" ");
      })
    ], custLog()).concat(e.timeStamp - n, p);
  }
  function fn(s, f) {
    // ef in tchLog
    var prpt = s !== "cancel:" ?
      function (e, arr) {
          // p in touch log preservers the identifiesrs of changedTouches
          arr.push(map.call(e.changedTouches, function (e) {
            return e.identifier;
          }));
          return t.cs = e.touches;
        } :
      function (e) {return t.cs = e.changedTouches};
    function prcs(e) {
      e.cancelable && e.preventDefault();
      if (a.push(tchLog(s, e, prpt)) > 109) {
        console.log([a]);
        a = new Array(10);
      }
    }
    if (globalArr)
      return function prcsLog(e) {
        if (a.push(tchLog(s, e, prpt)) > 99) {
          console.log([a]);
          (a = []).length = 10;
        }
        f && f(e);
      }
    function withLog(e) {
      delete a[a.push(tchLog(s, e, function (e) {
        return e.targetTouches;
      })) - 64];
      f && f(e);
    }
    return f ? withLog : prcs;
  }
  if (calls instanceof Array ? globalArr : calls = []) {
    (globalArr =
      //@ts-expect-error
      typeof arr ===
      "undefined" && (a.length = 10) &&
      Object.defineProperty(window, "tchs", {
        get: function (p) {
          p = a;
          (a = []).length = 10;
          return {a: p};
        }
      }));
  }
  targ.ontouchcancel = fn("cancel:", calls[3]);
  targ.ontouchstart = fn(" start:", calls[0]);
  targ.ontouchmove = fn("  move:", calls[1]);
  targ.ontouchend = fn("   end:", calls[2]);

  return {a: a, tch: t};
}

/**
 * @param {HTMLElement} src
 * @param {hardH} [hardHandler]
 * @param {[softH,softH,softH,softH]} [softHandlers]
 * @param {[errorH,errorH,errorH]} [errorHandlers] */
function touchesInit(src, hardHandler, softHandlers, errorHandlers) {
  src = src instanceof HTMLElement ? src : (console.error("No src EL" +
    " at touchesInit beggining."), EL("unknown"));
  var hardHandler_ = hardHandler || F;
  var softHandlers_ = softHandlers || [F, F, F, F];
  var errorHandlers_ = errorHandlers || [F, F, F];
  /** @typedef {Array<[number,string,number]>} touchlog */
  /** @type {{a?:touchlog,tch?:{ch:TouchEvent,cs:TouchList}}} */
  var o = {},
    /** @type {boolean[]} */
    events = [],
    /** @type {TchDArr} */
    temp = [],
    /** @type {TchDArr} */
    added = [],
    /** @type {TchDArr} */
    removed = [],
    touches = function () {
      var arr =
        /** @type {AllTchD} */
        ([TouchDat.workaround()].slice(1));
      arr.count = 0;
      return arr;
    }(),
    /** @type {Array<number>} */
    identifiers = [-1],
    /** @type {[handler,handler,handler,handler]} */
    handlers = [onstart, onmove, onend, oncancel];
  [events, temp, added, removed, touches, identifiers].map(function (e) {
    e.length = 0;
  });

  // console.log(o = test_touches(src, handlers, 1, function () {
  //   return [events, temp.length, added.length, removed.length,
  //     touches.length, identifiers].map(
  //     function (e, i) {
  //       if (typeof e == "number")
  //         return e;
  //       return e.join(",") + " ".slice(+!i);
  //     }
  //   );
  // }));
  src.ontouchstart = onstart;
  src.ontouchmove = onmove;
  src.ontouchend = onend;
  src.ontouchcancel = oncancel;
  // ontouches events handling
  function createTouch(tch, ev, i) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) >= 0)
        return errorHandlers_[0](touches, tch, ev) ?
          console.error("Can't add existing Touch") :
          console.error("Assigning Touch", updateTouch(tch, ev, i));
    }
    for (i = 0; touches[i] !== null && i < touches.length;)
      i++;
    events[i] = !0;
    identifiers[i] = tch.identifier;
    touches[i] = added[i] = temp[i] = new TouchDat(src, tch, ev);
  }
  function updateTouch(tch, ev, i) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) < 0)
        return errorHandlers_[1](touches, tch, ev) ?
          console.error("Can't update unexisting Touch") :
          console.error("Adding Touch", createTouch(tch, ev, i));
    }
    events[i] = !0;
    var touch = touches[i];
    touch ?
      temp[i] = touch.update(tch, ev) :
      console.error("Indentified touch is unpresent in touches.");
  }
  function removeTouch(tch, ev, i) {
    var j = identifiers.indexOf(tch.identifier);
    if (j < 0 && errorHandlers_[2](touches, tch, ev))
      return console.error("Can't remove unexisting Touch");
    events[j] = !0;
    identifiers[j] = -1;
    var touch = touches[j];
    touch ?
      removed[j] = temp[j] = touch.update(tch, ev) :
      console.error("Indentified touch is unpresent in touches.");
    touches[j] = null;
    for (j = touches.length - 1; j > 0 && touches[j] === null;)
      touches.length--;
  }
  /** @param {TouchEvent} ev */
  function prcsTouches(evId, evStr, ev, method) {
    for (var i = 0, tchs = ev.changedTouches; i < tchs.length; i++)
      method(tchs[i], ev);
    for (i = touches.count = 0; i < touches.length;)
      touches.count += +!!touches[i++];
    softHandlers_[evId](touches, temp, ev);
    for (i = temp.length = touches.length; i-- > 0;)
      temp[i] = null;
  }
  function inputTouches(evId, evStr, ev, method) {
    for (var i = touches.count = 0; i < touches.length;)
      touches.count += +!!touches[i++];
    hardHandler_(touches, added, removed);
    events = [];
    added = [];
    removed = [];
    prcsTouches(evId, evStr, ev, method);
  }

  function checkEvent(tchs) {
    for (var i = tchs.length; i-- > 0;)
      if (events[i])
        return !1;
    return !0;
  }
  /** @param {TouchEvent} e */
  function onstart(e) {
    // checkEvent = each complete input contains only one event for each
    // touch ?
    // has 2 outcomes: assigning new start tchs : fire UI complete input;
    if (checkEvent(e.changedTouches))
      // start of existing | end/cancel of unexisting further throws error
      prcsTouches(0, "start", e, createTouch);
    else
      inputTouches(0, "start", e, createTouch);
  }
  /** @param {TouchEvent} e */
  function onmove(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(1, "move", e, updateTouch);
    else
      inputTouches(1, "move", e, updateTouch);
  }
  /** @param {TouchEvent} e */
  function onend(e) {
    // remove existing one else throw error, conditioned in updateRemoved...
    if (checkEvent(e.changedTouches))
      prcsTouches(2, "end", e, removeTouch);
    else
      inputTouches(2, "end", e, removeTouch);
  }
  /** @param {TouchEvent} e */
  function oncancel(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(3, "cancel", e, removeTouch);
    else
      inputTouches(3, "cancel", e, removeTouch);
  }
  return o;
}
/** settings: allowed press time legth, @see {mouseInit.time} */
touchesInit.time = 350;
/** allowed press precision, @see {mouseInit.move} */
touchesInit.move = 13;

var mouseStamp = 0, test_debug = !1;
var WheelSroll = typeof WheelEvent == "undefined" ? Object : WheelEvent;
if (window.MouseWheelEvent === UDF)
  var MouseWheelEvent = Object;
function mouseInit() {
  if (!bd)
    return console.error("bd is null, UI wasn't initialized");
  bd.onwheel = bd.onmousewheel = function (e) {
    if (e.target !== canvas || !(e instanceof WheelSroll ||
      e instanceof MouseWheelEvent))
      return;
    test_debug && console.log("onwheel", +new Date / 100 | 0,
      e.deltaY || -(e.wheelDelta || 0), +new Date, sc);
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc -= sc / (e.deltaY || -(e.wheelDelta || 0)) * 10;
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    render();
  };
  // maybe the first step in refining could be making all boolean states
  // into one better understandable enum for different states (:TODO)
  // pX/pY = prev x, y (previous press position)
  var foreign = !1, pX = 0, pY = 0, moving = !1, taken = !1;
  // fix for mouseleave and mouseenter after fixing ghost __NULL__ blocks
  var left = !1;
  bd.onmousedown = function (e) {
    left = moving = taken = !1;
    var x = (e.pageX - canvas.offsetLeft) * pR,
      y = (e.pageY - canvas.offsetTop) * pR;
    if (foreign = e.target !== canvas)
      over(e);
    else
      taken = e.buttons === 1 && move(x, y, e);
    mouseStamp = e.buttons === 1 ? Date.now() : 0;
    pX = gX = x;
    pY = gY = y;
  };
  bd.onmouseenter = function (e) {
    foreign = taken = !1;
    if (left = !(moving && e.buttons & 5))
      return moving = !1;
    var x = (e.pageX - canvas.offsetLeft) * pR,
      y = (e.pageY - canvas.offsetTop) * pR;
    pX = gX = x;
    pY = gY = y;
    // there's still some weird in OBS's interact with browser
  };
  bd.onmousemove = function (e) {
    if (foreign)
      return over(e);
    if (!(e.buttons & 5))
      return;
    var x = (e.pageX - canvas.offsetLeft) * pR,
      y = (e.pageY - canvas.offsetTop) * pR;
    if (!moving && (Date.now() < mouseStamp + mouseInit.time &&
      Math.abs(gX - x) < mouseInit.move &&
      Math.abs(gY - y) < mouseInit.move || left)) {
      return;
    }
    if (taken)
      return move(x, y, e);
    moving = !0;
    // works on add difference basis to not fight with other movement
    vX += x - pX || 0;
    vY += y - pY || 0;
    pX = x;
    pY = y;
    render();
  };
  bd.onmouseleave = bd.onmouseup = function (e) {
    if (foreign)
      return over(e);
    var x = (e.pageX - canvas.offsetLeft) * pR,
      y = (e.pageY - canvas.offsetTop) * pR;
    if (Date.now() < mouseStamp + mouseInit.time &&
      Math.abs(gX - x) < mouseInit.move &&
      Math.abs(gY - y) < mouseInit.move &&
      e.type === "mouseup" && !taken && !moving) {
      return press(x, y);
    }
    if (taken) {
      taken = !1;
      return move(x, y, e);
    }
    if (!moving || left)
      return;
    vX += x - pX || 0;
    vY += y - pY || 0;
    pX = x;
    pY = y;
    moving = e.type === "mouseleave";
  };
  window.oncontextmenu = function (e) {
    for (var el = e.target; el instanceof Node;)
      if (!(el = el.parentNode))
        return;
      else if (el === bd)
        break;
    var x = (e.pageX - canvas.offsetLeft) * pR,
      y = (e.pageY - canvas.offsetTop) * pR;
    contextmenu(x, y, e);
  };
}
/** settings: allowed press time legth, @see {touchesInit.time} */
mouseInit.time = 350;
/** allowed press precision, @see {touchesInit.move} */
mouseInit.move = 2;

var actionType = 0, moveScore = 0, moveCount = 0;
function touchGrab(all, ev) {
  if (!all[0] || !all[1])
    return console.error("touchGrab error");
  ev.cancelable && ev.preventDefault();
  var x0 = all[0].movX,
    y0 = all[0].movY,
    x1 = all[1].movX,
    y1 = all[1].movY;
  if (actionType < 5) {
    var n = actionType === 2 ? 4 : 2;
    vX += (x0 + x1) / n;
    vY += (y0 + y1) / n;
  }
  if (actionType > 3 || actionType === 2) {
    test_debug && console.log("ontouch zoom");
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc += ((all[0].pageX > all[1].pageX ?
        x0 - x1 :
        x1 - x0) +
      (all[0].pageY > all[1].pageY ?
        y0 - y1 :
        y1 - y0) || 0) *
      sc / (474 << +(actionType === 2));
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    // TODO: the default (actionType = 2) is supposed to detect either
    // zooming in/out or movement, It did it very stubbornly though
    actionType === 2 ?
      ++moveCount > 4 ?
        actionType = Math.abs(moveScore) > touchesInit.move / 2 ?
          moveScore > 0 ? 3 : 5 :
          4 :
        moveScore += Math.abs(x0 + x1 + y0 + y1) -
          Math.abs(x0 - x1 + y0 - y1) * 2 :
      0;
  }
  used = !1;
  render();
}
/** equivalent of foreign for touches */
var other = !1, touchStamp = 0, prevCount = 0;
/** equivalent of moving and taken for touches */
var swiping = !1, used = !1;
/** @type {(all:AllTchD,changed:TchDArr,ev:TouchEvent)=>void} */
function thetouchstart(all, changed, ev) {
  // at ontouchstart it's decided what action is active
  if (prevCount === 0)
    touchStamp = Date.now();
  if (all.count === 1 && changed[0]) {
    if (other = changed[0].srcTarget !== canvas)
      over(changed[0]);
    else
      (used = move(changed[0].posX, changed[0].posY, ev));
      // && ev.cancelable && ev.preventDefault();
  // @see {bd.onmousedown} for teleporting in between
  } else if (all.length > 1 && !actionType && all[0] && all[1] &&
    Date.now() < touchStamp + touchesInit.time) {
    moveScore = moveCount = 0;
    actionType = 4;
  }
  prevCount = all.count;
}
/** @type {(all:AllTchD,changed:TchDArr,ev:TouchEvent)=>void} */
function thetouchmove(all, changed, ev) {
  // at ontouchmove active actions are executed
  if (other)
    return changed[0] ? over(changed[0]) : UDF;
  if (actionType > 1)
    return all[0] && all[1] ? touchGrab(all, ev) : UDF;
  if (!changed[0])
    return;
  var x = Math.abs(changed[0].sX - changed[0].posX),
    y = Math.abs(changed[0].sY - changed[0].posY),
    long = Date.now() < touchStamp + touchesInit.time,
    far = Math.sqrt(x * x + y * y) > touchesInit.move;
  far && ev.cancelable && ev.preventDefault();
  if (used)
    move(changed[0].posX, changed[0].posY, ev);
  else if (swiping) {
    vX += changed[0].movX;
    vY += changed[0].movY;
    render();
  } else {
    swiping = !used &&
      Date.now() > touchStamp + touchesInit.time || far;
  }
}
/** @type {(all:AllTchD,changed:TchDArr,ev:TouchEvent)=>void} */
function thetouchend(all, changed, ev) {
  // at ontouchend actions may finish, deactivate or activate
  if (other && changed[0]) {
    over(changed[0]);
  // if (other) {
  //   changed[0] && over(changed[0]);
    other = !1;
  } else if (actionType > 1) {
    var tch0 = changed[0] || all[0], tch1 = changed[1] || all[1];
    tch0 && tch1 && touchGrab([tch0, tch1], ev);
  } else if (changed[0]) {
    ev.cancelable && ev.preventDefault();
    var x = Math.abs(changed[0].sX - changed[0].posX),
      y = Math.abs(changed[0].sY - changed[0].posY),
      long = Date.now() > touchStamp + touchesInit.time,
      far = Math.sqrt(x * x + y * y) > touchesInit.move;
    (!long || far) && ev.cancelable && ev.preventDefault();
    if (used)
      move(changed[0].posX, changed[0].posY, ev);
    else if (swiping) {
      vX += changed[0].movX;
      vY += changed[0].movY;
      render();
    } else if (!far)
      long ?
        contextmenu(changed[0].posX, changed[0].posY, ev) :
        press(changed[0].posX, changed[0].posY);
  }
  if (all.count === 0) {
    actionType = 0;
    swiping = used = other = !1;
  }
  prevCount = all.count;
}
/** @type {(all:AllTchD,changed:TchDArr,ev:TouchEvent)=>void} */
function thetouchcancel(all, changed, ev) {
  console.error("Touches canceled");
  prevCount = touchStamp = actionType = 0;
  used = swiping = other = !1;
}

(document.body || EL()).onload = initDoc;
function initDoc() {
  function resizeWindow() {
    var w = window.innerWidth * pR,
      h = window.innerHeight * pR;
    if (w > 4096 || h > 4096)
      if (w > h) {
        h = h * 4096 / w;
        w = 4096;
      } else {
        w = w * 4096 / h;
        h = 4096;
      }
    vX -= (canvas.width - w) / 2;
    vY -= (canvas.height - h) / 2;
    canvas.width = w;
    canvas.height = h;
    render();
  }

  window.onresize = resizeWindow;

  mouseInit();

  if (bd)
    touchesInit(bd, UDF, [thetouchstart, thetouchmove, thetouchend,
      thetouchcancel]);

  /** also called first touch, used to initiate fullscreen */
  window.ontouchend = function () {
    if (document.fullscreenEnabled !== false && touchdevice &&
      !document.fullscreen &&
      //@ts-expect-error
      !document.webkitIsFullScreen)
      touchdevice();
  };
  +function (info, clickHandler) {
    info ?
      info.onclick = clickHandler :
      clickHandler();
  }(GE("info"),
    /** @this {GlobalEventHandlers|void} @param {MouseEvent} [e] */
    function (e) {
      document.body.classList.remove("scroll");
      this instanceof Node && document.body.removeChild(this);
      e && touchdevice && touchdevice(true);
    }
  );

  init();

  vX = 128;
  vY = 64;
  resizeWindow();
};

/** 
 * @typedef {Exclude<keyof (MouseEvent|WheelEvent|PointerEvent),"initEvent"|
 * "initUIEvent"|"preventDefault"|"stopImmediatePropagation"|"composedPath"|
 * "stopPropagation"|"getModifierState"|"initMouseEvent">} ActionsDefault
 */
/** @typedef {Actions&{index:number}} ActionT touchues */
/** @typedef {Actions&{index:-1}} ActionM mouse pointer */
/** @typedef {Actions&{index:-2}} ActionP pointer (pen) */
/** @typedef {TouchEvent|MouseEvent|WheelEvent|PointerEvent} ActionsEvent */
/** @typedef {(x:number,y:number,temp:(Actions|null)[])=>void} ActionsExec */
/**
 * @typedef {{immutable?:boolean,listeners?:AddEventListenerOptions,
 * start?:ActionsExec,move?:ActionsExec,end?:ActionsExec}} ActionsOptions
 */
/** @callback ActionsHandler @param {ActionsEvent} ev @this {HTMLElement} */
/**
 * @param {ActionsEvent} event @param {number} index
 * @param {Actions.State} state
 * @param {Actions|null} previous @param {Touch} [touch] */
function Actions(event, index, state, previous, touch) {
  /** @TODO update for @see {previous} */
  /** @type {Touch|typeof Actions.default} */
  var source = touch || (event instanceof TouchEvent ?
    Actions.default : 
    event);
  console.log(source);//- delete this when? assumimg for [Object Touch]
  /** @type {number|undefined} */
  var lastEnd = state.endTimeStamps[index],
    type = this.type = event.type;
/** original event captured by root */
  this.event = event;
  /** short double for example, check naming in scratch projects */
  this.state = previous ? previous.state : (lastEnd && lastEnd +
    state.shortTouchTime < event.timeStamp ? "double " : "single ") +
    (state.shortTouchMove);
  // this.stage could be "start", "move", "end"
  this.identifier = touch ? touch.identifier : NaN;
  //- touch.identifier :
    //-/mouse/.test(type) ?
      //-   -1 :
      //-m  /pointer/.test(type) ? -2 : -3;
  /** number of order in which touches were creater or other cursor */
  this.index = index;
  this.altKey = event.altKey;
  this.ctrlKey = event.ctrlKey;
  this.metaKey = event.metaKey;
  this.shiftKey = event.shiftKey;
  /** may provide gesture alternatives to mouse buttons and wheel */
  this.buttons = source instanceof Touch ? 0 : source.buttons;
  this.timeStamp = state.endTimeStamps[index] = event.timeStamp;
  this.oldTimeStamp = previous ? previous.timeStamp : this.timeStamp;
  this.startTimeStamp = previous ? previous.startTimeStamp : this.timeStamp;
  // the Event.srcElement seems to've been initial IE property for target xD
  this.target = event.target || event.srcElement;
  this.startTarget = previous ? previous.target : this.target;
  this.pageX = source.pageX;
  this.pageY = source.pageY;
  this.clientX = source.clientX;
  this.clientY = source.clientY;
  this.screenX = source.screenX;
  this.screenY = source.screenY;
  this.force = touch ? touch.force : 1;
  this.radiusX = touch ? touch.radiusX : 1;
  this.radiusX = touch ? touch.radiusY : 1;
  /** is not clientX but supposed to be x relative to root offsetLeft */
  this.x = (source.pageX - state.root.offsetLeft) * pR;
  /** is not clientX but supposed to be y relative to root offsetTop */
  this.y = (source.pageY - state.root.offsetTop) * pR;
    this.startX = previous ? previous.startX : this.x;
  this.startY = previous ? previous.startY : this.y;
  this.movementX = source instanceof Touch ? (previous ?
    //@ts-expect-error what the sucking flux!
    previous.x -this.x :
    0) : source.movementX;
  this.movementY = source instanceof Touch ? (previous ?
    //@ts-expect-error what the sucking flux!
    previous.y - this.y:
    0) : source.movementY;
  Object.seal(this);
}
/** @readonly *///@ts-expect-error
Actions.API_VERSION = "0.3";
Actions.default = Object.freeze(
  /** @type {{[K in ActionsDefault]:(MouseEvent|WheelEvent|PointerEvent)[K]}} */
  ({
    altKey: false,
    button: 0,
    buttons: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    metaKey: false,
    movementX: 0,
    movementY: 0,
    offsetX: 0,
    offsetY: 0,
    pageX: 0,
    pageY: 0,
    relatedTarget: null,
    screenX: 0,
    screenY: 0,
    shiftKey: false,
    x: 0,
    y: 0,
    detail: 0,
    view: null,
    which: 0,
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: EL(),
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    returnValue: false,
    srcElement: EL(),
    target: EL(),
    timeStamp: 0,
    type: "none",
    NONE: 0,
    CAPTURING_PHASE: 1,
    AT_TARGET: 2,
    BUBBLING_PHASE: 3
  }));
/** updates by mutating, or just mutates to create given Actions instance
 * @param {Actions|undefined} action @param {number} index
 * @param {Actions.State} state
 * @param {ActionsEvent} event @param {Touch} [touch] */
Actions.update = function (action, index, state, event, touch) {
  if (!action)
    throw new TypeError("action undefined at Actions.update");
  var source = touch || (event instanceof TouchEvent ?
    Actions.default : 
    event);
  var type = action.type = event.type;
  action.event = event;
  // UPDATE HERE set s4ate same as in Actions constructor
  action.state = state.state;
  action.identifier = touch ?
    touch.identifier :
    /mouse/.test(type) ?
      -1 :
      /pointer/.test(type) ? -2 : -3;
  action.index = index;
  action.altKey = event.altKey;
  action.ctrlKey = event.ctrlKey;
  action.metaKey = event.metaKey;
  action.shiftKey = event.shiftKey;
  action.buttons = source instanceof Touch ? 0 : source.buttons;
  action.timeStamp = event.timeStamp;
  action.oldTimeStamp = action.timeStamp;
  action.startTimeStamp = action.startTimeStamp;
  action.target = event.target || event.srcElement;
  action.startTarget = action.target;
  action.pageX = source.pageX;
  action.pageY = source.pageY;
  action.clientX = source.clientX;
  action.clientY = source.clientY;
  action.screenX = source.screenX;
  action.screenY = source.screenY;
  action.force = touch ? touch.force : 1;
  action.radiusX = touch ? touch.radiusX : 1;
  action.radiusX = touch ? touch.radiusY : 1;
  var oldX = action.x, oldY = action.y;
  action.x = (source.pageX - state.root.offsetLeft) * pR;
  action.y = (source.pageY - state.root.offsetTop) * pR;
  action.startX = action.startX;
  action.startY = action.startY;
  action.movementX =
    source instanceof Touch ? oldX - action.x : source.movementX;
  action.movementY =
    source instanceof Touch ? oldY - action.y : source.movementY;
  return action;
};
/** @param {HTMLElement} root @param {ActionsOptions} options */
Actions.init = function (root, options) {
  if (!(root instanceof HTMLElement))
    throw new TypeError("root is not instanceof HTMLElement");
  var immutable = "immutable" in options && options.immutable,
    listeners = "listeners" in options ? options.listeners : null;
  /** @type {number[]} */
  var identifiers = [];
  /** contains all touches + outdated ones for reusing the same object over
   * @type {(Actions|null)[]} */
  var temp = [];
  /** @type {(Actions|null)[]&{count:number}} */
  var all = function () {
    /** @type {(Actions|null)[]&{count:number}} *///@ts-expect-error
    var arr = [];
    arr.count = 0;
    arr[-1] = null;
    arr[-2] = null;
    return arr;
  }(),
    mutable = [];
  /** @TODO to be implemented managing user assigned Actions listeners
   * @type {((ev,i,all,idx)=>void|boolean)[]}  */
  var softHandlers = [F, F, F, F];
  /** @TODO to be implemented managing user assigned Actions err listeners
   * @type {((ev,i,all,idx)=>void|boolean)[]} */
  var errorHandlers = [F, F, F, F];

  var state = new Actions.State(options);
  state.root = root;
  for (var p in options)
    delete options[p];
  /**
   * @param {keyof HTMLElementEventMap|"mousewheel"} type
   * @param {ActionsHandler} handler */
  function addEvent(type, handler) {
    listeners ?
      root.addEventListener(
          type,
          /** @type {EventListener} */
          (handler),
          listeners
        ) :
      root["on" + type] = handler;
    return handler;
  }
  addEvent("touchstart", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchstart handler");
    //-state.state = "start";
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j >= 0) {
        if (errorHandlers[0] && errorHandlers[0](ev, i, all, j))
          continue;
                console.error("assigning touch");
        // continues existing identifier index
      } else
        // otherwise find it a new index
        for (j = 0; all[j] !== null && j < all.length;)
          j++;
      identifiers[j] = touch.identifier;
      all[j] = temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, null, touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, touch) :
          mutable[j] = new Actions(ev, j, state, null, touch);
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tstart beggining of created touches handling
    Actions.log(temp, ev, "srt", state);
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchmove", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchmove handler");
    //-state.state = "move";
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j < 0) {
        if (errorHandlers[1] && errorHandlers[1](ev, i, all, -1))
          continue;
                console.error("adding touch");
        // find it a new index
        for (j = 0; all[j] !== null && j < all.length;)
          j++;
        identifiers[j] = touch.identifier;
      }
      // otherwise continues existing identifier index
      all[j] = temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, all[j], touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tmove beggining of updated touches handling
    Actions.log(temp, ev, "mov", state);
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchend", addEvent("touchcancel", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchend handler");
    //-state.state = "click";
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j < 0) {
        if (!(errorHandlers[2] && errorHandlers[2](ev, i, all, -1)))
          continue;
                console.error("adding ghost/instant touch");
      }
      identifiers[j] = -1;
      temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, all[j], touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      all[j] = null;
      for (j = all.length - 1; j >= 0 && !all[j]; j--)
        all.length--;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tend beggining of removed/canceled touches handling
    var action = temp[0];
    // if (action) {
    //   ev.preventDefault();
    //   state.onend(action.x, action.y, all); 
    // }
    Actions.log(temp, ev, "end", state);
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0; temp[j] = null)
      if (action = temp[j])
        state.endTimeStamps[j] = action.timeStamp;
  }));
  addEvent("mousedown", function (ev) {
    ;
  });
  addEvent("mousemove", function (ev) {
    ;
  });
  addEvent("mouseup", function (ev) {
    ;
  });
  addEvent("mouseenter", function (ev) {
    ;
  });
  addEvent("mouseleave", function (ev) {
    ;   
  });
  addEvent("wheel", addEvent("mousewheel", function (ev) {
    ;
  }));
return state.generateAccessors();
};
/** @param {ActionsOptions} options */
Actions.State = function (options) {
  this.x = 0;
  this.y = 0;
  this.fromX = 0;
  this.fromY = 0;
  this.grabX = 0;
  this.grabY = 0;
  this.scale = 16;
/** customisable @see {typeof window.devicePixelRatio} */
  this.pixelRatio = 1;
  this.onstart = options.start || F;
  this.onmove = options.move || F;
  this.onend = options.end || F;
  this.oncancel = options.end || F;
  this.root = EL("unknown");
  /** gesture type "<single|double> <short|long|grab>" */
  this.state = " ";
/** previous end timeStamps for each acion index */
  this.endTimeStamps = [];
  
  /** allowed time for active (started) action to get state...short" */
  this.shortTouchMove = 350;
  /** allowed distance for active action to get state "...short" */
  this.shortTouchTime = 13;
  /** allowed time between actions to get state "double..." */
  this.doubleTouchTime = 300;
  /** allowed time for active (started) action to get state...short" */
  this.shortMouseTime = 350;
  /** allowed distance for active action to get state "...short" */
  this.shortMouseMove = 2;
  /** allowed time between actions to get state "double..." */
  this.doubleMouseTime = 300;
  /** allowed time for active (started) action to get state...short" */
  this.shortOtherTime = 350;
  /** allowed distance for active action to get state "...short" */
  this.shortOtherMove = 5;
  /** allowed time between actions to get state "double..." */
  this.doubleOtherTime = 300;
  Object.seal(this);
};
/** @this {Actions.State} */
Actions.State.prototype.generateAccessors = function () {
  /**
   * @type {{get:<K extends keyof Actions.State>(key:K)=>Actions.State[K],
   * set:<K extends keyof Actions.State>(key:K,value:Actions.State[K])=>void,
   * keys:()=>(keyof Actions.State)[]}}
   */
  var accessors = {
    //**  @template {keyof StateType} K @param {K} key @returns {StateType[K]} */
    get: function (key) {
      return self[key];
    },
    set: function (key, value) {
      self[key] = value;
    },
    keys: function () {
      /** @type {(keyof Actions.State)[]} */
      var keys = [], p = keys[0];
      for (p in self)
        if (Object.prototype.hasOwnProperty.call(self, p))
          keys.push(p);
      return keys;
    }
  }, self = this;
  //-for (var p in this)
  //-  if (Object.prototype.hasOwnProperty.call(this, p))
  //-    this["get" + p[0].toUpperCase() + p.slice(1)] = function () {
  //-    };
  return Object.freeze(accessors);
};
Actions.logMax = 16;
/** spaghetti Actions debugging utility
* @param {(Actions|null)[]} tem typeof temp @param {ActionsEvent} evt
* @param {string} typ @param {Actions.State} stat */
Actions.log = function (tem, evt, typ, stat) {
  var max = 16;
  //, alias = JSON.parse("{x:vX,y:vY,}".replace(/:/g, ':"').replace(/,/g, '",');
  //Actions.logMax-- > 0 && console.log
    (evt);
    //console.log
    (typ + " " + tem.map(function (e) {
      return e instanceof Actions ? "t" : e === null ? "_" : "" + e;
    }).join(","));
  typ !== "end" &&
  (1) || tem.forEach(function (e) {
    if (!e)
      return;
    var s = "TouchEnd[";
    for (var p in e)
      if (e.hasOwnProperty(p))
        s += p + ":" + (typeof e[p])[0] + "=" + (e[p] instanceof Object ?
          Object.getPrototypeOf(e[p]).constructor.name :
          "" + e[p]) + " ";
    console.log(s + "state.endTimeStamp:n=" +
      juhus.get("endTimeStamps") + "]");
  });
};
console.log(((Actions.logImmutable =
  (Date.now() / 24 * 3600 * 1000) % 2 > 1) ? "Imm" : "M") + "utable today!");
// #foracode                 > || document.querySelector("c-console")<
var juhus = Actions.init(GE(8) || document.querySelector("c-console") || EL(), {
  listeners: {},
  immutable: Actions.logImmutable
});
//EL().onclick = function (ev) { if (this instanceof HTMLElement)
//new Actions(ev, this, null).altKey; };

// #acodekeys [search,ctrl, tab,shift,arrrow left,arrow right,undo,redo]
//            [move v,move ^,copy v,meta,   ctrl,    shift,   alt, esc ]
//       [arrrow <,arrow >,arrrow ^,arrow v,move ^,move v,copy ^,move v]
//       [";",     "'",    "\"",    "&",    "|",   "=",   "/",   "!"   ]
