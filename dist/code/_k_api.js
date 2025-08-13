//@ts-check
/// <reference path="./editor.html.ts" />
"use strict";
/** @readonly */
var version__k_api_js = "v.0.2.16";
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
if (/http:..localhost:815[89]/.test(location.href))
  (function test_alphalunar() {
    /** @typedef {()=>void} F */
    /** @type {Console&{oldLog?:F,oldWarn?:F,oldError?:F}} */
    var NS = console;
    var oldLog = NS.log, oldError = NS.error;
    var oldWarn = NS.warn;
    function log() {
      var args = [].slice.call(arguments);
      test_log.push(args);
      oldLog.apply(NS, args);
    };
    log.old = oldLog;
    function warn() {
      var args = [].slice.call(arguments);
      test_log.push(["[c.w]:"].concat(args));
      oldWarn.apply(NS, args);
    };
    warn.old = oldWarn;
    function error() {
      var args = [].slice.call(arguments);
      test_log.push(["[c.err]:"].concat(args));
      oldError.apply(NS, args);
    }
    error.old = oldError;
    NS.log = log;
    NS.warn = warn;
    NS.error = error;
    NS.oldLog = oldLog;
    NS.oldWarn = oldWarn;
    NS.oldError = oldError;
  })();
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

if (typeof TouchEvent == "undefined")
  //@ts-expect-error
  var TouchEvent = function TouchEvent() {};
if (typeof Touch == "undefined")
  //@ts-expect-error
  var Touch = function Touch() {};
var WheelSroll = typeof WheelEvent == "undefined" ? Object : WheelEvent;
if (window.MouseWheelEvent === UDF)
  /** @type {MouseWheelConstructor} *///@ts-expect-error
  var MouseWheelEvent = Object;

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
}//DISABLED HERE
// window.oncontextmenu = function (e) {
//   for (var el = e.target; el instanceof Node;)
//     if (!(el = el.parentNode))
//       return;
//     else if (el === bd)
//       break;
//   var x = (e.pageX - canvas.offsetLeft) * pR,
//     y = (e.pageY - canvas.offsetTop) * pR;
//   contextmenu(x, y, e);
// };
//DISABLED HERE}
/** settings: allowed press time legth, @see {touchesInit.time} */
mouseInit.time = 350;
/** allowed press precision, @see {touchesInit.move} */
mouseInit.move = 2;

var actionType = 0, moveScore = 0, moveCount = 0;
function touchGrab(all, ev) {
  if (!all[0] || !all[1])
    return console.error("touchGrab outdated error");
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
    console.log("resizing");
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

  //DISABLED HEREmouseInit();

  //DISABLED HEREif (bd)
  //   touchesInit(bd, UDF, [thetouchstart, thetouchmove, thetouchend,
  //     thetouchcancel]);

  /** also called first touch, used to initiate fullscreen */
  window.ontouchend = function () {
    touchdevice && touchdevice();
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

/** @TODO what the going on in here? */
if (typeof EventTarget != "function")
  //@ts-expect-error IE11 compatibility
  var EventTarget = Node;

/** 
 * @typedef {Exclude<keyof (MouseEvent|WheelEvent|PointerEvent),"initEvent"|
 * "initUIEvent"|"preventDefault"|"stopImmediatePropagation"|"composedPath"|
 * "stopPropagation"|"getModifierState"|"initMouseEvent">} ActionsDefault
 */
/** @typedef {new()=>MouseEvent&{wheelDelta:number}} MouseWheelConstructor */
/** @typedef {MouseEvent&{wheelDelta:number}} MouseWheelEvent */
/** @typedef {WheelEvent|MouseWheelEvent} ScrollWheel */
/** @typedef {TouchEvent|MouseEvent|ScrollWheel|PointerEvent} ActionsEvent */
/**
 * @typedef AllActions @property {(Actions|null)[]} changed
 * @property {(Actions|null)[]&{count:number}} all @property {Actions} source
 */
/** @typedef {(x:number,y:number,actions:AllActions)=>void} ActionsExec */
/**
 * @typedef {(x:number,y:number,claims:AllActions&{claim:string,cancelable:
 * true,preventClaim:(custom?:string)=>void})=>void} ActionsClaim
 */
/**
 * @typedef {{immutable?:boolean,listeners?:AddEventListenerOptions,
 * start?:ActionsExec,move?:ActionsExec,end?:ActionsExec,claim?:ActionsClaim,
 * filterClaimed?:boolean,touchIndex0:boolean,target?:EventTarget|null
 * }} ActionsOptions
 */
/** @callback ActionsHandler @param {ActionsEvent} ev @this {HTMLElement} */
/** UI API class/namespace, support either use of mouse or touches
 * @param {ActionsEvent} event @param {number} index
 * @param {Actions.State} state @param {Actions|null} previous
 * @param {Touch} [touch] */
function Actions(event, index, state, previous, touch) {
  /** @type {Touch|typeof Actions.default} */
  var source = touch || (event instanceof TouchEvent ?
    Actions.default : 
    event);
  var offset = state.root instanceof HTMLElement ?
    state.root :
    {offsetLeft: 0, offsetTop: 0};
  /** @see {Event.type} */
  this.type = event.type;
  /** original event captured by root */
  this.event = event;
  // this.stage could be "start", "move", "end"
  this.identifier = touch ? touch.identifier : NaN;
  /** number of order in which touches were creater or other cursor */
  this.index = index;
  this.altKey = event.altKey;
  this.ctrlKey = event.ctrlKey;
  this.metaKey = event.metaKey;
  this.shiftKey = event.shiftKey;
  /** may provide gesture alternatives to mouse buttons and wheel */
  this.buttons = source instanceof Touch ? 0 : source.buttons;
  /** @type {number} */
  this.oldTimeStamp = previous ? previous.timeStamp : event.timeStamp;
  /** @type {number} */
  this.timeStamp = state.endTimeStamps[index] = event.timeStamp;
  /** @type {number} */
  this.startTimeStamp = previous ? previous.startTimeStamp : this.timeStamp;
  /** @type {EventTarget|null} @see {Event.target} */
  this.target = event.target;
  /** @type {EventTarget|null} */
  this.startTarget = previous ? previous.startTarget : event.target;
  this.pageX = source.pageX;
  this.pageY = source.pageY;
  this.clientX = source.clientX;
  this.clientY = source.clientY;
  /** @type {number} @see {Event.screenX} */
  this.screenX = source.screenX;
  /** @type {number} @see {Event.screenY} */
  this.screenY = source.screenY;
  this.force = touch ? touch.force : 1;
  this.radiusX = touch ? touch.radiusX : 1;
  this.radiusX = touch ? touch.radiusY : 1;
  this.movementX = previous ? this.screenX - previous.screenX : 0;
  this.movementY = previous ? this.screenY - previous.screenY : 0;
  /** @type {number} !not clientX but x relative to root offsetLeft * pR */
  this.x = (source.pageX - offset.offsetLeft) * pR;
  /** @type {number} !not clientX but y relative to root offsetTop * pR */
  this.y = (source.pageY - offset.offsetTop) * pR;
  /** @type {number} */
  this.startX = previous ? previous.startX : this.x;
  /** @type {number} */
  this.startY = previous ? previous.startY : this.y;
  this.moveX = source instanceof Touch ? (previous ?
    this.x - previous.x : 0) : this.movementX * pR;
  this.moveY = source instanceof Touch ? (previous ?
    this.y - previous.y : 0) : this.movementY * pR;
  /** short double for example, check naming in scratch projects */
  this.state = Actions.updateState(this, event, state, previous);
  /** @TODO it is possible for extra touches to exist due to missing touchend event */
  // this.expires = -1;
  Object.seal(this);
}
/** @readonly *///@ts-expect-error
Actions.API_VERSION = "0.3.4";
Actions.default = Object.freeze(
  /** @type {{[K in ActionsDefault]:(MouseEvent|ScrollWheel|PointerEvent)[K]}} */
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
/** shortens the code amount burder per precossing state.state string
 * @param {Actions} action @param {ActionsEvent} event
 * @param {Actions.State} state @param {Actions|null} previous */
Actions.updateState = function  (action, event, state, previous) {
  if (!previous) {
    var lastEnd = state.endTimeStamps[action.index],
      lastPosition = state.endPositions[action.index],
      x = action.x - (lastPosition || [0])[0],
      y = action.y - (lastPosition || [0, 0])[1];
    return lastEnd && lastEnd + state.doubleTouchTime > event.timeStamp &&
      lastPosition && Math.sqrt(x * x + y * y) < state.shortTouchMove ?
        "double " :
        "single ";
  }
  x = action.x - previous.startX, y = action.y - previous.startY;
  var both = previous.state.split(" "), click = both[0] || "single";
  /** is how the interactions evolves after start short|long|drag|longdrag */
  var hold = both[1] || "";
  var drag = hold.slice(-4) === "drag",
    long = hold.slice(0, 4) === "long" || !drag &&
      event.timeStamp > action.startTimeStamp + state.shortTouchTime;
  // TODO: use of state.pixelRatio sounds like it could improve experience
  drag = drag || Math.sqrt(x * x + y * y) > state.shortTouchMove;
  return click + " " +
    ((long ? "long" : "") + (drag ? "drag" : "") || "short");
};
/** updates by mutating, or just mutates to create given Actions instance
 * @param {Actions|null} action @param {number} index
 * @param {Actions.State} state @param {ActionsEvent} event
 * @param {Actions|null} previous @param {Touch} [touch] */
Actions.update = function (action, index, state, event, previous, touch) {
  if (!action)
    throw new TypeError("action undefined at Actions.update");
  // the order of updating properties is depended by previous === action
  var source = touch || (event instanceof TouchEvent ?
    Actions.default : 
    event);
  var offset = state.root instanceof HTMLElement ?
    state.root :
    {offsetLeft: 0, offsetTop: 0};
  var previousX = previous ? previous.x : NaN,
    previousY = previous ? previous.y : NaN;
  action.type = event.type;
  action.event = event;
  action.identifier = touch ? touch.identifier : NaN;
  action.index = index;
  action.altKey = event.altKey;
  action.ctrlKey = event.ctrlKey;
  action.metaKey = event.metaKey;
  action.shiftKey = event.shiftKey;
  action.buttons = source instanceof Touch ? 0 : source.buttons;
  action.oldTimeStamp =
    previous ? previous.timeStamp : event.timeStamp;
  action.timeStamp = event.timeStamp;
  action.startTimeStamp =
    previous ? previous.startTimeStamp : event.timeStamp;
  action.target = event.target;
  action.startTarget = previous ? previous.startTarget : event.target;
  action.pageX = source.pageX;
  action.pageY = source.pageY;
  action.clientX = source.clientX;
  action.clientY = source.clientY;
  action.screenX = source.screenX;
  action.screenY = source.screenY;
  action.force = touch ? touch.force : 1;
  action.radiusX = touch ? touch.radiusX : 1;
  action.radiusX = touch ? touch.radiusY : 1;
  action.movementX = previous ? action.screenX - previous.screenX : 0;
  action.movementY = previous ? action.screenY - previous.screenY : 0;
  action.x = (source.pageX - offset.offsetLeft) * pR;
  action.y = (source.pageY - offset.offsetTop) * pR;
  action.startX = previous ? previous.startX : action.x;
  action.startY = previous ? previous.startY : action.y;
  // in case of mutable version previous === action, old x, y need variables
  action.moveX = source instanceof Touch ? (previous ?
    action.x - previousX :
    0) : action.movementX * pR;
  action.moveY = source instanceof Touch ? (previous ?
    action.y - previousY :
    0) : action.movementY * pR;
  action.state = Actions.updateState(action, event, state, previous);
  return action;
};
/**
 * @param {Actions.State} state @param {AllActions["all"]} all
 * @param {ActionsEvent} ev */
Actions.touchGrab = function (state, all, ev) {
  var touch0 = all[0], touch1 = all[1];
  if (!touch0 && touch1)
    touch0 = touch1;
  else if (!touch1 && touch0)
    touch1 = touch0;
  else if (!touch0 || !touch1)
    return console.error("touchGrab error");
  var canvas = state.target instanceof HTMLCanvasElement ?
    state.target :
    {width: window.innerWidth, height: window.innerHeight};
  //console.log(state.grabAction);
  ev.cancelable && ev.preventDefault();
  var x0 = touch0.moveX, y0 = touch0.moveY;
  var x1 = touch1.moveX, y1 = touch1.moveY;
  if (state.grabAction.slice(0, 4) === "move") {
    var n = state.grabAction === "moveorzoom" ? 4 : 2;
    //console.log(x0 +' '+ x1 +' '+ y0+' '+ y1+' '+ n);
    vX += (x0 + x1) / n;
    vY += (y0 + y1) / n;
  }
  if (state.grabAction.slice(-4) === "zoom") {
    test_debug && console.log("ontouch zoom");
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc +=
      ((touch0.pageX > touch1.pageX ? x0 - x1 : x1 - x0) +
      (touch0.pageY > touch1.pageY ? y0 - y1 : y1 - y0) || 0) *
        sc / (474 << +(state.grabAction === "moveorzoom"));
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    // TODO: starting with "moveorzoom" is supposed to detect either
    // zooming in/out or movement, It did it very stubbornly though
    if (state.grabAction === "moveorzoom")
      ++state.grabCount > 4 ?
        state.grabAction =
          Math.abs(state.grabScore) > state.shortTouchMove / 2 ?
            state.grabScore > 0 ? "move" : "zoom" :
        "movezoom" :
      state.grabScore += Math.abs(x0 + x1 + y0 + y1) -
        Math.abs(x0 - x1 + y0 - y1) * 2;
  }
  render();
};
/** @param {EventTarget} root @param {ActionsOptions} options */
Actions.init = function (root, options) {
  if (!(root instanceof EventTarget))
    throw new TypeError("root is not instanceof EventTarget");
  var immutable = "immutable" in options && options.immutable,
    listeners = "listeners" in options ? options.listeners : null;
  /** @type {number[]} */
  var identifiers = [];
  /** @type {(Actions|null)[]} */
  var temp = [];
  /** @type {(Actions|null)[]&{count:number}} */
  var all = function () {
    /** @type {(Actions|null)[]&{count:number}} *///@ts-expect-error
    var arr = [];
    arr.count = 0;
    arr[-1] = null;
    arr[-2] = null;
    return arr;
  }();
  /** contains all touches + outdated ones for reusing the same object
   * over @type {(Actions|null)[]} */
  var mutable = [];
  /** @type {AllActions} @throws source.source is null *///@ts-expect-error
  var source =
    Object.seal({all: all, changed: temp, source: null});
  /** @TODO to be implemented managing user assigned Actions err listeners
   * @type {((ev,i,all,idx)=>void|boolean)[]} */
  var errorHandlers = [F, F, F, F];

  var state = new Actions.State(options);
  state.root = root;
  for (var p in options)
    delete options[p];
  var canvas = state.target instanceof HTMLCanvasElement ?
    state.target :
    {width: window.innerWidth, height: window.innerHeight};

  /** starts claim event it's own way, returns true if not prevented
   * @param {ActionsEvent} ev @param {string} claim @returns claimed */
  function dispatchClaim(ev, claim) {
    claim.length !== 4 &&
      console.warn("internal claims must have name lenght of 4!");
    /** alternative to this was constructing Actions.State with
     * this.grabAction = "movezoom" */
    var initial = state.claim;
    state.onclaim(source.source.x, source.source.y, Object.freeze({
      changed: temp,
      all: all,
      source: source.source,
      claim: claim,
      cancelable: true,
      preventClaim: function (custom) {
        state.claim = (typeof custom == "string" ?
          custom.length !== 4 && custom :
          state.claim !== initial && state.claim) || "custom";
      }
    }));
    state.claim === initial ? state.claim = claim : 0;
    return state.claim === claim;
  }
  /**
   * @param {keyof HTMLElementEventMap|"mousewheel"} type
   * @param {ActionsHandler} handler @param {EventTarget} [target] */
  function addEvent(type, handler, target) {
    target = target || root;
    listeners ?
      target.addEventListener(
          type,
          /** @type {EventListener} */
          (handler),
          listeners
        ) :
      target["on" + type] = handler;
    return handler;
  }
  addEvent("touchstart", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchstart handler");
    var action = temp[-9];
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
          Actions.update(mutable[j], j, state, ev, null, touch) :
          mutable[j] = new Actions(ev, j, state, null, touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tstart beggining of created touches handling
    if (state.grabCount === 0)
      state.grabTime = Date.now();
    if (state.claim === "move" || state.claim === "unclaimed")
      if (
        all.length > 1 && all[0] && all[1] &&
        Date.now() < state.grabTime + state.shortTouchTime &&
        all[0].startTarget === state.root && all[1].target === state.root
      ) {
        state.claim = "grab";
        state.grabAction = "movezoom";
        state.grabCount = 0;
      }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action !== temp[0]) &&
        state.onstart(action.x, action.y, source) :
      console.error("very strange error, action is null0");
    Actions.log(temp, ev, "srt", state, source);
    state.grabCount = all.count;
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchmove", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchmove handler");
    var action = temp[-9];
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
      source.source = all[j] = temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, all[j], touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, all[j], touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tmove beggining of updated touches handling
    if (state.claim === "grab")
      (all[0] || all[1]) && Actions.touchGrab(state, all, ev);
    else if (
      source.source.state === "single drag" &&
      state.claim === "unclaimed"
    ) {
      if (dispatchClaim(ev, "grab"))
        state.grabAction = "movezoom";
    }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action !== temp[0]) &&
        state.onmove(action.x, action.y, source) :
      console.error("very strange error, action is null1");
    Actions.log(temp, ev, "mov", state, source);
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchend", addEvent("touchcancel", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchend handler");
    var action = temp[-9];
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
          Actions.update(mutable[j], j, state, ev, all[j], touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      all[j] = null;
      for (j = all.length - 1; j >= 0 && !all[j]; j--)
        all.length--;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tend beggining of removed/canceled touches handling
    if (state.claim === "grab")
      (all[0] || all[1]) && Actions.touchGrab(state, all, ev);
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action !== temp[0]) &&
        state.onend(action.x, action.y, source) :
      console.error("very strange error, action is null2");
    Actions.log(temp, ev, "end", state, source);
    // end of touches handling
    for (j = temp.length; j-- > 0; temp[j] = null)
      if (action = temp[j]) {
        state.endTimeStamps[j] = action.timeStamp;
        state.endPositions[j] = [action.x, action.y];
      }
    if ((state.grabCount = temp.length = all.length) === 0)
      state.claim = "unclaimed";
  }));
  addEvent("mousedown", addEvent("mouseenter", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, null)) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, null) :
        mutable[-1] = new Actions(ev, -1, state, null);
    // #mstart beggining of mouse action
    if (action.type === "mouseenter" && action.buttons === 0)
      state.claim = "unclaimed";
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && action.buttons !== 1) &&
        state.onstart(action.x, action.y, source) :
      console.error("very strange error, action is null3");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, "dwn", state, source);
  }));
  addEvent("mousemove", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, all[-1])) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, all[-1]) :
        mutable[-1] = new Actions(ev, -1, state, all[-1]);
    // #mmove beggining of mouse action
    if (
      source.source.state === "single drag" &&
      state.claim === "unclaimed" && action.buttons === 1
    ) {
      dispatchClaim(ev, "move");
    } else if (state.claim === "unclaimed" && action.buttons === 4)
      state.claim = "move";
    if (state.claim === "move" && (action.buttons & 5)) {
      vX += action.moveX;
      vY += action.moveY;
      render();
    }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && action.buttons !== 1) &&
        state.onmove(action.x, action.y, source) :
      console.error("very strange error, action is null4");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, "hvr", state, source);
  });
  addEvent("mouseup", addEvent("mouseleave", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, all[-1])) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, all[-1]) :
        mutable[-1] = new Actions(ev, -1, state, all[-1]);
    // #mmove beggining of mouse action
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && state.endButtons !== 1) &&
        state.onend(action.x, action.y, source) :
      console.error("very strange error, action is null5");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, " up", state, source);
    // end of mouse handling
    if (action.buttons === 0)
      if (action.type !== "mouseleave" || state.claim !== "move")
        state.claim = "unclaimed";
  }));
  addEvent("wheel", addEvent("mousewheel", function (ev) {
    if (!(ev instanceof WheelEvent) && !(ev instanceof MouseWheelEvent))
      throw new TypeError("not WheelEvent for wheel handler");
    if (ev.target !== state.target)
      return;
    // else if (!( ))
    //   throw new TypeError("not MouseWheelEvent for wheel handler");
    test_debug && console.log("onwheel", +new Date / 100 | 0,
      ("deltaY" in ev ? ev.deltaY : -ev.wheelDelta) || 0, +new Date, sc);
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc -= sc / ("deltaY" in ev ? ev.deltaY : -ev.wheelDelta) * 10;
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    render();
  }));
  addEvent("contextmenu", function (e) {
    for (var el = e.target; el instanceof Node;)
      if (!(el = el.parentNode))
        return;
      else if (el === bd)
        break;
    if (!(e instanceof MouseEvent))
      return;
    var offset = state.root instanceof HTMLElement ?
      state.root :
      {offsetLeft: 0, offsetTop: 0};
    var x = (e.pageX - offset.offsetLeft) * pR,
      y = (e.pageY - offset.offsetTop) * pR;
    contextmenu(x, y, e);
  }, window);
  return state.generateAccessors();
};
/** @param {ActionsOptions} options */
Actions.State = function (options) {
  /** @param {string} setting @param {any} fallback */
  function checkOptions(setting, fallback) {
    return setting in options ? options[setting] : fallback;
  }
  /** vX, vY, sc, pR globals aen't getting removed yet */
  this.x = 0;
  /** vY */
  this.y = 0;
  /** sc */
  this.scale = 16;
  /** fX */
  this.fromX = 0;
  /** fY */
  this.fromY = 0;
  /** gX */
  this.grabX = 0;
  /** gY */
  this.grabY = 0;
  /** pR customisable @see {window.devicePixelRatio} */
  this.pixelRatio = 1;
  this.onstart = options.start || F;
  this.onmove = options.move || F;
  this.onend = options.end || F;
  this.oncancel = options.end || F;
  this.onclaim = options.claim || F;
  /** @type {EventTarget} the element that gets events assigned */
  this.root = EL("unknown");
  /** @deprecated gesture "<single|double> <short|long|drag|longdrag>" */
  this.state = " ";
  /** so far only for one/two finger moving around "move"/"grab",
   * "custom" means the actons are in use outside API, "unclaimed"
   * !as an experiment string length 4 means it's claimed by API! */
  this.claim = "unclaimed";
  /** the top canvas element used for display of the editor,
   * detects all elements if null @type {EventTarget|null}
   * is responsible for preventing grab through elements above canvas */
  this.target = options.target || null;
  /** @type {(number|undefined)[]} previous end timeStamps per index */
  this.endTimeStamps = [];
  /** previous end positions per action index
   * @type {([number,number]|undefined)[]} */
  this.endPositions = [];
  /** stores the last Date.now() of active touches */
  this.grabTime = 0;
  this.grabCount = 0;
  /** "grab" properies refer to Actions.touchGrab, this is its mode */
  this.grabAction = "";
  this.grabScore = 0;
  this.endButtons = 0;
  
  /** allowed time for active (started) action to get state...short" */
  this.shortTouchTime = 350;
  /** allowed distance for active action to get state "...short" */
  this.shortTouchMove = 13;
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
  this.filterClaimed = checkOptions("filterClaimed", true);
  /** filters out all actions that don't have all[0] as source.source */
  this.touchIndex0 = checkOptions("touchIndex0", true);
  /** filters out all actions that aren't left mouse button only */
  this.mouseButton = checkOptions("mouseButton", this.touchIndex0);
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
    return Object.freeze(accessors);
};
Actions.logMax = 32;
/** spaghetti Actions debugging utility
 * @param {(Actions|null)[]} tem typeof temp @param {ActionsEvent} evt
 * @param {string} typ @param {Actions.State} stat @param {AllActions} src */
Actions.log = function (tem, evt, typ, stat, src) {
  var max = 16;
  //, alias = JSON.parse("{x:vX,y:vY,}".replace(/:/g, ':"').replace(/,/g, '",');
  //Actions.logMax-- > 0 && console.log
  (evt);
  //console.log
  (typ + " " + tem.map(function (e) {
    return e instanceof Actions ? "t" : e === null ? "_" : "" + e;
  }).join(","));
  //Actions.logMax-- < 1 &&
  //typ !== "end" &&
  /** list full actions with all properies */
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
  /** live log into evil_input */
  var action = tem[0], inpLog =
    //action ? action.movementX + " " + action.movementY : "";
    action ? action.state + " " + juhus.get('claim') + " " +
      src.all.count + '(state+claim+temp.count)\n' : "";
    //action ? JSON.stringify(action.state) + (action.timeStamp | 0) + '\n' : "";
    //JSON.stringify(stat.endPositions);
  if (Actions.logLivevil && action && "evil_input" in window) {
    var input = window.evil_input;
    (input instanceof HTMLInputElement ||
      input instanceof HTMLTextAreaElement ?
      input : EL("input")).value = inpLog;
  }
};
Actions.logLivevil = true;
Actions.logImmutable =
  (Date.now() / (24 * 3600 * 1000)) % 2 < 1;
console.log((Actions.logImmutable ? "Imm" : "M") + "utable today!");
if (typeof test_actions == "function")
// #foracode            >document.querySelector("c-console") || <
var juhus = Actions.init(document.querySelector("c-console") || document, {
  listeners: {},
  target: canvas,
  immutable: Actions.logImmutable,
  filterClaimed: true,
  touchIndex0: true
});
function test_actions() {}

// #acodekeys [search,ctrl, tab,shift,arrrow left,arrow right,undo,redo]
//            [move v,move ^,copy v,meta,   ctrl,    shift,   alt, esc ]
//       [arrrow <,arrow >,arrrow ^,arrow v,move ^,move v,copy ^,move v]
//       [";",     "'",    "\"",    "&",    "|",   "=",   "/",   "!"   ]
