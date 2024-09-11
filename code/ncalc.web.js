/******/ var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./src/Grammar/NCalcLexer.ts":
/*!***********************************!*\
  !*** ./src/Grammar/NCalcLexer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NCalcLexer)
/* harmony export */ });
/* harmony import */ var antlr4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antlr4 */ "./node_modules/antlr4/dist/antlr4.web.js");
// Generated from NCalc.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

class NCalcLexer extends antlr4__WEBPACK_IMPORTED_MODULE_0__.Lexer {
    constructor(input) {
        super(input);
        this._interp = new antlr4__WEBPACK_IMPORTED_MODULE_0__.LexerATNSimulator(this, NCalcLexer._ATN, NCalcLexer.DecisionsToDFA, new antlr4__WEBPACK_IMPORTED_MODULE_0__.PredictionContextCache());
    }
    get grammarFileName() { return "NCalc.g4"; }
    get literalNames() { return NCalcLexer.literalNames; }
    get symbolicNames() { return NCalcLexer.symbolicNames; }
    get ruleNames() { return NCalcLexer.ruleNames; }
    get serializedATN() { return NCalcLexer._serializedATN; }
    get channelNames() { return NCalcLexer.channelNames; }
    get modeNames() { return NCalcLexer.modeNames; }
    static get _ATN() {
        if (!NCalcLexer.__ATN) {
            NCalcLexer.__ATN = new antlr4__WEBPACK_IMPORTED_MODULE_0__.ATNDeserializer().deserialize(NCalcLexer._serializedATN);
        }
        return NCalcLexer.__ATN;
    }
}
NCalcLexer.T__0 = 1;
NCalcLexer.T__1 = 2;
NCalcLexer.T__2 = 3;
NCalcLexer.T__3 = 4;
NCalcLexer.T__4 = 5;
NCalcLexer.T__5 = 6;
NCalcLexer.T__6 = 7;
NCalcLexer.T__7 = 8;
NCalcLexer.T__8 = 9;
NCalcLexer.T__9 = 10;
NCalcLexer.T__10 = 11;
NCalcLexer.T__11 = 12;
NCalcLexer.T__12 = 13;
NCalcLexer.T__13 = 14;
NCalcLexer.T__14 = 15;
NCalcLexer.T__15 = 16;
NCalcLexer.T__16 = 17;
NCalcLexer.T__17 = 18;
NCalcLexer.T__18 = 19;
NCalcLexer.T__19 = 20;
NCalcLexer.T__20 = 21;
NCalcLexer.T__21 = 22;
NCalcLexer.T__22 = 23;
NCalcLexer.T__23 = 24;
NCalcLexer.T__24 = 25;
NCalcLexer.T__25 = 26;
NCalcLexer.T__26 = 27;
NCalcLexer.T__27 = 28;
NCalcLexer.NOT = 29;
NCalcLexer.TRUE = 30;
NCalcLexer.FALSE = 31;
NCalcLexer.AND = 32;
NCalcLexer.OR = 33;
NCalcLexer.ID = 34;
NCalcLexer.FLOAT = 35;
NCalcLexer.INTEGER = 36;
NCalcLexer.STRING = 37;
NCalcLexer.DATETIME = 38;
NCalcLexer.NAME = 39;
NCalcLexer.EXPONENT = 40;
NCalcLexer.WS = 41;
NCalcLexer.EOF = antlr4__WEBPACK_IMPORTED_MODULE_0__.Token.EOF;
NCalcLexer.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
NCalcLexer.literalNames = [null, "'?'", "':'", "'&&'",
    "'||'", "'&'", "'|'",
    "'^'", "'=='", "'='",
    "'!='", "'<>'", "'<'",
    "'<='", "'>'", "'>='",
    "'<<'", "'>>'", "'+'",
    "'-'", "'*'", "'/'",
    "'%'", "'!'", "'~'",
    "'**'", "'('", "')'",
    "','"];
NCalcLexer.symbolicNames = [null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, "NOT", "TRUE",
    "FALSE", "AND", "OR",
    "ID", "FLOAT", "INTEGER",
    "STRING", "DATETIME",
    "NAME", "EXPONENT",
    "WS"];
NCalcLexer.modeNames = ["DEFAULT_MODE",];
NCalcLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
    "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
    "T__25", "T__26", "T__27", "NOT", "TRUE", "FALSE", "AND", "OR", "ID",
    "FLOAT", "INTEGER", "STRING", "DATETIME", "NAME", "EXPONENT", "LETTER",
    "EscapeSequence", "UnicodeEscape", "HexDigit", "DIGIT", "WS", "A", "B",
    "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
NCalcLexer._serializedATN = [4, 0, 41, 401, 6, -1, 2, 0,
    7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9,
    7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23,
    2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2,
    31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38,
    7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7,
    45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52,
    2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2,
    60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67,
    7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1,
    2, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1,
    10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15,
    1, 15, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1,
    22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 27, 1, 27, 1, 28, 1, 28,
    1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1,
    31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 5, 33, 237, 8, 33, 10, 33, 12, 33, 240,
    9, 33, 1, 34, 5, 34, 243, 8, 34, 10, 34, 12, 34, 246, 9, 34, 1, 34, 1, 34, 4, 34, 250, 8, 34, 11,
    34, 12, 34, 251, 1, 34, 3, 34, 255, 8, 34, 1, 34, 4, 34, 258, 8, 34, 11, 34, 12, 34, 259, 1, 34,
    1, 34, 5, 34, 264, 8, 34, 10, 34, 12, 34, 267, 9, 34, 1, 34, 3, 34, 270, 8, 34, 1, 34, 4, 34, 273,
    8, 34, 11, 34, 12, 34, 274, 1, 34, 1, 34, 3, 34, 279, 8, 34, 1, 35, 4, 35, 282, 8, 35, 11, 35, 12,
    35, 283, 1, 36, 1, 36, 1, 36, 5, 36, 289, 8, 36, 10, 36, 12, 36, 292, 9, 36, 1, 36, 1, 36, 1, 37,
    1, 37, 5, 37, 298, 8, 37, 10, 37, 12, 37, 301, 9, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 5, 38, 308,
    8, 38, 10, 38, 12, 38, 311, 9, 38, 1, 38, 1, 38, 1, 39, 1, 39, 3, 39, 317, 8, 39, 1, 39, 4, 39, 320,
    8, 39, 11, 39, 12, 39, 321, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 3, 41, 329, 8, 41, 1, 42, 1, 42, 1,
    42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43, 3, 43, 339, 8, 43, 1, 44, 1, 44, 1, 45, 4, 45, 344, 8, 45,
    11, 45, 12, 45, 345, 1, 45, 1, 45, 1, 46, 1, 46, 1, 47, 1, 47, 1, 48, 1, 48, 1, 49, 1, 49, 1, 50,
    1, 50, 1, 51, 1, 51, 1, 52, 1, 52, 1, 53, 1, 53, 1, 54, 1, 54, 1, 55, 1, 55, 1, 56, 1, 56, 1, 57, 1,
    57, 1, 58, 1, 58, 1, 59, 1, 59, 1, 60, 1, 60, 1, 61, 1, 61, 1, 62, 1, 62, 1, 63, 1, 63, 1, 64, 1, 64,
    1, 65, 1, 65, 1, 66, 1, 66, 1, 67, 1, 67, 1, 68, 1, 68, 1, 69, 1, 69, 1, 70, 1, 70, 1, 71, 1, 71, 3,
    290, 299, 309, 0, 72, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23,
    12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47,
    24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69, 35, 71,
    36, 73, 37, 75, 38, 77, 39, 79, 40, 81, 0, 83, 0, 85, 0, 87, 0, 89, 0, 91, 41, 93, 0, 95, 0, 97,
    0, 99, 0, 101, 0, 103, 0, 105, 0, 107, 0, 109, 0, 111, 0, 113, 0, 115, 0, 117, 0, 119, 0, 121,
    0, 123, 0, 125, 0, 127, 0, 129, 0, 131, 0, 133, 0, 135, 0, 137, 0, 139, 0, 141, 0, 143, 0, 1, 0,
    33, 3, 0, 0, 31, 39, 39, 92, 92, 2, 0, 91, 91, 93, 93, 2, 0, 69, 69, 101, 101, 2, 0, 43, 43, 45,
    45, 3, 0, 65, 90, 95, 95, 97, 122, 5, 0, 39, 39, 92, 92, 110, 110, 114, 114, 116, 116, 2, 0, 65,
    70, 97, 102, 3, 0, 9, 10, 12, 13, 32, 32, 2, 0, 65, 65, 97, 97, 2, 0, 66, 66, 98, 98, 2, 0, 67, 67,
    99, 99, 2, 0, 68, 68, 100, 100, 2, 0, 70, 70, 102, 102, 2, 0, 71, 71, 103, 103, 2, 0, 72, 72, 104,
    104, 2, 0, 73, 73, 105, 105, 2, 0, 74, 74, 106, 106, 2, 0, 75, 75, 107, 107, 2, 0, 76, 76, 108,
    108, 2, 0, 77, 77, 109, 109, 2, 0, 78, 78, 110, 110, 2, 0, 79, 79, 111, 111, 2, 0, 80, 80, 112,
    112, 2, 0, 81, 81, 113, 113, 2, 0, 82, 82, 114, 114, 2, 0, 83, 83, 115, 115, 2, 0, 84, 84, 116,
    116, 2, 0, 85, 85, 117, 117, 2, 0, 86, 86, 118, 118, 2, 0, 87, 87, 119, 119, 2, 0, 88, 88, 120,
    120, 2, 0, 89, 89, 121, 121, 2, 0, 90, 90, 122, 122, 391, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5,
    1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0,
    0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1,
    0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0,
    0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1,
    0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0,
    0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 0, 69, 1, 0, 0, 0, 0, 71, 1,
    0, 0, 0, 0, 73, 1, 0, 0, 0, 0, 75, 1, 0, 0, 0, 0, 77, 1, 0, 0, 0, 0, 79, 1, 0, 0, 0, 0, 91, 1, 0, 0, 0,
    1, 145, 1, 0, 0, 0, 3, 147, 1, 0, 0, 0, 5, 149, 1, 0, 0, 0, 7, 152, 1, 0, 0, 0, 9, 155, 1, 0, 0, 0, 11,
    157, 1, 0, 0, 0, 13, 159, 1, 0, 0, 0, 15, 161, 1, 0, 0, 0, 17, 164, 1, 0, 0, 0, 19, 166, 1, 0, 0, 0,
    21, 169, 1, 0, 0, 0, 23, 172, 1, 0, 0, 0, 25, 174, 1, 0, 0, 0, 27, 177, 1, 0, 0, 0, 29, 179, 1, 0,
    0, 0, 31, 182, 1, 0, 0, 0, 33, 185, 1, 0, 0, 0, 35, 188, 1, 0, 0, 0, 37, 190, 1, 0, 0, 0, 39, 192,
    1, 0, 0, 0, 41, 194, 1, 0, 0, 0, 43, 196, 1, 0, 0, 0, 45, 198, 1, 0, 0, 0, 47, 200, 1, 0, 0, 0, 49,
    202, 1, 0, 0, 0, 51, 205, 1, 0, 0, 0, 53, 207, 1, 0, 0, 0, 55, 209, 1, 0, 0, 0, 57, 211, 1, 0, 0, 0,
    59, 215, 1, 0, 0, 0, 61, 220, 1, 0, 0, 0, 63, 226, 1, 0, 0, 0, 65, 230, 1, 0, 0, 0, 67, 233, 1, 0,
    0, 0, 69, 278, 1, 0, 0, 0, 71, 281, 1, 0, 0, 0, 73, 285, 1, 0, 0, 0, 75, 295, 1, 0, 0, 0, 77, 304,
    1, 0, 0, 0, 79, 314, 1, 0, 0, 0, 81, 323, 1, 0, 0, 0, 83, 325, 1, 0, 0, 0, 85, 330, 1, 0, 0, 0, 87,
    338, 1, 0, 0, 0, 89, 340, 1, 0, 0, 0, 91, 343, 1, 0, 0, 0, 93, 349, 1, 0, 0, 0, 95, 351, 1, 0, 0, 0,
    97, 353, 1, 0, 0, 0, 99, 355, 1, 0, 0, 0, 101, 357, 1, 0, 0, 0, 103, 359, 1, 0, 0, 0, 105, 361, 1,
    0, 0, 0, 107, 363, 1, 0, 0, 0, 109, 365, 1, 0, 0, 0, 111, 367, 1, 0, 0, 0, 113, 369, 1, 0, 0, 0, 115,
    371, 1, 0, 0, 0, 117, 373, 1, 0, 0, 0, 119, 375, 1, 0, 0, 0, 121, 377, 1, 0, 0, 0, 123, 379, 1, 0,
    0, 0, 125, 381, 1, 0, 0, 0, 127, 383, 1, 0, 0, 0, 129, 385, 1, 0, 0, 0, 131, 387, 1, 0, 0, 0, 133,
    389, 1, 0, 0, 0, 135, 391, 1, 0, 0, 0, 137, 393, 1, 0, 0, 0, 139, 395, 1, 0, 0, 0, 141, 397, 1, 0,
    0, 0, 143, 399, 1, 0, 0, 0, 145, 146, 5, 63, 0, 0, 146, 2, 1, 0, 0, 0, 147, 148, 5, 58, 0, 0, 148,
    4, 1, 0, 0, 0, 149, 150, 5, 38, 0, 0, 150, 151, 5, 38, 0, 0, 151, 6, 1, 0, 0, 0, 152, 153, 5, 124,
    0, 0, 153, 154, 5, 124, 0, 0, 154, 8, 1, 0, 0, 0, 155, 156, 5, 38, 0, 0, 156, 10, 1, 0, 0, 0, 157,
    158, 5, 124, 0, 0, 158, 12, 1, 0, 0, 0, 159, 160, 5, 94, 0, 0, 160, 14, 1, 0, 0, 0, 161, 162, 5,
    61, 0, 0, 162, 163, 5, 61, 0, 0, 163, 16, 1, 0, 0, 0, 164, 165, 5, 61, 0, 0, 165, 18, 1, 0, 0, 0,
    166, 167, 5, 33, 0, 0, 167, 168, 5, 61, 0, 0, 168, 20, 1, 0, 0, 0, 169, 170, 5, 60, 0, 0, 170, 171,
    5, 62, 0, 0, 171, 22, 1, 0, 0, 0, 172, 173, 5, 60, 0, 0, 173, 24, 1, 0, 0, 0, 174, 175, 5, 60, 0,
    0, 175, 176, 5, 61, 0, 0, 176, 26, 1, 0, 0, 0, 177, 178, 5, 62, 0, 0, 178, 28, 1, 0, 0, 0, 179, 180,
    5, 62, 0, 0, 180, 181, 5, 61, 0, 0, 181, 30, 1, 0, 0, 0, 182, 183, 5, 60, 0, 0, 183, 184, 5, 60,
    0, 0, 184, 32, 1, 0, 0, 0, 185, 186, 5, 62, 0, 0, 186, 187, 5, 62, 0, 0, 187, 34, 1, 0, 0, 0, 188,
    189, 5, 43, 0, 0, 189, 36, 1, 0, 0, 0, 190, 191, 5, 45, 0, 0, 191, 38, 1, 0, 0, 0, 192, 193, 5, 42,
    0, 0, 193, 40, 1, 0, 0, 0, 194, 195, 5, 47, 0, 0, 195, 42, 1, 0, 0, 0, 196, 197, 5, 37, 0, 0, 197,
    44, 1, 0, 0, 0, 198, 199, 5, 33, 0, 0, 199, 46, 1, 0, 0, 0, 200, 201, 5, 126, 0, 0, 201, 48, 1, 0,
    0, 0, 202, 203, 5, 42, 0, 0, 203, 204, 5, 42, 0, 0, 204, 50, 1, 0, 0, 0, 205, 206, 5, 40, 0, 0, 206,
    52, 1, 0, 0, 0, 207, 208, 5, 41, 0, 0, 208, 54, 1, 0, 0, 0, 209, 210, 5, 44, 0, 0, 210, 56, 1, 0,
    0, 0, 211, 212, 3, 119, 59, 0, 212, 213, 3, 121, 60, 0, 213, 214, 3, 131, 65, 0, 214, 58, 1, 0,
    0, 0, 215, 216, 3, 131, 65, 0, 216, 217, 3, 127, 63, 0, 217, 218, 3, 133, 66, 0, 218, 219, 3,
    101, 50, 0, 219, 60, 1, 0, 0, 0, 220, 221, 3, 103, 51, 0, 221, 222, 3, 93, 46, 0, 222, 223, 3,
    115, 57, 0, 223, 224, 3, 129, 64, 0, 224, 225, 3, 101, 50, 0, 225, 62, 1, 0, 0, 0, 226, 227, 3,
    93, 46, 0, 227, 228, 3, 119, 59, 0, 228, 229, 3, 99, 49, 0, 229, 64, 1, 0, 0, 0, 230, 231, 3, 121,
    60, 0, 231, 232, 3, 127, 63, 0, 232, 66, 1, 0, 0, 0, 233, 238, 3, 81, 40, 0, 234, 237, 3, 81, 40,
    0, 235, 237, 3, 89, 44, 0, 236, 234, 1, 0, 0, 0, 236, 235, 1, 0, 0, 0, 237, 240, 1, 0, 0, 0, 238,
    236, 1, 0, 0, 0, 238, 239, 1, 0, 0, 0, 239, 68, 1, 0, 0, 0, 240, 238, 1, 0, 0, 0, 241, 243, 3, 89,
    44, 0, 242, 241, 1, 0, 0, 0, 243, 246, 1, 0, 0, 0, 244, 242, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245,
    247, 1, 0, 0, 0, 246, 244, 1, 0, 0, 0, 247, 249, 5, 46, 0, 0, 248, 250, 3, 89, 44, 0, 249, 248,
    1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251, 249, 1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252, 254, 1, 0, 0, 0,
    253, 255, 3, 79, 39, 0, 254, 253, 1, 0, 0, 0, 254, 255, 1, 0, 0, 0, 255, 279, 1, 0, 0, 0, 256, 258,
    3, 89, 44, 0, 257, 256, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 257, 1, 0, 0, 0, 259, 260, 1, 0, 0,
    0, 260, 261, 1, 0, 0, 0, 261, 265, 5, 46, 0, 0, 262, 264, 3, 89, 44, 0, 263, 262, 1, 0, 0, 0, 264,
    267, 1, 0, 0, 0, 265, 263, 1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 269, 1, 0, 0, 0, 267, 265, 1, 0,
    0, 0, 268, 270, 3, 79, 39, 0, 269, 268, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 279, 1, 0, 0, 0, 271,
    273, 3, 89, 44, 0, 272, 271, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 272, 1, 0, 0, 0, 274, 275, 1,
    0, 0, 0, 275, 276, 1, 0, 0, 0, 276, 277, 3, 79, 39, 0, 277, 279, 1, 0, 0, 0, 278, 244, 1, 0, 0, 0,
    278, 257, 1, 0, 0, 0, 278, 272, 1, 0, 0, 0, 279, 70, 1, 0, 0, 0, 280, 282, 3, 89, 44, 0, 281, 280,
    1, 0, 0, 0, 282, 283, 1, 0, 0, 0, 283, 281, 1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 72, 1, 0, 0, 0,
    285, 290, 5, 39, 0, 0, 286, 289, 3, 83, 41, 0, 287, 289, 8, 0, 0, 0, 288, 286, 1, 0, 0, 0, 288,
    287, 1, 0, 0, 0, 289, 292, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 290, 288, 1, 0, 0, 0, 291, 293, 1, 0,
    0, 0, 292, 290, 1, 0, 0, 0, 293, 294, 5, 39, 0, 0, 294, 74, 1, 0, 0, 0, 295, 299, 5, 35, 0, 0, 296,
    298, 9, 0, 0, 0, 297, 296, 1, 0, 0, 0, 298, 301, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 299, 297, 1, 0,
    0, 0, 300, 302, 1, 0, 0, 0, 301, 299, 1, 0, 0, 0, 302, 303, 5, 35, 0, 0, 303, 76, 1, 0, 0, 0, 304,
    309, 5, 91, 0, 0, 305, 308, 8, 1, 0, 0, 306, 308, 3, 77, 38, 0, 307, 305, 1, 0, 0, 0, 307, 306,
    1, 0, 0, 0, 308, 311, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 309, 307, 1, 0, 0, 0, 310, 312, 1, 0, 0, 0,
    311, 309, 1, 0, 0, 0, 312, 313, 5, 93, 0, 0, 313, 78, 1, 0, 0, 0, 314, 316, 7, 2, 0, 0, 315, 317,
    7, 3, 0, 0, 316, 315, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317, 319, 1, 0, 0, 0, 318, 320, 3, 89, 44,
    0, 319, 318, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 319, 1, 0, 0, 0, 321, 322, 1, 0, 0, 0, 322, 80,
    1, 0, 0, 0, 323, 324, 7, 4, 0, 0, 324, 82, 1, 0, 0, 0, 325, 328, 5, 92, 0, 0, 326, 329, 7, 5, 0, 0,
    327, 329, 3, 85, 42, 0, 328, 326, 1, 0, 0, 0, 328, 327, 1, 0, 0, 0, 329, 84, 1, 0, 0, 0, 330, 331,
    5, 117, 0, 0, 331, 332, 3, 87, 43, 0, 332, 333, 3, 87, 43, 0, 333, 334, 3, 87, 43, 0, 334, 335,
    3, 87, 43, 0, 335, 86, 1, 0, 0, 0, 336, 339, 3, 89, 44, 0, 337, 339, 7, 6, 0, 0, 338, 336, 1, 0,
    0, 0, 338, 337, 1, 0, 0, 0, 339, 88, 1, 0, 0, 0, 340, 341, 2, 48, 57, 0, 341, 90, 1, 0, 0, 0, 342,
    344, 7, 7, 0, 0, 343, 342, 1, 0, 0, 0, 344, 345, 1, 0, 0, 0, 345, 343, 1, 0, 0, 0, 345, 346, 1, 0,
    0, 0, 346, 347, 1, 0, 0, 0, 347, 348, 6, 45, 0, 0, 348, 92, 1, 0, 0, 0, 349, 350, 7, 8, 0, 0, 350,
    94, 1, 0, 0, 0, 351, 352, 7, 9, 0, 0, 352, 96, 1, 0, 0, 0, 353, 354, 7, 10, 0, 0, 354, 98, 1, 0, 0,
    0, 355, 356, 7, 11, 0, 0, 356, 100, 1, 0, 0, 0, 357, 358, 7, 2, 0, 0, 358, 102, 1, 0, 0, 0, 359,
    360, 7, 12, 0, 0, 360, 104, 1, 0, 0, 0, 361, 362, 7, 13, 0, 0, 362, 106, 1, 0, 0, 0, 363, 364, 7,
    14, 0, 0, 364, 108, 1, 0, 0, 0, 365, 366, 7, 15, 0, 0, 366, 110, 1, 0, 0, 0, 367, 368, 7, 16, 0,
    0, 368, 112, 1, 0, 0, 0, 369, 370, 7, 17, 0, 0, 370, 114, 1, 0, 0, 0, 371, 372, 7, 18, 0, 0, 372,
    116, 1, 0, 0, 0, 373, 374, 7, 19, 0, 0, 374, 118, 1, 0, 0, 0, 375, 376, 7, 20, 0, 0, 376, 120, 1,
    0, 0, 0, 377, 378, 7, 21, 0, 0, 378, 122, 1, 0, 0, 0, 379, 380, 7, 22, 0, 0, 380, 124, 1, 0, 0, 0,
    381, 382, 7, 23, 0, 0, 382, 126, 1, 0, 0, 0, 383, 384, 7, 24, 0, 0, 384, 128, 1, 0, 0, 0, 385, 386,
    7, 25, 0, 0, 386, 130, 1, 0, 0, 0, 387, 388, 7, 26, 0, 0, 388, 132, 1, 0, 0, 0, 389, 390, 7, 27,
    0, 0, 390, 134, 1, 0, 0, 0, 391, 392, 7, 28, 0, 0, 392, 136, 1, 0, 0, 0, 393, 394, 7, 29, 0, 0, 394,
    138, 1, 0, 0, 0, 395, 396, 7, 30, 0, 0, 396, 140, 1, 0, 0, 0, 397, 398, 7, 31, 0, 0, 398, 142, 1,
    0, 0, 0, 399, 400, 7, 32, 0, 0, 400, 144, 1, 0, 0, 0, 22, 0, 236, 238, 244, 251, 254, 259, 265,
    269, 274, 278, 283, 288, 290, 299, 307, 309, 316, 321, 328, 338, 345, 1, 6, 0, 0];
NCalcLexer.DecisionsToDFA = NCalcLexer._ATN.decisionToState.map((ds, index) => new antlr4__WEBPACK_IMPORTED_MODULE_0__.DFA(ds, index));


/***/ }),

/***/ "./src/Grammar/NCalcParser.ts":
/*!************************************!*\
  !*** ./src/Grammar/NCalcParser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditiveExpressionContext": () => (/* binding */ AdditiveExpressionContext),
/* harmony export */   "ArgumentsContext": () => (/* binding */ ArgumentsContext),
/* harmony export */   "BooleanExpressionContext": () => (/* binding */ BooleanExpressionContext),
/* harmony export */   "ConditionalExpressionContext": () => (/* binding */ ConditionalExpressionContext),
/* harmony export */   "ExponentialExpressionContext": () => (/* binding */ ExponentialExpressionContext),
/* harmony export */   "ExpressionListContext": () => (/* binding */ ExpressionListContext),
/* harmony export */   "IdentifierContext": () => (/* binding */ IdentifierContext),
/* harmony export */   "LogicalExpressionContext": () => (/* binding */ LogicalExpressionContext),
/* harmony export */   "MultiplicativeExpressionContext": () => (/* binding */ MultiplicativeExpressionContext),
/* harmony export */   "NcalcExpressionContext": () => (/* binding */ NcalcExpressionContext),
/* harmony export */   "PrimaryExpressionContext": () => (/* binding */ PrimaryExpressionContext),
/* harmony export */   "RelationalExpressionContext": () => (/* binding */ RelationalExpressionContext),
/* harmony export */   "ShiftExpressionContext": () => (/* binding */ ShiftExpressionContext),
/* harmony export */   "UnaryExpressionContext": () => (/* binding */ UnaryExpressionContext),
/* harmony export */   "ValueContext": () => (/* binding */ ValueContext),
/* harmony export */   "default": () => (/* binding */ NCalcParser)
/* harmony export */ });
/* harmony import */ var antlr4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antlr4 */ "./node_modules/antlr4/dist/antlr4.web.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NCalc/Domain */ "./src/NCalc/Domain/index.ts");
// Generated from NCalc.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols



class NCalcParser extends antlr4__WEBPACK_IMPORTED_MODULE_0__.Parser {
    get grammarFileName() { return "NCalc.g4"; }
    get literalNames() { return NCalcParser.literalNames; }
    get symbolicNames() { return NCalcParser.symbolicNames; }
    get ruleNames() { return NCalcParser.ruleNames; }
    get serializedATN() { return NCalcParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4__WEBPACK_IMPORTED_MODULE_0__.FailedPredicateException(this, predicate, message);
    }
    ExtractString(text) {
        let sb = text.split(/(?!$)/u);
        let startIndex = 1; // Skip initial quote
        let slashIndex = -1;
        const textencoder = new TextEncoder();
        const decoder = new TextDecoder();
        while ((slashIndex = sb.join().indexOf(this.BS, startIndex)) != -1) {
            let escapeType = sb[slashIndex + 1];
            switch (escapeType) {
                case 'u':
                    let hcode = [sb[slashIndex + 4], sb[slashIndex + 5]].join();
                    let lcode = [sb[slashIndex + 2], sb[slashIndex + 3]].join();
                    const hBytes = new Uint16Array(hcode.length);
                    const lBytes = new Uint16Array(lcode.length);
                    const merged = new Uint16Array(hBytes.length + lBytes.length);
                    merged.set(hBytes);
                    merged.set(lBytes, hBytes.length);
                    const unicodeChar = decoder.decode(merged);
                    // let unicodeChar = Encoding.Unicode.GetChars(new byte[] { System.Convert.ToByte(hcode, 16), System.Convert.ToByte(lcode, 16) })[0];
                    sb.splice(slashIndex, 6, unicodeChar);
                    // sb.Insert(slashIndex, unicodeChar);
                    break;
                case 'n':
                    sb.splice(slashIndex, 2, '\n');
                    break;
                case 'r':
                    sb.splice(slashIndex, 2, '\r');
                    break;
                case 't':
                    sb.splice(slashIndex, 2, '\t');
                    break;
                case '\'':
                    sb.splice(slashIndex, 2, '\'');
                    break;
                case '\\':
                    sb.splice(slashIndex, 2, '\\');
                    break;
                default: throw new Error("Unvalid escape sequence: \\" + escapeType);
            }
            startIndex = slashIndex + 1;
        }
        sb.splice(0, 1);
        sb.splice(sb.length - 1, 1);
        return sb.join('');
    }
    GetExpression() { return (this.ncalcExpression().val); }
    ;
    constructor(input) {
        super(input);
        this.BS = "\\";
        this.Errors = [];
        this._interp = new antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserATNSimulator(this, NCalcParser._ATN, NCalcParser.DecisionsToDFA, new antlr4__WEBPACK_IMPORTED_MODULE_0__.PredictionContextCache());
    }
    // @RuleVersion(0)
    ncalcExpression() {
        let localctx = new NcalcExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, NCalcParser.RULE_ncalcExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 30;
                localctx._logicalExpression = this.logicalExpression();
                this.state = 31;
                this.match(NCalcParser.EOF);
                localctx.val = localctx._logicalExpression.val;
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    logicalExpression() {
        let localctx = new LogicalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, NCalcParser.RULE_logicalExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 34;
                localctx._left = this.conditionalExpression();
                localctx.val = localctx._left.val;
                this.state = 66;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 39;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 41) {
                                {
                                    {
                                        this.state = 36;
                                        this.match(NCalcParser.WS);
                                    }
                                }
                                this.state = 41;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 42;
                            this.match(NCalcParser.T__0);
                            this.state = 46;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== antlr4__WEBPACK_IMPORTED_MODULE_0__.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 43;
                                            this.match(NCalcParser.WS);
                                        }
                                    }
                                }
                                this.state = 48;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
                            }
                            this.state = 49;
                            localctx._middle = this.conditionalExpression();
                            this.state = 53;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 41) {
                                {
                                    {
                                        this.state = 50;
                                        this.match(NCalcParser.WS);
                                    }
                                }
                                this.state = 55;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 56;
                            this.match(NCalcParser.T__1);
                            this.state = 60;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                            while (_alt !== 2 && _alt !== antlr4__WEBPACK_IMPORTED_MODULE_0__.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 57;
                                            this.match(NCalcParser.WS);
                                        }
                                    }
                                }
                                this.state = 62;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                            }
                            this.state = 63;
                            localctx._right = this.conditionalExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.TernaryExpression(localctx._left.val, localctx._middle.val, localctx._right.val);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    conditionalExpression() {
        let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, NCalcParser.RULE_conditionalExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 68;
                localctx._left = this.booleanExpression();
                localctx.val = localctx._left.val;
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 1610612739) !== 0)) {
                    {
                        {
                            this.state = 74;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 3:
                                case 32:
                                    {
                                        this.state = 70;
                                        _la = this._input.LA(1);
                                        if (!(_la === 3 || _la === 32)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.And;
                                    }
                                    break;
                                case 4:
                                case 33:
                                    {
                                        this.state = 72;
                                        _la = this._input.LA(1);
                                        if (!(_la === 4 || _la === 33)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Or;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 76;
                            localctx._right = this.booleanExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    booleanExpression() {
        let localctx = new BooleanExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, NCalcParser.RULE_booleanExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 84;
                localctx._left = this.relationalExpression();
                localctx.val = localctx._left.val;
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0)) {
                    {
                        {
                            this.state = 92;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 5:
                                    {
                                        this.state = 86;
                                        this.match(NCalcParser.T__4);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.BitwiseAnd;
                                    }
                                    break;
                                case 6:
                                    {
                                        this.state = 88;
                                        this.match(NCalcParser.T__5);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.BitwiseOr;
                                    }
                                    break;
                                case 7:
                                    {
                                        this.state = 90;
                                        this.match(NCalcParser.T__6);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.BitwiseXOr;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 94;
                            localctx._right = this.relationalExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 101;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relationalExpression() {
        let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, NCalcParser.RULE_relationalExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 102;
                localctx._left = this.shiftExpression();
                localctx.val = localctx._left.val;
                this.state = 123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65280) !== 0)) {
                    {
                        {
                            this.state = 116;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 8:
                                case 9:
                                    {
                                        this.state = 104;
                                        _la = this._input.LA(1);
                                        if (!(_la === 8 || _la === 9)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Equal;
                                    }
                                    break;
                                case 10:
                                case 11:
                                    {
                                        this.state = 106;
                                        _la = this._input.LA(1);
                                        if (!(_la === 10 || _la === 11)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.NotEqual;
                                    }
                                    break;
                                case 12:
                                    {
                                        this.state = 108;
                                        this.match(NCalcParser.T__11);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Lesser;
                                    }
                                    break;
                                case 13:
                                    {
                                        this.state = 110;
                                        this.match(NCalcParser.T__12);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.LesserOrEqual;
                                    }
                                    break;
                                case 14:
                                    {
                                        this.state = 112;
                                        this.match(NCalcParser.T__13);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Greater;
                                    }
                                    break;
                                case 15:
                                    {
                                        this.state = 114;
                                        this.match(NCalcParser.T__14);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.GreaterOrEqual;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 118;
                            localctx._right = this.shiftExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 125;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    shiftExpression() {
        let localctx = new ShiftExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, NCalcParser.RULE_shiftExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 126;
                localctx._left = this.additiveExpression();
                localctx.val = localctx._left.val;
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 16 || _la === 17) {
                    {
                        {
                            this.state = 132;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 16:
                                    {
                                        this.state = 128;
                                        this.match(NCalcParser.T__15);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.LeftShift;
                                    }
                                    break;
                                case 17:
                                    {
                                        this.state = 130;
                                        this.match(NCalcParser.T__16);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.RightShift;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 134;
                            localctx._right = this.additiveExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 141;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    additiveExpression() {
        let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, NCalcParser.RULE_additiveExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 142;
                localctx._left = this.multiplicativeExpression();
                localctx.val = localctx._left.val;
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 18 || _la === 19) {
                    {
                        {
                            this.state = 148;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 18:
                                    {
                                        this.state = 144;
                                        this.match(NCalcParser.T__17);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Plus;
                                    }
                                    break;
                                case 19:
                                    {
                                        this.state = 146;
                                        this.match(NCalcParser.T__18);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Minus;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 150;
                            localctx._right = this.multiplicativeExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    multiplicativeExpression() {
        let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, NCalcParser.RULE_multiplicativeExpression);
        let type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Unknown;
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 158;
                localctx._left = this.unaryExpression();
                localctx.val = localctx._left.val;
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0)) {
                    {
                        {
                            this.state = 166;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 20:
                                    {
                                        this.state = 160;
                                        this.match(NCalcParser.T__19);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Times;
                                    }
                                    break;
                                case 21:
                                    {
                                        this.state = 162;
                                        this.match(NCalcParser.T__20);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Div;
                                    }
                                    break;
                                case 22:
                                    {
                                        this.state = 164;
                                        this.match(NCalcParser.T__21);
                                        type = _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Modulo;
                                    }
                                    break;
                                default:
                                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                            }
                            this.state = 168;
                            localctx._right = this.unaryExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(type, localctx.val, localctx._right.val);
                        }
                    }
                    this.state = 175;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unaryExpression() {
        let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, NCalcParser.RULE_unaryExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 176;
                            this.match(NCalcParser.WS);
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 201;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 26:
                    case 30:
                    case 31:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                        {
                            this.state = 182;
                            localctx._exponentialExpression = this.exponentialExpression();
                            localctx.val = localctx._exponentialExpression.val;
                        }
                        break;
                    case 23:
                    case 29:
                        {
                            this.state = 185;
                            _la = this._input.LA(1);
                            if (!(_la === 23 || _la === 29)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 186;
                            localctx._exponentialExpression = this.exponentialExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpression(_NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpressionType.Not, localctx._exponentialExpression.val);
                        }
                        break;
                    case 24:
                        {
                            {
                                this.state = 189;
                                this.match(NCalcParser.T__23);
                            }
                            this.state = 190;
                            localctx._exponentialExpression = this.exponentialExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpression(_NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpressionType.BitwiseNot, localctx._exponentialExpression.val);
                        }
                        break;
                    case 19:
                        {
                            this.state = 193;
                            this.match(NCalcParser.T__18);
                            this.state = 194;
                            localctx._exponentialExpression = this.exponentialExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpression(_NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpressionType.Negate, localctx._exponentialExpression.val);
                        }
                        break;
                    case 18:
                        {
                            this.state = 197;
                            this.match(NCalcParser.T__17);
                            this.state = 198;
                            localctx._exponentialExpression = this.exponentialExpression();
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpression(_NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.UnaryExpressionType.Positive, localctx._exponentialExpression.val);
                        }
                        break;
                    default:
                        throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
                }
                this.state = 206;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== antlr4__WEBPACK_IMPORTED_MODULE_0__.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 203;
                                this.match(NCalcParser.WS);
                            }
                        }
                    }
                    this.state = 208;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    exponentialExpression() {
        let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, NCalcParser.RULE_exponentialExpression);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 209;
                localctx._left = this.primaryExpression();
                localctx.val = localctx._left.val;
                this.state = 217;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== antlr4__WEBPACK_IMPORTED_MODULE_0__.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 211;
                                this.match(NCalcParser.T__24);
                                this.state = 212;
                                localctx._right = this.unaryExpression();
                                localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpression(_NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.BinaryExpressionType.Exponentiation, localctx.val, localctx._right.val);
                            }
                        }
                    }
                    this.state = 219;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    primaryExpression() {
        let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, NCalcParser.RULE_primaryExpression);
        let _la;
        try {
            this.state = 235;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 26:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 220;
                        this.match(NCalcParser.T__25);
                        this.state = 221;
                        localctx._logicalExpression = this.logicalExpression();
                        this.state = 222;
                        this.match(NCalcParser.T__26);
                        localctx.val = localctx._logicalExpression.val;
                    }
                    break;
                case 30:
                case 31:
                case 35:
                case 36:
                case 37:
                case 38:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 225;
                        localctx._expr = this.value();
                        localctx.val = localctx._expr.val;
                    }
                    break;
                case 34:
                case 39:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 228;
                        localctx._identifier = this.identifier();
                        localctx.val = localctx._identifier.val;
                        this.state = 233;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 26) {
                            {
                                this.state = 230;
                                localctx._arguments = this.arguments();
                                localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.NCalcFunction(localctx._identifier.val, (localctx._arguments.val));
                            }
                        }
                    }
                    break;
                default:
                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    value() {
        let localctx = new ValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, NCalcParser.RULE_value);
        try {
            this.state = 249;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 35:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 237;
                        localctx._FLOAT = this.match(NCalcParser.FLOAT);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(parseFloat((localctx._FLOAT != null ? localctx._FLOAT.text : undefined)), _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.Float);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 239;
                        localctx._INTEGER = this.match(NCalcParser.INTEGER);
                        try {
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(parseInt((localctx._INTEGER != null ? localctx._INTEGER.text : undefined)), _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.Integer);
                        }
                        catch (e) {
                            localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(parseFloat((localctx._INTEGER != null ? localctx._INTEGER.text : undefined)), _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.Float);
                        }
                    }
                    break;
                case 37:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 241;
                        localctx._STRING = this.match(NCalcParser.STRING);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(this.ExtractString((localctx._STRING != null ? localctx._STRING.text : undefined)), _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.String);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 243;
                        localctx._DATETIME = this.match(NCalcParser.DATETIME);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(dayjs__WEBPACK_IMPORTED_MODULE_1___default()((localctx._DATETIME != null ? localctx._DATETIME.text : undefined).substring(1, (localctx._DATETIME != null ? localctx._DATETIME.text : undefined).length - 2)).toString(), _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.DateTime);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 245;
                        this.match(NCalcParser.TRUE);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(true, _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.Boolean);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 247;
                        this.match(NCalcParser.FALSE);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueExpression(false, _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.ValueType.Float);
                    }
                    break;
                default:
                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let localctx = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, NCalcParser.RULE_identifier);
        try {
            this.state = 255;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 34:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 251;
                        localctx._ID = this.match(NCalcParser.ID);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.Identifier((localctx._ID != null ? localctx._ID.text : undefined));
                    }
                    break;
                case 39:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 253;
                        localctx._NAME = this.match(NCalcParser.NAME);
                        localctx.val = new _NCalc_Domain__WEBPACK_IMPORTED_MODULE_2__.Identifier((localctx._NAME != null ? localctx._NAME.text : undefined).substring(1, (localctx._NAME != null ? localctx._NAME.text : undefined).length - 1));
                    }
                    break;
                default:
                    throw new antlr4__WEBPACK_IMPORTED_MODULE_0__.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionList() {
        let localctx = new ExpressionListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, NCalcParser.RULE_expressionList);
        let expressions = [];
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 257;
                localctx._first = this.logicalExpression();
                expressions.push(localctx._first.val);
                this.state = 277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 28 || _la === 41) {
                    {
                        {
                            this.state = 262;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 41) {
                                {
                                    {
                                        this.state = 259;
                                        this.match(NCalcParser.WS);
                                    }
                                }
                                this.state = 264;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 265;
                            this.match(NCalcParser.T__27);
                            this.state = 269;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
                            while (_alt !== 2 && _alt !== antlr4__WEBPACK_IMPORTED_MODULE_0__.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 266;
                                            this.match(NCalcParser.WS);
                                        }
                                    }
                                }
                                this.state = 271;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
                            }
                            this.state = 272;
                            localctx._follow = this.logicalExpression();
                            expressions.push(localctx._follow.val);
                        }
                    }
                    this.state = 279;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                localctx.val = expressions;
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let localctx = new ArgumentsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, NCalcParser.RULE_arguments);
        localctx.val = [];
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 282;
                this.match(NCalcParser.T__25);
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 12532067) !== 0)) {
                    {
                        this.state = 283;
                        localctx._expressionList = this.expressionList();
                        localctx.val = localctx._expressionList.val;
                    }
                }
                this.state = 288;
                this.match(NCalcParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof antlr4__WEBPACK_IMPORTED_MODULE_0__.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    static get _ATN() {
        if (!NCalcParser.__ATN) {
            NCalcParser.__ATN = new antlr4__WEBPACK_IMPORTED_MODULE_0__.ATNDeserializer().deserialize(NCalcParser._serializedATN);
        }
        return NCalcParser.__ATN;
    }
}
NCalcParser.T__0 = 1;
NCalcParser.T__1 = 2;
NCalcParser.T__2 = 3;
NCalcParser.T__3 = 4;
NCalcParser.T__4 = 5;
NCalcParser.T__5 = 6;
NCalcParser.T__6 = 7;
NCalcParser.T__7 = 8;
NCalcParser.T__8 = 9;
NCalcParser.T__9 = 10;
NCalcParser.T__10 = 11;
NCalcParser.T__11 = 12;
NCalcParser.T__12 = 13;
NCalcParser.T__13 = 14;
NCalcParser.T__14 = 15;
NCalcParser.T__15 = 16;
NCalcParser.T__16 = 17;
NCalcParser.T__17 = 18;
NCalcParser.T__18 = 19;
NCalcParser.T__19 = 20;
NCalcParser.T__20 = 21;
NCalcParser.T__21 = 22;
NCalcParser.T__22 = 23;
NCalcParser.T__23 = 24;
NCalcParser.T__24 = 25;
NCalcParser.T__25 = 26;
NCalcParser.T__26 = 27;
NCalcParser.T__27 = 28;
NCalcParser.NOT = 29;
NCalcParser.TRUE = 30;
NCalcParser.FALSE = 31;
NCalcParser.AND = 32;
NCalcParser.OR = 33;
NCalcParser.ID = 34;
NCalcParser.FLOAT = 35;
NCalcParser.INTEGER = 36;
NCalcParser.STRING = 37;
NCalcParser.DATETIME = 38;
NCalcParser.NAME = 39;
NCalcParser.EXPONENT = 40;
NCalcParser.WS = 41;
NCalcParser.EOF = antlr4__WEBPACK_IMPORTED_MODULE_0__.Token.EOF;
NCalcParser.RULE_ncalcExpression = 0;
NCalcParser.RULE_logicalExpression = 1;
NCalcParser.RULE_conditionalExpression = 2;
NCalcParser.RULE_booleanExpression = 3;
NCalcParser.RULE_relationalExpression = 4;
NCalcParser.RULE_shiftExpression = 5;
NCalcParser.RULE_additiveExpression = 6;
NCalcParser.RULE_multiplicativeExpression = 7;
NCalcParser.RULE_unaryExpression = 8;
NCalcParser.RULE_exponentialExpression = 9;
NCalcParser.RULE_primaryExpression = 10;
NCalcParser.RULE_value = 11;
NCalcParser.RULE_identifier = 12;
NCalcParser.RULE_expressionList = 13;
NCalcParser.RULE_arguments = 14;
NCalcParser.literalNames = [null, "'?'",
    "':'", "'&&'",
    "'||'", "'&'",
    "'|'", "'^'",
    "'=='", "'='",
    "'!='", "'<>'",
    "'<'", "'<='",
    "'>'", "'>='",
    "'<<'", "'>>'",
    "'+'", "'-'",
    "'*'", "'/'",
    "'%'", "'!'",
    "'~'", "'**'",
    "'('", "')'",
    "','"];
NCalcParser.symbolicNames = [null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, "NOT",
    "TRUE", "FALSE",
    "AND", "OR",
    "ID", "FLOAT",
    "INTEGER",
    "STRING", "DATETIME",
    "NAME", "EXPONENT",
    "WS"];
// tslint:disable:no-trailing-whitespace
NCalcParser.ruleNames = [
    "ncalcExpression", "logicalExpression", "conditionalExpression", "booleanExpression",
    "relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression",
    "unaryExpression", "exponentialExpression", "primaryExpression", "value",
    "identifier", "expressionList", "arguments",
];
NCalcParser._serializedATN = [4, 1, 41, 291, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1,
    1, 1, 5, 1, 38, 8, 1, 10, 1, 12, 1, 41, 9, 1, 1, 1, 1, 1, 5, 1, 45, 8, 1, 10, 1, 12, 1, 48, 9, 1, 1, 1,
    1, 1, 5, 1, 52, 8, 1, 10, 1, 12, 1, 55, 9, 1, 1, 1, 1, 1, 5, 1, 59, 8, 1, 10, 1, 12, 1, 62, 9, 1, 1, 1,
    1, 1, 1, 1, 3, 1, 67, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 75, 8, 2, 1, 2, 1, 2, 1, 2, 5, 2, 80,
    8, 2, 10, 2, 12, 2, 83, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 93, 8, 3, 1, 3, 1, 3,
    1, 3, 5, 3, 98, 8, 3, 10, 3, 12, 3, 101, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 117, 8, 4, 1, 4, 1, 4, 1, 4, 5, 4, 122, 8, 4, 10, 4, 12, 4, 125, 9, 4,
    1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 133, 8, 5, 1, 5, 1, 5, 1, 5, 5, 5, 138, 8, 5, 10, 5, 12, 5, 141,
    9, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 149, 8, 6, 1, 6, 1, 6, 1, 6, 5, 6, 154, 8, 6, 10, 6, 12,
    6, 157, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 167, 8, 7, 1, 7, 1, 7, 1, 7, 5, 7, 172,
    8, 7, 10, 7, 12, 7, 175, 9, 7, 1, 8, 5, 8, 178, 8, 8, 10, 8, 12, 8, 181, 9, 8, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 202, 8, 8,
    1, 8, 5, 8, 205, 8, 8, 10, 8, 12, 8, 208, 9, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 5, 9, 216, 8, 9, 10,
    9, 12, 9, 219, 9, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 3, 10, 234, 8, 10, 3, 10, 236, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 250, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 256, 8, 12,
    1, 13, 1, 13, 1, 13, 5, 13, 261, 8, 13, 10, 13, 12, 13, 264, 9, 13, 1, 13, 1, 13, 5, 13, 268, 8,
    13, 10, 13, 12, 13, 271, 9, 13, 1, 13, 1, 13, 1, 13, 5, 13, 276, 8, 13, 10, 13, 12, 13, 279, 9,
    13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 287, 8, 14, 1, 14, 1, 14, 1, 14, 0, 0, 15, 0,
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 0, 5, 2, 0, 3, 3, 32, 32, 2, 0, 4, 4, 33, 33, 1,
    0, 8, 9, 1, 0, 10, 11, 2, 0, 23, 23, 29, 29, 318, 0, 30, 1, 0, 0, 0, 2, 34, 1, 0, 0, 0, 4, 68, 1, 0,
    0, 0, 6, 84, 1, 0, 0, 0, 8, 102, 1, 0, 0, 0, 10, 126, 1, 0, 0, 0, 12, 142, 1, 0, 0, 0, 14, 158, 1, 0,
    0, 0, 16, 179, 1, 0, 0, 0, 18, 209, 1, 0, 0, 0, 20, 235, 1, 0, 0, 0, 22, 249, 1, 0, 0, 0, 24, 255,
    1, 0, 0, 0, 26, 257, 1, 0, 0, 0, 28, 282, 1, 0, 0, 0, 30, 31, 3, 2, 1, 0, 31, 32, 5, 0, 0, 1, 32, 33,
    6, 0, -1, 0, 33, 1, 1, 0, 0, 0, 34, 35, 3, 4, 2, 0, 35, 66, 6, 1, -1, 0, 36, 38, 5, 41, 0, 0, 37, 36,
    1, 0, 0, 0, 38, 41, 1, 0, 0, 0, 39, 37, 1, 0, 0, 0, 39, 40, 1, 0, 0, 0, 40, 42, 1, 0, 0, 0, 41, 39, 1,
    0, 0, 0, 42, 46, 5, 1, 0, 0, 43, 45, 5, 41, 0, 0, 44, 43, 1, 0, 0, 0, 45, 48, 1, 0, 0, 0, 46, 44, 1,
    0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 49, 1, 0, 0, 0, 48, 46, 1, 0, 0, 0, 49, 53, 3, 4, 2, 0, 50, 52, 5, 41,
    0, 0, 51, 50, 1, 0, 0, 0, 52, 55, 1, 0, 0, 0, 53, 51, 1, 0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 56, 1, 0, 0,
    0, 55, 53, 1, 0, 0, 0, 56, 60, 5, 2, 0, 0, 57, 59, 5, 41, 0, 0, 58, 57, 1, 0, 0, 0, 59, 62, 1, 0, 0,
    0, 60, 58, 1, 0, 0, 0, 60, 61, 1, 0, 0, 0, 61, 63, 1, 0, 0, 0, 62, 60, 1, 0, 0, 0, 63, 64, 3, 4, 2, 0,
    64, 65, 6, 1, -1, 0, 65, 67, 1, 0, 0, 0, 66, 39, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 3, 1, 0, 0, 0, 68,
    69, 3, 6, 3, 0, 69, 81, 6, 2, -1, 0, 70, 71, 7, 0, 0, 0, 71, 75, 6, 2, -1, 0, 72, 73, 7, 1, 0, 0, 73,
    75, 6, 2, -1, 0, 74, 70, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 3, 6, 3, 0, 77,
    78, 6, 2, -1, 0, 78, 80, 1, 0, 0, 0, 79, 74, 1, 0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81,
    82, 1, 0, 0, 0, 82, 5, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 85, 3, 8, 4, 0, 85, 99, 6, 3, -1, 0, 86, 87,
    5, 5, 0, 0, 87, 93, 6, 3, -1, 0, 88, 89, 5, 6, 0, 0, 89, 93, 6, 3, -1, 0, 90, 91, 5, 7, 0, 0, 91, 93,
    6, 3, -1, 0, 92, 86, 1, 0, 0, 0, 92, 88, 1, 0, 0, 0, 92, 90, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 95,
    3, 8, 4, 0, 95, 96, 6, 3, -1, 0, 96, 98, 1, 0, 0, 0, 97, 92, 1, 0, 0, 0, 98, 101, 1, 0, 0, 0, 99, 97,
    1, 0, 0, 0, 99, 100, 1, 0, 0, 0, 100, 7, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 102, 103, 3, 10, 5, 0, 103,
    123, 6, 4, -1, 0, 104, 105, 7, 2, 0, 0, 105, 117, 6, 4, -1, 0, 106, 107, 7, 3, 0, 0, 107, 117, 6,
    4, -1, 0, 108, 109, 5, 12, 0, 0, 109, 117, 6, 4, -1, 0, 110, 111, 5, 13, 0, 0, 111, 117, 6, 4, -1,
    0, 112, 113, 5, 14, 0, 0, 113, 117, 6, 4, -1, 0, 114, 115, 5, 15, 0, 0, 115, 117, 6, 4, -1, 0, 116,
    104, 1, 0, 0, 0, 116, 106, 1, 0, 0, 0, 116, 108, 1, 0, 0, 0, 116, 110, 1, 0, 0, 0, 116, 112, 1, 0,
    0, 0, 116, 114, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 119, 3, 10, 5, 0, 119, 120, 6, 4, -1, 0, 120,
    122, 1, 0, 0, 0, 121, 116, 1, 0, 0, 0, 122, 125, 1, 0, 0, 0, 123, 121, 1, 0, 0, 0, 123, 124, 1, 0,
    0, 0, 124, 9, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 126, 127, 3, 12, 6, 0, 127, 139, 6, 5, -1, 0, 128,
    129, 5, 16, 0, 0, 129, 133, 6, 5, -1, 0, 130, 131, 5, 17, 0, 0, 131, 133, 6, 5, -1, 0, 132, 128,
    1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 135, 3, 12, 6, 0, 135, 136, 6, 5, -1,
    0, 136, 138, 1, 0, 0, 0, 137, 132, 1, 0, 0, 0, 138, 141, 1, 0, 0, 0, 139, 137, 1, 0, 0, 0, 139, 140,
    1, 0, 0, 0, 140, 11, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0, 142, 143, 3, 14, 7, 0, 143, 155, 6, 6, -1,
    0, 144, 145, 5, 18, 0, 0, 145, 149, 6, 6, -1, 0, 146, 147, 5, 19, 0, 0, 147, 149, 6, 6, -1, 0, 148,
    144, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0, 149, 150, 1, 0, 0, 0, 150, 151, 3, 14, 7, 0, 151, 152, 6,
    6, -1, 0, 152, 154, 1, 0, 0, 0, 153, 148, 1, 0, 0, 0, 154, 157, 1, 0, 0, 0, 155, 153, 1, 0, 0, 0,
    155, 156, 1, 0, 0, 0, 156, 13, 1, 0, 0, 0, 157, 155, 1, 0, 0, 0, 158, 159, 3, 16, 8, 0, 159, 173,
    6, 7, -1, 0, 160, 161, 5, 20, 0, 0, 161, 167, 6, 7, -1, 0, 162, 163, 5, 21, 0, 0, 163, 167, 6, 7,
    -1, 0, 164, 165, 5, 22, 0, 0, 165, 167, 6, 7, -1, 0, 166, 160, 1, 0, 0, 0, 166, 162, 1, 0, 0, 0,
    166, 164, 1, 0, 0, 0, 167, 168, 1, 0, 0, 0, 168, 169, 3, 16, 8, 0, 169, 170, 6, 7, -1, 0, 170, 172,
    1, 0, 0, 0, 171, 166, 1, 0, 0, 0, 172, 175, 1, 0, 0, 0, 173, 171, 1, 0, 0, 0, 173, 174, 1, 0, 0, 0,
    174, 15, 1, 0, 0, 0, 175, 173, 1, 0, 0, 0, 176, 178, 5, 41, 0, 0, 177, 176, 1, 0, 0, 0, 178, 181,
    1, 0, 0, 0, 179, 177, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 201, 1, 0, 0, 0, 181, 179, 1, 0, 0, 0,
    182, 183, 3, 18, 9, 0, 183, 184, 6, 8, -1, 0, 184, 202, 1, 0, 0, 0, 185, 186, 7, 4, 0, 0, 186, 187,
    3, 18, 9, 0, 187, 188, 6, 8, -1, 0, 188, 202, 1, 0, 0, 0, 189, 190, 5, 24, 0, 0, 190, 191, 3, 18,
    9, 0, 191, 192, 6, 8, -1, 0, 192, 202, 1, 0, 0, 0, 193, 194, 5, 19, 0, 0, 194, 195, 3, 18, 9, 0,
    195, 196, 6, 8, -1, 0, 196, 202, 1, 0, 0, 0, 197, 198, 5, 18, 0, 0, 198, 199, 3, 18, 9, 0, 199,
    200, 6, 8, -1, 0, 200, 202, 1, 0, 0, 0, 201, 182, 1, 0, 0, 0, 201, 185, 1, 0, 0, 0, 201, 189, 1,
    0, 0, 0, 201, 193, 1, 0, 0, 0, 201, 197, 1, 0, 0, 0, 202, 206, 1, 0, 0, 0, 203, 205, 5, 41, 0, 0,
    204, 203, 1, 0, 0, 0, 205, 208, 1, 0, 0, 0, 206, 204, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 17,
    1, 0, 0, 0, 208, 206, 1, 0, 0, 0, 209, 210, 3, 20, 10, 0, 210, 217, 6, 9, -1, 0, 211, 212, 5, 25,
    0, 0, 212, 213, 3, 16, 8, 0, 213, 214, 6, 9, -1, 0, 214, 216, 1, 0, 0, 0, 215, 211, 1, 0, 0, 0, 216,
    219, 1, 0, 0, 0, 217, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 19, 1, 0, 0, 0, 219, 217, 1, 0,
    0, 0, 220, 221, 5, 26, 0, 0, 221, 222, 3, 2, 1, 0, 222, 223, 5, 27, 0, 0, 223, 224, 6, 10, -1, 0,
    224, 236, 1, 0, 0, 0, 225, 226, 3, 22, 11, 0, 226, 227, 6, 10, -1, 0, 227, 236, 1, 0, 0, 0, 228,
    229, 3, 24, 12, 0, 229, 233, 6, 10, -1, 0, 230, 231, 3, 28, 14, 0, 231, 232, 6, 10, -1, 0, 232,
    234, 1, 0, 0, 0, 233, 230, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 236, 1, 0, 0, 0, 235, 220, 1, 0,
    0, 0, 235, 225, 1, 0, 0, 0, 235, 228, 1, 0, 0, 0, 236, 21, 1, 0, 0, 0, 237, 238, 5, 35, 0, 0, 238,
    250, 6, 11, -1, 0, 239, 240, 5, 36, 0, 0, 240, 250, 6, 11, -1, 0, 241, 242, 5, 37, 0, 0, 242, 250,
    6, 11, -1, 0, 243, 244, 5, 38, 0, 0, 244, 250, 6, 11, -1, 0, 245, 246, 5, 30, 0, 0, 246, 250, 6,
    11, -1, 0, 247, 248, 5, 31, 0, 0, 248, 250, 6, 11, -1, 0, 249, 237, 1, 0, 0, 0, 249, 239, 1, 0,
    0, 0, 249, 241, 1, 0, 0, 0, 249, 243, 1, 0, 0, 0, 249, 245, 1, 0, 0, 0, 249, 247, 1, 0, 0, 0, 250,
    23, 1, 0, 0, 0, 251, 252, 5, 34, 0, 0, 252, 256, 6, 12, -1, 0, 253, 254, 5, 39, 0, 0, 254, 256,
    6, 12, -1, 0, 255, 251, 1, 0, 0, 0, 255, 253, 1, 0, 0, 0, 256, 25, 1, 0, 0, 0, 257, 258, 3, 2, 1,
    0, 258, 277, 6, 13, -1, 0, 259, 261, 5, 41, 0, 0, 260, 259, 1, 0, 0, 0, 261, 264, 1, 0, 0, 0, 262,
    260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 265, 1, 0, 0, 0, 264, 262, 1, 0, 0, 0, 265, 269, 5, 28,
    0, 0, 266, 268, 5, 41, 0, 0, 267, 266, 1, 0, 0, 0, 268, 271, 1, 0, 0, 0, 269, 267, 1, 0, 0, 0, 269,
    270, 1, 0, 0, 0, 270, 272, 1, 0, 0, 0, 271, 269, 1, 0, 0, 0, 272, 273, 3, 2, 1, 0, 273, 274, 6, 13,
    -1, 0, 274, 276, 1, 0, 0, 0, 275, 262, 1, 0, 0, 0, 276, 279, 1, 0, 0, 0, 277, 275, 1, 0, 0, 0, 277,
    278, 1, 0, 0, 0, 278, 280, 1, 0, 0, 0, 279, 277, 1, 0, 0, 0, 280, 281, 6, 13, -1, 0, 281, 27, 1,
    0, 0, 0, 282, 286, 5, 26, 0, 0, 283, 284, 3, 26, 13, 0, 284, 285, 6, 14, -1, 0, 285, 287, 1, 0,
    0, 0, 286, 283, 1, 0, 0, 0, 286, 287, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 289, 5, 27, 0, 0, 289,
    29, 1, 0, 0, 0, 29, 39, 46, 53, 60, 66, 74, 81, 92, 99, 116, 123, 132, 139, 148, 155, 166, 173,
    179, 201, 206, 217, 233, 235, 249, 255, 262, 269, 277, 286];
NCalcParser.DecisionsToDFA = NCalcParser._ATN.decisionToState.map((ds, index) => new antlr4__WEBPACK_IMPORTED_MODULE_0__.DFA(ds, index));
class NcalcExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    EOF() {
        return this.getToken(NCalcParser.EOF, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_ncalcExpression;
    }
    enterRule(listener) {
        if (listener.enterNcalcExpression) {
            listener.enterNcalcExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNcalcExpression) {
            listener.exitNcalcExpression(this);
        }
    }
}
class LogicalExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    conditionalExpression_list() {
        return this.getTypedRuleContexts(ConditionalExpressionContext);
    }
    conditionalExpression(i) {
        return this.getTypedRuleContext(ConditionalExpressionContext, i);
    }
    WS_list() {
        return this.getTokens(NCalcParser.WS);
    }
    WS(i) {
        return this.getToken(NCalcParser.WS, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_logicalExpression;
    }
    enterRule(listener) {
        if (listener.enterLogicalExpression) {
            listener.enterLogicalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalExpression) {
            listener.exitLogicalExpression(this);
        }
    }
}
class ConditionalExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    booleanExpression_list() {
        return this.getTypedRuleContexts(BooleanExpressionContext);
    }
    booleanExpression(i) {
        return this.getTypedRuleContext(BooleanExpressionContext, i);
    }
    AND_list() {
        return this.getTokens(NCalcParser.AND);
    }
    AND(i) {
        return this.getToken(NCalcParser.AND, i);
    }
    OR_list() {
        return this.getTokens(NCalcParser.OR);
    }
    OR(i) {
        return this.getToken(NCalcParser.OR, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_conditionalExpression;
    }
    enterRule(listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    }
}
class BooleanExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relationalExpression_list() {
        return this.getTypedRuleContexts(RelationalExpressionContext);
    }
    relationalExpression(i) {
        return this.getTypedRuleContext(RelationalExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_booleanExpression;
    }
    enterRule(listener) {
        if (listener.enterBooleanExpression) {
            listener.enterBooleanExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBooleanExpression) {
            listener.exitBooleanExpression(this);
        }
    }
}
class RelationalExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    shiftExpression_list() {
        return this.getTypedRuleContexts(ShiftExpressionContext);
    }
    shiftExpression(i) {
        return this.getTypedRuleContext(ShiftExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_relationalExpression;
    }
    enterRule(listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    }
}
class ShiftExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    additiveExpression_list() {
        return this.getTypedRuleContexts(AdditiveExpressionContext);
    }
    additiveExpression(i) {
        return this.getTypedRuleContext(AdditiveExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_shiftExpression;
    }
    enterRule(listener) {
        if (listener.enterShiftExpression) {
            listener.enterShiftExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShiftExpression) {
            listener.exitShiftExpression(this);
        }
    }
}
class AdditiveExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    multiplicativeExpression_list() {
        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
    }
    multiplicativeExpression(i) {
        return this.getTypedRuleContext(MultiplicativeExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_additiveExpression;
    }
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
}
class MultiplicativeExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    unaryExpression_list() {
        return this.getTypedRuleContexts(UnaryExpressionContext);
    }
    unaryExpression(i) {
        return this.getTypedRuleContext(UnaryExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_multiplicativeExpression;
    }
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
}
class UnaryExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    exponentialExpression() {
        return this.getTypedRuleContext(ExponentialExpressionContext, 0);
    }
    WS_list() {
        return this.getTokens(NCalcParser.WS);
    }
    WS(i) {
        return this.getToken(NCalcParser.WS, i);
    }
    NOT() {
        return this.getToken(NCalcParser.NOT, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_unaryExpression;
    }
    enterRule(listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    }
}
class ExponentialExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    unaryExpression_list() {
        return this.getTypedRuleContexts(UnaryExpressionContext);
    }
    unaryExpression(i) {
        return this.getTypedRuleContext(UnaryExpressionContext, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_exponentialExpression;
    }
    enterRule(listener) {
        if (listener.enterExponentialExpression) {
            listener.enterExponentialExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExponentialExpression) {
            listener.exitExponentialExpression(this);
        }
    }
}
class PrimaryExpressionContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    value() {
        return this.getTypedRuleContext(ValueContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_primaryExpression;
    }
    enterRule(listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    }
}
class ValueContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FLOAT() {
        return this.getToken(NCalcParser.FLOAT, 0);
    }
    INTEGER() {
        return this.getToken(NCalcParser.INTEGER, 0);
    }
    STRING() {
        return this.getToken(NCalcParser.STRING, 0);
    }
    DATETIME() {
        return this.getToken(NCalcParser.DATETIME, 0);
    }
    TRUE() {
        return this.getToken(NCalcParser.TRUE, 0);
    }
    FALSE() {
        return this.getToken(NCalcParser.FALSE, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_value;
    }
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
}
class IdentifierContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(NCalcParser.ID, 0);
    }
    NAME() {
        return this.getToken(NCalcParser.NAME, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_identifier;
    }
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
}
class ExpressionListContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.val = [];
        this.parser = parser;
    }
    logicalExpression_list() {
        return this.getTypedRuleContexts(LogicalExpressionContext);
    }
    logicalExpression(i) {
        return this.getTypedRuleContext(LogicalExpressionContext, i);
    }
    WS_list() {
        return this.getTokens(NCalcParser.WS);
    }
    WS(i) {
        return this.getToken(NCalcParser.WS, i);
    }
    get ruleIndex() {
        return NCalcParser.RULE_expressionList;
    }
    enterRule(listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    }
}
class ArgumentsContext extends antlr4__WEBPACK_IMPORTED_MODULE_0__.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.val = [];
        this.parser = parser;
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    get ruleIndex() {
        return NCalcParser.RULE_arguments;
    }
    enterRule(listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/ArgumentException.ts":
/*!***********************************************!*\
  !*** ./src/NCalc/Domain/ArgumentException.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArgumentException": () => (/* binding */ ArgumentException),
/* harmony export */   "EvaluationException": () => (/* binding */ EvaluationException)
/* harmony export */ });
class ArgumentException extends Error {
}
class EvaluationException extends Error {
}


/***/ }),

/***/ "./src/NCalc/Domain/BinaryExpression.ts":
/*!**********************************************!*\
  !*** ./src/NCalc/Domain/BinaryExpression.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BinaryExpression": () => (/* binding */ BinaryExpression),
/* harmony export */   "BinaryExpressionType": () => (/* binding */ BinaryExpressionType)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class BinaryExpression extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(type, leftExpression, rightExpression) {
        super();
        this.ClassName = 'BinaryExpression';
        this.Type = type;
        this.LeftExpression = leftExpression;
        this.RightExpression = rightExpression;
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}
var BinaryExpressionType;
(function (BinaryExpressionType) {
    BinaryExpressionType[BinaryExpressionType["None"] = 0] = "None";
    BinaryExpressionType[BinaryExpressionType["And"] = 1] = "And";
    BinaryExpressionType[BinaryExpressionType["Or"] = 2] = "Or";
    BinaryExpressionType[BinaryExpressionType["NotEqual"] = 3] = "NotEqual";
    BinaryExpressionType[BinaryExpressionType["LesserOrEqual"] = 4] = "LesserOrEqual";
    BinaryExpressionType[BinaryExpressionType["GreaterOrEqual"] = 5] = "GreaterOrEqual";
    BinaryExpressionType[BinaryExpressionType["Lesser"] = 6] = "Lesser";
    BinaryExpressionType[BinaryExpressionType["Greater"] = 7] = "Greater";
    BinaryExpressionType[BinaryExpressionType["Equal"] = 8] = "Equal";
    BinaryExpressionType[BinaryExpressionType["Minus"] = 9] = "Minus";
    BinaryExpressionType[BinaryExpressionType["Plus"] = 10] = "Plus";
    BinaryExpressionType[BinaryExpressionType["Modulo"] = 11] = "Modulo";
    BinaryExpressionType[BinaryExpressionType["Div"] = 12] = "Div";
    BinaryExpressionType[BinaryExpressionType["Times"] = 13] = "Times";
    BinaryExpressionType[BinaryExpressionType["BitwiseOr"] = 14] = "BitwiseOr";
    BinaryExpressionType[BinaryExpressionType["BitwiseAnd"] = 15] = "BitwiseAnd";
    BinaryExpressionType[BinaryExpressionType["BitwiseXOr"] = 16] = "BitwiseXOr";
    BinaryExpressionType[BinaryExpressionType["LeftShift"] = 17] = "LeftShift";
    BinaryExpressionType[BinaryExpressionType["RightShift"] = 18] = "RightShift";
    BinaryExpressionType[BinaryExpressionType["Unknown"] = 19] = "Unknown";
    BinaryExpressionType[BinaryExpressionType["Exponentiation"] = 20] = "Exponentiation";
})(BinaryExpressionType || (BinaryExpressionType = {}));


/***/ }),

/***/ "./src/NCalc/Domain/EvaluationVisitor.ts":
/*!***********************************************!*\
  !*** ./src/NCalc/Domain/EvaluationVisitor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationVisitor": () => (/* binding */ EvaluationVisitor)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");
/* harmony import */ var _EvaluationOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EvaluationOptions */ "./src/NCalc/EvaluationOptions.ts");
/* harmony import */ var _Numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Numbers */ "./src/NCalc/Numbers.ts");
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Expression */ "./src/NCalc/Expression.ts");
/* harmony import */ var _FunctionArgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FunctionArgs */ "./src/NCalc/FunctionArgs.ts");
/* harmony import */ var _ParameterArgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ParameterArgs */ "./src/NCalc/ParameterArgs.ts");
/* harmony import */ var _ValueExpression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueExpression */ "./src/NCalc/Domain/ValueExpression.ts");







const equalsIgnoringCase = (text, other) => {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
};
class EvaluationVisitor extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpressionVisitor {
    // private readonly CultureInfo _cultureInfo;
    get IgnoreCase() {
        return this._options & _EvaluationOptions__WEBPACK_IMPORTED_MODULE_1__.EvaluateOptions.IgnoreCase;
    }
    constructor(options) {
        super();
        // private delegate T Func<T>();
        this._options = _EvaluationOptions__WEBPACK_IMPORTED_MODULE_1__.EvaluateOptions.None;
        this.Parameters = {};
        this.EvaluateFunction = {};
        this.EvaluateParameter = {};
        this._options = options;
    }
    Evaluate(expression) {
        expression.Accept(this);
        return this.Result;
    }
    static FromJson(expression) {
        switch (expression.ClassName) {
            case 'LogicalExpression':
                throw new Error();
            case 'TernaryExpression':
                return new ___WEBPACK_IMPORTED_MODULE_0__.TernaryExpression(this.FromJson(expression.LeftExpression), this.FromJson(expression.MiddleExpression), this.FromJson(expression.RightExpression));
            case 'BinaryExpression':
                return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(expression.Type, this.FromJson(expression.LeftExpression), this.FromJson(expression.RightExpression));
            case 'UnaryExpression':
                return new ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpression(expression.Type, this.FromJson(expression.Expression));
            case 'ValueExpression':
                return new _ValueExpression__WEBPACK_IMPORTED_MODULE_6__.ValueExpression(expression.Value, expression.ValueType);
            case 'NCalcFunction':
                return new ___WEBPACK_IMPORTED_MODULE_0__.NCalcFunction(expression.Identifier, expression.Expressions.map(x => this.FromJson(x)));
            case 'Identifier':
                return new ___WEBPACK_IMPORTED_MODULE_0__.Identifier(expression.Name);
            default:
                throw new Error(`Invalid expression type: ${expression.constructor.name}`);
        }
    }
    Visit(expression) {
        switch (expression.ClassName) {
            case 'LogicalExpression':
                throw new Error();
            case 'TernaryExpression':
                this.VisitTernary(expression);
                break;
            case 'BinaryExpression':
                this.VisitBinaryExpression(expression);
                break;
            case 'UnaryExpression':
                this.VisitUnaryExpression(expression);
                break;
            case 'ValueExpression':
                this.VisitValueExpression(expression);
                break;
            case 'NCalcFunction':
                this.VisitNCalcFunction(expression);
                break;
            case 'Identifier':
                this.VisitIdentifier(expression);
                break;
            default:
                throw new Error(`Invalid expression type: ${expression.constructor.name}`);
        }
    }
    VisitTernary(expression) {
        // Evaluates the left expression and saves the value
        expression.LeftExpression.Accept(this);
        const left = this.Result == true;
        if (left) {
            expression.MiddleExpression.Accept(this);
        }
        else {
            expression.RightExpression.Accept(this);
        }
    }
    /// <summary>
    /// Gets the the most precise type.
    /// </summary>
    /// <param name="a">Type a.</param>
    /// <param name="b">Type b.</param>
    /// <returns></returns>
    static GetMostPreciseType(a, b) {
        for (const t in this.CommonTypes) {
            if (typeof a == t || typeof b == t) {
                return t;
            }
        }
        return a;
    }
    // @todo Revisit this function for equality
    CompareUsingMostPreciseType(a, b) {
        if (a == null && b == null) {
            return 0;
        }
        if (a == null) {
            return -1;
        }
        if (b == null) {
            return 1;
        }
        if (typeof a == 'number' || typeof b == 'number') {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        }
        else {
            return a == b ? 0 : 1;
        }
        // return Comparer.Default.Compare(Convert.ChangeType(a, mpt), Convert.ChangeType(b, mpt));
    }
    static IsReal(value) {
        const typeCode = typeof value;
        return typeCode == _Numbers__WEBPACK_IMPORTED_MODULE_2__.TypeCode.Decimal;
    }
    VisitBinaryExpression(expression) {
        // simulate Lazy<Func<>> behavior for late evaluation
        let leftValue = null;
        const left = () => {
            if (leftValue == null) {
                expression.LeftExpression.Accept(this);
                leftValue = this.Result;
            }
            return leftValue;
        };
        // simulate Lazy<Func<>> behavior for late evaluations
        let rightValue = null;
        const right = () => {
            if (rightValue == null) {
                expression.RightExpression.Accept(this);
                rightValue = this.Result;
            }
            return rightValue;
        };
        // @todo re-evaluate this implementation
        switch (expression.Type) {
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.And:
                this.Result = left() == true && right() == true;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Or:
                this.Result = left() == true || right() == true;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Div:
                this.Result =
                    EvaluationVisitor.IsReal(left()) || EvaluationVisitor.IsReal(right())
                        ? _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Divide(left(), right())
                        : _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Divide(parseFloat(left()), right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Equal:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) == 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Greater:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) > 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.GreaterOrEqual:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) >= 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Lesser:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) < 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LesserOrEqual:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) <= 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Minus:
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Subtract(left(), right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Modulo:
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Modulo(left(), right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.NotEqual:
                // Use the type of the left operand to make the comparison
                this.Result = this.CompareUsingMostPreciseType(left(), right()) != 0;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Plus:
                if (typeof left() == 'string') {
                    this.Result = left().concat(right());
                }
                else {
                    this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Add(left(), right());
                }
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Times:
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Multiply(left(), right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseAnd:
                this.Result = parseInt(left()) & parseInt(right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseOr:
                this.Result = parseInt(left()) | parseInt(right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseXOr:
                this.Result = parseInt(left()) ^ parseInt(right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LeftShift:
                this.Result = parseInt(left()) << parseInt(right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.RightShift:
                this.Result = parseInt(left()) >> parseInt(right());
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Exponentiation:
                this.Result = Math.pow(parseFloat(left()), parseFloat(right()));
                break;
        }
    }
    VisitUnaryExpression(expression) {
        // Recursively evaluates the underlying expression
        expression.Expression.Accept(this);
        switch (expression.Type) {
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.Not:
                this.Result = !(this.Result == true);
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.Negate:
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Subtract(0, this.Result);
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.BitwiseNot:
                this.Result = ~parseInt(this.Result);
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.Positive:
                // No-op
                break;
        }
    }
    VisitValueExpression(expression) {
        this.Result = expression.Value;
    }
    VisitNCalcFunction(func) {
        const args = new _FunctionArgs__WEBPACK_IMPORTED_MODULE_4__.FunctionArgs();
        args.Parameters = [];
        // Don't call parameters right now, instead let the func do it as needed.
        // Some parameters shouldn't be called, for instance, in a if(), the "not" value might be a division by zero
        // Evaluating every value could produce unexpected behaviour
        for (let i = 0; i < func.Expressions.length; i++) {
            args.Parameters[i] = new _Expression__WEBPACK_IMPORTED_MODULE_3__.Expression(func.Expressions[i], this._options);
            args.Parameters[i].EvaluateFunction = this.EvaluateFunction;
            args.Parameters[i].EvaluateParameter = this.EvaluateParameter;
            // Assign the parameters of the Expression to the arguments so that custom funcs and Parameters can use them
            args.Parameters[i].Parameters = this.Parameters;
        }
        // Calls external implementation
        this.OnEvaluateFunction(this.IgnoreCase ? func.Identifier.Name.toLowerCase() : func.Identifier.Name, args);
        // // If an external implementation was found get the result back
        if (args.HasResult) {
            this.Result = args.Result;
            return;
        }
        switch (func.Identifier.Name.toLowerCase()) {
            // Start Abs
            case 'abs': {
                this.CheckCase('Abs', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Abs() takes exactly 1 argument');
                this.Result = Math.abs(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Acos
            case 'acos': {
                this.CheckCase('Acos', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Acos() takes exactly 1 argument');
                this.Result = Math.acos(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Asin
            case 'asin': {
                this.CheckCase('Asin', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Asin() takes exactly 1 argument');
                this.Result = Math.asin(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Atan
            case 'atan': {
                this.CheckCase('Atan', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Atan() takes exactly 1 argument');
                this.Result = Math.atan(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Atan2
            case 'atan2': {
                this.CheckCase('Atan2', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Atan2() takes exactly 2 argument');
                this.Result = Math.atan2(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));
                break;
            }
            // end
            // Start Ceiling
            case 'ceiling': {
                this.CheckCase('Ceiling', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Ceiling() takes exactly 1 argument');
                this.Result = Math.ceil(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Cos
            case 'cos': {
                this.CheckCase('Cos', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Cos() takes exactly 1 argument');
                this.Result = Math.cos(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Exp
            case 'exp': {
                this.CheckCase('Exp', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Exp() takes exactly 1 argument');
                this.Result = Math.exp(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Floor
            case 'floor': {
                this.CheckCase('Floor', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Floor() takes exactly 1 argument');
                this.Result = Math.floor(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // // Start IEEERemainder
            // case "ieeeremainder":
            //     this.CheckCase("IEEERemainder", func.Identifier.Name);
            //     if (func.Expressions.length != 2)
            //         throw new ArgumentException("IEEERemainder() takes exactly 2 arguments");
            //     Result = Math.IEEERemainder(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));
            //     break;
            // // end
            // Start Ln
            case 'ln': {
                this.CheckCase('Ln', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Ln() takes exactly 1 argument');
                this.Result = Math.log(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Log
            case 'log': {
                this.CheckCase('Log', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Log() takes exactly 2 arguments');
                this.Result =
                    Math.log(parseFloat(this.Evaluate(func.Expressions[0]))) /
                        Math.log(parseFloat(this.Evaluate(func.Expressions[1])));
                break;
            }
            // end
            // Start Log10
            case 'log10': {
                this.CheckCase('Log10', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Log10() takes exactly 1 argument');
                this.Result = Math.log10(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Pow
            case 'pow': {
                this.CheckCase('Pow', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Pow() takes exactly 2 arguments');
                this.Result = Math.pow(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));
                break;
            }
            // end
            // Start Round
            // @todo Implementation is incorrect!
            case 'round': {
                this.CheckCase('Round', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Round() takes exactly 2 arguments');
                // const rounding = (this._options & EvaluateOptions.RoundAwayFromZero) == EvaluateOptions.RoundAwayFromZero ? MidpointRounding.AwayFromZero : MidpointRounding.ToEven;
                this.Result = Math.round(parseFloat(this.Evaluate(func.Expressions[0]))).toFixed(this.Evaluate(func.Expressions[1]));
                break;
            }
            // end
            // Start Sign
            case 'sign': {
                this.CheckCase('Sign', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Sign() takes exactly 1 argument');
                this.Result = Math.sign(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Sin
            case 'sin': {
                this.CheckCase('Sin', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Sin() takes exactly 1 argument');
                this.Result = Math.sin(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Sqrt
            case 'sqrt': {
                this.CheckCase('Sqrt', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Sqrt() takes exactly 1 argument');
                this.Result = Math.sqrt(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Tan
            case 'tan': {
                this.CheckCase('Tan', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Tan() takes exactly 1 argument');
                this.Result = Math.tan(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Truncate
            case 'truncate': {
                this.CheckCase('Truncate', func.Identifier.Name);
                if (func.Expressions.length != 1)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Truncate() takes exactly 1 argument');
                this.Result = Math.trunc(parseFloat(this.Evaluate(func.Expressions[0])));
                break;
            }
            // end
            // Start Max
            case 'max': {
                this.CheckCase('Max', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Max() takes exactly 2 arguments');
                const maxleft = this.Evaluate(func.Expressions[0]);
                const maxright = this.Evaluate(func.Expressions[1]);
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Max(maxleft, maxright);
                break;
            }
            // end
            // Start Min
            case 'min': {
                this.CheckCase('Min', func.Identifier.Name);
                if (func.Expressions.length != 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Min() takes exactly 2 arguments');
                const minleft = this.Evaluate(func.Expressions[0]);
                const minright = this.Evaluate(func.Expressions[1]);
                this.Result = _Numbers__WEBPACK_IMPORTED_MODULE_2__.Numbers.Min(minleft, minright);
                break;
            }
            // end
            // Start if
            case 'if': {
                this.CheckCase('if', func.Identifier.Name);
                if (func.Expressions.length != 3)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('if() takes exactly 3 arguments');
                const val = this.Evaluate(func.Expressions[0]);
                const cond = val == true ? true : false;
                this.Result = cond
                    ? this.Evaluate(func.Expressions[1])
                    : this.Evaluate(func.Expressions[2]);
                break;
            }
            // end
            // Start in
            case 'in': {
                this.CheckCase('in', func.Identifier.Name);
                if (func.Expressions.length < 2)
                    throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException('in() takes at least 2 arguments');
                const parameter = this.Evaluate(func.Expressions[0]);
                let evaluation = false;
                // Goes through any values, and stop whe one is found
                for (let i = 1; i < func.Expressions.length; i++) {
                    const argument = this.Evaluate(func.Expressions[i]);
                    if (this.CompareUsingMostPreciseType(parameter, argument) == 0) {
                        evaluation = true;
                        break;
                    }
                }
                this.Result = evaluation;
                break;
            }
            // end
            default:
                throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException(`Function ${func.Identifier.Name} was not found.`);
        }
    }
    CheckCase(func, called) {
        if (this.IgnoreCase) {
            if (equalsIgnoringCase(func, called)) {
                return;
            }
            throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException(`Function '${called}' not found`);
        }
        if (func != called) {
            throw new Error(`Function not found ${called}. Try ${func} instead.`);
        }
    }
    OnEvaluateFunction(name, args) {
        if (Object.prototype.hasOwnProperty.call(this.EvaluateFunction, name)) {
            // @todo
            this.EvaluateFunction[name](args);
        }
    }
    OnEvaluateParameter(name, args) {
        if (Object.prototype.hasOwnProperty.call(this.EvaluateParameter, name)) {
            this.EvaluateParameter[name](args);
        }
    }
    VisitIdentifier(parameter) {
        if (Object.prototype.hasOwnProperty.call(this.Parameters, parameter.Name)) {
            // The parameter is defined in the hashtable
            if (this.Parameters[parameter.Name].constructor.name == 'Expression') {
                // The parameter is itself another Expression
                const expression = this.Parameters[parameter.Name];
                // Overloads parameters
                for (const p in this.Parameters) {
                    expression.Parameters[p] = this.Parameters[p];
                }
                expression.EvaluateFunction = this.EvaluateFunction;
                expression.EvaluateParameter = this.EvaluateParameter;
                this.Result = this.Parameters[parameter.Name].Evaluate();
            }
            else {
                this.Result = this.Parameters[parameter.Name];
            }
        }
        else {
            // The parameter should be defined in a call back method
            const args = new _ParameterArgs__WEBPACK_IMPORTED_MODULE_5__.ParameterArgs();
            // Calls external implementation
            this.OnEvaluateParameter(parameter.Name, args);
            if (!args.HasResult)
                throw new ___WEBPACK_IMPORTED_MODULE_0__.ArgumentException(`Parameter '${parameter.Name}' was not defined `);
            this.Result = args.Result;
        }
    }
}
EvaluationVisitor.CommonTypes = ['number', 'boolean', 'string', 'bigint'];


/***/ }),

/***/ "./src/NCalc/Domain/Identifier.ts":
/*!****************************************!*\
  !*** ./src/NCalc/Domain/Identifier.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Identifier": () => (/* binding */ Identifier)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class Identifier extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(name) {
        super();
        this.Name = '';
        this.ClassName = 'Identifier';
        this.Name = name;
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/LogicalExpression.ts":
/*!***********************************************!*\
  !*** ./src/NCalc/Domain/LogicalExpression.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogicalExpression": () => (/* binding */ LogicalExpression)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class LogicalExpression {
    // We need an empty constructor to save it in cache.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.ClassName = 'LogicalExpression';
    }
    And(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.And, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.And, this, operand);
        }
    }
    DividedBy(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Div, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Div, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    EqualsTo(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Equal, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Equal, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    GreaterThan(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Greater, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Greater, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    GreaterOrEqualThan(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.GreaterOrEqual, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.GreaterOrEqual, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    LesserThan(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Lesser, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Lesser, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    LesserOrEqualThan(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LesserOrEqual, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LesserOrEqual, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    Minus(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Minus, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Minus, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    Modulo(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Modulo, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Modulo, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    NotEqual(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.NotEqual, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.NotEqual, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    Or(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Or, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Or, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    Plus(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Plus, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Plus, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    Mult(operand) {
        return this.Plus(operand);
    }
    BitwiseOr(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseOr, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseOr, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    BitwiseAnd(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseAnd, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseAnd, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    BitwiseXOr(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseXOr, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseXOr, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    LeftShift(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LeftShift, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LeftShift, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    RightShift(operand) {
        if (Object.getPrototypeOf(operand) === 'LogicalExpression') {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.RightShift, this, operand);
        }
        else {
            return new ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpression(___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.RightShift, this, new ___WEBPACK_IMPORTED_MODULE_0__.ValueExpression(operand));
        }
    }
    ToString() {
        const serializer = new ___WEBPACK_IMPORTED_MODULE_0__.SerializationVisitor();
        this.Accept(serializer);
        return serializer.Result.join('').trim();
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/LogicalExpressionVisitor.ts":
/*!******************************************************!*\
  !*** ./src/NCalc/Domain/LogicalExpressionVisitor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogicalExpressionVisitor": () => (/* binding */ LogicalExpressionVisitor)
/* harmony export */ });
class LogicalExpressionVisitor {
}


/***/ }),

/***/ "./src/NCalc/Domain/NCalcFunction.ts":
/*!*******************************************!*\
  !*** ./src/NCalc/Domain/NCalcFunction.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NCalcFunction": () => (/* binding */ NCalcFunction)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class NCalcFunction extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(identifier, expressions) {
        super();
        this.ClassName = 'NCalcFunction';
        this.Identifier = identifier;
        this.Expressions = expressions;
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/SerializationVisitor.ts":
/*!**************************************************!*\
  !*** ./src/NCalc/Domain/SerializationVisitor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerializationVisitor": () => (/* binding */ SerializationVisitor)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");
/* harmony import */ var _ValueExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueExpression */ "./src/NCalc/Domain/ValueExpression.ts");


class SerializationVisitor extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpressionVisitor {
    EncapsulateNoValue(expression) {
        if (expression.constructor.name == 'ValueExpression') {
            expression.Accept(this);
        }
        else {
            this.Result.push('(');
            expression.Accept(this);
            // trim spaces before adding a closing paren
            while (this.Result[this.Result.length - 1] == ' ')
                this.Result.splice(this.Result.length - 1, 1);
            this.Result.push(') ');
        }
    }
    constructor() {
        super();
        this.Result = [];
        this.Result = [];
        this._numberFormatInfo = {};
    }
    Visit(arg) {
        const requestType = arg.constructor.name;
        switch (requestType) {
            case 'LogicalExpression':
                this.VisitLogical(arg);
                break;
            case 'TernaryExpression':
                this.VisitTernary(arg);
                break;
            case 'BinaryExpression':
                this.VisitBinary(arg);
                break;
            case 'UnaryExpression':
                this.VisitUnary(arg);
                break;
            case 'ValueExpression':
                this.VisitValue(arg);
                break;
            case 'NCalcFunction':
                this.VisitFunction(arg);
                break;
            case 'Identifier':
                this.VisitIdentifier(arg);
                break;
            default:
                throw new Error(`Unknown visit type given, received '${requestType}'`);
        }
    }
    VisitLogical(expression) {
        throw new Error('The method or operation is not implemented.');
    }
    VisitTernary(expression) {
        this.EncapsulateNoValue(expression.LeftExpression);
        this.Result.push('? ');
        this.EncapsulateNoValue(expression.MiddleExpression);
        this.Result.push(': ');
        this.EncapsulateNoValue(expression.RightExpression);
    }
    VisitBinary(expression) {
        this.EncapsulateNoValue(expression.LeftExpression);
        switch (expression.Type) {
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.And:
                this.Result.push('and ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Or:
                this.Result.push('or ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Div:
                this.Result.push('/ ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Equal:
                this.Result.push('= ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Greater:
                this.Result.push('> ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.GreaterOrEqual:
                this.Result.push('>= ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Lesser:
                this.Result.push('< ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LesserOrEqual:
                this.Result.push('<= ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Minus:
                this.Result.push('- ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Modulo:
                this.Result.push('% ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.NotEqual:
                this.Result.push('!= ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Plus:
                this.Result.push('+ ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.Times:
                this.Result.push('* ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseAnd:
                this.Result.push('& ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseOr:
                this.Result.push('| ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.BitwiseXOr:
                this.Result.push('~ ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.LeftShift:
                this.Result.push('<< ');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.BinaryExpressionType.RightShift:
                this.Result.push('>> ');
                break;
        }
        this.EncapsulateNoValue(expression.RightExpression);
    }
    VisitUnary(expression) {
        switch (expression.Type) {
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.Not:
                this.Result.push('!');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.Negate:
                this.Result.push('-');
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.UnaryExpressionType.BitwiseNot:
                this.Result.push('~');
                break;
        }
        this.EncapsulateNoValue(expression.Expression);
    }
    VisitValue(expression) {
        switch (expression.Type) {
            case _ValueExpression__WEBPACK_IMPORTED_MODULE_1__.ValueType.Boolean:
                // @todo ??
                this.Result.push(expression.Value);
                this.Result.push(' ');
                break;
            case _ValueExpression__WEBPACK_IMPORTED_MODULE_1__.ValueType.DateTime:
                this.Result.push('#');
                this.Result.push(expression.Value.toString());
                this.Result.push('#');
                this.Result.push(' ');
                break;
            case _ValueExpression__WEBPACK_IMPORTED_MODULE_1__.ValueType.Float:
                this.Result.push(parseFloat(expression.Value.toString()).toFixed(2));
                this.Result.push(' ');
                break;
            case _ValueExpression__WEBPACK_IMPORTED_MODULE_1__.ValueType.Integer:
                this.Result.push(expression.Value.toString());
                this.Result.push(' ');
                break;
            case _ValueExpression__WEBPACK_IMPORTED_MODULE_1__.ValueType.String:
                this.Result.push('\'');
                this.Result.push(expression.Value.toString());
                this.Result.push('\'');
                this.Result.push(' ');
                break;
        }
    }
    VisitFunction(func) {
        this.Result.push(func.Identifier.Name);
        this.Result.push('(');
        for (let i = 0; i < func.Expressions.length; i++) {
            func.Expressions[i].Accept(this);
            if (i < func.Expressions.length - 1) {
                this.Result.splice(this.Result.length - 1, 1);
                this.Result.push(', ');
            }
        }
        // trim spaces before adding a closing paren
        while (this.Result[this.Result.length - 1] == ' ')
            this.Result.splice(this.Result.length - 1, 1);
        this.Result.push(') ');
    }
    VisitIdentifier(parameter) {
        this.Result.push('[');
        this.Result.push(parameter.Name);
        this.Result.push('] ');
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/TernaryExpression.ts":
/*!***********************************************!*\
  !*** ./src/NCalc/Domain/TernaryExpression.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TernaryExpression": () => (/* binding */ TernaryExpression)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class TernaryExpression extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(leftExpression, middleExpression, rightExpression) {
        super();
        this.ClassName = 'TernaryExpression';
        this.LeftExpression = leftExpression;
        this.MiddleExpression = middleExpression;
        this.RightExpression = rightExpression;
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}


/***/ }),

/***/ "./src/NCalc/Domain/UnaryExpression.ts":
/*!*********************************************!*\
  !*** ./src/NCalc/Domain/UnaryExpression.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnaryExpression": () => (/* binding */ UnaryExpression),
/* harmony export */   "UnaryExpressionType": () => (/* binding */ UnaryExpressionType)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class UnaryExpression extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(type, expression) {
        super();
        this.ClassName = 'UnaryExpression';
        this.Type = type;
        this.Expression = expression;
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}
var UnaryExpressionType;
(function (UnaryExpressionType) {
    UnaryExpressionType[UnaryExpressionType["Not"] = 0] = "Not";
    UnaryExpressionType[UnaryExpressionType["Negate"] = 1] = "Negate";
    UnaryExpressionType[UnaryExpressionType["BitwiseNot"] = 2] = "BitwiseNot";
    UnaryExpressionType[UnaryExpressionType["Positive"] = 3] = "Positive";
})(UnaryExpressionType || (UnaryExpressionType = {}));


/***/ }),

/***/ "./src/NCalc/Domain/ValueExpression.ts":
/*!*********************************************!*\
  !*** ./src/NCalc/Domain/ValueExpression.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueExpression": () => (/* binding */ ValueExpression),
/* harmony export */   "ValueType": () => (/* binding */ ValueType)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/NCalc/Domain/index.ts");

class ValueExpression extends ___WEBPACK_IMPORTED_MODULE_0__.LogicalExpression {
    constructor(value, valueType) {
        super();
        this.Value = '';
        this.Type = ValueType.Boolean;
        this.ClassName = 'ValueExpression';
        if (value !== null && value != undefined) {
            this.Value = value;
            if (valueType === null || valueType === undefined) {
                const detectedType = typeof value;
                switch (detectedType) {
                    case 'number':
                    case 'bigint':
                        this.Type = ValueType.Integer;
                        break;
                    case 'string':
                        // Attempt to check if it is a date
                        if (new Date(value) !== 'Invalid Date' &&
                            !isNaN(new Date(value))) {
                            this.Type = ValueType.DateTime;
                        }
                        else {
                            this.Type = ValueType.String;
                        }
                        break;
                    case 'boolean':
                        this.Type = ValueType.Boolean;
                        break;
                    default:
                        throw new ___WEBPACK_IMPORTED_MODULE_0__.EvaluationException('This value could not be handled: ' + value);
                }
            }
        }
        if (valueType) {
            this.Type = valueType;
        }
    }
    Accept(visitor) {
        visitor.Visit(this);
    }
}
var ValueType;
(function (ValueType) {
    ValueType[ValueType["None"] = 0] = "None";
    ValueType[ValueType["Integer"] = 1] = "Integer";
    ValueType[ValueType["String"] = 2] = "String";
    ValueType[ValueType["DateTime"] = 3] = "DateTime";
    ValueType[ValueType["Float"] = 4] = "Float";
    ValueType[ValueType["Boolean"] = 5] = "Boolean";
})(ValueType || (ValueType = {}));


/***/ }),

/***/ "./src/NCalc/Domain/index.ts":
/*!***********************************!*\
  !*** ./src/NCalc/Domain/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArgumentException": () => (/* reexport safe */ _ArgumentException__WEBPACK_IMPORTED_MODULE_2__.ArgumentException),
/* harmony export */   "BinaryExpression": () => (/* reexport safe */ _BinaryExpression__WEBPACK_IMPORTED_MODULE_3__.BinaryExpression),
/* harmony export */   "BinaryExpressionType": () => (/* reexport safe */ _BinaryExpression__WEBPACK_IMPORTED_MODULE_3__.BinaryExpressionType),
/* harmony export */   "EvaluationException": () => (/* reexport safe */ _ArgumentException__WEBPACK_IMPORTED_MODULE_2__.EvaluationException),
/* harmony export */   "EvaluationVisitor": () => (/* reexport safe */ _EvaluationVisitor__WEBPACK_IMPORTED_MODULE_4__.EvaluationVisitor),
/* harmony export */   "Identifier": () => (/* reexport safe */ _Identifier__WEBPACK_IMPORTED_MODULE_5__.Identifier),
/* harmony export */   "LogicalExpression": () => (/* reexport safe */ _LogicalExpression__WEBPACK_IMPORTED_MODULE_0__.LogicalExpression),
/* harmony export */   "LogicalExpressionVisitor": () => (/* reexport safe */ _LogicalExpressionVisitor__WEBPACK_IMPORTED_MODULE_1__.LogicalExpressionVisitor),
/* harmony export */   "NCalcFunction": () => (/* reexport safe */ _NCalcFunction__WEBPACK_IMPORTED_MODULE_6__.NCalcFunction),
/* harmony export */   "SerializationVisitor": () => (/* reexport safe */ _SerializationVisitor__WEBPACK_IMPORTED_MODULE_7__.SerializationVisitor),
/* harmony export */   "TernaryExpression": () => (/* reexport safe */ _TernaryExpression__WEBPACK_IMPORTED_MODULE_8__.TernaryExpression),
/* harmony export */   "UnaryExpression": () => (/* reexport safe */ _UnaryExpression__WEBPACK_IMPORTED_MODULE_9__.UnaryExpression),
/* harmony export */   "UnaryExpressionType": () => (/* reexport safe */ _UnaryExpression__WEBPACK_IMPORTED_MODULE_9__.UnaryExpressionType),
/* harmony export */   "ValueExpression": () => (/* reexport safe */ _ValueExpression__WEBPACK_IMPORTED_MODULE_10__.ValueExpression),
/* harmony export */   "ValueType": () => (/* reexport safe */ _ValueExpression__WEBPACK_IMPORTED_MODULE_10__.ValueType)
/* harmony export */ });
/* harmony import */ var _LogicalExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicalExpression */ "./src/NCalc/Domain/LogicalExpression.ts");
/* harmony import */ var _LogicalExpressionVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogicalExpressionVisitor */ "./src/NCalc/Domain/LogicalExpressionVisitor.ts");
/* harmony import */ var _ArgumentException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArgumentException */ "./src/NCalc/Domain/ArgumentException.ts");
/* harmony import */ var _BinaryExpression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BinaryExpression */ "./src/NCalc/Domain/BinaryExpression.ts");
/* harmony import */ var _EvaluationVisitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EvaluationVisitor */ "./src/NCalc/Domain/EvaluationVisitor.ts");
/* harmony import */ var _Identifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Identifier */ "./src/NCalc/Domain/Identifier.ts");
/* harmony import */ var _NCalcFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NCalcFunction */ "./src/NCalc/Domain/NCalcFunction.ts");
/* harmony import */ var _SerializationVisitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SerializationVisitor */ "./src/NCalc/Domain/SerializationVisitor.ts");
/* harmony import */ var _TernaryExpression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TernaryExpression */ "./src/NCalc/Domain/TernaryExpression.ts");
/* harmony import */ var _UnaryExpression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UnaryExpression */ "./src/NCalc/Domain/UnaryExpression.ts");
/* harmony import */ var _ValueExpression__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ValueExpression */ "./src/NCalc/Domain/ValueExpression.ts");













/***/ }),

/***/ "./src/NCalc/ErrorListener.ts":
/*!************************************!*\
  !*** ./src/NCalc/ErrorListener.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorListener": () => (/* binding */ ErrorListener)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
class ErrorListener {
    constructor() {
        this._errors = [];
    }
    get errors() {
        return this._errors;
    }
    syntaxError(...args) {
        this._errors.push(args);
    }
    // Left empty on purpose, if we do not implement these methods, NcalcJS will crash.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportAmbiguity() {
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportAttemptingFullContext() {
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportContextSensitivity() {
    }
}


/***/ }),

/***/ "./src/NCalc/EvaluationOptions.ts":
/*!****************************************!*\
  !*** ./src/NCalc/EvaluationOptions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateOptions": () => (/* binding */ EvaluateOptions)
/* harmony export */ });
var EvaluateOptions;
(function (EvaluateOptions) {
    // Summary:
    //     Specifies that no options are set.
    EvaluateOptions[EvaluateOptions["None"] = 1] = "None";
    //
    // Summary:
    //     Specifies case-insensitive matching.
    EvaluateOptions[EvaluateOptions["IgnoreCase"] = 2] = "IgnoreCase";
    //
    // Summary:
    //     No-cache mode. Ingores any pre-compiled expression in the cache.
    EvaluateOptions[EvaluateOptions["NoCache"] = 4] = "NoCache";
    //
    // Summary:
    //     Treats parameters as arrays and result a set of results.
    EvaluateOptions[EvaluateOptions["IterateParameters"] = 8] = "IterateParameters";
    //
    // Summary:
    //     When using Round(), if a number is halfway between two others, it is rounded toward the nearest number that is away from zero.
    EvaluateOptions[EvaluateOptions["RoundAwayFromZero"] = 16] = "RoundAwayFromZero";
})(EvaluateOptions || (EvaluateOptions = {}));


/***/ }),

/***/ "./src/NCalc/Expression.ts":
/*!*********************************!*\
  !*** ./src/NCalc/Expression.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression)
/* harmony export */ });
/* harmony import */ var _Domain_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Domain/index */ "./src/NCalc/Domain/index.ts");
/* harmony import */ var _Grammar_NCalcParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Grammar/NCalcParser */ "./src/Grammar/NCalcParser.ts");
/* harmony import */ var _Grammar_NCalcLexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Grammar/NCalcLexer */ "./src/Grammar/NCalcLexer.ts");
/* harmony import */ var _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EvaluationOptions */ "./src/NCalc/EvaluationOptions.ts");
/* harmony import */ var antlr4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antlr4 */ "./node_modules/antlr4/dist/antlr4.web.js");
/* harmony import */ var _ErrorListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorListener */ "./src/NCalc/ErrorListener.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */






class Expression {
    get CacheEnabled() {
        return Expression._cacheEnabled;
    }
    set CacheEnabled(value) {
        Expression._cacheEnabled = value;
        if (value === false) {
            Expression._compiledExpression = {};
        }
    }
    static get CachedExpressions() {
        return Expression._compiledExpression;
    }
    constructor(expression, options = _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.None) {
        this.Options = _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.None;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.ParameterEnumerators = {};
        this.ParametersBackup = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.Parameters = {};
        this.errors = [];
        this.EvaluateFunction = {};
        this.EvaluateParameter = {};
        if (expression == null || expression == '') {
            throw new Error('The expression cannot be null or empty');
        }
        if (typeof expression === 'string') {
            this.OriginalExpression = expression;
        }
        else {
            this.ParsedExpression = expression;
        }
        if (options) {
            this.Options = options;
        }
    }
    static Compile(expression, nocache) {
        let logicalExpression = null;
        const lexerErrors = new _ErrorListener__WEBPACK_IMPORTED_MODULE_5__.ErrorListener();
        const parserErrors = new _ErrorListener__WEBPACK_IMPORTED_MODULE_5__.ErrorListener();
        if (Expression._cacheEnabled && !nocache) {
            if (Object.prototype.hasOwnProperty.call(Expression._compiledExpression, expression)) {
                const wr = Expression._compiledExpression[expression];
                const stored = wr.deref();
                if (stored && stored !== undefined) {
                    return stored;
                }
            }
        }
        if (logicalExpression == null) {
            // Create the lexer
            const inputStream = new antlr4__WEBPACK_IMPORTED_MODULE_4__["default"].CharStream(expression);
            const lexer = new _Grammar_NCalcLexer__WEBPACK_IMPORTED_MODULE_2__["default"](inputStream);
            lexer.addErrorListener(lexerErrors);
            // Create parser
            const tokenStream = new antlr4__WEBPACK_IMPORTED_MODULE_4__["default"].CommonTokenStream(lexer);
            const parser = new _Grammar_NCalcParser__WEBPACK_IMPORTED_MODULE_1__["default"](tokenStream);
            parser.addErrorListener(parserErrors);
            logicalExpression = parser.GetExpression();
            if (lexerErrors.errors.length > 0 || parserErrors.errors.length > 0) {
                throw new Error('Failed to parse expression');
            }
            if (Expression._cacheEnabled && !nocache) {
                Expression._compiledExpression[expression] = new WeakRef(logicalExpression);
            }
        }
        return logicalExpression;
    }
    /**
   * Detects whether the expression has errors. This will simply return a boolean value.
   * You can access the error by using the `errors` getter.
   */
    HasErrors() {
        try {
            if (this.ParsedExpression == null) {
                this.ParsedExpression = Expression.Compile(this.OriginalExpression, (this.Options & _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.NoCache) == _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.NoCache);
            }
            if (this.errors.length > 0) {
                throw new Error();
            }
            // In case HasErrors() is called multiple times for the same expression
            return this.ParsedExpression === null || this.ParsedExpression === undefined;
        }
        catch (e) {
            this.errors = [e];
            return true;
        }
    }
    Evaluate() {
        if (this.HasErrors()) {
            throw new _Domain_index__WEBPACK_IMPORTED_MODULE_0__.EvaluationException('Failed evaluating the expression. Refer to errors.');
        }
        if (this.ParsedExpression == null) {
            this.ParsedExpression = Expression.Compile(this.OriginalExpression, (this.Options & _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.NoCache) == _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.NoCache);
        }
        const visitor = new _Domain_index__WEBPACK_IMPORTED_MODULE_0__.EvaluationVisitor(this.Options);
        visitor.EvaluateFunction = this.EvaluateFunction;
        visitor.EvaluateParameter = this.EvaluateParameter;
        visitor.Parameters = this.Parameters;
        // if array evaluation, execute the same expression multiple times
        if ((this.Options & _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.IterateParameters) == _EvaluationOptions__WEBPACK_IMPORTED_MODULE_3__.EvaluateOptions.IterateParameters) {
            let size = -1;
            this.ParametersBackup = {};
            for (const key in this.Parameters) {
                this.ParametersBackup[key] = this.Parameters[key];
            }
            this.ParameterEnumerators = {};
            for (const parameter in this.Parameters) {
                const value = this.Parameters[parameter];
                if (Array.isArray(value)) {
                    const localsize = value.length;
                    if (size == -1) {
                        size = localsize;
                    }
                    else if (localsize != size) {
                        throw new _Domain_index__WEBPACK_IMPORTED_MODULE_0__.EvaluationException('When IterateParameters option is used, IEnumerable parameters must have the same number of items');
                    }
                }
            }
            for (const key in this.Parameters) {
                const parameter = this.Parameters[key];
                if (parameter != null) {
                    this.ParameterEnumerators[key] = parameter;
                }
            }
            const results = [];
            for (let i = 0; i < size; i++) {
                for (const key in this.ParameterEnumerators) {
                    const enumerator = this.ParameterEnumerators[key];
                    this.Parameters[key] = enumerator[i];
                }
                this.ParsedExpression.Accept(visitor);
                results.push(visitor.Result);
            }
            return results;
        }
        this.ParsedExpression.Accept(visitor);
        return visitor.Result;
    }
}
Expression._cacheEnabled = true;
Expression._compiledExpression = {};


/***/ }),

/***/ "./src/NCalc/FunctionArgs.ts":
/*!***********************************!*\
  !*** ./src/NCalc/FunctionArgs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionArgs": () => (/* binding */ FunctionArgs)
/* harmony export */ });
class FunctionArgs {
    constructor() {
        this._parameters = [];
    }
    get Result() {
        return this._result;
    }
    set Result(value) {
        this._result = value;
        this.HasResult = true;
    }
    get Parameters() {
        return this._parameters;
    }
    set Parameters(value) {
        this._parameters = value;
    }
}


/***/ }),

/***/ "./src/NCalc/Numbers.ts":
/*!******************************!*\
  !*** ./src/NCalc/Numbers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidOperationException": () => (/* binding */ InvalidOperationException),
/* harmony export */   "Numbers": () => (/* binding */ Numbers),
/* harmony export */   "TypeCode": () => (/* binding */ TypeCode)
/* harmony export */ });
class InvalidOperationException extends Error {
}
// @todo remove me
var TypeCode;
(function (TypeCode) {
    TypeCode["Boolean"] = "boolean";
    TypeCode["Byte"] = "number";
    TypeCode["SByte"] = "number";
    TypeCode["Int16"] = "number";
    TypeCode["UInt16"] = "number";
    TypeCode["Int32"] = "number";
    TypeCode["UInt32"] = "number";
    TypeCode["Int64"] = "bigint";
    TypeCode["UInt64"] = "bigint";
    TypeCode["Single"] = "number";
    TypeCode["Double"] = "number";
    TypeCode["Decimal"] = "number";
})(TypeCode || (TypeCode = {}));
class Numbers {
    static ConvertIfString(s) {
        if (typeof s === 'string' || s instanceof String) {
            return parseFloat(s);
        }
        return s;
    }
    static Add(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof aValue;
        const typeCodeB = typeof bValue;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator '+' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return aValue + bValue;
    }
    static Subtract(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator '-' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return aValue - bValue;
    }
    static Multiply(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator '*' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return aValue * bValue;
    }
    static Divide(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return aValue / bValue;
    }
    static Modulo(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return aValue % bValue;
    }
    static Max(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        if (aValue == null && b == null) {
            return null;
        }
        if (aValue == null) {
            return bValue;
        }
        if (bValue == null) {
            return aValue;
        }
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator 'MAX' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return Math.max(aValue, bValue);
    }
    static Min(a, b) {
        const aValue = Numbers.ConvertIfString(a);
        const bValue = Numbers.ConvertIfString(b);
        if (aValue == null && b == null) {
            return null;
        }
        if (aValue == null) {
            return bValue;
        }
        if (bValue == null) {
            return aValue;
        }
        const allowedTypes = ['number', 'bigint'];
        // Heree we have to consider the JS magic to be a bit different.
        const typeCodeA = typeof a;
        const typeCodeB = typeof b;
        if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
            throw new InvalidOperationException(`Operator 'MIN' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
        }
        return Math.min(aValue, bValue);
    }
}


/***/ }),

/***/ "./src/NCalc/ParameterArgs.ts":
/*!************************************!*\
  !*** ./src/NCalc/ParameterArgs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterArgs": () => (/* binding */ ParameterArgs)
/* harmony export */ });
class ParameterArgs {
    constructor() {
        this.HasResult = false;
    }
    get Result() {
        return this._result;
    }
    set Result(value) {
        this._result = value;
        this.HasResult = true;
    }
}


/***/ }),

/***/ "./src/NCalc/types.ts":
/*!****************************!*\
  !*** ./src/NCalc/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/antlr4/dist/antlr4.web.js":
/*!************************************************!*\
  !*** ./node_modules/antlr4/dist/antlr4.web.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATN": () => (/* binding */ o),
/* harmony export */   "ATNDeserializer": () => (/* binding */ i),
/* harmony export */   "BailErrorStrategy": () => (/* binding */ u),
/* harmony export */   "CharStream": () => (/* binding */ c),
/* harmony export */   "CharStreams": () => (/* binding */ a),
/* harmony export */   "CommonToken": () => (/* binding */ l),
/* harmony export */   "CommonTokenStream": () => (/* binding */ s),
/* harmony export */   "DFA": () => (/* binding */ f),
/* harmony export */   "DiagnosticErrorListener": () => (/* binding */ p),
/* harmony export */   "ErrorListener": () => (/* binding */ y),
/* harmony export */   "FailedPredicateException": () => (/* binding */ h),
/* harmony export */   "InputStream": () => (/* binding */ b),
/* harmony export */   "Interval": () => (/* binding */ v),
/* harmony export */   "IntervalSet": () => (/* binding */ d),
/* harmony export */   "LL1Analyzer": () => (/* binding */ m),
/* harmony export */   "Lexer": () => (/* binding */ g),
/* harmony export */   "LexerATNSimulator": () => (/* binding */ S),
/* harmony export */   "NoViableAltException": () => (/* binding */ O),
/* harmony export */   "ParseTreeListener": () => (/* binding */ w),
/* harmony export */   "ParseTreeVisitor": () => (/* binding */ _),
/* harmony export */   "ParseTreeWalker": () => (/* binding */ P),
/* harmony export */   "Parser": () => (/* binding */ T),
/* harmony export */   "ParserATNSimulator": () => (/* binding */ E),
/* harmony export */   "ParserRuleContext": () => (/* binding */ j),
/* harmony export */   "PredictionContextCache": () => (/* binding */ k),
/* harmony export */   "PredictionMode": () => (/* binding */ x),
/* harmony export */   "RecognitionException": () => (/* binding */ R),
/* harmony export */   "RuleContext": () => (/* binding */ C),
/* harmony export */   "RuleNode": () => (/* binding */ A),
/* harmony export */   "TerminalNode": () => (/* binding */ N),
/* harmony export */   "Token": () => (/* binding */ I),
/* harmony export */   "arrayToString": () => (/* binding */ L),
/* harmony export */   "default": () => (/* binding */ D)
/* harmony export */ });
/*! For license information please see antlr4.web.js.LICENSE.txt */
var t={92:()=>{}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}n.d(r,{dx:()=>Ie,q2:()=>qo,FO:()=>Zc,xf:()=>aa,Gy:()=>va,s4:()=>fi,c7:()=>Ra,_7:()=>ic,gp:()=>Ac,cK:()=>Yo,zs:()=>Ec,AV:()=>aa,Xp:()=>L,VS:()=>B,ul:()=>Ce,hW:()=>Bi,x1:()=>Pu,z5:()=>Du,oN:()=>fc,TB:()=>hc,u1:()=>dc,_b:()=>Ua,$F:()=>zu,_T:()=>el,db:()=>Gu,Zx:()=>Au,_x:()=>ji,r8:()=>Zt,JI:()=>Ft,TP:()=>Vt,WU:()=>o,Nj:()=>p,ZP:()=>rl});var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.source=null,this.type=null,this.channel=null,this.start=null,this.stop=null,this.tokenIndex=null,this.line=null,this.column=null,this._text=null}var n,r;return n=t,(r=[{key:"getTokenSource",value:function(){return this.source[0]}},{key:"getInputStream",value:function(){return this.source[1]}},{key:"text",get:function(){return this._text},set:function(t){this._text=t}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t===e)return!0;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!(t[n]===e[n]||t[n].equals&&t[n].equals(e[n])))return!1;return!0}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}o.INVALID_TYPE=0,o.EPSILON=-2,o.MIN_USER_TOKEN_TYPE=1,o.EOF=-1,o.DEFAULT_CHANNEL=0,o.HIDDEN_CHANNEL=1;var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.count=0,this.hash=0}var e,n,r;return e=t,n=[{key:"update",value:function(){for(var t=0;t<arguments.length;t++){var e=arguments[t];if(null!=e)if(Array.isArray(e))this.update.apply(this,e);else{var n=0;switch(u(e)){case"undefined":case"function":continue;case"number":case"boolean":n=e;break;case"string":n=e.hashCode();break;default:e.updateHashCode?e.updateHashCode(this):console.log("No updateHashCode for "+e.toString());continue}n=(n*=3432918353)<<15|n>>>17,n*=461845907,this.count=this.count+1;var r=this.hash^n;r=5*(r=r<<13|r>>>19)+3864292196,this.hash=r}}}},{key:"finish",value:function(){var t=this.hash^4*this.count;return t^=t>>>16,t*=2246822507,t^=t>>>13,(t*=3266489909)^t>>>16}}],r=[{key:"hashStuff",value:function(){var e=new t;return e.update.apply(e,arguments),e.finish()}}],n&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return t?t.hashCode():-1}function s(t,e){return t?t.equals(e):t===e}function f(t){return null===t?"null":t}function p(t){return Array.isArray(t)?"["+t.map(f).join(", ")+"]":"null"}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var b="h-",v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={},this.hashFunction=e||l,this.equalsFunction=n||s}var e,n;return e=t,(n=[{key:"add",value:function(t){var e=b+this.hashFunction(t);if(e in this.data){for(var n=this.data[e],r=0;r<n.length;r++)if(this.equalsFunction(t,n[r]))return n[r];return n.push(t),t}return this.data[e]=[t],t}},{key:"has",value:function(t){return null!=this.get(t)}},{key:"get",value:function(t){var e=b+this.hashFunction(t);if(e in this.data)for(var n=this.data[e],r=0;r<n.length;r++)if(this.equalsFunction(t,n[r]))return n[r];return null}},{key:"values",value:function(){var t=this;return Object.keys(this.data).filter((function(t){return t.startsWith(b)})).flatMap((function(e){return t.data[e]}),this)}},{key:"toString",value:function(){return p(this.values())}},{key:"length",get:function(){var t=this;return Object.keys(this.data).filter((function(t){return t.startsWith(b)})).map((function(e){return t.data[e].length}),this).reduce((function(t,e){return t+e}),0)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S(t);if(e){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function P(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var T=function(){function t(){w(this,t)}return P(t,[{key:"hashCode",value:function(){var t=new a;return this.updateHashCode(t),t.finish()}},{key:"evaluate",value:function(t,e){}},{key:"evalPrecedence",value:function(t,e){return this}}],[{key:"andContext",value:function(e,n){if(null===e||e===t.NONE)return n;if(null===n||n===t.NONE)return e;var r=new E(e,n);return 1===r.opnds.length?r.opnds[0]:r}},{key:"orContext",value:function(e,n){if(null===e)return n;if(null===n)return e;if(e===t.NONE||n===t.NONE)return t.NONE;var r=new j(e,n);return 1===r.opnds.length?r.opnds[0]:r}}]),t}(),E=function(t){d(n,t);var e=g(n);function n(t,r){var o;w(this,n),o=e.call(this);var i=new v;t instanceof n?t.opnds.map((function(t){i.add(t)})):i.add(t),r instanceof n?r.opnds.map((function(t){i.add(t)})):i.add(r);var u=k(i);if(u.length>0){var c=null;u.map((function(t){(null===c||t.precedence<c.precedence)&&(c=t)})),i.add(c)}return o.opnds=Array.from(i.values()),o}return P(n,[{key:"equals",value:function(t){return this===t||t instanceof n&&i(this.opnds,t.opnds)}},{key:"updateHashCode",value:function(t){t.update(this.opnds,"AND")}},{key:"evaluate",value:function(t,e){for(var n=0;n<this.opnds.length;n++)if(!this.opnds[n].evaluate(t,e))return!1;return!0}},{key:"evalPrecedence",value:function(t,e){for(var n=!1,r=[],o=0;o<this.opnds.length;o++){var i=this.opnds[o],u=i.evalPrecedence(t,e);if(n|=u!==i,null===u)return null;u!==T.NONE&&r.push(u)}if(!n)return this;if(0===r.length)return T.NONE;var c=null;return r.map((function(t){c=null===c?t:T.andContext(c,t)})),c}},{key:"toString",value:function(){var t=this.opnds.map((function(t){return t.toString()}));return(t.length>3?t.slice(3):t).join("&&")}}]),n}(T),j=function(t){d(n,t);var e=g(n);function n(t,r){var o;w(this,n),o=e.call(this);var i=new v;t instanceof n?t.opnds.map((function(t){i.add(t)})):i.add(t),r instanceof n?r.opnds.map((function(t){i.add(t)})):i.add(r);var u=k(i);if(u.length>0){var c=u.sort((function(t,e){return t.compareTo(e)})),a=c[c.length-1];i.add(a)}return o.opnds=Array.from(i.values()),o}return P(n,[{key:"equals",value:function(t){return this===t||t instanceof n&&i(this.opnds,t.opnds)}},{key:"updateHashCode",value:function(t){t.update(this.opnds,"OR")}},{key:"evaluate",value:function(t,e){for(var n=0;n<this.opnds.length;n++)if(this.opnds[n].evaluate(t,e))return!0;return!1}},{key:"evalPrecedence",value:function(t,e){for(var n=!1,r=[],o=0;o<this.opnds.length;o++){var i=this.opnds[o],u=i.evalPrecedence(t,e);if(n|=u!==i,u===T.NONE)return T.NONE;null!==u&&r.push(u)}if(!n)return this;if(0===r.length)return null;return r.map((function(t){return t})),null}},{key:"toString",value:function(){var t=this.opnds.map((function(t){return t.toString()}));return(t.length>3?t.slice(3):t).join("||")}}]),n}(T);function k(t){var e=[];return t.values().map((function(t){t instanceof T.PrecedencePredicate&&e.push(t)})),e}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function C(t,e){if(null===t){var n={state:null,alt:null,context:null,semanticContext:null};return e&&(n.reachesIntoOuterContext=0),n}var r={};return r.state=t.state||null,r.alt=void 0===t.alt?null:t.alt,r.context=t.context||null,r.semanticContext=t.semanticContext||null,e&&(r.reachesIntoOuterContext=t.reachesIntoOuterContext||0,r.precedenceFilterSuppressed=t.precedenceFilterSuppressed||!1),r}var A=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.checkContext(e,n),e=C(e),n=C(n,!0),this.state=null!==e.state?e.state:n.state,this.alt=null!==e.alt?e.alt:n.alt,this.context=null!==e.context?e.context:n.context,this.semanticContext=null!==e.semanticContext?e.semanticContext:null!==n.semanticContext?n.semanticContext:T.NONE,this.reachesIntoOuterContext=n.reachesIntoOuterContext,this.precedenceFilterSuppressed=n.precedenceFilterSuppressed}var e,n;return e=t,(n=[{key:"checkContext",value:function(t,e){null!==t.context&&void 0!==t.context||null!==e&&null!==e.context&&void 0!==e.context||(this.context=null)}},{key:"hashCode",value:function(){var t=new a;return this.updateHashCode(t),t.finish()}},{key:"updateHashCode",value:function(t){t.update(this.state.stateNumber,this.alt,this.context,this.semanticContext)}},{key:"equals",value:function(e){return this===e||e instanceof t&&this.state.stateNumber===e.state.stateNumber&&this.alt===e.alt&&(null===this.context?null===e.context:this.context.equals(e.context))&&this.semanticContext.equals(e.semanticContext)&&this.precedenceFilterSuppressed===e.precedenceFilterSuppressed}},{key:"hashCodeForConfigSet",value:function(){var t=new a;return t.update(this.state.stateNumber,this.alt,this.semanticContext),t.finish()}},{key:"equalsForConfigSet",value:function(e){return this===e||e instanceof t&&this.state.stateNumber===e.state.stateNumber&&this.alt===e.alt&&this.semanticContext.equals(e.semanticContext)}},{key:"toString",value:function(){return"("+this.state+","+this.alt+(null!==this.context?",["+this.context.toString()+"]":"")+(this.semanticContext!==T.NONE?","+this.semanticContext.toString():"")+(this.reachesIntoOuterContext>0?",up="+this.reachesIntoOuterContext:"")+")"}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var L=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=e,this.stop=n}var e,n;return e=t,(n=[{key:"clone",value:function(){return new t(this.start,this.stop)}},{key:"contains",value:function(t){return t>=this.start&&t<this.stop}},{key:"toString",value:function(){return this.start===this.stop-1?this.start.toString():this.start.toString()+".."+(this.stop-1).toString()}},{key:"length",get:function(){return this.stop-this.start}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}L.INVALID_INTERVAL=new L(-1,-2);var B=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.intervals=null,this.readOnly=!1}var e,n;return e=t,(n=[{key:"first",value:function(t){return null===this.intervals||0===this.intervals.length?o.INVALID_TYPE:this.intervals[0].start}},{key:"addOne",value:function(t){this.addInterval(new L(t,t+1))}},{key:"addRange",value:function(t,e){this.addInterval(new L(t,e+1))}},{key:"addInterval",value:function(t){if(null===this.intervals)this.intervals=[],this.intervals.push(t.clone());else{for(var e=0;e<this.intervals.length;e++){var n=this.intervals[e];if(t.stop<n.start)return void this.intervals.splice(e,0,t);if(t.stop===n.start)return void(this.intervals[e]=new L(t.start,n.stop));if(t.start<=n.stop)return this.intervals[e]=new L(Math.min(n.start,t.start),Math.max(n.stop,t.stop)),void this.reduce(e)}this.intervals.push(t.clone())}}},{key:"addSet",value:function(t){var e=this;return null!==t.intervals&&t.intervals.forEach((function(t){return e.addInterval(t)}),this),this}},{key:"reduce",value:function(t){if(t<this.intervals.length-1){var e=this.intervals[t],n=this.intervals[t+1];e.stop>=n.stop?(this.intervals.splice(t+1,1),this.reduce(t)):e.stop>=n.start&&(this.intervals[t]=new L(e.start,n.stop),this.intervals.splice(t+1,1))}}},{key:"complement",value:function(e,n){var r=new t;return r.addInterval(new L(e,n+1)),null!==this.intervals&&this.intervals.forEach((function(t){return r.removeRange(t)})),r}},{key:"contains",value:function(t){if(null===this.intervals)return!1;for(var e=0;e<this.intervals.length;e++)if(this.intervals[e].contains(t))return!0;return!1}},{key:"removeRange",value:function(t){if(t.start===t.stop-1)this.removeOne(t.start);else if(null!==this.intervals)for(var e=0,n=0;n<this.intervals.length;n++){var r=this.intervals[e];if(t.stop<=r.start)return;if(t.start>r.start&&t.stop<r.stop){this.intervals[e]=new L(r.start,t.start);var o=new L(t.stop,r.stop);return void this.intervals.splice(e,0,o)}t.start<=r.start&&t.stop>=r.stop?(this.intervals.splice(e,1),e-=1):t.start<r.stop?this.intervals[e]=new L(r.start,t.start):t.stop<r.stop&&(this.intervals[e]=new L(t.stop,r.stop)),e+=1}}},{key:"removeOne",value:function(t){if(null!==this.intervals)for(var e=0;e<this.intervals.length;e++){var n=this.intervals[e];if(t<n.start)return;if(t===n.start&&t===n.stop-1)return void this.intervals.splice(e,1);if(t===n.start)return void(this.intervals[e]=new L(n.start+1,n.stop));if(t===n.stop-1)return void(this.intervals[e]=new L(n.start,n.stop-1));if(t<n.stop-1){var r=new L(n.start,t);return n.start=t+1,void this.intervals.splice(e,0,r)}}}},{key:"toString",value:function(t,e,n){return t=t||null,e=e||null,n=n||!1,null===this.intervals?"{}":null!==t||null!==e?this.toTokenString(t,e):n?this.toCharString():this.toIndexString()}},{key:"toCharString",value:function(){for(var t=[],e=0;e<this.intervals.length;e++){var n=this.intervals[e];n.stop===n.start+1?n.start===o.EOF?t.push("<EOF>"):t.push("'"+String.fromCharCode(n.start)+"'"):t.push("'"+String.fromCharCode(n.start)+"'..'"+String.fromCharCode(n.stop-1)+"'")}return t.length>1?"{"+t.join(", ")+"}":t[0]}},{key:"toIndexString",value:function(){for(var t=[],e=0;e<this.intervals.length;e++){var n=this.intervals[e];n.stop===n.start+1?n.start===o.EOF?t.push("<EOF>"):t.push(n.start.toString()):t.push(n.start.toString()+".."+(n.stop-1).toString())}return t.length>1?"{"+t.join(", ")+"}":t[0]}},{key:"toTokenString",value:function(t,e){for(var n=[],r=0;r<this.intervals.length;r++)for(var o=this.intervals[r],i=o.start;i<o.stop;i++)n.push(this.elementName(t,e,i));return n.length>1?"{"+n.join(", ")+"}":n[0]}},{key:"elementName",value:function(t,e,n){return n===o.EOF?"<EOF>":n===o.EPSILON?"<EPSILON>":t[n]||e[n]}},{key:"length",get:function(){return this.intervals.map((function(t){return t.length})).reduce((function(t,e){return t+e}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var V=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.atn=null,this.stateNumber=t.INVALID_STATE_NUMBER,this.stateType=null,this.ruleIndex=0,this.epsilonOnlyTransitions=!1,this.transitions=[],this.nextTokenWithinRule=null}var e,n;return e=t,(n=[{key:"toString",value:function(){return this.stateNumber}},{key:"equals",value:function(e){return e instanceof t&&this.stateNumber===e.stateNumber}},{key:"isNonGreedyExitState",value:function(){return!1}},{key:"addTransition",value:function(t,e){void 0===e&&(e=-1),0===this.transitions.length?this.epsilonOnlyTransitions=t.isEpsilon:this.epsilonOnlyTransitions!==t.isEpsilon&&(this.epsilonOnlyTransitions=!1),-1===e?this.transitions.push(t):this.transitions.splice(e,1,t)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function z(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Y(t)}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}V.INVALID_TYPE=0,V.BASIC=1,V.RULE_START=2,V.BLOCK_START=3,V.PLUS_BLOCK_START=4,V.STAR_BLOCK_START=5,V.TOKEN_START=6,V.RULE_STOP=7,V.BLOCK_END=8,V.STAR_LOOP_BACK=9,V.STAR_LOOP_ENTRY=10,V.PLUS_LOOP_BACK=11,V.LOOP_END=12,V.serializationNames=["INVALID","BASIC","RULE_START","BLOCK_START","PLUS_BLOCK_START","STAR_BLOCK_START","TOKEN_START","RULE_STOP","BLOCK_END","STAR_LOOP_BACK","STAR_LOOP_ENTRY","PLUS_LOOP_BACK","LOOP_END"],V.INVALID_STATE_NUMBER=-1;var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(n);if(r){var o=K(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return z(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.RULE_STOP,z(t,Y(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}function J(t,e,n){return e&&X(t.prototype,e),n&&X(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var $=J((function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null==e)throw"target cannot be null.";this.target=e,this.isEpsilon=!1,this.label=null}));function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Z(o)?o:String(o)),r)}var o}function tt(t,e){return tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},tt(t,e)}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}$.EPSILON=1,$.RANGE=2,$.RULE=3,$.PREDICATE=4,$.ATOM=5,$.ACTION=6,$.SET=7,$.NOT_SET=8,$.WILDCARD=9,$.PRECEDENCE=10,$.serializationNames=["INVALID","EPSILON","RANGE","RULE","PREDICATE","ATOM","ACTION","SET","NOT_SET","WILDCARD","PRECEDENCE"],$.serializationTypes={EpsilonTransition:$.EPSILON,RangeTransition:$.RANGE,RuleTransition:$.RULE,PredicateTransition:$.PREDICATE,AtomTransition:$.ATOM,ActionTransition:$.ACTION,SetTransition:$.SET,NotSetTransition:$.NOT_SET,WildcardTransition:$.WILDCARD,PrecedencePredicateTransition:$.PRECEDENCE};var nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&tt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=et(r);if(o){var n=et(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t)).ruleIndex=e,o.precedence=n,o.followState=r,o.serializationType=$.RULE,o.isEpsilon=!0,o}return e=u,(n=[{key:"matches",value:function(t,e,n){return!1}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function rt(t){return rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(t)}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==rt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==rt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===rt(o)?o:String(o)),r)}var o}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},it(t,e)}function ut(t){return ut=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ut(t)}var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ut(r);if(i){var n=ut(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===rt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=u.call(this,t)).serializationType=$.SET,null!=e?n.label=e:(n.label=new B,n.label.addOne(o.INVALID_TYPE)),n}return e=c,(n=[{key:"matches",value:function(t,e,n){return this.label.contains(t)}},{key:"toString",value:function(){return this.label.toString()}}])&&ot(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}($);function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==at(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==at(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===at(o)?o:String(o)),r)}var o}function st(){return st="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=pt(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},st.apply(this,arguments)}function ft(t,e){return ft=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ft(t,e)}function pt(t){return pt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},pt(t)}var yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ft(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=pt(r);if(o){var n=pt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===at(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e)).serializationType=$.NOT_SET,n}return e=u,(n=[{key:"matches",value:function(t,e,n){return t>=e&&t<=n&&!st(pt(u.prototype),"matches",this).call(this,t,e,n)}},{key:"toString",value:function(){return"~"+st(pt(u.prototype),"toString",this).call(this)}}])&&lt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(ct);function ht(t){return ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(t)}function bt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ht(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ht(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ht(o)?o:String(o)),r)}var o}function vt(t,e){return vt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},vt(t,e)}function dt(t){return dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},dt(t)}var mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=dt(r);if(o){var n=dt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ht(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).serializationType=$.WILDCARD,e}return e=u,(n=[{key:"matches",value:function(t,e,n){return t>=e&&t<=n}},{key:"toString",value:function(){return"."}}])&&bt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function gt(t){return gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(t)}function St(t,e){return St=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},St(t,e)}function Ot(t){return Ot=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ot(t)}var wt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&St(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ot(n);if(r){var o=Ot(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===gt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}($);function _t(t){return _t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_t(t)}function Pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_t(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_t(o)?o:String(o)),r)}var o}function Tt(t,e,n){return e&&Pt(t.prototype,e),n&&Pt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Et(t){return Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(t)}function jt(t,e){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},jt(t,e)}function kt(t){return kt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},kt(t)}function xt(t){return xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(t)}function Rt(t,e){return Rt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Rt(t,e)}function Ct(t){return Ct=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ct(t)}var At=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Rt(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ct(n);if(r){var o=Ct(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===xt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&jt(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=kt(n);if(r){var o=kt(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Et(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Tt((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}))));function Nt(t){return Nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nt(t)}function It(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Nt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Nt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Nt(o)?o:String(o)),r)}var o}function Lt(t,e){return Lt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Lt(t,e)}function Dt(t){return Dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Dt(t)}var Ft=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Lt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Dt(r);if(o){var n=Dt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Nt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"ruleContext",get:function(){throw new Error("missing interface implementation")}}])&&It(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(At);function Bt(t){return Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(t)}function Mt(t,e){return Mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Mt(t,e)}function Ut(t){return Ut=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ut(t)}var Vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Mt(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ut(n);if(r){var o=Ut(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Bt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(At);function qt(t){return qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qt(t)}function Ht(t,e){return Ht=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ht(t,e)}function zt(t){return zt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zt(t)}var Yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ht(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=zt(n);if(r){var o=zt(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===qt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Vt),Kt={toStringTree:function(t,e,n){e=e||null,null!==(n=n||null)&&(e=n.ruleNames);var r=Kt.getNodeText(t,e);r=function(t,e){return t=t.replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r")}(r);var o=t.getChildCount();if(0===o)return r;var i="("+r+" ";o>0&&(r=Kt.toStringTree(t.getChild(0),e),i=i.concat(r));for(var u=1;u<o;u++)r=Kt.toStringTree(t.getChild(u),e),i=i.concat(" "+r);return i.concat(")")},getNodeText:function(t,e,n){if(e=e||null,null!==(n=n||null)&&(e=n.ruleNames),null!==e){if(t instanceof Ft){var r=t.ruleContext.getAltNumber();return 0!=r?e[t.ruleIndex]+":"+r:e[t.ruleIndex]}if(t instanceof Yt)return t.toString();if(t instanceof Vt&&null!==t.symbol)return t.symbol.text}var i=t.getPayload();return i instanceof o?i.text:t.getPayload().toString()},getChildren:function(t){for(var e=[],n=0;n<t.getChildCount();n++)e.push(t.getChild(n));return e},getAncestors:function(t){var e=[];for(t=t.getParent();null!==t;)e=[t].concat(e),t=t.getParent();return e},findAllTokenNodes:function(t,e){return Kt.findAllNodes(t,e,!0)},findAllRuleNodes:function(t,e){return Kt.findAllNodes(t,e,!1)},findAllNodes:function(t,e,n){var r=[];return Kt._findAllNodes(t,e,n,r),r},_findAllNodes:function(t,e,n,r){n&&t instanceof Vt?t.symbol.type===e&&r.push(t):!n&&t instanceof Ft&&t.ruleIndex===e&&r.push(t);for(var o=0;o<t.getChildCount();o++)Kt._findAllNodes(t.getChild(o),e,n,r)},descendants:function(t){for(var e=[t],n=0;n<t.getChildCount();n++)e=e.concat(Kt.descendants(t.getChild(n)));return e}};const Gt=Kt;function Wt(t){return Wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(t)}function Xt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Wt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Wt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Wt(o)?o:String(o)),r)}var o}function Jt(t,e){return Jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Jt(t,e)}function $t(t){return $t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$t(t)}var Zt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Jt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$t(r);if(o){var n=$t(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Wt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this)).parentCtx=t||null,n.invokingState=e||-1,n}return e=u,(n=[{key:"depth",value:function(){for(var t=0,e=this;null!==e;)e=e.parentCtx,t+=1;return t}},{key:"isEmpty",value:function(){return-1===this.invokingState}},{key:"getSourceInterval",value:function(){return L.INVALID_INTERVAL}},{key:"ruleContext",get:function(){return this}},{key:"getPayload",value:function(){return this}},{key:"getText",value:function(){return 0===this.getChildCount()?"":this.children.map((function(t){return t.getText()})).join("")}},{key:"getAltNumber",value:function(){return 0}},{key:"setAltNumber",value:function(t){}},{key:"getChild",value:function(t){return null}},{key:"getChildCount",value:function(){return 0}},{key:"accept",value:function(t){return t.visitChildren(this)}},{key:"toStringTree",value:function(t,e){return Gt.toStringTree(this,t,e)}},{key:"toString",value:function(t,e){t=t||null,e=e||null;for(var n=this,r="[";null!==n&&n!==e;){if(null===t)n.isEmpty()||(r+=n.invokingState);else{var o=n.ruleIndex;r+=o>=0&&o<t.length?t[o]:""+o}null===n.parentCtx||null===t&&n.parentCtx.isEmpty()||(r+=" "),n=n.parentCtx}return r+"]"}}])&&Xt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Ft);function Qt(t){return Qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qt(t)}function te(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Qt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Qt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Qt(o)?o:String(o)),r)}var o}var ee=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cachedHashCode=e}var e,n;return e=t,(n=[{key:"isEmpty",value:function(){return this===t.EMPTY}},{key:"hasEmptyPath",value:function(){return this.getReturnState(this.length-1)===t.EMPTY_RETURN_STATE}},{key:"hashCode",value:function(){return this.cachedHashCode}},{key:"updateHashCode",value:function(t){t.update(this.cachedHashCode)}}])&&te(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ne(t){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ne(t)}function re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ne(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ne(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ne(o)?o:String(o)),r)}var o}function oe(t,e){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},oe(t,e)}function ie(t,e){if(e&&("object"===ne(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return ue(t)}function ue(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ce(t){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ce(t)}ee.EMPTY=null,ee.EMPTY_RETURN_STATE=2147483647,ee.globalNodeCount=1,ee.id=ee.globalNodeCount,ee.trace_atn_sim=!1;var ae=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&oe(t,e)}(c,t);var e,n,r,o,u=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ce(r);if(o){var n=ce(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ie(this,t)});function c(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);var r=new a;r.update(t,e);var o=r.finish();return(n=u.call(this,o)).parents=t,n.returnStates=e,ie(n,ue(n))}return e=c,(n=[{key:"isEmpty",value:function(){return this.returnStates[0]===ee.EMPTY_RETURN_STATE}},{key:"getParent",value:function(t){return this.parents[t]}},{key:"getReturnState",value:function(t){return this.returnStates[t]}},{key:"equals",value:function(t){return this===t||t instanceof c&&this.hashCode()===t.hashCode()&&i(this.returnStates,t.returnStates)&&i(this.parents,t.parents)}},{key:"toString",value:function(){if(this.isEmpty())return"[]";for(var t="[",e=0;e<this.returnStates.length;e++)e>0&&(t+=", "),this.returnStates[e]!==ee.EMPTY_RETURN_STATE?(t+=this.returnStates[e],null!==this.parents[e]?t=t+" "+this.parents[e]:t+="null"):t+="$";return t+"]"}},{key:"length",get:function(){return this.returnStates.length}}])&&re(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(ee);function le(t){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(t)}function se(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==le(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==le(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===le(o)?o:String(o)),r)}var o}function fe(t,e){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},fe(t,e)}function pe(t){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},pe(t)}var ye=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&fe(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=pe(o);if(i){var n=pe(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===le(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);var r,o=new a;return null!==t?o.update(t,e):o.update(1),r=o.finish(),(n=u.call(this,r)).parentCtx=t,n.returnState=e,n}return e=c,r=[{key:"create",value:function(t,e){return e===ee.EMPTY_RETURN_STATE&&null===t?ee.EMPTY:new c(t,e)}}],(n=[{key:"getParent",value:function(t){return this.parentCtx}},{key:"getReturnState",value:function(t){return this.returnState}},{key:"equals",value:function(t){return this===t||t instanceof c&&this.hashCode()===t.hashCode()&&this.returnState===t.returnState&&(null==this.parentCtx?null==t.parentCtx:this.parentCtx.equals(t.parentCtx))}},{key:"toString",value:function(){var t=null===this.parentCtx?"":this.parentCtx.toString();return 0===t.length?this.returnState===ee.EMPTY_RETURN_STATE?"$":""+this.returnState:this.returnState+" "+t}},{key:"length",get:function(){return 1}}])&&se(e.prototype,n),r&&se(e,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(ee);function he(t){return he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(t)}function be(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==he(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==he(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===he(o)?o:String(o)),r)}var o}function ve(t,e){return ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ve(t,e)}function de(t){return de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},de(t)}var me=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ve(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=de(r);if(o){var n=de(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===he(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,null,ee.EMPTY_RETURN_STATE)}return e=u,(n=[{key:"isEmpty",value:function(){return!0}},{key:"getParent",value:function(t){return null}},{key:"getReturnState",value:function(t){return this.returnState}},{key:"equals",value:function(t){return this===t}},{key:"toString",value:function(){return"$"}}])&&be(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(ye);function ge(t){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(t)}function Se(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ge(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ge(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ge(o)?o:String(o)),r)}var o}ee.EMPTY=new me;var Oe="h-",we=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={},this.hashFunction=e||l,this.equalsFunction=n||s}var e,n;return e=t,(n=[{key:"set",value:function(t,e){var n=Oe+this.hashFunction(t);if(n in this.data){for(var r=this.data[n],o=0;o<r.length;o++){var i=r[o];if(this.equalsFunction(t,i.key)){var u=i.value;return i.value=e,u}}return r.push({key:t,value:e}),e}return this.data[n]=[{key:t,value:e}],e}},{key:"containsKey",value:function(t){var e=Oe+this.hashFunction(t);if(e in this.data)for(var n=this.data[e],r=0;r<n.length;r++){var o=n[r];if(this.equalsFunction(t,o.key))return!0}return!1}},{key:"get",value:function(t){var e=Oe+this.hashFunction(t);if(e in this.data)for(var n=this.data[e],r=0;r<n.length;r++){var o=n[r];if(this.equalsFunction(t,o.key))return o.value}return null}},{key:"entries",value:function(){var t=this;return Object.keys(this.data).filter((function(t){return t.startsWith(Oe)})).flatMap((function(e){return t.data[e]}),this)}},{key:"getKeys",value:function(){return this.entries().map((function(t){return t.key}))}},{key:"getValues",value:function(){return this.entries().map((function(t){return t.value}))}},{key:"toString",value:function(){return"["+this.entries().map((function(t){return"{"+t.key+":"+t.value+"}"})).join(", ")+"]"}},{key:"length",get:function(){var t=this;return Object.keys(this.data).filter((function(t){return t.startsWith(Oe)})).map((function(e){return t.data[e].length}),this).reduce((function(t,e){return t+e}),0)}}])&&Se(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _e(t,e){if(null==e&&(e=Zt.EMPTY),null===e.parentCtx||e===Zt.EMPTY)return ee.EMPTY;var n=_e(t,e.parentCtx),r=t.states[e.invokingState].transitions[0];return ye.create(n,r.followState.stateNumber)}function Pe(t,e,n){if(t.isEmpty())return t;var r=n.get(t)||null;if(null!==r)return r;if(null!==(r=e.get(t)))return n.set(t,r),r;for(var o=!1,i=[],u=0;u<i.length;u++){var c=Pe(t.getParent(u),e,n);if(o||c!==t.getParent(u)){if(!o){i=[];for(var a=0;a<t.length;a++)i[a]=t.getParent(a);o=!0}i[u]=c}}if(!o)return e.add(t),n.set(t,t),t;var l;return l=0===i.length?ee.EMPTY:1===i.length?ye.create(i[0],t.getReturnState(0)):new ae(i,t.returnStates),e.add(l),n.set(l,l),n.set(t,l),l}function Te(t,e,n,r){if(t===e)return t;if(t instanceof ye&&e instanceof ye)return function(t,e,n,r){if(null!==r){var o=r.get(t,e);if(null!==o)return o;if(null!==(o=r.get(e,t)))return o}var i=function(t,e,n){if(n){if(t===ee.EMPTY)return ee.EMPTY;if(e===ee.EMPTY)return ee.EMPTY}else{if(t===ee.EMPTY&&e===ee.EMPTY)return ee.EMPTY;if(t===ee.EMPTY){var r=[e.returnState,ee.EMPTY_RETURN_STATE],o=[e.parentCtx,null];return new ae(o,r)}if(e===ee.EMPTY){var i=[t.returnState,ee.EMPTY_RETURN_STATE],u=[t.parentCtx,null];return new ae(u,i)}}return null}(t,e,n);if(null!==i)return null!==r&&r.set(t,e,i),i;if(t.returnState===e.returnState){var u=Te(t.parentCtx,e.parentCtx,n,r);if(u===t.parentCtx)return t;if(u===e.parentCtx)return e;var c=ye.create(u,t.returnState);return null!==r&&r.set(t,e,c),c}var a=null;if((t===e||null!==t.parentCtx&&t.parentCtx===e.parentCtx)&&(a=t.parentCtx),null!==a){var l=[t.returnState,e.returnState];t.returnState>e.returnState&&(l[0]=e.returnState,l[1]=t.returnState);var s=new ae([a,a],l);return null!==r&&r.set(t,e,s),s}var f=[t.returnState,e.returnState],p=[t.parentCtx,e.parentCtx];t.returnState>e.returnState&&(f[0]=e.returnState,f[1]=t.returnState,p=[e.parentCtx,t.parentCtx]);var y=new ae(p,f);return null!==r&&r.set(t,e,y),y}(t,e,n,r);if(n){if(t instanceof me)return t;if(e instanceof me)return e}return t instanceof ye&&(t=new ae([t.getParent()],[t.returnState])),e instanceof ye&&(e=new ae([e.getParent()],[e.returnState])),function(t,e,n,r){if(null!==r){var o=r.get(t,e);if(null!==o)return ee.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> previous"),o;if(null!==(o=r.get(e,t)))return ee.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> previous"),o}for(var i=0,u=0,c=0,a=new Array(t.returnStates.length+e.returnStates.length).fill(0),l=new Array(t.returnStates.length+e.returnStates.length).fill(null);i<t.returnStates.length&&u<e.returnStates.length;){var s=t.parents[i],f=e.parents[u];if(t.returnStates[i]===e.returnStates[u]){var p=t.returnStates[i];p===ee.EMPTY_RETURN_STATE&&null===s&&null===f||null!==s&&null!==f&&s===f?(l[c]=s,a[c]=p):(l[c]=Te(s,f,n,r),a[c]=p),i+=1,u+=1}else t.returnStates[i]<e.returnStates[u]?(l[c]=s,a[c]=t.returnStates[i],i+=1):(l[c]=f,a[c]=e.returnStates[u],u+=1);c+=1}if(i<t.returnStates.length)for(var y=i;y<t.returnStates.length;y++)l[c]=t.parents[y],a[c]=t.returnStates[y],c+=1;else for(var h=u;h<e.returnStates.length;h++)l[c]=e.parents[h],a[c]=e.returnStates[h],c+=1;if(c<l.length){if(1===c){var b=ye.create(l[0],a[0]);return null!==r&&r.set(t,e,b),b}l=l.slice(0,c),a=a.slice(0,c)}var v=new ae(l,a);return v.equals(t)?(null!==r&&r.set(t,e,t),ee.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> a"),t):v.equals(e)?(null!==r&&r.set(t,e,e),ee.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> b"),e):(function(t){for(var e=new we,n=0;n<t.length;n++){var r=t[n];e.containsKey(r)||e.set(r,r)}for(var o=0;o<t.length;o++)t[o]=e.get(t[o])}(l),null!==r&&r.set(t,e,v),ee.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> "+v),v)}(t,e,n,r)}function Ee(t){return Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(t)}function je(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ee(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ee(o)?o:String(o)),r)}var o}var ke=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=[]}var e,n;return e=t,(n=[{key:"add",value:function(t){this.data[t]=!0}},{key:"or",value:function(t){var e=this;Object.keys(t.data).map((function(t){return e.add(t)}),this)}},{key:"remove",value:function(t){delete this.data[t]}},{key:"has",value:function(t){return!0===this.data[t]}},{key:"values",value:function(){return Object.keys(this.data)}},{key:"minValue",value:function(){return Math.min.apply(null,this.values())}},{key:"hashCode",value:function(){return a.hashStuff(this.values())}},{key:"equals",value:function(e){return e instanceof t&&i(this.data,e.data)}},{key:"toString",value:function(){return"{"+this.values().join(", ")+"}"}},{key:"length",get:function(){return this.values().length}}])&&je(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function xe(t){return xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(t)}function Re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==xe(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==xe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===xe(o)?o:String(o)),r)}var o}var Ce=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.atn=e}var e,n;return e=t,(n=[{key:"getDecisionLookahead",value:function(e){if(null===e)return null;for(var n=e.transitions.length,r=[],o=0;o<n;o++){r[o]=new B;var i=new v;this._LOOK(e.transition(o).target,null,ee.EMPTY,r[o],i,new ke,!1,!1),(0===r[o].length||r[o].contains(t.HIT_PRED))&&(r[o]=null)}return r}},{key:"LOOK",value:function(t,e,n){var r=new B,o=null!==(n=n||null)?_e(t.atn,n):null;return this._LOOK(t,e,o,r,new v,new ke,!0,!0),r}},{key:"_LOOK",value:function(e,n,r,i,u,c,a,l){var s=new A({state:e,alt:0,context:r},null);if(!u.has(s)){if(u.add(s),e===n){if(null===r)return void i.addOne(o.EPSILON);if(r.isEmpty()&&l)return void i.addOne(o.EOF)}if(e instanceof G){if(null===r)return void i.addOne(o.EPSILON);if(r.isEmpty()&&l)return void i.addOne(o.EOF);if(r!==ee.EMPTY){var f=c.has(e.ruleIndex);try{c.remove(e.ruleIndex);for(var p=0;p<r.length;p++){var y=this.atn.states[r.getReturnState(p)];this._LOOK(y,n,r.getParent(p),i,u,c,a,l)}}finally{f&&c.add(e.ruleIndex)}return}}for(var h=0;h<e.transitions.length;h++){var b=e.transitions[h];if(b.constructor===nt){if(c.has(b.target.ruleIndex))continue;var v=ye.create(r,b.followState.stateNumber);try{c.add(b.target.ruleIndex),this._LOOK(b.target,n,v,i,u,c,a,l)}finally{c.remove(b.target.ruleIndex)}}else if(b instanceof wt)a?this._LOOK(b.target,n,r,i,u,c,a,l):i.addOne(t.HIT_PRED);else if(b.isEpsilon)this._LOOK(b.target,n,r,i,u,c,a,l);else if(b.constructor===mt)i.addRange(o.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType);else{var d=b.label;null!==d&&(b instanceof yt&&(d=d.complement(o.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType)),i.addSet(d))}}}}}])&&Re(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Ae(t){return Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(t)}function Ne(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ae(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ae(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ae(o)?o:String(o)),r)}var o}Ce.HIT_PRED=o.INVALID_TYPE;var Ie=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.grammarType=e,this.maxTokenType=n,this.states=[],this.decisionToState=[],this.ruleToStartState=[],this.ruleToStopState=null,this.modeNameToStartState={},this.ruleToTokenType=null,this.lexerActions=null,this.modeToStartState=[]}var e,n;return e=t,(n=[{key:"nextTokensInContext",value:function(t,e){return new Ce(this).LOOK(t,null,e)}},{key:"nextTokensNoContext",value:function(t){return null!==t.nextTokenWithinRule||(t.nextTokenWithinRule=this.nextTokensInContext(t,null),t.nextTokenWithinRule.readOnly=!0),t.nextTokenWithinRule}},{key:"nextTokens",value:function(t,e){return void 0===e?this.nextTokensNoContext(t):this.nextTokensInContext(t,e)}},{key:"addState",value:function(t){null!==t&&(t.atn=this,t.stateNumber=this.states.length),this.states.push(t)}},{key:"removeState",value:function(t){this.states[t.stateNumber]=null}},{key:"defineDecisionState",value:function(t){return this.decisionToState.push(t),t.decision=this.decisionToState.length-1,t.decision}},{key:"getDecisionState",value:function(t){return 0===this.decisionToState.length?null:this.decisionToState[t]}},{key:"getExpectedTokens",value:function(t,e){if(t<0||t>=this.states.length)throw"Invalid state number.";var n=this.states[t],r=this.nextTokens(n);if(!r.contains(o.EPSILON))return r;var i=new B;for(i.addSet(r),i.removeOne(o.EPSILON);null!==e&&e.invokingState>=0&&r.contains(o.EPSILON);){var u=this.states[e.invokingState].transitions[0];r=this.nextTokens(u.followState),i.addSet(r),i.removeOne(o.EPSILON),e=e.parentCtx}return r.contains(o.EPSILON)&&i.addOne(o.EOF),i}}])&&Ne(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();Ie.INVALID_ALT_NUMBER=0;function Le(t){return Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(t)}function De(t,e){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},De(t,e)}function Fe(t){return Fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fe(t)}var Be=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&De(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Fe(n);if(r){var o=Fe(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Le(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.BASIC,t}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function Me(t){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Me(t)}function Ue(t,e){return Ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ue(t,e)}function Ve(t,e){if(e&&("object"===Me(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return qe(t)}function qe(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function He(t){return He=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},He(t)}var ze=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ue(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=He(n);if(r){var o=He(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Ve(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).decision=-1,t.nonGreedy=!1,Ve(t,qe(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function Ye(t){return Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(t)}function Ke(t,e){return Ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ke(t,e)}function Ge(t,e){if(e&&("object"===Ye(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return We(t)}function We(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Xe(t){return Xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xe(t)}var Je=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ke(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Xe(n);if(r){var o=Xe(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Ge(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).endState=null,Ge(t,We(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ze);function $e(t){return $e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$e(t)}function Ze(t,e){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ze(t,e)}function Qe(t,e){if(e&&("object"===$e(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return tn(t)}function tn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function en(t){return en=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},en(t)}var nn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ze(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=en(n);if(r){var o=en(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Qe(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.BLOCK_END,t.startState=null,Qe(t,tn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function rn(t){return rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rn(t)}function on(t,e){return on=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},on(t,e)}function un(t,e){if(e&&("object"===rn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return cn(t)}function cn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function an(t){return an=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},an(t)}var ln=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&on(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=an(n);if(r){var o=an(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return un(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.LOOP_END,t.loopBackState=null,un(t,cn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function sn(t){return sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sn(t)}function fn(t,e){return fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},fn(t,e)}function pn(t,e){if(e&&("object"===sn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return yn(t)}function yn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hn(t){return hn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hn(t)}var bn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&fn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=hn(n);if(r){var o=hn(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return pn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.RULE_START,t.stopState=null,t.isPrecedenceRule=!1,pn(t,yn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function vn(t){return vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(t)}function dn(t,e){return dn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},dn(t,e)}function mn(t,e){if(e&&("object"===vn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return gn(t)}function gn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Sn(t){return Sn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Sn(t)}var On=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&dn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Sn(n);if(r){var o=Sn(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return mn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.TOKEN_START,mn(t,gn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ze);function wn(t){return wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wn(t)}function _n(t,e){return _n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_n(t,e)}function Pn(t,e){if(e&&("object"===wn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Tn(t)}function Tn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function En(t){return En=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},En(t)}var jn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_n(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=En(n);if(r){var o=En(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Pn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.PLUS_LOOP_BACK,Pn(t,Tn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ze);function kn(t){return kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(t)}function xn(t,e){return xn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},xn(t,e)}function Rn(t,e){if(e&&("object"===kn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Cn(t)}function Cn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function An(t){return An=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},An(t)}var Nn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&xn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=An(n);if(r){var o=An(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Rn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.STAR_LOOP_BACK,Rn(t,Cn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(V);function In(t){return In="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(t)}function Ln(t,e){return Ln=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ln(t,e)}function Dn(t,e){if(e&&("object"===In(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Fn(t)}function Fn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Bn(t){return Bn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Bn(t)}var Mn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ln(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Bn(n);if(r){var o=Bn(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Dn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.STAR_LOOP_ENTRY,t.loopBackState=null,t.isPrecedenceDecision=null,Dn(t,Fn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ze);function Un(t){return Un="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(t)}function Vn(t,e){return Vn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Vn(t,e)}function qn(t,e){if(e&&("object"===Un(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Hn(t)}function Hn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function zn(t){return zn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zn(t)}var Yn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Vn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=zn(n);if(r){var o=zn(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return qn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.PLUS_BLOCK_START,t.loopBackState=null,qn(t,Hn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Je);function Kn(t){return Kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(t)}function Gn(t,e){return Gn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Gn(t,e)}function Wn(t,e){if(e&&("object"===Kn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Xn(t)}function Xn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jn(t){return Jn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Jn(t)}var $n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Gn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Jn(n);if(r){var o=Jn(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Wn(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.STAR_BLOCK_START,Wn(t,Xn(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Je);function Zn(t){return Zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(t)}function Qn(t,e){return Qn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Qn(t,e)}function tr(t,e){if(e&&("object"===Zn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return er(t)}function er(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nr(t){return nr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},nr(t)}var rr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qn(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=nr(n);if(r){var o=nr(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return tr(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).stateType=V.BLOCK_START,tr(t,er(t))}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Je);function or(t){return or="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(t)}function ir(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==or(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==or(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===or(o)?o:String(o)),r)}var o}function ur(t,e){return ur=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ur(t,e)}function cr(t){return cr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},cr(t)}var ar=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ur(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=cr(r);if(o){var n=cr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===or(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).label_=e,n.label=n.makeLabel(),n.serializationType=$.ATOM,n}return e=u,(n=[{key:"makeLabel",value:function(){var t=new B;return t.addOne(this.label_),t}},{key:"matches",value:function(t,e,n){return this.label_===t}},{key:"toString",value:function(){return this.label_}}])&&ir(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function lr(t){return lr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(t)}function sr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==lr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==lr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===lr(o)?o:String(o)),r)}var o}function fr(t,e){return fr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},fr(t,e)}function pr(t){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},pr(t)}var yr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&fr(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=pr(r);if(o){var n=pr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===lr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t)).serializationType=$.RANGE,r.start=e,r.stop=n,r.label=r.makeLabel(),r}return e=u,(n=[{key:"makeLabel",value:function(){var t=new B;return t.addRange(this.start,this.stop),t}},{key:"matches",value:function(t,e,n){return t>=this.start&&t<=this.stop}},{key:"toString",value:function(){return"'"+String.fromCharCode(this.start)+"'..'"+String.fromCharCode(this.stop)+"'"}}])&&sr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function hr(t){return hr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(t)}function br(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==hr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==hr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===hr(o)?o:String(o)),r)}var o}function vr(t,e){return vr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},vr(t,e)}function dr(t){return dr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},dr(t)}var mr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vr(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=dr(r);if(o){var n=dr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===hr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t)).serializationType=$.ACTION,o.ruleIndex=e,o.actionIndex=void 0===n?-1:n,o.isCtxDependent=void 0!==r&&r,o.isEpsilon=!0,o}return e=u,(n=[{key:"matches",value:function(t,e,n){return!1}},{key:"toString",value:function(){return"action_"+this.ruleIndex+":"+this.actionIndex}}])&&br(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function gr(t){return gr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(t)}function Sr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==gr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==gr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===gr(o)?o:String(o)),r)}var o}function Or(t,e){return Or=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Or(t,e)}function wr(t){return wr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wr(t)}var _r=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Or(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=wr(r);if(o){var n=wr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===gr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).serializationType=$.EPSILON,n.isEpsilon=!0,n.outermostPrecedenceReturn=e,n}return e=u,(n=[{key:"matches",value:function(t,e,n){return!1}},{key:"toString",value:function(){return"epsilon"}}])&&Sr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($);function Pr(t){return Pr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pr(t)}function Tr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Pr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Pr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Pr(o)?o:String(o)),r)}var o}function Er(t,e){return Er=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Er(t,e)}function jr(t){return jr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},jr(t)}var kr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Er(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=jr(r);if(o){var n=jr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Pr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this)).ruleIndex=void 0===t?-1:t,r.predIndex=void 0===e?-1:e,r.isCtxDependent=void 0!==n&&n,r}return e=u,(n=[{key:"evaluate",value:function(t,e){var n=this.isCtxDependent?e:null;return t.sempred(n,this.ruleIndex,this.predIndex)}},{key:"updateHashCode",value:function(t){t.update(this.ruleIndex,this.predIndex,this.isCtxDependent)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.ruleIndex===t.ruleIndex&&this.predIndex===t.predIndex&&this.isCtxDependent===t.isCtxDependent}},{key:"toString",value:function(){return"{"+this.ruleIndex+":"+this.predIndex+"}?"}}])&&Tr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(T);function xr(t){return xr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr(t)}function Rr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==xr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==xr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===xr(o)?o:String(o)),r)}var o}function Cr(t,e){return Cr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Cr(t,e)}function Ar(t){return Ar=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ar(t)}T.NONE=new kr;var Nr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Cr(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ar(r);if(o){var n=Ar(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===xr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t)).serializationType=$.PREDICATE,o.ruleIndex=e,o.predIndex=n,o.isCtxDependent=r,o.isEpsilon=!0,o}return e=u,(n=[{key:"matches",value:function(t,e,n){return!1}},{key:"getPredicate",value:function(){return new kr(this.ruleIndex,this.predIndex,this.isCtxDependent)}},{key:"toString",value:function(){return"pred_"+this.ruleIndex+":"+this.predIndex}}])&&Rr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(wt);function Ir(t){return Ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ir(t)}function Lr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ir(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ir(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ir(o)?o:String(o)),r)}var o}function Dr(t,e){return Dr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Dr(t,e)}function Fr(t){return Fr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fr(t)}var Br=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Dr(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Fr(r);if(o){var n=Fr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ir(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).precedence=void 0===t?0:t,e}return e=u,(n=[{key:"evaluate",value:function(t,e){return t.precpred(e,this.precedence)}},{key:"evalPrecedence",value:function(t,e){return t.precpred(e,this.precedence)?T.NONE:null}},{key:"compareTo",value:function(t){return this.precedence-t.precedence}},{key:"updateHashCode",value:function(t){t.update(this.precedence)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.precedence===t.precedence}},{key:"toString",value:function(){return"{"+this.precedence+">=prec}?"}}])&&Lr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(T);function Mr(t){return Mr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mr(t)}function Ur(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Mr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Mr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Mr(o)?o:String(o)),r)}var o}function Vr(t,e){return Vr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Vr(t,e)}function qr(t){return qr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},qr(t)}T.PrecedencePredicate=Br;var Hr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Vr(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=qr(r);if(o){var n=qr(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Mr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).serializationType=$.PRECEDENCE,n.precedence=e,n.isEpsilon=!0,n}return e=u,(n=[{key:"matches",value:function(t,e,n){return!1}},{key:"getPredicate",value:function(){return new Br(this.precedence)}},{key:"toString",value:function(){return this.precedence+" >= _p"}}])&&Ur(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(wt);function zr(t){return zr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zr(t)}function Yr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==zr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==zr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===zr(o)?o:String(o)),r)}var o}function Kr(t,e,n){return e&&Yr(t.prototype,e),n&&Yr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var Gr=Kr((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),void 0===e&&(e=null),this.readOnly=!1,this.verifyATN=null===e||e.verifyATN,this.generateRuleBypassTransitions=null!==e&&e.generateRuleBypassTransitions}));Gr.defaultOptions=new Gr,Gr.defaultOptions.readOnly=!0;const Wr={CHANNEL:0,CUSTOM:1,MODE:2,MORE:3,POP_MODE:4,PUSH_MODE:5,SKIP:6,TYPE:7};function Xr(t){return Xr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xr(t)}function Jr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Xr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Xr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Xr(o)?o:String(o)),r)}var o}var $r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actionType=e,this.isPositionDependent=!1}var e,n;return e=t,(n=[{key:"hashCode",value:function(){var t=new a;return this.updateHashCode(t),t.finish()}},{key:"updateHashCode",value:function(t){t.update(this.actionType)}},{key:"equals",value:function(t){return this===t}}])&&Jr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Zr(t){return Zr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zr(t)}function Qr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Zr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Zr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Zr(o)?o:String(o)),r)}var o}function to(t,e){return to=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},to(t,e)}function eo(t){return eo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},eo(t)}var no=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&to(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=eo(r);if(o){var n=eo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Zr(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,Wr.SKIP)}return e=u,(n=[{key:"execute",value:function(t){t.skip()}},{key:"toString",value:function(){return"skip"}}])&&Qr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function ro(t){return ro="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(t)}function oo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ro(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ro(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ro(o)?o:String(o)),r)}var o}function io(t,e){return io=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},io(t,e)}function uo(t){return uo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},uo(t)}no.INSTANCE=new no;var co=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&io(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=uo(r);if(o){var n=uo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ro(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,Wr.CHANNEL)).channel=t,e}return e=u,(n=[{key:"execute",value:function(t){t._channel=this.channel}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.channel)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.channel===t.channel}},{key:"toString",value:function(){return"channel("+this.channel+")"}}])&&oo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function ao(t){return ao="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ao(t)}function lo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ao(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ao(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ao(o)?o:String(o)),r)}var o}function so(t,e){return so=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},so(t,e)}function fo(t){return fo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fo(t)}var po=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&so(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=fo(r);if(o){var n=fo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ao(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,Wr.CUSTOM)).ruleIndex=t,n.actionIndex=e,n.isPositionDependent=!0,n}return e=u,(n=[{key:"execute",value:function(t){t.action(null,this.ruleIndex,this.actionIndex)}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.ruleIndex,this.actionIndex)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.ruleIndex===t.ruleIndex&&this.actionIndex===t.actionIndex}}])&&lo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function yo(t){return yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yo(t)}function ho(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==yo(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==yo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===yo(o)?o:String(o)),r)}var o}function bo(t,e){return bo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},bo(t,e)}function vo(t){return vo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},vo(t)}var mo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&bo(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=vo(r);if(o){var n=vo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===yo(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,Wr.MORE)}return e=u,(n=[{key:"execute",value:function(t){t.more()}},{key:"toString",value:function(){return"more"}}])&&ho(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function go(t){return go="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},go(t)}function So(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==go(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==go(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===go(o)?o:String(o)),r)}var o}function Oo(t,e){return Oo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Oo(t,e)}function wo(t){return wo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wo(t)}mo.INSTANCE=new mo;var _o=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Oo(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=wo(r);if(o){var n=wo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===go(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,Wr.TYPE)).type=t,e}return e=u,(n=[{key:"execute",value:function(t){t.type=this.type}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.type)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.type===t.type}},{key:"toString",value:function(){return"type("+this.type+")"}}])&&So(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function Po(t){return Po="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Po(t)}function To(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Po(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Po(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Po(o)?o:String(o)),r)}var o}function Eo(t,e){return Eo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Eo(t,e)}function jo(t){return jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},jo(t)}var ko=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Eo(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=jo(r);if(o){var n=jo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Po(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,Wr.PUSH_MODE)).mode=t,e}return e=u,(n=[{key:"execute",value:function(t){t.pushMode(this.mode)}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.mode)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.mode===t.mode}},{key:"toString",value:function(){return"pushMode("+this.mode+")"}}])&&To(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function xo(t){return xo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xo(t)}function Ro(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==xo(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==xo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===xo(o)?o:String(o)),r)}var o}function Co(t,e){return Co=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Co(t,e)}function Ao(t){return Ao=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ao(t)}var No=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Co(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ao(r);if(o){var n=Ao(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===xo(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,Wr.POP_MODE)}return e=u,(n=[{key:"execute",value:function(t){t.popMode()}},{key:"toString",value:function(){return"popMode"}}])&&Ro(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function Io(t){return Io="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(t)}function Lo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Io(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Io(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Io(o)?o:String(o)),r)}var o}function Do(t,e){return Do=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Do(t,e)}function Fo(t){return Fo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fo(t)}No.INSTANCE=new No;var Bo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Do(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Fo(r);if(o){var n=Fo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Io(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,Wr.MODE)).mode=t,e}return e=u,(n=[{key:"execute",value:function(t){t.mode(this.mode)}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.mode)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.mode===t.mode}},{key:"toString",value:function(){return"mode("+this.mode+")"}}])&&Lo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function Mo(t){return Mo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(t)}function Uo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Mo(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Mo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Mo(o)?o:String(o)),r)}var o}function Vo(t,e){var n=[];return n[t-1]=e,n.map((function(t){return e}))}var qo=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null==e&&(e=Gr.defaultOptions),this.deserializationOptions=e,this.stateFactories=null,this.actionFactories=null}var e,n;return e=t,n=[{key:"deserialize",value:function(t){var e=this.reset(t);this.checkVersion(e),e&&this.skipUUID();var n=this.readATN();this.readStates(n,e),this.readRules(n,e),this.readModes(n);var r=[];return this.readSets(n,r,this.readInt.bind(this)),e&&this.readSets(n,r,this.readInt32.bind(this)),this.readEdges(n,r),this.readDecisions(n),this.readLexerActions(n,e),this.markPrecedenceDecisions(n),this.verifyATN(n),this.deserializationOptions.generateRuleBypassTransitions&&1===n.grammarType&&(this.generateRuleBypassTransitions(n),this.verifyATN(n)),n}},{key:"reset",value:function(t){if(3===(t.charCodeAt?t.charCodeAt(0):t[0])){var e=t.split("").map((function(t){var e=t.charCodeAt(0);return e>1?e-2:e+65534}));return e[0]=t.charCodeAt(0),this.data=e,this.pos=0,!0}return this.data=t,this.pos=0,!1}},{key:"skipUUID",value:function(){for(var t=0;t++<8;)this.readInt()}},{key:"checkVersion",value:function(t){var e=this.readInt();if(!t&&4!==e)throw"Could not deserialize ATN with version "+e+" (expected 4)."}},{key:"readATN",value:function(){var t=this.readInt(),e=this.readInt();return new Ie(t,e)}},{key:"readStates",value:function(t,e){for(var n,r,o,i=[],u=[],c=this.readInt(),a=0;a<c;a++){var l=this.readInt();if(l!==V.INVALID_TYPE){var s=this.readInt();e&&65535===s&&(s=-1);var f=this.stateFactory(l,s);if(l===V.LOOP_END){var p=this.readInt();i.push([f,p])}else if(f instanceof Je){var y=this.readInt();u.push([f,y])}t.addState(f)}else t.addState(null)}for(n=0;n<i.length;n++)(r=i[n])[0].loopBackState=t.states[r[1]];for(n=0;n<u.length;n++)(r=u[n])[0].endState=t.states[r[1]];var h=this.readInt();for(n=0;n<h;n++)o=this.readInt(),t.states[o].nonGreedy=!0;var b=this.readInt();for(n=0;n<b;n++)o=this.readInt(),t.states[o].isPrecedenceRule=!0}},{key:"readRules",value:function(t,e){var n,r=this.readInt();for(0===t.grammarType&&(t.ruleToTokenType=Vo(r,0)),t.ruleToStartState=Vo(r,0),n=0;n<r;n++){var i=this.readInt();if(t.ruleToStartState[n]=t.states[i],0===t.grammarType){var u=this.readInt();e&&65535===u&&(u=o.EOF),t.ruleToTokenType[n]=u}}for(t.ruleToStopState=Vo(r,0),n=0;n<t.states.length;n++){var c=t.states[n];c instanceof G&&(t.ruleToStopState[c.ruleIndex]=c,t.ruleToStartState[c.ruleIndex].stopState=c)}}},{key:"readModes",value:function(t){for(var e=this.readInt(),n=0;n<e;n++){var r=this.readInt();t.modeToStartState.push(t.states[r])}}},{key:"readSets",value:function(t,e,n){for(var r=this.readInt(),o=0;o<r;o++){var i=new B;e.push(i);var u=this.readInt();0!==this.readInt()&&i.addOne(-1);for(var c=0;c<u;c++){var a=n(),l=n();i.addRange(a,l)}}}},{key:"readEdges",value:function(t,e){var n,r,o,i,u,c=this.readInt();for(n=0;n<c;n++){var a=this.readInt(),l=this.readInt(),s=this.readInt(),f=this.readInt(),p=this.readInt(),y=this.readInt();i=this.edgeFactory(t,s,a,l,f,p,y,e),t.states[a].addTransition(i)}for(n=0;n<t.states.length;n++)for(o=t.states[n],r=0;r<o.transitions.length;r++){var h=o.transitions[r];if(h instanceof nt){var b=-1;t.ruleToStartState[h.target.ruleIndex].isPrecedenceRule&&0===h.precedence&&(b=h.target.ruleIndex),i=new _r(h.followState,b),t.ruleToStopState[h.target.ruleIndex].addTransition(i)}}for(n=0;n<t.states.length;n++){if((o=t.states[n])instanceof Je){if(null===o.endState)throw"IllegalState";if(null!==o.endState.startState)throw"IllegalState";o.endState.startState=o}if(o instanceof jn)for(r=0;r<o.transitions.length;r++)(u=o.transitions[r].target)instanceof Yn&&(u.loopBackState=o);else if(o instanceof Nn)for(r=0;r<o.transitions.length;r++)(u=o.transitions[r].target)instanceof Mn&&(u.loopBackState=o)}}},{key:"readDecisions",value:function(t){for(var e=this.readInt(),n=0;n<e;n++){var r=this.readInt(),o=t.states[r];t.decisionToState.push(o),o.decision=n}}},{key:"readLexerActions",value:function(t,e){if(0===t.grammarType){var n=this.readInt();t.lexerActions=Vo(n,null);for(var r=0;r<n;r++){var o=this.readInt(),i=this.readInt();e&&65535===i&&(i=-1);var u=this.readInt();e&&65535===u&&(u=-1),t.lexerActions[r]=this.lexerActionFactory(o,i,u)}}}},{key:"generateRuleBypassTransitions",value:function(t){var e,n=t.ruleToStartState.length;for(e=0;e<n;e++)t.ruleToTokenType[e]=t.maxTokenType+e+1;for(e=0;e<n;e++)this.generateRuleBypassTransition(t,e)}},{key:"generateRuleBypassTransition",value:function(t,e){var n,r,o=new rr;o.ruleIndex=e,t.addState(o);var i=new nn;i.ruleIndex=e,t.addState(i),o.endState=i,t.defineDecisionState(o),i.startState=o;var u=null,c=null;if(t.ruleToStartState[e].isPrecedenceRule){for(c=null,n=0;n<t.states.length;n++)if(r=t.states[n],this.stateIsEndStateFor(r,e)){c=r,u=r.loopBackState.transitions[0];break}if(null===u)throw"Couldn't identify final state of the precedence rule prefix section."}else c=t.ruleToStopState[e];for(n=0;n<t.states.length;n++){r=t.states[n];for(var a=0;a<r.transitions.length;a++){var l=r.transitions[a];l!==u&&l.target===c&&(l.target=i)}}for(var s=t.ruleToStartState[e],f=s.transitions.length;f>0;)o.addTransition(s.transitions[f-1]),s.transitions=s.transitions.slice(-1);t.ruleToStartState[e].addTransition(new _r(o)),i.addTransition(new _r(c));var p=new Be;t.addState(p),p.addTransition(new ar(i,t.ruleToTokenType[e])),o.addTransition(new _r(p))}},{key:"stateIsEndStateFor",value:function(t,e){if(t.ruleIndex!==e)return null;if(!(t instanceof Mn))return null;var n=t.transitions[t.transitions.length-1].target;return n instanceof ln&&n.epsilonOnlyTransitions&&n.transitions[0].target instanceof G?t:null}},{key:"markPrecedenceDecisions",value:function(t){for(var e=0;e<t.states.length;e++){var n=t.states[e];if(n instanceof Mn&&t.ruleToStartState[n.ruleIndex].isPrecedenceRule){var r=n.transitions[n.transitions.length-1].target;r instanceof ln&&r.epsilonOnlyTransitions&&r.transitions[0].target instanceof G&&(n.isPrecedenceDecision=!0)}}}},{key:"verifyATN",value:function(t){if(this.deserializationOptions.verifyATN)for(var e=0;e<t.states.length;e++){var n=t.states[e];if(null!==n)if(this.checkCondition(n.epsilonOnlyTransitions||n.transitions.length<=1),n instanceof Yn)this.checkCondition(null!==n.loopBackState);else if(n instanceof Mn)if(this.checkCondition(null!==n.loopBackState),this.checkCondition(2===n.transitions.length),n.transitions[0].target instanceof $n)this.checkCondition(n.transitions[1].target instanceof ln),this.checkCondition(!n.nonGreedy);else{if(!(n.transitions[0].target instanceof ln))throw"IllegalState";this.checkCondition(n.transitions[1].target instanceof $n),this.checkCondition(n.nonGreedy)}else n instanceof Nn?(this.checkCondition(1===n.transitions.length),this.checkCondition(n.transitions[0].target instanceof Mn)):n instanceof ln?this.checkCondition(null!==n.loopBackState):n instanceof bn?this.checkCondition(null!==n.stopState):n instanceof Je?this.checkCondition(null!==n.endState):n instanceof nn?this.checkCondition(null!==n.startState):n instanceof ze?this.checkCondition(n.transitions.length<=1||n.decision>=0):this.checkCondition(n.transitions.length<=1||n instanceof G)}}},{key:"checkCondition",value:function(t,e){if(!t)throw null==e&&(e="IllegalState"),e}},{key:"readInt",value:function(){return this.data[this.pos++]}},{key:"readInt32",value:function(){return this.readInt()|this.readInt()<<16}},{key:"edgeFactory",value:function(t,e,n,r,i,u,c,a){var l=t.states[r];switch(e){case $.EPSILON:return new _r(l);case $.RANGE:return new yr(l,0!==c?o.EOF:i,u);case $.RULE:return new nt(t.states[i],u,c,l);case $.PREDICATE:return new Nr(l,i,u,0!==c);case $.PRECEDENCE:return new Hr(l,i);case $.ATOM:return new ar(l,0!==c?o.EOF:i);case $.ACTION:return new mr(l,i,u,0!==c);case $.SET:return new ct(l,a[i]);case $.NOT_SET:return new yt(l,a[i]);case $.WILDCARD:return new mt(l);default:throw"The specified transition type: "+e+" is not valid."}}},{key:"stateFactory",value:function(t,e){if(null===this.stateFactories){var n=[];n[V.INVALID_TYPE]=null,n[V.BASIC]=function(){return new Be},n[V.RULE_START]=function(){return new bn},n[V.BLOCK_START]=function(){return new rr},n[V.PLUS_BLOCK_START]=function(){return new Yn},n[V.STAR_BLOCK_START]=function(){return new $n},n[V.TOKEN_START]=function(){return new On},n[V.RULE_STOP]=function(){return new G},n[V.BLOCK_END]=function(){return new nn},n[V.STAR_LOOP_BACK]=function(){return new Nn},n[V.STAR_LOOP_ENTRY]=function(){return new Mn},n[V.PLUS_LOOP_BACK]=function(){return new jn},n[V.LOOP_END]=function(){return new ln},this.stateFactories=n}if(t>this.stateFactories.length||null===this.stateFactories[t])throw"The specified state type "+t+" is not valid.";var r=this.stateFactories[t]();if(null!==r)return r.ruleIndex=e,r}},{key:"lexerActionFactory",value:function(t,e,n){if(null===this.actionFactories){var r=[];r[Wr.CHANNEL]=function(t,e){return new co(t)},r[Wr.CUSTOM]=function(t,e){return new po(t,e)},r[Wr.MODE]=function(t,e){return new Bo(t)},r[Wr.MORE]=function(t,e){return mo.INSTANCE},r[Wr.POP_MODE]=function(t,e){return No.INSTANCE},r[Wr.PUSH_MODE]=function(t,e){return new ko(t)},r[Wr.SKIP]=function(t,e){return no.INSTANCE},r[Wr.TYPE]=function(t,e){return new _o(t)},this.actionFactories=r}if(t>this.actionFactories.length||null===this.actionFactories[t])throw"The specified lexer action type "+t+" is not valid.";return this.actionFactories[t](e,n)}}],n&&Uo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Ho(t){return Ho="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ho(t)}function zo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ho(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ho(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ho(o)?o:String(o)),r)}var o}var Yo=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"syntaxError",value:function(t,e,n,r,o,i){}},{key:"reportAmbiguity",value:function(t,e,n,r,o,i,u){}},{key:"reportAttemptingFullContext",value:function(t,e,n,r,o,i){}},{key:"reportContextSensitivity",value:function(t,e,n,r,o,i){}}])&&zo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Ko(t){return Ko="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ko(t)}function Go(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ko(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ko(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ko(o)?o:String(o)),r)}var o}function Wo(t,e){return Wo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Wo(t,e)}function Xo(t){return Xo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xo(t)}var Jo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Wo(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Xo(r);if(o){var n=Xo(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ko(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this)}return e=u,(n=[{key:"syntaxError",value:function(t,e,n,r,o,i){console.error("line "+n+":"+r+" "+o)}}])&&Go(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Yo);function $o(t){return $o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$o(t)}function Zo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$o(o)?o:String(o)),r)}var o}function Qo(t,e){return Qo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Qo(t,e)}function ti(t,e){if(e&&("object"===$o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return ei(t)}function ei(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ni(t){return ni=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ni(t)}Jo.INSTANCE=new Jo;var ri=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qo(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ni(r);if(o){var n=ni(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ti(this,t)});function u(t){var e;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=i.call(this),null===t)throw"delegates";return e.delegates=t,ti(e,ei(e))}return e=u,n=[{key:"syntaxError",value:function(t,e,n,r,o,i){this.delegates.map((function(u){return u.syntaxError(t,e,n,r,o,i)}))}},{key:"reportAmbiguity",value:function(t,e,n,r,o,i,u){this.delegates.map((function(c){return c.reportAmbiguity(t,e,n,r,o,i,u)}))}},{key:"reportAttemptingFullContext",value:function(t,e,n,r,o,i){this.delegates.map((function(u){return u.reportAttemptingFullContext(t,e,n,r,o,i)}))}},{key:"reportContextSensitivity",value:function(t,e,n,r,o,i){this.delegates.map((function(u){return u.reportContextSensitivity(t,e,n,r,o,i)}))}}],n&&Zo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Yo);function oi(t){return oi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(t)}function ii(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==oi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==oi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===oi(o)?o:String(o)),r)}var o}var ui=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=[Jo.INSTANCE],this._interp=null,this._stateNumber=-1}var e,n;return e=t,(n=[{key:"checkVersion",value:function(t){var e="4.12.0";e!==t&&console.log("ANTLR runtime and generated code versions disagree: "+e+"!="+t)}},{key:"addErrorListener",value:function(t){this._listeners.push(t)}},{key:"removeErrorListeners",value:function(){this._listeners=[]}},{key:"getLiteralNames",value:function(){return Object.getPrototypeOf(this).constructor.literalNames||[]}},{key:"getSymbolicNames",value:function(){return Object.getPrototypeOf(this).constructor.symbolicNames||[]}},{key:"getTokenNames",value:function(){if(!this.tokenNames){var t=this.getLiteralNames(),e=this.getSymbolicNames(),n=t.length>e.length?t.length:e.length;this.tokenNames=[];for(var r=0;r<n;r++)this.tokenNames[r]=t[r]||e[r]||"<INVALID"}return this.tokenNames}},{key:"getTokenTypeMap",value:function(){var t=this.getTokenNames();if(null===t)throw"The current recognizer does not provide a list of token names.";var e=this.tokenTypeMapCache[t];return void 0===e&&((e=t.reduce((function(t,e,n){t[e]=n}))).EOF=o.EOF,this.tokenTypeMapCache[t]=e),e}},{key:"getRuleIndexMap",value:function(){var t=this.ruleNames;if(null===t)throw"The current recognizer does not provide a list of rule names.";var e=this.ruleIndexMapCache[t];return void 0===e&&(e=t.reduce((function(t,e,n){t[e]=n})),this.ruleIndexMapCache[t]=e),e}},{key:"getTokenType",value:function(t){var e=this.getTokenTypeMap()[t];return void 0!==e?e:o.INVALID_TYPE}},{key:"getErrorHeader",value:function(t){return"line "+t.getOffendingToken().line+":"+t.getOffendingToken().column}},{key:"getTokenErrorDisplay",value:function(t){if(null===t)return"<no token>";var e=t.text;return null===e&&(e=t.type===o.EOF?"<EOF>":"<"+t.type+">"),"'"+(e=e.replace("\n","\\n").replace("\r","\\r").replace("\t","\\t"))+"'"}},{key:"getErrorListenerDispatch",value:function(){return new ri(this._listeners)}},{key:"sempred",value:function(t,e,n){return!0}},{key:"precpred",value:function(t,e){return!0}},{key:"atn",get:function(){return this._interp.atn}},{key:"state",get:function(){return this._stateNumber},set:function(t){this._stateNumber=t}}])&&ii(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ci(t){return ci="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ci(t)}function ai(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ci(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ci(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ci(o)?o:String(o)),r)}var o}function li(t,e){return li=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},li(t,e)}function si(t){return si=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},si(t)}ui.tokenTypeMapCache={},ui.ruleIndexMapCache={};var fi=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&li(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=si(r);if(i){var n=si(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ci(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t,e,n,r,i){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(a=u.call(this)).source=void 0!==t?t:c.EMPTY_SOURCE,a.type=void 0!==e?e:null,a.channel=void 0!==n?n:o.DEFAULT_CHANNEL,a.start=void 0!==r?r:-1,a.stop=void 0!==i?i:-1,a.tokenIndex=-1,null!==a.source[0]?(a.line=t[0].line,a.column=t[0].column):a.column=-1,a}return e=c,(n=[{key:"clone",value:function(){var t=new c(this.source,this.type,this.channel,this.start,this.stop);return t.tokenIndex=this.tokenIndex,t.line=this.line,t.column=this.column,t.text=this.text,t}},{key:"cloneWithType",value:function(t){var e=new c(this.source,t,this.channel,this.start,this.stop);return e.tokenIndex=this.tokenIndex,e.line=this.line,e.column=this.column,t===o.EOF&&(e.text=""),e}},{key:"toString",value:function(){var t=this.text;return t=null!==t?t.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t"):"<no text>","[@"+this.tokenIndex+","+this.start+":"+this.stop+"='"+t+"',<"+this.type+">"+(this.channel>0?",channel="+this.channel:"")+","+this.line+":"+this.column+"]"}},{key:"text",get:function(){if(null!==this._text)return this._text;var t=this.getInputStream();if(null===t)return null;var e=t.size;return this.start<e&&this.stop<e?t.getText(this.start,this.stop):"<EOF>"},set:function(t){this._text=t}}])&&ai(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(o);function pi(t){return pi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(t)}function yi(t,e){return yi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},yi(t,e)}function hi(t){return hi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hi(t)}function bi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==pi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==pi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===pi(o)?o:String(o)),r)}var o}function vi(t,e,n){return e&&bi(t.prototype,e),n&&bi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}fi.EMPTY_SOURCE=[null,null];var mi=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&yi(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=hi(e);if(n){var o=hi(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return function(t,e){if(e&&("object"===pi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function o(t){var e;return di(this,o),(e=r.call(this)).copyText=void 0!==t&&t,e}return vi(o,[{key:"create",value:function(t,e,n,r,o,i,u,c){var a=new fi(t,e,r,o,i);return a.line=u,a.column=c,null!==n?a.text=n:this.copyText&&null!==t[1]&&(a.text=t[1].getText(o,i)),a}},{key:"createThin",value:function(t,e){var n=new fi(null,t);return n.text=e,n}}]),o}(vi((function t(){di(this,t)})));function gi(t){return gi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(t)}function Si(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==gi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==gi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===gi(o)?o:String(o)),r)}var o}function Oi(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function wi(t){var e="function"==typeof Map?new Map:void 0;return wi=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _i(t,arguments,Ei(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ti(r,t)},wi(t)}function _i(t,e,n){return _i=Pi()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&Ti(o,n.prototype),o},_i.apply(null,arguments)}function Pi(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function Ti(t,e){return Ti=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ti(t,e)}function Ei(t){return Ei=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ei(t)}mi.DEFAULT=new mi;var ji=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ti(t,e)}(u,t);var e,n,r,o,i=(r=u,o=Pi(),function(){var t,e=Ei(r);if(o){var n=Ei(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===gi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Oi(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=i.call(this,t.message),Error.captureStackTrace&&Error.captureStackTrace(Oi(e),u),e.message=t.message,e.recognizer=t.recognizer,e.input=t.input,e.ctx=t.ctx,e.offendingToken=null,e.offendingState=-1,null!==e.recognizer&&(e.offendingState=e.recognizer.state),e}return e=u,(n=[{key:"getExpectedTokens",value:function(){return null!==this.recognizer?this.recognizer.atn.getExpectedTokens(this.offendingState,this.ctx):null}},{key:"toString",value:function(){return this.message}}])&&Si(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(wi(Error));function ki(t){return ki="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(t)}function xi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ki(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ki(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ki(o)?o:String(o)),r)}var o}function Ri(t,e){return Ri=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ri(t,e)}function Ci(t){return Ci=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ci(t)}var Ai=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ri(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ci(r);if(o){var n=Ci(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ki(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,{message:"",recognizer:t,input:e,ctx:null})).startIndex=n,o.deadEndConfigs=r,o}return e=u,(n=[{key:"toString",value:function(){var t="";return this.startIndex>=0&&this.startIndex<this.input.size&&(t=this.input.getText(new L(this.startIndex,this.startIndex))),"LexerNoViableAltException"+t}}])&&xi(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(ji);function Ni(t){return Ni="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(t)}function Ii(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ni(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ni(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ni(o)?o:String(o)),r)}var o}function Li(t,e){return Li=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Li(t,e)}function Di(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Fi(t){return Fi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fi(t)}var Bi=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Li(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Fi(r);if(i){var n=Fi(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ni(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Di(t)}(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this))._input=t,e._factory=mi.DEFAULT,e._tokenFactorySourcePair=[Di(e),t],e._interp=null,e._token=null,e._tokenStartCharIndex=-1,e._tokenStartLine=-1,e._tokenStartColumn=-1,e._hitEOF=!1,e._channel=o.DEFAULT_CHANNEL,e._type=o.INVALID_TYPE,e._modeStack=[],e._mode=c.DEFAULT_MODE,e._text=null,e}return e=c,(n=[{key:"reset",value:function(){null!==this._input&&this._input.seek(0),this._token=null,this._type=o.INVALID_TYPE,this._channel=o.DEFAULT_CHANNEL,this._tokenStartCharIndex=-1,this._tokenStartColumn=-1,this._tokenStartLine=-1,this._text=null,this._hitEOF=!1,this._mode=c.DEFAULT_MODE,this._modeStack=[],this._interp.reset()}},{key:"nextToken",value:function(){if(null===this._input)throw"nextToken requires a non-null input stream.";var t=this._input.mark();try{for(;;){if(this._hitEOF)return this.emitEOF(),this._token;this._token=null,this._channel=o.DEFAULT_CHANNEL,this._tokenStartCharIndex=this._input.index,this._tokenStartColumn=this._interp.column,this._tokenStartLine=this._interp.line,this._text=null;for(var e=!1;;){this._type=o.INVALID_TYPE;var n=c.SKIP;try{n=this._interp.match(this._input,this._mode)}catch(t){if(!(t instanceof ji))throw console.log(t.stack),t;this.notifyListeners(t),this.recover(t)}if(this._input.LA(1)===o.EOF&&(this._hitEOF=!0),this._type===o.INVALID_TYPE&&(this._type=n),this._type===c.SKIP){e=!0;break}if(this._type!==c.MORE)break}if(!e)return null===this._token&&this.emit(),this._token}}finally{this._input.release(t)}}},{key:"skip",value:function(){this._type=c.SKIP}},{key:"more",value:function(){this._type=c.MORE}},{key:"mode",value:function(t){this._mode=t}},{key:"pushMode",value:function(t){this._interp.debug&&console.log("pushMode "+t),this._modeStack.push(this._mode),this.mode(t)}},{key:"popMode",value:function(){if(0===this._modeStack.length)throw"Empty Stack";return this._interp.debug&&console.log("popMode back to "+this._modeStack.slice(0,-1)),this.mode(this._modeStack.pop()),this._mode}},{key:"emitToken",value:function(t){this._token=t}},{key:"emit",value:function(){var t=this._factory.create(this._tokenFactorySourcePair,this._type,this._text,this._channel,this._tokenStartCharIndex,this.getCharIndex()-1,this._tokenStartLine,this._tokenStartColumn);return this.emitToken(t),t}},{key:"emitEOF",value:function(){var t=this.column,e=this.line,n=this._factory.create(this._tokenFactorySourcePair,o.EOF,null,o.DEFAULT_CHANNEL,this._input.index,this._input.index-1,e,t);return this.emitToken(n),n}},{key:"getCharIndex",value:function(){return this._input.index}},{key:"getAllTokens",value:function(){for(var t=[],e=this.nextToken();e.type!==o.EOF;)t.push(e),e=this.nextToken();return t}},{key:"notifyListeners",value:function(t){var e=this._tokenStartCharIndex,n=this._input.index,r=this._input.getText(e,n),o="token recognition error at: '"+this.getErrorDisplay(r)+"'";this.getErrorListenerDispatch().syntaxError(this,null,this._tokenStartLine,this._tokenStartColumn,o,t)}},{key:"getErrorDisplay",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e.join("")}},{key:"getErrorDisplayForChar",value:function(t){return t.charCodeAt(0)===o.EOF?"<EOF>":"\n"===t?"\\n":"\t"===t?"\\t":"\r"===t?"\\r":t}},{key:"getCharErrorDisplay",value:function(t){return"'"+this.getErrorDisplayForChar(t)+"'"}},{key:"recover",value:function(t){this._input.LA(1)!==o.EOF&&(t instanceof Ai?this._interp.consume(this._input):this._input.consume())}},{key:"inputStream",get:function(){return this._input},set:function(t){this._input=null,this._tokenFactorySourcePair=[this,this._input],this.reset(),this._input=t,this._tokenFactorySourcePair=[this,this._input]}},{key:"sourceName",get:function(){return this._input.sourceName}},{key:"type",get:function(){return this._type},set:function(t){this._type=t}},{key:"line",get:function(){return this._interp.line},set:function(t){this._interp.line=t}},{key:"column",get:function(){return this._interp.column},set:function(t){this._interp.column=t}},{key:"text",get:function(){return null!==this._text?this._text:this._interp.getText(this._input)},set:function(t){this._text=t}}])&&Ii(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(ui);function Mi(t){return Mi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(t)}function Ui(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Mi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Mi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Mi(o)?o:String(o)),r)}var o}function Vi(t){return t.hashCodeForConfigSet()}function qi(t,e){return t===e||null!==t&&null!==e&&t.equalsForConfigSet(e)}Bi.DEFAULT_MODE=0,Bi.MORE=-2,Bi.SKIP=-3,Bi.DEFAULT_TOKEN_CHANNEL=o.DEFAULT_CHANNEL,Bi.HIDDEN=o.HIDDEN_CHANNEL,Bi.MIN_CHAR_VALUE=0,Bi.MAX_CHAR_VALUE=1114111;var Hi=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.configLookup=new v(Vi,qi),this.fullCtx=void 0===e||e,this.readOnly=!1,this.configs=[],this.uniqueAlt=0,this.conflictingAlts=null,this.hasSemanticContext=!1,this.dipsIntoOuterContext=!1,this.cachedHashCode=-1}var e,n;return e=t,(n=[{key:"add",value:function(t,e){if(void 0===e&&(e=null),this.readOnly)throw"This set is readonly";t.semanticContext!==T.NONE&&(this.hasSemanticContext=!0),t.reachesIntoOuterContext>0&&(this.dipsIntoOuterContext=!0);var n=this.configLookup.add(t);if(n===t)return this.cachedHashCode=-1,this.configs.push(t),!0;var r=!this.fullCtx,o=Te(n.context,t.context,r,e);return n.reachesIntoOuterContext=Math.max(n.reachesIntoOuterContext,t.reachesIntoOuterContext),t.precedenceFilterSuppressed&&(n.precedenceFilterSuppressed=!0),n.context=o,!0}},{key:"getStates",value:function(){for(var t=new v,e=0;e<this.configs.length;e++)t.add(this.configs[e].state);return t}},{key:"getPredicates",value:function(){for(var t=[],e=0;e<this.configs.length;e++){var n=this.configs[e].semanticContext;n!==T.NONE&&t.push(n.semanticContext)}return t}},{key:"optimizeConfigs",value:function(t){if(this.readOnly)throw"This set is readonly";if(0!==this.configLookup.length)for(var e=0;e<this.configs.length;e++){var n=this.configs[e];n.context=t.getCachedContext(n.context)}}},{key:"addAll",value:function(t){for(var e=0;e<t.length;e++)this.add(t[e]);return!1}},{key:"equals",value:function(e){return this===e||e instanceof t&&i(this.configs,e.configs)&&this.fullCtx===e.fullCtx&&this.uniqueAlt===e.uniqueAlt&&this.conflictingAlts===e.conflictingAlts&&this.hasSemanticContext===e.hasSemanticContext&&this.dipsIntoOuterContext===e.dipsIntoOuterContext}},{key:"hashCode",value:function(){var t=new a;return t.update(this.configs),t.finish()}},{key:"updateHashCode",value:function(t){this.readOnly?(-1===this.cachedHashCode&&(this.cachedHashCode=this.hashCode()),t.update(this.cachedHashCode)):t.update(this.hashCode())}},{key:"isEmpty",value:function(){return 0===this.configs.length}},{key:"contains",value:function(t){if(null===this.configLookup)throw"This method is not implemented for readonly sets.";return this.configLookup.contains(t)}},{key:"containsFast",value:function(t){if(null===this.configLookup)throw"This method is not implemented for readonly sets.";return this.configLookup.containsFast(t)}},{key:"clear",value:function(){if(this.readOnly)throw"This set is readonly";this.configs=[],this.cachedHashCode=-1,this.configLookup=new v}},{key:"setReadonly",value:function(t){this.readOnly=t,t&&(this.configLookup=null)}},{key:"toString",value:function(){return p(this.configs)+(this.hasSemanticContext?",hasSemanticContext="+this.hasSemanticContext:"")+(this.uniqueAlt!==Ie.INVALID_ALT_NUMBER?",uniqueAlt="+this.uniqueAlt:"")+(null!==this.conflictingAlts?",conflictingAlts="+this.conflictingAlts:"")+(this.dipsIntoOuterContext?",dipsIntoOuterContext":"")}},{key:"items",get:function(){return this.configs}},{key:"length",get:function(){return this.configs.length}}])&&Ui(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function zi(t){return zi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zi(t)}function Yi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==zi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==zi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===zi(o)?o:String(o)),r)}var o}var Ki=function(){function t(e,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null===e&&(e=-1),null===n&&(n=new Hi),this.stateNumber=e,this.configs=n,this.edges=null,this.isAcceptState=!1,this.prediction=0,this.lexerActionExecutor=null,this.requiresFullContext=!1,this.predicates=null,this}var e,n;return e=t,(n=[{key:"getAltSet",value:function(){var t=new v;if(null!==this.configs)for(var e=0;e<this.configs.length;e++){var n=this.configs[e];t.add(n.alt)}return 0===t.length?null:t}},{key:"equals",value:function(e){return this===e||e instanceof t&&this.configs.equals(e.configs)}},{key:"toString",value:function(){var t=this.stateNumber+":"+this.configs;return this.isAcceptState&&(t+="=>",null!==this.predicates?t+=this.predicates:t+=this.prediction),t}},{key:"hashCode",value:function(){var t=new a;return t.update(this.configs),t.finish()}}])&&Yi(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Gi(t){return Gi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gi(t)}function Wi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Gi(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Gi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Gi(o)?o:String(o)),r)}var o}var Xi=function(){function t(e,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.atn=e,this.sharedContextCache=n,this}var e,n;return e=t,n=[{key:"getCachedContext",value:function(t){if(null===this.sharedContextCache)return t;var e=new we;return Pe(t,this.sharedContextCache,e)}}],n&&Wi(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Ji(t){return Ji="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ji(t)}function $i(t,e){return $i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$i(t,e)}function Zi(t){return Zi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Zi(t)}Xi.ERROR=new Ki(2147483647,new Hi);var Qi=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$i(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Zi(n);if(r){var o=Zi(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ji(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).configLookup=new v,t}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Hi);function tu(t){return tu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tu(t)}function eu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==tu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==tu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===tu(o)?o:String(o)),r)}var o}function nu(){return nu="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=uu(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},nu.apply(this,arguments)}function ru(t,e){return ru=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ru(t,e)}function ou(t,e){if(e&&("object"===tu(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return iu(t)}function iu(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function uu(t){return uu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},uu(t)}var cu=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ru(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=uu(r);if(o){var n=uu(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ou(this,t)});function u(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=i.call(this,t,e);var r=t.lexerActionExecutor||null;return n.lexerActionExecutor=r||(null!==e?e.lexerActionExecutor:null),n.passedThroughNonGreedyDecision=null!==e&&n.checkNonGreedyDecision(e,n.state),n.hashCodeForConfigSet=u.prototype.hashCode,n.equalsForConfigSet=u.prototype.equals,ou(n,iu(n))}return e=u,(n=[{key:"updateHashCode",value:function(t){t.update(this.state.stateNumber,this.alt,this.context,this.semanticContext,this.passedThroughNonGreedyDecision,this.lexerActionExecutor)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.passedThroughNonGreedyDecision===t.passedThroughNonGreedyDecision&&(this.lexerActionExecutor?this.lexerActionExecutor.equals(t.lexerActionExecutor):!t.lexerActionExecutor)&&nu(uu(u.prototype),"equals",this).call(this,t)}},{key:"checkNonGreedyDecision",value:function(t,e){return t.passedThroughNonGreedyDecision||e instanceof ze&&e.nonGreedy}}])&&eu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(A);function au(t){return au="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},au(t)}function lu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==au(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==au(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===au(o)?o:String(o)),r)}var o}function su(t,e){return su=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},su(t,e)}function fu(t){return fu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fu(t)}var pu=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&su(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=fu(r);if(o){var n=fu(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===au(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e.actionType)).offset=t,n.action=e,n.isPositionDependent=!0,n}return e=u,(n=[{key:"execute",value:function(t){this.action.execute(t)}},{key:"updateHashCode",value:function(t){t.update(this.actionType,this.offset,this.action)}},{key:"equals",value:function(t){return this===t||t instanceof u&&this.offset===t.offset&&this.action===t.action}}])&&lu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($r);function yu(t){return yu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yu(t)}function hu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==yu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==yu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===yu(o)?o:String(o)),r)}var o}var bu=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lexerActions=null===e?[]:e,this.cachedHashCode=a.hashStuff(e),this}var e,n,r;return e=t,r=[{key:"append",value:function(e,n){return new t(null===e?[n]:e.lexerActions.concat([n]))}}],(n=[{key:"fixOffsetBeforeMatch",value:function(e){for(var n=null,r=0;r<this.lexerActions.length;r++)!this.lexerActions[r].isPositionDependent||this.lexerActions[r]instanceof pu||(null===n&&(n=this.lexerActions.concat([])),n[r]=new pu(e,this.lexerActions[r]));return null===n?this:new t(n)}},{key:"execute",value:function(t,e,n){var r=!1,o=e.index;try{for(var i=0;i<this.lexerActions.length;i++){var u=this.lexerActions[i];if(u instanceof pu){var c=u.offset;e.seek(n+c),u=u.action,r=n+c!==o}else u.isPositionDependent&&(e.seek(o),r=!1);u.execute(t)}}finally{r&&e.seek(o)}}},{key:"hashCode",value:function(){return this.cachedHashCode}},{key:"updateHashCode",value:function(t){t.update(this.cachedHashCode)}},{key:"equals",value:function(e){if(this===e)return!0;if(e instanceof t){if(this.cachedHashCode!=e.cachedHashCode)return!1;if(this.lexerActions.length!=e.lexerActions.length)return!1;for(var n=this.lexerActions.length,r=0;r<n;++r)if(!this.lexerActions[r].equals(e.lexerActions[r]))return!1;return!0}return!1}}])&&hu(e.prototype,n),r&&hu(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function vu(t,e){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},vu(t,e)}function du(t){return du=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},du(t)}function mu(t){return mu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mu(t)}function gu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Su(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==mu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==mu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===mu(o)?o:String(o)),r)}var o}function Ou(t,e,n){return e&&Su(t.prototype,e),n&&Su(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function wu(t){t.index=-1,t.line=0,t.column=-1,t.dfaState=null}var _u=function(){function t(){gu(this,t),wu(this)}return Ou(t,[{key:"reset",value:function(){wu(this)}}]),t}(),Pu=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vu(t,e)}(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=du(e);if(n){var o=du(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return function(t,e){if(e&&("object"===mu(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e,n,o){var u;return gu(this,i),(u=r.call(this,e,o)).decisionToDFA=n,u.recog=t,u.startIndex=-1,u.line=1,u.column=0,u.mode=Bi.DEFAULT_MODE,u.prevAccept=new _u,u}return Ou(i,[{key:"copyState",value:function(t){this.column=t.column,this.line=t.line,this.mode=t.mode,this.startIndex=t.startIndex}},{key:"match",value:function(t,e){this.mode=e;var n=t.mark();try{this.startIndex=t.index,this.prevAccept.reset();var r=this.decisionToDFA[e];return null===r.s0?this.matchATN(t):this.execATN(t,r.s0)}finally{t.release(n)}}},{key:"reset",value:function(){this.prevAccept.reset(),this.startIndex=-1,this.line=1,this.column=0,this.mode=Bi.DEFAULT_MODE}},{key:"matchATN",value:function(t){var e=this.atn.modeToStartState[this.mode];i.debug&&console.log("matchATN mode "+this.mode+" start: "+e);var n=this.mode,r=this.computeStartState(t,e),o=r.hasSemanticContext;r.hasSemanticContext=!1;var u=this.addDFAState(r);o||(this.decisionToDFA[this.mode].s0=u);var c=this.execATN(t,u);return i.debug&&console.log("DFA after matchATN: "+this.decisionToDFA[n].toLexerString()),c}},{key:"execATN",value:function(t,e){i.debug&&console.log("start state closure="+e.configs),e.isAcceptState&&this.captureSimState(this.prevAccept,t,e);for(var n=t.LA(1),r=e;;){i.debug&&console.log("execATN loop starting closure: "+r.configs);var u=this.getExistingTargetState(r,n);if(null===u&&(u=this.computeTargetState(t,r,n)),u===Xi.ERROR)break;if(n!==o.EOF&&this.consume(t),u.isAcceptState&&(this.captureSimState(this.prevAccept,t,u),n===o.EOF))break;n=t.LA(1),r=u}return this.failOrAccept(this.prevAccept,t,r.configs,n)}},{key:"getExistingTargetState",value:function(t,e){if(null===t.edges||e<i.MIN_DFA_EDGE||e>i.MAX_DFA_EDGE)return null;var n=t.edges[e-i.MIN_DFA_EDGE];return void 0===n&&(n=null),i.debug&&null!==n&&console.log("reuse state "+t.stateNumber+" edge to "+n.stateNumber),n}},{key:"computeTargetState",value:function(t,e,n){var r=new Qi;return this.getReachableConfigSet(t,e.configs,r,n),0===r.items.length?(r.hasSemanticContext||this.addDFAEdge(e,n,Xi.ERROR),Xi.ERROR):this.addDFAEdge(e,n,null,r)}},{key:"failOrAccept",value:function(t,e,n,r){if(null!==this.prevAccept.dfaState){var i=t.dfaState.lexerActionExecutor;return this.accept(e,i,this.startIndex,t.index,t.line,t.column),t.dfaState.prediction}if(r===o.EOF&&e.index===this.startIndex)return o.EOF;throw new Ai(this.recog,e,this.startIndex,n)}},{key:"getReachableConfigSet",value:function(t,e,n,r){for(var u=Ie.INVALID_ALT_NUMBER,c=0;c<e.items.length;c++){var a=e.items[c],l=a.alt===u;if(!l||!a.passedThroughNonGreedyDecision){i.debug&&console.log("testing %s at %s\n",this.getTokenName(r),a.toString(this.recog,!0));for(var s=0;s<a.state.transitions.length;s++){var f=a.state.transitions[s],p=this.getReachableTarget(f,r);if(null!==p){var y=a.lexerActionExecutor;null!==y&&(y=y.fixOffsetBeforeMatch(t.index-this.startIndex));var h=r===o.EOF,b=new cu({state:p,lexerActionExecutor:y},a);this.closure(t,b,n,l,!0,h)&&(u=a.alt)}}}}}},{key:"accept",value:function(t,e,n,r,o,u){i.debug&&console.log("ACTION %s\n",e),t.seek(r),this.line=o,this.column=u,null!==e&&null!==this.recog&&e.execute(this.recog,t,n)}},{key:"getReachableTarget",value:function(t,e){return t.matches(e,0,Bi.MAX_CHAR_VALUE)?t.target:null}},{key:"computeStartState",value:function(t,e){for(var n=ee.EMPTY,r=new Qi,o=0;o<e.transitions.length;o++){var i=e.transitions[o].target,u=new cu({state:i,alt:o+1,context:n},null);this.closure(t,u,r,!1,!1,!1)}return r}},{key:"closure",value:function(t,e,n,r,o,u){var c=null;if(i.debug&&console.log("closure("+e.toString(this.recog,!0)+")"),e.state instanceof G){if(i.debug&&(null!==this.recog?console.log("closure at %s rule stop %s\n",this.recog.ruleNames[e.state.ruleIndex],e):console.log("closure at rule stop %s\n",e)),null===e.context||e.context.hasEmptyPath()){if(null===e.context||e.context.isEmpty())return n.add(e),!0;n.add(new cu({state:e.state,context:ee.EMPTY},e)),r=!0}if(null!==e.context&&!e.context.isEmpty())for(var a=0;a<e.context.length;a++)if(e.context.getReturnState(a)!==ee.EMPTY_RETURN_STATE){var l=e.context.getParent(a),s=this.atn.states[e.context.getReturnState(a)];c=new cu({state:s,context:l},e),r=this.closure(t,c,n,r,o,u)}return r}e.state.epsilonOnlyTransitions||r&&e.passedThroughNonGreedyDecision||n.add(e);for(var f=0;f<e.state.transitions.length;f++){var p=e.state.transitions[f];null!==(c=this.getEpsilonTarget(t,e,p,n,o,u))&&(r=this.closure(t,c,n,r,o,u))}return r}},{key:"getEpsilonTarget",value:function(t,e,n,r,u,c){var a=null;if(n.serializationType===$.RULE){var l=ye.create(e.context,n.followState.stateNumber);a=new cu({state:n.target,context:l},e)}else{if(n.serializationType===$.PRECEDENCE)throw"Precedence predicates are not supported in lexers.";if(n.serializationType===$.PREDICATE)i.debug&&console.log("EVAL rule "+n.ruleIndex+":"+n.predIndex),r.hasSemanticContext=!0,this.evaluatePredicate(t,n.ruleIndex,n.predIndex,u)&&(a=new cu({state:n.target},e));else if(n.serializationType===$.ACTION)if(null===e.context||e.context.hasEmptyPath()){var s=bu.append(e.lexerActionExecutor,this.atn.lexerActions[n.actionIndex]);a=new cu({state:n.target,lexerActionExecutor:s},e)}else a=new cu({state:n.target},e);else n.serializationType===$.EPSILON?a=new cu({state:n.target},e):n.serializationType!==$.ATOM&&n.serializationType!==$.RANGE&&n.serializationType!==$.SET||c&&n.matches(o.EOF,0,Bi.MAX_CHAR_VALUE)&&(a=new cu({state:n.target},e))}return a}},{key:"evaluatePredicate",value:function(t,e,n,r){if(null===this.recog)return!0;if(!r)return this.recog.sempred(null,e,n);var o=this.column,i=this.line,u=t.index,c=t.mark();try{return this.consume(t),this.recog.sempred(null,e,n)}finally{this.column=o,this.line=i,t.seek(u),t.release(c)}}},{key:"captureSimState",value:function(t,e,n){t.index=e.index,t.line=this.line,t.column=this.column,t.dfaState=n}},{key:"addDFAEdge",value:function(t,e,n,r){if(void 0===n&&(n=null),void 0===r&&(r=null),null===n&&null!==r){var o=r.hasSemanticContext;if(r.hasSemanticContext=!1,n=this.addDFAState(r),o)return n}return e<i.MIN_DFA_EDGE||e>i.MAX_DFA_EDGE||(i.debug&&console.log("EDGE "+t+" -> "+n+" upon "+e),null===t.edges&&(t.edges=[]),t.edges[e-i.MIN_DFA_EDGE]=n),n}},{key:"addDFAState",value:function(t){for(var e=new Ki(null,t),n=null,r=0;r<t.items.length;r++){var o=t.items[r];if(o.state instanceof G){n=o;break}}null!==n&&(e.isAcceptState=!0,e.lexerActionExecutor=n.lexerActionExecutor,e.prediction=this.atn.ruleToTokenType[n.state.ruleIndex]);var i=this.decisionToDFA[this.mode],u=i.states.get(e);if(null!==u)return u;var c=e;return c.stateNumber=i.states.length,t.setReadonly(!0),c.configs=t,i.states.add(c),c}},{key:"getDFA",value:function(t){return this.decisionToDFA[t]}},{key:"getText",value:function(t){return t.getText(this.startIndex,t.index-1)}},{key:"consume",value:function(t){t.LA(1)==="\n".charCodeAt(0)?(this.line+=1,this.column=0):this.column+=1,t.consume()}},{key:"getTokenName",value:function(t){return-1===t?"EOF":"'"+String.fromCharCode(t)+"'"}}]),i}(Xi);function Tu(t){return Tu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tu(t)}function Eu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Tu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Tu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Tu(o)?o:String(o)),r)}var o}Pu.debug=!1,Pu.dfa_debug=!1,Pu.MIN_DFA_EDGE=0,Pu.MAX_DFA_EDGE=127;var ju=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.alt=n,this.pred=e}var e,n;return e=t,(n=[{key:"toString",value:function(){return"("+this.pred+", "+this.alt+")"}}])&&Eu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ku(t){return ku="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ku(t)}function xu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ku(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ku(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ku(o)?o:String(o)),r)}var o}var Ru=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={}}var e,n;return e=t,(n=[{key:"get",value:function(t){return this.data["k-"+t]||null}},{key:"set",value:function(t,e){this.data["k-"+t]=e}},{key:"values",value:function(){var t=this;return Object.keys(this.data).filter((function(t){return t.startsWith("k-")})).map((function(e){return t.data[e]}),this)}}])&&xu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Cu={SLL:0,LL:1,LL_EXACT_AMBIG_DETECTION:2,hasSLLConflictTerminatingPrediction:function(t,e){if(Cu.allConfigsInRuleStopStates(e))return!0;if(t===Cu.SLL&&e.hasSemanticContext){for(var n=new Hi,r=0;r<e.items.length;r++){var o=e.items[r];o=new A({semanticContext:T.NONE},o),n.add(o)}e=n}var i=Cu.getConflictingAltSubsets(e);return Cu.hasConflictingAltSet(i)&&!Cu.hasStateAssociatedWithOneAlt(e)},hasConfigInRuleStopState:function(t){for(var e=0;e<t.items.length;e++)if(t.items[e].state instanceof G)return!0;return!1},allConfigsInRuleStopStates:function(t){for(var e=0;e<t.items.length;e++)if(!(t.items[e].state instanceof G))return!1;return!0},resolvesToJustOneViableAlt:function(t){return Cu.getSingleViableAlt(t)},allSubsetsConflict:function(t){return!Cu.hasNonConflictingAltSet(t)},hasNonConflictingAltSet:function(t){for(var e=0;e<t.length;e++)if(1===t[e].length)return!0;return!1},hasConflictingAltSet:function(t){for(var e=0;e<t.length;e++)if(t[e].length>1)return!0;return!1},allSubsetsEqual:function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n];if(null===e)e=r;else if(r!==e)return!1}return!0},getUniqueAlt:function(t){var e=Cu.getAlts(t);return 1===e.length?e.minValue():Ie.INVALID_ALT_NUMBER},getAlts:function(t){var e=new ke;return t.map((function(t){e.or(t)})),e},getConflictingAltSubsets:function(t){var e=new we;return e.hashFunction=function(t){a.hashStuff(t.state.stateNumber,t.context)},e.equalsFunction=function(t,e){return t.state.stateNumber===e.state.stateNumber&&t.context.equals(e.context)},t.items.map((function(t){var n=e.get(t);null===n&&(n=new ke,e.set(t,n)),n.add(t.alt)})),e.getValues()},getStateToAltMap:function(t){var e=new Ru;return t.items.map((function(t){var n=e.get(t.state);null===n&&(n=new ke,e.set(t.state,n)),n.add(t.alt)})),e},hasStateAssociatedWithOneAlt:function(t){for(var e=Cu.getStateToAltMap(t).values(),n=0;n<e.length;n++)if(1===e[n].length)return!0;return!1},getSingleViableAlt:function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n].minValue();if(null===e)e=r;else if(e!==r)return Ie.INVALID_ALT_NUMBER}return e}};const Au=Cu;function Nu(t){return Nu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nu(t)}function Iu(t,e){return Iu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Iu(t,e)}function Lu(t){return Lu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Lu(t)}var Du=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Iu(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Lu(n);if(r){var o=Lu(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Nu(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e,n,r,u,c){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),c=c||t._ctx,r=r||t.getCurrentToken(),n=n||t.getCurrentToken(),e=e||t.getInputStream(),(a=o.call(this,{message:"",recognizer:t,input:e,ctx:c})).deadEndConfigs=u,a.startToken=n,a.offendingToken=r,a}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ji);function Fu(t){return Fu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fu(t)}function Bu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Fu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Fu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Fu(o)?o:String(o)),r)}var o}var Mu=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.defaultMapCtor=e||we,this.cacheMap=new this.defaultMapCtor}var e,n;return e=t,(n=[{key:"get",value:function(t,e){var n=this.cacheMap.get(t)||null;return null===n?null:n.get(e)||null}},{key:"set",value:function(t,e,n){var r=this.cacheMap.get(t)||null;null===r&&(r=new this.defaultMapCtor,this.cacheMap.set(t,r)),r.set(e,n)}}])&&Bu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Uu(t){return Uu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uu(t)}function Vu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Uu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Uu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Uu(o)?o:String(o)),r)}var o}function qu(t,e){return qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},qu(t,e)}function Hu(t){return Hu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hu(t)}var zu=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&qu(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Hu(r);if(i){var n=Hu(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Uu(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=u.call(this,e,r)).parser=t,o.decisionToDFA=n,o.predictionMode=Au.LL,o._input=null,o._startIndex=0,o._outerContext=null,o._dfa=null,o.mergeCache=null,o.debug=!1,o.debug_closure=!1,o.debug_add=!1,o.trace_atn_sim=!1,o.dfa_debug=!1,o.retry_debug=!1,o}return e=c,n=[{key:"reset",value:function(){}},{key:"adaptivePredict",value:function(t,e,n){(this.debug||this.trace_atn_sim)&&console.log("adaptivePredict decision "+e+" exec LA(1)=="+this.getLookaheadName(t)+" line "+t.LT(1).line+":"+t.LT(1).column),this._input=t,this._startIndex=t.index,this._outerContext=n;var r=this.decisionToDFA[e];this._dfa=r;var o=t.mark(),i=t.index;try{var u;if(null===(u=r.precedenceDfa?r.getPrecedenceStartState(this.parser.getPrecedence()):r.s0)){null===n&&(n=Zt.EMPTY),this.debug&&console.log("predictATN decision "+r.decision+" exec LA(1)=="+this.getLookaheadName(t)+", outerContext="+n.toString(this.parser.ruleNames));var c=this.computeStartState(r.atnStartState,Zt.EMPTY,!1);r.precedenceDfa?(r.s0.configs=c,c=this.applyPrecedenceFilter(c),u=this.addDFAState(r,new Ki(null,c)),r.setPrecedenceStartState(this.parser.getPrecedence(),u)):(u=this.addDFAState(r,new Ki(null,c)),r.s0=u)}var a=this.execATN(r,u,t,i,n);return this.debug&&console.log("DFA after predictATN: "+r.toString(this.parser.literalNames,this.parser.symbolicNames)),a}finally{this._dfa=null,this.mergeCache=null,t.seek(i),t.release(o)}}},{key:"execATN",value:function(t,e,n,r,i){var u;(this.debug||this.trace_atn_sim)&&console.log("execATN decision "+t.decision+", DFA state "+e+", LA(1)=="+this.getLookaheadName(n)+" line "+n.LT(1).line+":"+n.LT(1).column);var c=e;this.debug&&console.log("s0 = "+e);for(var a=n.LA(1);;){var l=this.getExistingTargetState(c,a);if(null===l&&(l=this.computeTargetState(t,c,a)),l===Xi.ERROR){var s=this.noViableAlt(n,i,c.configs,r);if(n.seek(r),(u=this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(c.configs,i))!==Ie.INVALID_ALT_NUMBER)return u;throw s}if(l.requiresFullContext&&this.predictionMode!==Au.SLL){var f=null;if(null!==l.predicates){this.debug&&console.log("DFA state has preds in DFA sim LL failover");var p=n.index;if(p!==r&&n.seek(r),1===(f=this.evalSemanticContext(l.predicates,i,!0)).length)return this.debug&&console.log("Full LL avoided"),f.minValue();p!==r&&n.seek(p)}this.dfa_debug&&console.log("ctx sensitive state "+i+" in "+l);var y=this.computeStartState(t.atnStartState,i,!0);return this.reportAttemptingFullContext(t,f,l.configs,r,n.index),this.execATNWithFullContext(t,l,y,n,r,i)}if(l.isAcceptState){if(null===l.predicates)return l.prediction;var h=n.index;n.seek(r);var b=this.evalSemanticContext(l.predicates,i,!0);if(0===b.length)throw this.noViableAlt(n,i,l.configs,r);return 1===b.length||this.reportAmbiguity(t,l,r,h,!1,b,l.configs),b.minValue()}c=l,a!==o.EOF&&(n.consume(),a=n.LA(1))}}},{key:"getExistingTargetState",value:function(t,e){var n=t.edges;return null===n?null:n[e+1]||null}},{key:"computeTargetState",value:function(t,e,n){var r=this.computeReachSet(e.configs,n,!1);if(null===r)return this.addDFAEdge(t,e,n,Xi.ERROR),Xi.ERROR;var o=new Ki(null,r),i=this.getUniqueAlt(r);if(this.debug){var u=Au.getConflictingAltSubsets(r);console.log("SLL altSubSets="+p(u)+", configs="+r+", predict="+i+", allSubsetsConflict="+Au.allSubsetsConflict(u)+", conflictingAlts="+this.getConflictingAlts(r))}return i!==Ie.INVALID_ALT_NUMBER?(o.isAcceptState=!0,o.configs.uniqueAlt=i,o.prediction=i):Au.hasSLLConflictTerminatingPrediction(this.predictionMode,r)&&(o.configs.conflictingAlts=this.getConflictingAlts(r),o.requiresFullContext=!0,o.isAcceptState=!0,o.prediction=o.configs.conflictingAlts.minValue()),o.isAcceptState&&o.configs.hasSemanticContext&&(this.predicateDFAState(o,this.atn.getDecisionState(t.decision)),null!==o.predicates&&(o.prediction=Ie.INVALID_ALT_NUMBER)),this.addDFAEdge(t,e,n,o)}},{key:"predicateDFAState",value:function(t,e){var n=e.transitions.length,r=this.getConflictingAltsOrUniqueAlt(t.configs),o=this.getPredsForAmbigAlts(r,t.configs,n);null!==o?(t.predicates=this.getPredicatePredictions(r,o),t.prediction=Ie.INVALID_ALT_NUMBER):t.prediction=r.minValue()}},{key:"execATNWithFullContext",value:function(t,e,n,r,i,u){(this.debug||this.trace_atn_sim)&&console.log("execATNWithFullContext "+n);var c,a=!1,l=n;r.seek(i);for(var s=r.LA(1),f=-1;;){if(null===(c=this.computeReachSet(l,s,!0))){var p=this.noViableAlt(r,u,l,i);r.seek(i);var y=this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(l,u);if(y!==Ie.INVALID_ALT_NUMBER)return y;throw p}var h=Au.getConflictingAltSubsets(c);if(this.debug&&console.log("LL altSubSets="+h+", predict="+Au.getUniqueAlt(h)+", resolvesToJustOneViableAlt="+Au.resolvesToJustOneViableAlt(h)),c.uniqueAlt=this.getUniqueAlt(c),c.uniqueAlt!==Ie.INVALID_ALT_NUMBER){f=c.uniqueAlt;break}if(this.predictionMode!==Au.LL_EXACT_AMBIG_DETECTION){if((f=Au.resolvesToJustOneViableAlt(h))!==Ie.INVALID_ALT_NUMBER)break}else if(Au.allSubsetsConflict(h)&&Au.allSubsetsEqual(h)){a=!0,f=Au.getSingleViableAlt(h);break}l=c,s!==o.EOF&&(r.consume(),s=r.LA(1))}return c.uniqueAlt!==Ie.INVALID_ALT_NUMBER?(this.reportContextSensitivity(t,f,c,i,r.index),f):(this.reportAmbiguity(t,e,i,r.index,a,null,c),f)}},{key:"computeReachSet",value:function(t,e,n){this.debug&&console.log("in computeReachSet, starting closure: "+t),null===this.mergeCache&&(this.mergeCache=new Mu);for(var r=new Hi(n),i=null,u=0;u<t.items.length;u++){var c=t.items[u];if(this.debug&&console.log("testing "+this.getTokenName(e)+" at "+c),c.state instanceof G)(n||e===o.EOF)&&(null===i&&(i=[]),i.push(c),this.debug_add&&console.log("added "+c+" to skippedStopStates"));else for(var a=0;a<c.state.transitions.length;a++){var l=c.state.transitions[a],s=this.getReachableTarget(l,e);if(null!==s){var f=new A({state:s},c);r.add(f,this.mergeCache),this.debug_add&&console.log("added "+f+" to intermediate")}}}var p=null;if(null===i&&e!==o.EOF&&(1===r.items.length||this.getUniqueAlt(r)!==Ie.INVALID_ALT_NUMBER)&&(p=r),null===p){p=new Hi(n);for(var y=new v,h=e===o.EOF,b=0;b<r.items.length;b++)this.closure(r.items[b],p,y,!1,n,h)}if(e===o.EOF&&(p=this.removeAllConfigsNotInRuleStopState(p,p===r)),!(null===i||n&&Au.hasConfigInRuleStopState(p)))for(var d=0;d<i.length;d++)p.add(i[d],this.mergeCache);return this.trace_atn_sim&&console.log("computeReachSet "+t+" -> "+p),0===p.items.length?null:p}},{key:"removeAllConfigsNotInRuleStopState",value:function(t,e){if(Au.allConfigsInRuleStopStates(t))return t;for(var n=new Hi(t.fullCtx),r=0;r<t.items.length;r++){var i=t.items[r];if(i.state instanceof G)n.add(i,this.mergeCache);else if(e&&i.state.epsilonOnlyTransitions&&this.atn.nextTokens(i.state).contains(o.EPSILON)){var u=this.atn.ruleToStopState[i.state.ruleIndex];n.add(new A({state:u},i),this.mergeCache)}}return n}},{key:"computeStartState",value:function(t,e,n){var r=_e(this.atn,e),o=new Hi(n);this.trace_atn_sim&&console.log("computeStartState from ATN state "+t+" initialContext="+r.toString(this.parser));for(var i=0;i<t.transitions.length;i++){var u=t.transitions[i].target,c=new A({state:u,alt:i+1,context:r},null),a=new v;this.closure(c,o,a,!0,n,!1)}return o}},{key:"applyPrecedenceFilter",value:function(t){for(var e,n=[],r=new Hi(t.fullCtx),o=0;o<t.items.length;o++)if(1===(e=t.items[o]).alt){var i=e.semanticContext.evalPrecedence(this.parser,this._outerContext);null!==i&&(n[e.state.stateNumber]=e.context,i!==e.semanticContext?r.add(new A({semanticContext:i},e),this.mergeCache):r.add(e,this.mergeCache))}for(var u=0;u<t.items.length;u++)if(1!==(e=t.items[u]).alt){if(!e.precedenceFilterSuppressed){var c=n[e.state.stateNumber]||null;if(null!==c&&c.equals(e.context))continue}r.add(e,this.mergeCache)}return r}},{key:"getReachableTarget",value:function(t,e){return t.matches(e,0,this.atn.maxTokenType)?t.target:null}},{key:"getPredsForAmbigAlts",value:function(t,e,n){for(var r=[],o=0;o<e.items.length;o++){var i=e.items[o];t.has(i.alt)&&(r[i.alt]=T.orContext(r[i.alt]||null,i.semanticContext))}for(var u=0,c=1;c<n+1;c++){var a=r[c]||null;null===a?r[c]=T.NONE:a!==T.NONE&&(u+=1)}return 0===u&&(r=null),this.debug&&console.log("getPredsForAmbigAlts result "+p(r)),r}},{key:"getPredicatePredictions",value:function(t,e){for(var n=[],r=!1,o=1;o<e.length;o++){var i=e[o];null!==t&&t.has(o)&&n.push(new ju(i,o)),i!==T.NONE&&(r=!0)}return r?n:null}},{key:"getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule",value:function(t,e){var n=this.splitAccordingToSemanticValidity(t,e),r=n[0],o=n[1],i=this.getAltThatFinishedDecisionEntryRule(r);return i!==Ie.INVALID_ALT_NUMBER||o.items.length>0&&(i=this.getAltThatFinishedDecisionEntryRule(o))!==Ie.INVALID_ALT_NUMBER?i:Ie.INVALID_ALT_NUMBER}},{key:"getAltThatFinishedDecisionEntryRule",value:function(t){for(var e=[],n=0;n<t.items.length;n++){var r=t.items[n];(r.reachesIntoOuterContext>0||r.state instanceof G&&r.context.hasEmptyPath())&&e.indexOf(r.alt)<0&&e.push(r.alt)}return 0===e.length?Ie.INVALID_ALT_NUMBER:Math.min.apply(null,e)}},{key:"splitAccordingToSemanticValidity",value:function(t,e){for(var n=new Hi(t.fullCtx),r=new Hi(t.fullCtx),o=0;o<t.items.length;o++){var i=t.items[o];i.semanticContext!==T.NONE?i.semanticContext.evaluate(this.parser,e)?n.add(i):r.add(i):n.add(i)}return[n,r]}},{key:"evalSemanticContext",value:function(t,e,n){for(var r=new ke,o=0;o<t.length;o++){var i=t[o];if(i.pred!==T.NONE){var u=i.pred.evaluate(this.parser,e);if((this.debug||this.dfa_debug)&&console.log("eval pred "+i+"="+u),u&&((this.debug||this.dfa_debug)&&console.log("PREDICT "+i.alt),r.add(i.alt),!n))break}else if(r.add(i.alt),!n)break}return r}},{key:"closure",value:function(t,e,n,r,o,i){this.closureCheckingStopState(t,e,n,r,o,0,i)}},{key:"closureCheckingStopState",value:function(t,e,n,r,o,i,u){if((this.trace_atn_sim||this.debug_closure)&&console.log("closure("+t.toString(this.parser,!0)+")"),t.state instanceof G){if(!t.context.isEmpty()){for(var c=0;c<t.context.length;c++)if(t.context.getReturnState(c)!==ee.EMPTY_RETURN_STATE){var a=this.atn.states[t.context.getReturnState(c)],l=t.context.getParent(c),s={state:a,alt:t.alt,context:l,semanticContext:t.semanticContext},f=new A(s,null);f.reachesIntoOuterContext=t.reachesIntoOuterContext,this.closureCheckingStopState(f,e,n,r,o,i-1,u)}else{if(o){e.add(new A({state:t.state,context:ee.EMPTY},t),this.mergeCache);continue}this.debug&&console.log("FALLING off rule "+this.getRuleName(t.state.ruleIndex)),this.closure_(t,e,n,r,o,i,u)}return}if(o)return void e.add(t,this.mergeCache);this.debug&&console.log("FALLING off rule "+this.getRuleName(t.state.ruleIndex))}this.closure_(t,e,n,r,o,i,u)}},{key:"closure_",value:function(t,e,n,r,o,i,u){var c=t.state;c.epsilonOnlyTransitions||e.add(t,this.mergeCache);for(var a=0;a<c.transitions.length;a++)if(0!==a||!this.canDropLoopEntryEdgeInLeftRecursiveRule(t)){var l=c.transitions[a],s=r&&!(l instanceof mr),f=this.getEpsilonTarget(t,l,s,0===i,o,u);if(null!==f){var p=i;if(t.state instanceof G){if(null!==this._dfa&&this._dfa.precedenceDfa&&l.outermostPrecedenceReturn===this._dfa.atnStartState.ruleIndex&&(f.precedenceFilterSuppressed=!0),f.reachesIntoOuterContext+=1,n.add(f)!==f)continue;e.dipsIntoOuterContext=!0,p-=1,this.debug&&console.log("dips into outer ctx: "+f)}else{if(!l.isEpsilon&&n.add(f)!==f)continue;l instanceof nt&&p>=0&&(p+=1)}this.closureCheckingStopState(f,e,n,s,o,p,u)}}}},{key:"canDropLoopEntryEdgeInLeftRecursiveRule",value:function(t){var e=t.state;if(e.stateType!==V.STAR_LOOP_ENTRY)return!1;if(e.stateType!==V.STAR_LOOP_ENTRY||!e.isPrecedenceDecision||t.context.isEmpty()||t.context.hasEmptyPath())return!1;for(var n=t.context.length,r=0;r<n;r++)if(this.atn.states[t.context.getReturnState(r)].ruleIndex!==e.ruleIndex)return!1;for(var o=e.transitions[0].target.endState.stateNumber,i=this.atn.states[o],u=0;u<n;u++){var c=t.context.getReturnState(u),a=this.atn.states[c];if(1!==a.transitions.length||!a.transitions[0].isEpsilon)return!1;var l=a.transitions[0].target;if(!(a.stateType===V.BLOCK_END&&l===e||a===i||l===i||l.stateType===V.BLOCK_END&&1===l.transitions.length&&l.transitions[0].isEpsilon&&l.transitions[0].target===e))return!1}return!0}},{key:"getRuleName",value:function(t){return null!==this.parser&&t>=0?this.parser.ruleNames[t]:"<rule "+t+">"}},{key:"getEpsilonTarget",value:function(t,e,n,r,i,u){switch(e.serializationType){case $.RULE:return this.ruleTransition(t,e);case $.PRECEDENCE:return this.precedenceTransition(t,e,n,r,i);case $.PREDICATE:return this.predTransition(t,e,n,r,i);case $.ACTION:return this.actionTransition(t,e);case $.EPSILON:return new A({state:e.target},t);case $.ATOM:case $.RANGE:case $.SET:return u&&e.matches(o.EOF,0,1)?new A({state:e.target},t):null;default:return null}}},{key:"actionTransition",value:function(t,e){if(this.debug){var n=-1===e.actionIndex?65535:e.actionIndex;console.log("ACTION edge "+e.ruleIndex+":"+n)}return new A({state:e.target},t)}},{key:"precedenceTransition",value:function(t,e,n,r,o){this.debug&&(console.log("PRED (collectPredicates="+n+") "+e.precedence+">=_p, ctx dependent=true"),null!==this.parser&&console.log("context surrounding pred is "+p(this.parser.getRuleInvocationStack())));var i=null;if(n&&r)if(o){var u=this._input.index;this._input.seek(this._startIndex);var c=e.getPredicate().evaluate(this.parser,this._outerContext);this._input.seek(u),c&&(i=new A({state:e.target},t))}else{var a=T.andContext(t.semanticContext,e.getPredicate());i=new A({state:e.target,semanticContext:a},t)}else i=new A({state:e.target},t);return this.debug&&console.log("config from pred transition="+i),i}},{key:"predTransition",value:function(t,e,n,r,o){this.debug&&(console.log("PRED (collectPredicates="+n+") "+e.ruleIndex+":"+e.predIndex+", ctx dependent="+e.isCtxDependent),null!==this.parser&&console.log("context surrounding pred is "+p(this.parser.getRuleInvocationStack())));var i=null;if(n&&(e.isCtxDependent&&r||!e.isCtxDependent))if(o){var u=this._input.index;this._input.seek(this._startIndex);var c=e.getPredicate().evaluate(this.parser,this._outerContext);this._input.seek(u),c&&(i=new A({state:e.target},t))}else{var a=T.andContext(t.semanticContext,e.getPredicate());i=new A({state:e.target,semanticContext:a},t)}else i=new A({state:e.target},t);return this.debug&&console.log("config from pred transition="+i),i}},{key:"ruleTransition",value:function(t,e){this.debug&&console.log("CALL rule "+this.getRuleName(e.target.ruleIndex)+", ctx="+t.context);var n=e.followState,r=ye.create(t.context,n.stateNumber);return new A({state:e.target,context:r},t)}},{key:"getConflictingAlts",value:function(t){var e=Au.getConflictingAltSubsets(t);return Au.getAlts(e)}},{key:"getConflictingAltsOrUniqueAlt",value:function(t){var e=null;return t.uniqueAlt!==Ie.INVALID_ALT_NUMBER?(e=new ke).add(t.uniqueAlt):e=t.conflictingAlts,e}},{key:"getTokenName",value:function(t){if(t===o.EOF)return"EOF";if(null!==this.parser&&null!==this.parser.literalNames){if(!(t>=this.parser.literalNames.length&&t>=this.parser.symbolicNames.length))return(this.parser.literalNames[t]||this.parser.symbolicNames[t])+"<"+t+">";console.log(t+" ttype out of range: "+this.parser.literalNames),console.log(""+this.parser.getInputStream().getTokens())}return""+t}},{key:"getLookaheadName",value:function(t){return this.getTokenName(t.LA(1))}},{key:"dumpDeadEndConfigs",value:function(t){console.log("dead end configs: ");for(var e=t.getDeadEndConfigs(),n=0;n<e.length;n++){var r=e[n],o="no edges";if(r.state.transitions.length>0){var i=r.state.transitions[0];i instanceof ar?o="Atom "+this.getTokenName(i.label):i instanceof ct&&(o=(i instanceof yt?"~":"")+"Set "+i.set)}console.error(r.toString(this.parser,!0)+":"+o)}}},{key:"noViableAlt",value:function(t,e,n,r){return new Du(this.parser,t,t.get(r),t.LT(1),n,e)}},{key:"getUniqueAlt",value:function(t){for(var e=Ie.INVALID_ALT_NUMBER,n=0;n<t.items.length;n++){var r=t.items[n];if(e===Ie.INVALID_ALT_NUMBER)e=r.alt;else if(r.alt!==e)return Ie.INVALID_ALT_NUMBER}return e}},{key:"addDFAEdge",value:function(t,e,n,r){if(this.debug&&console.log("EDGE "+e+" -> "+r+" upon "+this.getTokenName(n)),null===r)return null;if(r=this.addDFAState(t,r),null===e||n<-1||n>this.atn.maxTokenType)return r;if(null===e.edges&&(e.edges=[]),e.edges[n+1]=r,this.debug){var o=null===this.parser?null:this.parser.literalNames,i=null===this.parser?null:this.parser.symbolicNames;console.log("DFA=\n"+t.toString(o,i))}return r}},{key:"addDFAState",value:function(t,e){if(e===Xi.ERROR)return e;var n=t.states.get(e);return null!==n?(this.trace_atn_sim&&console.log("addDFAState "+e+" exists"),n):(e.stateNumber=t.states.length,e.configs.readOnly||(e.configs.optimizeConfigs(this),e.configs.setReadonly(!0)),this.trace_atn_sim&&console.log("addDFAState new "+e),t.states.add(e),this.debug&&console.log("adding new DFA state: "+e),e)}},{key:"reportAttemptingFullContext",value:function(t,e,n,r,o){if(this.debug||this.retry_debug){var i=new L(r,o+1);console.log("reportAttemptingFullContext decision="+t.decision+":"+n+", input="+this.parser.getTokenStream().getText(i))}null!==this.parser&&this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser,t,r,o,e,n)}},{key:"reportContextSensitivity",value:function(t,e,n,r,o){if(this.debug||this.retry_debug){var i=new L(r,o+1);console.log("reportContextSensitivity decision="+t.decision+":"+n+", input="+this.parser.getTokenStream().getText(i))}null!==this.parser&&this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser,t,r,o,e,n)}},{key:"reportAmbiguity",value:function(t,e,n,r,o,i,u){if(this.debug||this.retry_debug){var c=new L(n,r+1);console.log("reportAmbiguity "+i+":"+u+", input="+this.parser.getTokenStream().getText(c))}null!==this.parser&&this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser,t,n,r,o,i,u)}}],n&&Vu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(Xi);function Yu(t){return Yu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yu(t)}function Ku(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Yu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Yu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Yu(o)?o:String(o)),r)}var o}var Gu=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cache=new we}var e,n;return e=t,(n=[{key:"add",value:function(t){if(t===ee.EMPTY)return ee.EMPTY;var e=this.cache.get(t)||null;return null!==e?e:(this.cache.set(t,t),t)}},{key:"get",value:function(t){return this.cache.get(t)||null}},{key:"length",get:function(){return this.cache.length}}])&&Ku(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const Wu={ATN:Ie,ATNDeserializer:qo,LexerATNSimulator:Pu,ParserATNSimulator:zu,PredictionMode:Au,PredictionContextCache:Gu};function Xu(t){return Xu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xu(t)}function Ju(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Xu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Xu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Xu(o)?o:String(o)),r)}var o}var $u=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dfa=e,this.literalNames=n||[],this.symbolicNames=r||[]}var e,n;return e=t,(n=[{key:"toString",value:function(){if(null===this.dfa.s0)return null;for(var t="",e=this.dfa.sortedStates(),n=0;n<e.length;n++){var r=e[n];if(null!==r.edges)for(var o=r.edges.length,i=0;i<o;i++){var u=r.edges[i]||null;null!==u&&2147483647!==u.stateNumber&&(t=(t=(t=(t=(t=(t=t.concat(this.getStateString(r))).concat("-")).concat(this.getEdgeLabel(i))).concat("->")).concat(this.getStateString(u))).concat("\n"))}}return 0===t.length?null:t}},{key:"getEdgeLabel",value:function(t){return 0===t?"EOF":null!==this.literalNames||null!==this.symbolicNames?this.literalNames[t-1]||this.symbolicNames[t-1]:String.fromCharCode(t-1)}},{key:"getStateString",value:function(t){var e=(t.isAcceptState?":":"")+"s"+t.stateNumber+(t.requiresFullContext?"^":"");return t.isAcceptState?null!==t.predicates?e+"=>"+p(t.predicates):e+"=>"+t.prediction.toString():e}}])&&Ju(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Zu(t){return Zu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zu(t)}function Qu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Zu(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Zu(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Zu(o)?o:String(o)),r)}var o}function tc(t,e){return tc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},tc(t,e)}function ec(t){return ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ec(t)}var nc=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&tc(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ec(r);if(o){var n=ec(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Zu(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t,null)}return e=u,(n=[{key:"getEdgeLabel",value:function(t){return"'"+String.fromCharCode(t)+"'"}}])&&Qu(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}($u);function rc(t){return rc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rc(t)}function oc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==rc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==rc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===rc(o)?o:String(o)),r)}var o}var ic=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),void 0===n&&(n=0),this.atnStartState=e,this.decision=n,this._states=new v,this.s0=null,this.precedenceDfa=!1,e instanceof Mn&&e.isPrecedenceDecision){this.precedenceDfa=!0;var r=new Ki(null,new Hi);r.edges=[],r.isAcceptState=!1,r.requiresFullContext=!1,this.s0=r}}var e,n;return e=t,(n=[{key:"getPrecedenceStartState",value:function(t){if(!this.precedenceDfa)throw"Only precedence DFAs may contain a precedence start state.";return t<0||t>=this.s0.edges.length?null:this.s0.edges[t]||null}},{key:"setPrecedenceStartState",value:function(t,e){if(!this.precedenceDfa)throw"Only precedence DFAs may contain a precedence start state.";t<0||(this.s0.edges[t]=e)}},{key:"setPrecedenceDfa",value:function(t){if(this.precedenceDfa!==t){if(this._states=new v,t){var e=new Ki(null,new Hi);e.edges=[],e.isAcceptState=!1,e.requiresFullContext=!1,this.s0=e}else this.s0=null;this.precedenceDfa=t}}},{key:"sortedStates",value:function(){return this._states.values().sort((function(t,e){return t.stateNumber-e.stateNumber}))}},{key:"toString",value:function(t,e){return t=t||null,e=e||null,null===this.s0?"":new $u(this,t,e).toString()}},{key:"toLexerString",value:function(){return null===this.s0?"":new nc(this).toString()}},{key:"states",get:function(){return this._states}}])&&oc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const uc={DFA:ic,DFASerializer:$u,LexerDFASerializer:nc,PredPrediction:ju},cc={PredictionContext:ee},ac={Interval:L,IntervalSet:B};function lc(t){return lc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lc(t)}function sc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==lc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==lc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===lc(o)?o:String(o)),r)}var o}var fc=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"visitTerminal",value:function(t){}},{key:"visitErrorNode",value:function(t){}},{key:"enterEveryRule",value:function(t){}},{key:"exitEveryRule",value:function(t){}}])&&sc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function pc(t){return pc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pc(t)}function yc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==pc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==pc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===pc(o)?o:String(o)),r)}var o}var hc=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"visit",value:function(t){return Array.isArray(t)?t.map((function(t){return t.accept(this)}),this):t.accept(this)}},{key:"visitChildren",value:function(t){return t.children?this.visit(t.children):null}},{key:"visitTerminal",value:function(t){}},{key:"visitErrorNode",value:function(t){}}])&&yc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function bc(t){return bc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bc(t)}function vc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==bc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==bc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===bc(o)?o:String(o)),r)}var o}var dc=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"walk",value:function(t,e){if(e instanceof Yt||void 0!==e.isErrorNode&&e.isErrorNode())t.visitErrorNode(e);else if(e instanceof Vt)t.visitTerminal(e);else{this.enterRule(t,e);for(var n=0;n<e.getChildCount();n++){var r=e.getChild(n);this.walk(t,r)}this.exitRule(t,e)}}},{key:"enterRule",value:function(t,e){var n=e.ruleContext;t.enterEveryRule(n),n.enterRule(t)}},{key:"exitRule",value:function(t,e){var n=e.ruleContext;n.exitRule(t),t.exitEveryRule(n)}}])&&vc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();dc.DEFAULT=new dc;const mc={Trees:Gt,RuleNode:Ft,ErrorNode:Yt,TerminalNode:Vt,ParseTreeListener:fc,ParseTreeVisitor:hc,ParseTreeWalker:dc};function gc(t){return gc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gc(t)}function Sc(t,e){return Sc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Sc(t,e)}function Oc(t){return Oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Oc(t)}var wc=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Sc(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Oc(n);if(r){var o=Oc(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===gc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,{message:"",recognizer:t,input:t.getInputStream(),ctx:t._ctx})).offendingToken=t.getCurrentToken(),e}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ji);function _c(t){return _c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_c(t)}function Pc(t,e){return Pc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Pc(t,e)}function Tc(t){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tc(t)}var Ec=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Pc(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Tc(n);if(r){var o=Tc(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=o.call(this,{message:jc(e,n||null),recognizer:t,input:t.getInputStream(),ctx:t._ctx});var u=t._interp.atn.states[t.state].transitions[0];return u instanceof Nr?(r.ruleIndex=u.ruleIndex,r.predicateIndex=u.predIndex):(r.ruleIndex=0,r.predicateIndex=0),r.predicate=e,r.offendingToken=t.getCurrentToken(),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(ji);function jc(t,e){return null!==e?e:"failed predicate: {"+t+"}?"}function kc(t){return kc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kc(t)}function xc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==kc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==kc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===kc(o)?o:String(o)),r)}var o}function Rc(t,e){return Rc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Rc(t,e)}function Cc(t){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Cc(t)}var Ac=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Rc(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Cc(r);if(o){var n=Cc(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===kc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),t=t||!0,(e=i.call(this)).exactOnly=t,e}return e=u,n=[{key:"reportAmbiguity",value:function(t,e,n,r,o,i,u){if(!this.exactOnly||o){var c="reportAmbiguity d="+this.getDecisionDescription(t,e)+": ambigAlts="+this.getConflictingAlts(i,u)+", input='"+t.getTokenStream().getText(new L(n,r))+"'";t.notifyErrorListeners(c)}}},{key:"reportAttemptingFullContext",value:function(t,e,n,r,o,i){var u="reportAttemptingFullContext d="+this.getDecisionDescription(t,e)+", input='"+t.getTokenStream().getText(new L(n,r))+"'";t.notifyErrorListeners(u)}},{key:"reportContextSensitivity",value:function(t,e,n,r,o,i){var u="reportContextSensitivity d="+this.getDecisionDescription(t,e)+", input='"+t.getTokenStream().getText(new L(n,r))+"'";t.notifyErrorListeners(u)}},{key:"getDecisionDescription",value:function(t,e){var n=e.decision,r=e.atnStartState.ruleIndex,o=t.ruleNames;if(r<0||r>=o.length)return""+n;var i=o[r]||null;return null===i||0===i.length?""+n:"".concat(n," (").concat(i,")")}},{key:"getConflictingAlts",value:function(t,e){if(null!==t)return t;for(var n=new ke,r=0;r<e.items.length;r++)n.add(e.items[r].alt);return"{".concat(n.values().join(", "),"}")}}],n&&xc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Yo);function Nc(t){return Nc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nc(t)}function Ic(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Lc(t){var e="function"==typeof Map?new Map:void 0;return Lc=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return Dc(t,arguments,Mc(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Bc(r,t)},Lc(t)}function Dc(t,e,n){return Dc=Fc()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&Bc(o,n.prototype),o},Dc.apply(null,arguments)}function Fc(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function Bc(t,e){return Bc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Bc(t,e)}function Mc(t){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Mc(t)}var Uc=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Bc(t,e)}(i,t);var e,n,r,o=(n=i,r=Fc(),function(){var t,e=Mc(n);if(r){var o=Mc(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Nc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Ic(t)}(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),t=o.call(this),Error.captureStackTrace(Ic(t),i),t}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(Lc(Error));function Vc(t){return Vc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vc(t)}function qc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Vc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Vc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Vc(o)?o:String(o)),r)}var o}function Hc(t){return Hc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hc(t)}function zc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Hc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Hc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Hc(o)?o:String(o)),r)}var o}function Yc(t,e){return Yc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Yc(t,e)}function Kc(t){return Kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Kc(t)}var Gc=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Yc(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Kc(r);if(i){var n=Kc(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Hc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=u.call(this)).errorRecoveryMode=!1,t.lastErrorIndex=-1,t.lastErrorStates=null,t.nextTokensContext=null,t.nextTokenState=0,t}return e=c,n=[{key:"reset",value:function(t){this.endErrorCondition(t)}},{key:"beginErrorCondition",value:function(t){this.errorRecoveryMode=!0}},{key:"inErrorRecoveryMode",value:function(t){return this.errorRecoveryMode}},{key:"endErrorCondition",value:function(t){this.errorRecoveryMode=!1,this.lastErrorStates=null,this.lastErrorIndex=-1}},{key:"reportMatch",value:function(t){this.endErrorCondition(t)}},{key:"reportError",value:function(t,e){this.inErrorRecoveryMode(t)||(this.beginErrorCondition(t),e instanceof Du?this.reportNoViableAlternative(t,e):e instanceof wc?this.reportInputMismatch(t,e):e instanceof Ec?this.reportFailedPredicate(t,e):(console.log("unknown recognition error type: "+e.constructor.name),console.log(e.stack),t.notifyErrorListeners(e.getOffendingToken(),e.getMessage(),e)))}},{key:"recover",value:function(t,e){this.lastErrorIndex===t.getInputStream().index&&null!==this.lastErrorStates&&this.lastErrorStates.indexOf(t.state)>=0&&t.consume(),this.lastErrorIndex=t._input.index,null===this.lastErrorStates&&(this.lastErrorStates=[]),this.lastErrorStates.push(t.state);var n=this.getErrorRecoverySet(t);this.consumeUntil(t,n)}},{key:"sync",value:function(t){if(!this.inErrorRecoveryMode(t)){var e=t._interp.atn.states[t.state],n=t.getTokenStream().LA(1),r=t.atn.nextTokens(e);if(r.contains(n))return this.nextTokensContext=null,void(this.nextTokenState=V.INVALID_STATE_NUMBER);if(r.contains(o.EPSILON))null===this.nextTokensContext&&(this.nextTokensContext=t._ctx,this.nextTokensState=t._stateNumber);else switch(e.stateType){case V.BLOCK_START:case V.STAR_BLOCK_START:case V.PLUS_BLOCK_START:case V.STAR_LOOP_ENTRY:if(null!==this.singleTokenDeletion(t))return;throw new wc(t);case V.PLUS_LOOP_BACK:case V.STAR_LOOP_BACK:this.reportUnwantedToken(t);var i=new B;i.addSet(t.getExpectedTokens());var u=i.addSet(this.getErrorRecoverySet(t));this.consumeUntil(t,u)}}}},{key:"reportNoViableAlternative",value:function(t,e){var n,r=t.getTokenStream();n=null!==r?e.startToken.type===o.EOF?"<EOF>":r.getText(new L(e.startToken.tokenIndex,e.offendingToken.tokenIndex)):"<unknown input>";var i="no viable alternative at input "+this.escapeWSAndQuote(n);t.notifyErrorListeners(i,e.offendingToken,e)}},{key:"reportInputMismatch",value:function(t,e){var n="mismatched input "+this.getTokenErrorDisplay(e.offendingToken)+" expecting "+e.getExpectedTokens().toString(t.literalNames,t.symbolicNames);t.notifyErrorListeners(n,e.offendingToken,e)}},{key:"reportFailedPredicate",value:function(t,e){var n="rule "+t.ruleNames[t._ctx.ruleIndex]+" "+e.message;t.notifyErrorListeners(n,e.offendingToken,e)}},{key:"reportUnwantedToken",value:function(t){if(!this.inErrorRecoveryMode(t)){this.beginErrorCondition(t);var e=t.getCurrentToken(),n="extraneous input "+this.getTokenErrorDisplay(e)+" expecting "+this.getExpectedTokens(t).toString(t.literalNames,t.symbolicNames);t.notifyErrorListeners(n,e,null)}}},{key:"reportMissingToken",value:function(t){if(!this.inErrorRecoveryMode(t)){this.beginErrorCondition(t);var e=t.getCurrentToken(),n="missing "+this.getExpectedTokens(t).toString(t.literalNames,t.symbolicNames)+" at "+this.getTokenErrorDisplay(e);t.notifyErrorListeners(n,e,null)}}},{key:"recoverInline",value:function(t){var e=this.singleTokenDeletion(t);if(null!==e)return t.consume(),e;if(this.singleTokenInsertion(t))return this.getMissingSymbol(t);throw new wc(t)}},{key:"singleTokenInsertion",value:function(t){var e=t.getTokenStream().LA(1),n=t._interp.atn,r=n.states[t.state].transitions[0].target;return!!n.nextTokens(r,t._ctx).contains(e)&&(this.reportMissingToken(t),!0)}},{key:"singleTokenDeletion",value:function(t){var e=t.getTokenStream().LA(2);if(this.getExpectedTokens(t).contains(e)){this.reportUnwantedToken(t),t.consume();var n=t.getCurrentToken();return this.reportMatch(t),n}return null}},{key:"getMissingSymbol",value:function(t){var e,n=t.getCurrentToken(),r=this.getExpectedTokens(t).first();e=r===o.EOF?"<missing EOF>":"<missing "+t.literalNames[r]+">";var i=n,u=t.getTokenStream().LT(-1);return i.type===o.EOF&&null!==u&&(i=u),t.getTokenFactory().create(i.source,r,e,o.DEFAULT_CHANNEL,-1,-1,i.line,i.column)}},{key:"getExpectedTokens",value:function(t){return t.getExpectedTokens()}},{key:"getTokenErrorDisplay",value:function(t){if(null===t)return"<no token>";var e=t.text;return null===e&&(e=t.type===o.EOF?"<EOF>":"<"+t.type+">"),this.escapeWSAndQuote(e)}},{key:"escapeWSAndQuote",value:function(t){return"'"+(t=(t=(t=t.replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/\t/g,"\\t"))+"'"}},{key:"getErrorRecoverySet",value:function(t){for(var e=t._interp.atn,n=t._ctx,r=new B;null!==n&&n.invokingState>=0;){var i=e.states[n.invokingState].transitions[0],u=e.nextTokens(i.followState);r.addSet(u),n=n.parentCtx}return r.removeOne(o.EPSILON),r}},{key:"consumeUntil",value:function(t,e){for(var n=t.getTokenStream().LA(1);n!==o.EOF&&!e.contains(n);)t.consume(),n=t.getTokenStream().LA(1)}}],n&&zc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"reset",value:function(t){}},{key:"recoverInline",value:function(t){}},{key:"recover",value:function(t,e){}},{key:"sync",value:function(t){}},{key:"inErrorRecoveryMode",value:function(t){}},{key:"reportError",value:function(t){}}])&&qc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());function Wc(t){return Wc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wc(t)}function Xc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Wc(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Wc(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Wc(o)?o:String(o)),r)}var o}function Jc(t,e){return Jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Jc(t,e)}function $c(t){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$c(t)}var Zc=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Jc(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$c(r);if(o){var n=$c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Wc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this)}return e=u,n=[{key:"recover",value:function(t,e){for(var n=t._ctx;null!==n;)n.exception=e,n=n.parentCtx;throw new Uc(e)}},{key:"recoverInline",value:function(t){this.recover(t,new wc(t))}},{key:"sync",value:function(t){}}],n&&Xc(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Gc);const Qc={RecognitionException:ji,NoViableAltException:Du,LexerNoViableAltException:Ai,InputMismatchException:wc,FailedPredicateException:Ec,DiagnosticErrorListener:Ac,BailErrorStrategy:Zc,DefaultErrorStrategy:Gc,ErrorListener:Yo};var ta,ea;function na(t){return na="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(t)}function ra(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==na(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==na(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===na(o)?o:String(o)),r)}var o}String.prototype.codePointAt||(ea=function(t){if(null==this)throw TypeError();var e=String(this),n=e.length,r=t?Number(t):0;if(r!=r&&(r=0),!(r<0||r>=n)){var o,i=e.charCodeAt(r);return i>=55296&&i<=56319&&n>r+1&&(o=e.charCodeAt(r+1))>=56320&&o<=57343?1024*(i-55296)+o-56320+65536:i}},(ta=function(){var t;try{var e={},n=Object.defineProperty;t=n(e,e,e)&&n}catch(t){}return t}())?ta(String.prototype,"codePointAt",{value:ea,configurable:!0,writable:!0}):String.prototype.codePointAt=ea),String.prototype.codePointAt,String.fromCodePoint||function(){var t=function(){var t;try{var e={},n=Object.defineProperty;t=n(e,e,e)&&n}catch(t){}return t}(),e=String.fromCharCode,n=Math.floor,r=function(t){var r,o,i=[],u=-1,c=arguments.length;if(!c)return"";for(var a="";++u<c;){var l=Number(arguments[u]);if(!isFinite(l)||l<0||l>1114111||n(l)!==l)throw RangeError("Invalid code point: "+l);l<=65535?i.push(l):(r=55296+((l-=65536)>>10),o=l%1024+56320,i.push(r,o)),(u+1===c||i.length>16384)&&(a+=e.apply(null,i),i.length=0)}return a};t?t(String,"fromCodePoint",{value:r,configurable:!0,writable:!0}):String.fromCodePoint=r}(),String.prototype.fromCodePoint;var oa=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name="<empty>",this.strdata=e,this.decodeToUnicodeCodePoints=n||!1,this._index=0,this.data=[],this.decodeToUnicodeCodePoints)for(var r=0;r<this.strdata.length;){var o=this.strdata.codePointAt(r);this.data.push(o),r+=o<=65535?1:2}else{this.data=new Array(this.strdata.length);for(var i=0;i<this.strdata.length;i++)this.data[i]=this.strdata.charCodeAt(i)}this._size=this.data.length}var e,n;return e=t,(n=[{key:"reset",value:function(){this._index=0}},{key:"consume",value:function(){if(this._index>=this._size)throw"cannot consume EOF";this._index+=1}},{key:"LA",value:function(t){if(0===t)return 0;t<0&&(t+=1);var e=this._index+t-1;return e<0||e>=this._size?o.EOF:this.data[e]}},{key:"LT",value:function(t){return this.LA(t)}},{key:"mark",value:function(){return-1}},{key:"release",value:function(t){}},{key:"seek",value:function(t){t<=this._index?this._index=t:this._index=Math.min(t,this._size)}},{key:"getText",value:function(t,e){if(e>=this._size&&(e=this._size-1),t>=this._size)return"";if(this.decodeToUnicodeCodePoints){for(var n="",r=t;r<=e;r++)n+=String.fromCodePoint(this.data[r]);return n}return this.strdata.slice(t,e+1)}},{key:"toString",value:function(){return this.strdata}},{key:"index",get:function(){return this._index}},{key:"size",get:function(){return this._size}}])&&ra(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ia(t){return ia="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ia(t)}function ua(t,e){return ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ua(t,e)}function ca(t){return ca=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ca(t)}var aa=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ua(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ca(n);if(r){var o=ca(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===ia(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t,e)}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(oa),la=n(92);function sa(t){return sa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sa(t)}function fa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==sa(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==sa(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===sa(o)?o:String(o)),r)}var o}function pa(t,e){return pa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},pa(t,e)}function ya(t){return ya=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ya(t)}var ha="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node,ba=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&pa(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ya(r);if(o){var n=ya(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===sa(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),!ha)throw new Error("FileStream is only available when running in Node!");var o=la.readFileSync(t,e||"utf-8");return(r=i.call(this,o,n)).fileName=t,r}return e=u,n=[{key:"fromPath",value:function(t,e,n){if(!ha)throw new Error("FileStream is only available when running in Node!");la.readFile(t,e,(function(t,e){var r=null;null!==e&&(r=new oa(e,!0)),n(t,r)}))}}],null&&0,n&&fa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(aa);const va={fromString:function(t){return new oa(t,!0)},fromBlob:function(t,e,n,r){var o=new window.FileReader;o.onload=function(t){var e=new oa(t.target.result,!0);n(e)},o.onerror=r,o.readAsText(t,e)},fromBuffer:function(t,e){return new oa(t.toString(e),!0)},fromPath:function(t,e,n){ba.fromPath(t,e,n)},fromPathSync:function(t,e){return new ba(t,e)}},da={arrayToString:p,stringToCharArray:function(t){for(var e=new Uint16Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}};function ma(t){return ma="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ma(t)}function ga(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ma(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==ma(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===ma(o)?o:String(o)),r)}var o}function Sa(t,e,n){return e&&ga(t.prototype,e),n&&ga(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Oa(t){return Oa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oa(t)}function wa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Oa(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Oa(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Oa(o)?o:String(o)),r)}var o}function _a(t,e){return _a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_a(t,e)}function Pa(t){return Pa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Pa(t)}var Ta=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_a(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Pa(r);if(i){var n=Pa(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Oa(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this)).tokenSource=t,e.tokens=[],e.index=-1,e.fetchedEOF=!1,e}return e=c,(n=[{key:"mark",value:function(){return 0}},{key:"release",value:function(t){}},{key:"reset",value:function(){this.seek(0)}},{key:"seek",value:function(t){this.lazyInit(),this.index=this.adjustSeekIndex(t)}},{key:"get",value:function(t){return this.lazyInit(),this.tokens[t]}},{key:"consume",value:function(){if(!(this.index>=0&&(this.fetchedEOF?this.index<this.tokens.length-1:this.index<this.tokens.length))&&this.LA(1)===o.EOF)throw"cannot consume EOF";this.sync(this.index+1)&&(this.index=this.adjustSeekIndex(this.index+1))}},{key:"sync",value:function(t){var e=t-this.tokens.length+1;return!(e>0)||this.fetch(e)>=e}},{key:"fetch",value:function(t){if(this.fetchedEOF)return 0;for(var e=0;e<t;e++){var n=this.tokenSource.nextToken();if(n.tokenIndex=this.tokens.length,this.tokens.push(n),n.type===o.EOF)return this.fetchedEOF=!0,e+1}return t}},{key:"getTokens",value:function(t,e,n){if(void 0===n&&(n=null),t<0||e<0)return null;this.lazyInit();var r=[];e>=this.tokens.length&&(e=this.tokens.length-1);for(var i=t;i<e;i++){var u=this.tokens[i];if(u.type===o.EOF)break;(null===n||n.contains(u.type))&&r.push(u)}return r}},{key:"LA",value:function(t){return this.LT(t).type}},{key:"LB",value:function(t){return this.index-t<0?null:this.tokens[this.index-t]}},{key:"LT",value:function(t){if(this.lazyInit(),0===t)return null;if(t<0)return this.LB(-t);var e=this.index+t-1;return this.sync(e),e>=this.tokens.length?this.tokens[this.tokens.length-1]:this.tokens[e]}},{key:"adjustSeekIndex",value:function(t){return t}},{key:"lazyInit",value:function(){-1===this.index&&this.setup()}},{key:"setup",value:function(){this.sync(0),this.index=this.adjustSeekIndex(0)}},{key:"setTokenSource",value:function(t){this.tokenSource=t,this.tokens=[],this.index=-1,this.fetchedEOF=!1}},{key:"nextTokenOnChannel",value:function(t,e){if(this.sync(t),t>=this.tokens.length)return-1;for(var n=this.tokens[t];n.channel!==this.channel;){if(n.type===o.EOF)return-1;t+=1,this.sync(t),n=this.tokens[t]}return t}},{key:"previousTokenOnChannel",value:function(t,e){for(;t>=0&&this.tokens[t].channel!==e;)t-=1;return t}},{key:"getHiddenTokensToRight",value:function(t,e){if(void 0===e&&(e=-1),this.lazyInit(),t<0||t>=this.tokens.length)throw t+" not in 0.."+this.tokens.length-1;var n=this.nextTokenOnChannel(t+1,Bi.DEFAULT_TOKEN_CHANNEL),r=t+1,o=-1===n?this.tokens.length-1:n;return this.filterForChannel(r,o,e)}},{key:"getHiddenTokensToLeft",value:function(t,e){if(void 0===e&&(e=-1),this.lazyInit(),t<0||t>=this.tokens.length)throw t+" not in 0.."+this.tokens.length-1;var n=this.previousTokenOnChannel(t-1,Bi.DEFAULT_TOKEN_CHANNEL);if(n===t-1)return null;var r=n+1,o=t-1;return this.filterForChannel(r,o,e)}},{key:"filterForChannel",value:function(t,e,n){for(var r=[],o=t;o<e+1;o++){var i=this.tokens[o];-1===n?i.channel!==Bi.DEFAULT_TOKEN_CHANNEL&&r.push(i):i.channel===n&&r.push(i)}return 0===r.length?null:r}},{key:"getSourceName",value:function(){return this.tokenSource.getSourceName()}},{key:"getText",value:function(t){this.lazyInit(),this.fill(),t||(t=new L(0,this.tokens.length-1));var e=t.start;e instanceof o&&(e=e.tokenIndex);var n=t.stop;if(n instanceof o&&(n=n.tokenIndex),null===e||null===n||e<0||n<0)return"";n>=this.tokens.length&&(n=this.tokens.length-1);for(var r="",i=e;i<n+1;i++){var u=this.tokens[i];if(u.type===o.EOF)break;r+=u.text}return r}},{key:"fill",value:function(){for(this.lazyInit();1e3===this.fetch(1e3););}}])&&wa(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(Sa((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)})));function Ea(t){return Ea="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(t)}function ja(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ea(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ea(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ea(o)?o:String(o)),r)}var o}function ka(t,e){return ka=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ka(t,e)}function xa(t){return xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xa(t)}Object.defineProperty(Ta,"size",{get:function(){return this.tokens.length}});var Ra=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ka(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=xa(r);if(i){var n=xa(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ea(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=u.call(this,t)).channel=void 0===e?o.DEFAULT_CHANNEL:e,n}return e=c,(n=[{key:"adjustSeekIndex",value:function(t){return this.nextTokenOnChannel(t,this.channel)}},{key:"LB",value:function(t){if(0===t||this.index-t<0)return null;for(var e=this.index,n=1;n<=t;)e=this.previousTokenOnChannel(e-1,this.channel),n+=1;return e<0?null:this.tokens[e]}},{key:"LT",value:function(t){if(this.lazyInit(),0===t)return null;if(t<0)return this.LB(-t);for(var e=this.index,n=1;n<t;)this.sync(e+1)&&(e=this.nextTokenOnChannel(e+1,this.channel)),n+=1;return this.tokens[e]}},{key:"getNumberOfOnChannelTokens",value:function(){var t=0;this.fill();for(var e=0;e<this.tokens.length;e++){var n=this.tokens[e];if(n.channel===this.channel&&(t+=1),n.type===o.EOF)break}return t}}])&&ja(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(Ta);function Ca(t){return Ca="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(t)}function Aa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ca(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ca(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ca(o)?o:String(o)),r)}var o}function Na(t,e){return Na=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Na(t,e)}function Ia(t){return Ia=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ia(t)}var La=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Na(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ia(r);if(o){var n=Ia(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ca(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).parser=t,e}return e=u,(n=[{key:"enterEveryRule",value:function(t){console.log("enter   "+this.parser.ruleNames[t.ruleIndex]+", LT(1)="+this.parser._input.LT(1).text)}},{key:"visitTerminal",value:function(t){console.log("consume "+t.symbol+" rule "+this.parser.ruleNames[this.parser._ctx.ruleIndex])}},{key:"exitEveryRule",value:function(t){console.log("exit    "+this.parser.ruleNames[t.ruleIndex]+", LT(1)="+this.parser._input.LT(1).text)}}])&&Aa(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(fc);function Da(t){return Da="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Da(t)}function Fa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Da(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Da(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Da(o)?o:String(o)),r)}var o}function Ba(t,e){return Ba=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ba(t,e)}function Ma(t){return Ma=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ma(t)}var Ua=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ba(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ma(r);if(i){var n=Ma(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Da(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this))._input=null,e._errHandler=new Gc,e._precedenceStack=[],e._precedenceStack.push(0),e._ctx=null,e.buildParseTrees=!0,e._tracer=null,e._parseListeners=null,e._syntaxErrors=0,e.setInputStream(t),e}return e=c,n=[{key:"reset",value:function(){null!==this._input&&this._input.seek(0),this._errHandler.reset(this),this._ctx=null,this._syntaxErrors=0,this.setTrace(!1),this._precedenceStack=[],this._precedenceStack.push(0),null!==this._interp&&this._interp.reset()}},{key:"match",value:function(t){var e=this.getCurrentToken();return e.type===t?(this._errHandler.reportMatch(this),this.consume()):(e=this._errHandler.recoverInline(this),this.buildParseTrees&&-1===e.tokenIndex&&this._ctx.addErrorNode(e)),e}},{key:"matchWildcard",value:function(){var t=this.getCurrentToken();return t.type>0?(this._errHandler.reportMatch(this),this.consume()):(t=this._errHandler.recoverInline(this),this.buildParseTrees&&-1===t.tokenIndex&&this._ctx.addErrorNode(t)),t}},{key:"getParseListeners",value:function(){return this._parseListeners||[]}},{key:"addParseListener",value:function(t){if(null===t)throw"listener";null===this._parseListeners&&(this._parseListeners=[]),this._parseListeners.push(t)}},{key:"removeParseListener",value:function(t){if(null!==this._parseListeners){var e=this._parseListeners.indexOf(t);e>=0&&this._parseListeners.splice(e,1),0===this._parseListeners.length&&(this._parseListeners=null)}}},{key:"removeParseListeners",value:function(){this._parseListeners=null}},{key:"triggerEnterRuleEvent",value:function(){if(null!==this._parseListeners){var t=this._ctx;this._parseListeners.forEach((function(e){e.enterEveryRule(t),t.enterRule(e)}))}}},{key:"triggerExitRuleEvent",value:function(){if(null!==this._parseListeners){var t=this._ctx;this._parseListeners.slice(0).reverse().forEach((function(e){t.exitRule(e),e.exitEveryRule(t)}))}}},{key:"getTokenFactory",value:function(){return this._input.tokenSource._factory}},{key:"setTokenFactory",value:function(t){this._input.tokenSource._factory=t}},{key:"getATNWithBypassAlts",value:function(){var t=this.getSerializedATN();if(null===t)throw"The current parser does not support an ATN with bypass alternatives.";var e=this.bypassAltsAtnCache[t];if(null===e){var n=new Gr;n.generateRuleBypassTransitions=!0,e=new qo(n).deserialize(t),this.bypassAltsAtnCache[t]=e}return e}},{key:"getInputStream",value:function(){return this.getTokenStream()}},{key:"setInputStream",value:function(t){this.setTokenStream(t)}},{key:"getTokenStream",value:function(){return this._input}},{key:"setTokenStream",value:function(t){this._input=null,this.reset(),this._input=t}},{key:"getCurrentToken",value:function(){return this._input.LT(1)}},{key:"notifyErrorListeners",value:function(t,e,n){n=n||null,null===(e=e||null)&&(e=this.getCurrentToken()),this._syntaxErrors+=1;var r=e.line,o=e.column;this.getErrorListenerDispatch().syntaxError(this,e,r,o,t,n)}},{key:"consume",value:function(){var t=this.getCurrentToken();t.type!==o.EOF&&this.getInputStream().consume();var e,n=null!==this._parseListeners&&this._parseListeners.length>0;return(this.buildParseTrees||n)&&((e=this._errHandler.inErrorRecoveryMode(this)?this._ctx.addErrorNode(t):this._ctx.addTokenNode(t)).invokingState=this.state,n&&this._parseListeners.forEach((function(t){e instanceof Yt||void 0!==e.isErrorNode&&e.isErrorNode()?t.visitErrorNode(e):e instanceof Vt&&t.visitTerminal(e)}))),t}},{key:"addContextToParseTree",value:function(){null!==this._ctx.parentCtx&&this._ctx.parentCtx.addChild(this._ctx)}},{key:"enterRule",value:function(t,e,n){this.state=e,this._ctx=t,this._ctx.start=this._input.LT(1),this.buildParseTrees&&this.addContextToParseTree(),this.triggerEnterRuleEvent()}},{key:"exitRule",value:function(){this._ctx.stop=this._input.LT(-1),this.triggerExitRuleEvent(),this.state=this._ctx.invokingState,this._ctx=this._ctx.parentCtx}},{key:"enterOuterAlt",value:function(t,e){t.setAltNumber(e),this.buildParseTrees&&this._ctx!==t&&null!==this._ctx.parentCtx&&(this._ctx.parentCtx.removeLastChild(),this._ctx.parentCtx.addChild(t)),this._ctx=t}},{key:"getPrecedence",value:function(){return 0===this._precedenceStack.length?-1:this._precedenceStack[this._precedenceStack.length-1]}},{key:"enterRecursionRule",value:function(t,e,n,r){this.state=e,this._precedenceStack.push(r),this._ctx=t,this._ctx.start=this._input.LT(1),this.triggerEnterRuleEvent()}},{key:"pushNewRecursionContext",value:function(t,e,n){var r=this._ctx;r.parentCtx=t,r.invokingState=e,r.stop=this._input.LT(-1),this._ctx=t,this._ctx.start=r.start,this.buildParseTrees&&this._ctx.addChild(r),this.triggerEnterRuleEvent()}},{key:"unrollRecursionContexts",value:function(t){this._precedenceStack.pop(),this._ctx.stop=this._input.LT(-1);var e=this._ctx,n=this.getParseListeners();if(null!==n&&n.length>0)for(;this._ctx!==t;)this.triggerExitRuleEvent(),this._ctx=this._ctx.parentCtx;else this._ctx=t;e.parentCtx=t,this.buildParseTrees&&null!==t&&t.addChild(e)}},{key:"getInvokingContext",value:function(t){for(var e=this._ctx;null!==e;){if(e.ruleIndex===t)return e;e=e.parentCtx}return null}},{key:"precpred",value:function(t,e){return e>=this._precedenceStack[this._precedenceStack.length-1]}},{key:"inContext",value:function(t){return!1}},{key:"isExpectedToken",value:function(t){var e=this._interp.atn,n=this._ctx,r=e.states[this.state],i=e.nextTokens(r);if(i.contains(t))return!0;if(!i.contains(o.EPSILON))return!1;for(;null!==n&&n.invokingState>=0&&i.contains(o.EPSILON);){var u=e.states[n.invokingState].transitions[0];if((i=e.nextTokens(u.followState)).contains(t))return!0;n=n.parentCtx}return!(!i.contains(o.EPSILON)||t!==o.EOF)}},{key:"getExpectedTokens",value:function(){return this._interp.atn.getExpectedTokens(this.state,this._ctx)}},{key:"getExpectedTokensWithinCurrentRule",value:function(){var t=this._interp.atn,e=t.states[this.state];return t.nextTokens(e)}},{key:"getRuleIndex",value:function(t){var e=this.getRuleIndexMap()[t];return null!==e?e:-1}},{key:"getRuleInvocationStack",value:function(t){null===(t=t||null)&&(t=this._ctx);for(var e=[];null!==t;){var n=t.ruleIndex;n<0?e.push("n/a"):e.push(this.ruleNames[n]),t=t.parentCtx}return e}},{key:"getDFAStrings",value:function(){return this._interp.decisionToDFA.toString()}},{key:"dumpDFA",value:function(){for(var t=!1,e=0;e<this._interp.decisionToDFA.length;e++){var n=this._interp.decisionToDFA[e];n.states.length>0&&(t&&console.log(),this.printer.println("Decision "+n.decision+":"),this.printer.print(n.toString(this.literalNames,this.symbolicNames)),t=!0)}}},{key:"getSourceName",value:function(){return this._input.sourceName}},{key:"setTrace",value:function(t){t?(null!==this._tracer&&this.removeParseListener(this._tracer),this._tracer=new La(this),this.addParseListener(this._tracer)):(this.removeParseListener(this._tracer),this._tracer=null)}}],n&&Fa(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(ui);function Va(t){return Va="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Va(t)}function qa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Va(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Va(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Va(o)?o:String(o)),r)}var o}function Ha(t,e){return Ha=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ha(t,e)}function za(t){return za=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},za(t)}Ua.bypassAltsAtnCache={};var Ya=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ha(t,e)}(c,t);var e,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=za(r);if(i){var n=za(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Va(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this)).parentCtx=null,e.symbol=t,e}return e=c,(n=[{key:"getChild",value:function(t){return null}},{key:"getSymbol",value:function(){return this.symbol}},{key:"getParent",value:function(){return this.parentCtx}},{key:"getPayload",value:function(){return this.symbol}},{key:"getSourceInterval",value:function(){if(null===this.symbol)return L.INVALID_INTERVAL;var t=this.symbol.tokenIndex;return new L(t,t)}},{key:"getChildCount",value:function(){return 0}},{key:"accept",value:function(t){return t.visitTerminal(this)}},{key:"getText",value:function(){return this.symbol.text}},{key:"toString",value:function(){return this.symbol.type===o.EOF?"<EOF>":this.symbol.text}}])&&qa(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(Vt);function Ka(t){return Ka="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ka(t)}function Ga(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Ka(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Ka(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Ka(o)?o:String(o)),r)}var o}function Wa(t,e){return Wa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Wa(t,e)}function Xa(t){return Xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xa(t)}var Ja=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Wa(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Xa(r);if(o){var n=Xa(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Ka(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"isErrorNode",value:function(){return!0}},{key:"accept",value:function(t){return t.visitErrorNode(this)}}])&&Ga(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Ya);function $a(t){return $a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$a(t)}function Za(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$a(o)?o:String(o)),r)}var o}function Qa(t,e){return Qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Qa(t,e)}function tl(t){return tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},tl(t)}var el=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qa(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=tl(r);if(o){var n=tl(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===$a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e)).children=null,n.start=null,n.stop=null,n.exception=null,n}return e=u,(n=[{key:"copyFrom",value:function(t){this.parentCtx=t.parentCtx,this.invokingState=t.invokingState,this.children=null,this.start=t.start,this.stop=t.stop,t.children&&(this.children=[],t.children.map((function(t){t instanceof Ja&&(this.children.push(t),t.parentCtx=this)}),this))}},{key:"enterRule",value:function(t){}},{key:"exitRule",value:function(t){}},{key:"addChild",value:function(t){return null===this.children&&(this.children=[]),this.children.push(t),t}},{key:"removeLastChild",value:function(){null!==this.children&&this.children.pop()}},{key:"addTokenNode",value:function(t){var e=new Ya(t);return this.addChild(e),e.parentCtx=this,e}},{key:"addErrorNode",value:function(t){var e=new Ja(t);return this.addChild(e),e.parentCtx=this,e}},{key:"getChild",value:function(t,e){if(e=e||null,null===this.children||t<0||t>=this.children.length)return null;if(null===e)return this.children[t];for(var n=0;n<this.children.length;n++){var r=this.children[n];if(r instanceof e){if(0===t)return r;t-=1}}return null}},{key:"getToken",value:function(t,e){if(null===this.children||e<0||e>=this.children.length)return null;for(var n=0;n<this.children.length;n++){var r=this.children[n];if(r instanceof Vt&&r.symbol.type===t){if(0===e)return r;e-=1}}return null}},{key:"getTokens",value:function(t){if(null===this.children)return[];for(var e=[],n=0;n<this.children.length;n++){var r=this.children[n];r instanceof Vt&&r.symbol.type===t&&e.push(r)}return e}},{key:"getTypedRuleContext",value:function(t,e){return this.getChild(e,t)}},{key:"getTypedRuleContexts",value:function(t){if(null===this.children)return[];for(var e=[],n=0;n<this.children.length;n++){var r=this.children[n];r instanceof t&&e.push(r)}return e}},{key:"getChildCount",value:function(){return null===this.children?0:this.children.length}},{key:"getSourceInterval",value:function(){return null===this.start||null===this.stop?L.INVALID_INTERVAL:new L(this.start.tokenIndex,this.stop.tokenIndex)}}])&&Za(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(Zt);Zt.EMPTY=new el;var nl=Math.round(Math.random()*Math.pow(2,32));String.prototype.seed=nl,String.prototype.hashCode=function(){for(var t,e,n=this.toString(),r=3&n.length,o=n.length-r,i=String.prototype.seed,u=3432918353,c=461845907,a=0;a<o;)e=255&n.charCodeAt(a)|(255&n.charCodeAt(++a))<<8|(255&n.charCodeAt(++a))<<16|(255&n.charCodeAt(++a))<<24,++a,i=27492+(65535&(t=5*(65535&(i=(i^=e=(65535&(e=(e=(65535&e)*u+(((e>>>16)*u&65535)<<16)&4294967295)<<15|e>>>17))*c+(((e>>>16)*c&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(t>>>16)&65535)<<16);switch(e=0,r){case 3:e^=(255&n.charCodeAt(a+2))<<16;case 2:e^=(255&n.charCodeAt(a+1))<<8;case 1:i^=e=(65535&(e=(e=(65535&(e^=255&n.charCodeAt(a)))*u+(((e>>>16)*u&65535)<<16)&4294967295)<<15|e>>>17))*c+(((e>>>16)*c&65535)<<16)&4294967295}return i^=n.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};const rl={atn:Wu,dfa:uc,context:cc,misc:ac,tree:mc,error:Qc,Token:o,CommonToken:fi,CharStreams:va,CharStream:aa,InputStream:aa,CommonTokenStream:Ra,Lexer:Bi,Parser:Ua,ParserRuleContext:el,Interval:L,IntervalSet:B,LL1Analyzer:Ce,Utils:da}})();var o=r.dx,i=r.q2,u=r.FO,c=r.xf,a=r.Gy,l=r.s4,s=r.c7,f=r._7,p=r.gp,y=r.cK,h=r.zs,b=r.AV,v=r.Xp,d=r.VS,m=r.ul,g=r.hW,S=r.x1,O=r.z5,w=r.oN,_=r.TB,P=r.u1,T=r._b,E=r.$F,j=r._T,k=r.db,x=r.Zx,R=r._x,C=r.r8,A=r.JI,N=r.TP,I=r.WU,L=r.Nj,D=r.ZP;
//# sourceMappingURL=antlr4.web.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/NCalc/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArgumentException": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.ArgumentException),
/* harmony export */   "BinaryExpression": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.BinaryExpression),
/* harmony export */   "BinaryExpressionType": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.BinaryExpressionType),
/* harmony export */   "EvaluateOptions": () => (/* reexport safe */ _EvaluationOptions__WEBPACK_IMPORTED_MODULE_1__.EvaluateOptions),
/* harmony export */   "EvaluationException": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.EvaluationException),
/* harmony export */   "EvaluationVisitor": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.EvaluationVisitor),
/* harmony export */   "Expression": () => (/* reexport safe */ _Expression__WEBPACK_IMPORTED_MODULE_0__.Expression),
/* harmony export */   "FunctionArgs": () => (/* reexport safe */ _FunctionArgs__WEBPACK_IMPORTED_MODULE_2__.FunctionArgs),
/* harmony export */   "Identifier": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.Identifier),
/* harmony export */   "InvalidOperationException": () => (/* reexport safe */ _Numbers__WEBPACK_IMPORTED_MODULE_3__.InvalidOperationException),
/* harmony export */   "LogicalExpression": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.LogicalExpression),
/* harmony export */   "LogicalExpressionVisitor": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.LogicalExpressionVisitor),
/* harmony export */   "NCalcFunction": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.NCalcFunction),
/* harmony export */   "Numbers": () => (/* reexport safe */ _Numbers__WEBPACK_IMPORTED_MODULE_3__.Numbers),
/* harmony export */   "ParameterArgs": () => (/* reexport safe */ _ParameterArgs__WEBPACK_IMPORTED_MODULE_4__.ParameterArgs),
/* harmony export */   "SerializationVisitor": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.SerializationVisitor),
/* harmony export */   "TernaryExpression": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.TernaryExpression),
/* harmony export */   "TypeCode": () => (/* reexport safe */ _Numbers__WEBPACK_IMPORTED_MODULE_3__.TypeCode),
/* harmony export */   "UnaryExpression": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.UnaryExpression),
/* harmony export */   "UnaryExpressionType": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.UnaryExpressionType),
/* harmony export */   "ValueExpression": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.ValueExpression),
/* harmony export */   "ValueType": () => (/* reexport safe */ _Domain__WEBPACK_IMPORTED_MODULE_5__.ValueType)
/* harmony export */ });
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expression */ "./src/NCalc/Expression.ts");
/* harmony import */ var _EvaluationOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluationOptions */ "./src/NCalc/EvaluationOptions.ts");
/* harmony import */ var _FunctionArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FunctionArgs */ "./src/NCalc/FunctionArgs.ts");
/* harmony import */ var _Numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Numbers */ "./src/NCalc/Numbers.ts");
/* harmony import */ var _ParameterArgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParameterArgs */ "./src/NCalc/ParameterArgs.ts");
/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Domain */ "./src/NCalc/Domain/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./src/NCalc/types.ts");








})();

var __webpack_exports__ArgumentException = __webpack_exports__.ArgumentException;
var __webpack_exports__BinaryExpression = __webpack_exports__.BinaryExpression;
var __webpack_exports__BinaryExpressionType = __webpack_exports__.BinaryExpressionType;
var __webpack_exports__EvaluateOptions = __webpack_exports__.EvaluateOptions;
var __webpack_exports__EvaluationException = __webpack_exports__.EvaluationException;
var __webpack_exports__EvaluationVisitor = __webpack_exports__.EvaluationVisitor;
var __webpack_exports__Expression = __webpack_exports__.Expression;
var __webpack_exports__FunctionArgs = __webpack_exports__.FunctionArgs;
var __webpack_exports__Identifier = __webpack_exports__.Identifier;
var __webpack_exports__InvalidOperationException = __webpack_exports__.InvalidOperationException;
var __webpack_exports__LogicalExpression = __webpack_exports__.LogicalExpression;
var __webpack_exports__LogicalExpressionVisitor = __webpack_exports__.LogicalExpressionVisitor;
var __webpack_exports__NCalcFunction = __webpack_exports__.NCalcFunction;
var __webpack_exports__Numbers = __webpack_exports__.Numbers;
var __webpack_exports__ParameterArgs = __webpack_exports__.ParameterArgs;
var __webpack_exports__SerializationVisitor = __webpack_exports__.SerializationVisitor;
var __webpack_exports__TernaryExpression = __webpack_exports__.TernaryExpression;
var __webpack_exports__TypeCode = __webpack_exports__.TypeCode;
var __webpack_exports__UnaryExpression = __webpack_exports__.UnaryExpression;
var __webpack_exports__UnaryExpressionType = __webpack_exports__.UnaryExpressionType;
var __webpack_exports__ValueExpression = __webpack_exports__.ValueExpression;
var __webpack_exports__ValueType = __webpack_exports__.ValueType;
export { __webpack_exports__ArgumentException as ArgumentException, __webpack_exports__BinaryExpression as BinaryExpression, __webpack_exports__BinaryExpressionType as BinaryExpressionType, __webpack_exports__EvaluateOptions as EvaluateOptions, __webpack_exports__EvaluationException as EvaluationException, __webpack_exports__EvaluationVisitor as EvaluationVisitor, __webpack_exports__Expression as Expression, __webpack_exports__FunctionArgs as FunctionArgs, __webpack_exports__Identifier as Identifier, __webpack_exports__InvalidOperationException as InvalidOperationException, __webpack_exports__LogicalExpression as LogicalExpression, __webpack_exports__LogicalExpressionVisitor as LogicalExpressionVisitor, __webpack_exports__NCalcFunction as NCalcFunction, __webpack_exports__Numbers as Numbers, __webpack_exports__ParameterArgs as ParameterArgs, __webpack_exports__SerializationVisitor as SerializationVisitor, __webpack_exports__TernaryExpression as TernaryExpression, __webpack_exports__TypeCode as TypeCode, __webpack_exports__UnaryExpression as UnaryExpression, __webpack_exports__UnaryExpressionType as UnaryExpressionType, __webpack_exports__ValueExpression as ValueExpression, __webpack_exports__ValueType as ValueType };

//# sourceMappingURL=ncalc.web.js.map