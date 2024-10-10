"use strict";
// v.0.1.61 (global version of project when last changes were done)
var error = Error;
Error = function (message) {
  console.error(this.message = message);
  debugger;
};
console.log("Unit tests start:");
console.time("Timestamp");
console.time("Succesful unit tests, took");
// TEST: enableShipEditing //
press = F;
try {
  enableShipEditing();
  if (press !== old_UI || ship.getMode().mode !== "Ship")
    throw new Error("did not pass the test");
} catch (e) {console.error("enableShipEditing:");console.error(e);}
// TEST: enableLogicEditing //
press = F;
try {
  enableLogicEditing();
  if (press !== edit_logic)
    throw new Error("press not set to edit_logic");
  if (ship.getMode().mode !== "Logic")
    throw new Error("ship.prop not in correct mode");
  ship.blocks.forEach(function (e) {
    if (!(e instanceof Block && Logic.VALUE[Block.ID[e.internalName]]))
      throw new Error("contains other than logic blocks");
  });
} catch (e) {console.error("enableLogicEditing:");console.error(e);}
// add testing positions swap and correct ship after moving logic blocks

// TEST: Block.arrayFromObjects //
var utst_consoleWarn = console.warn, utst_arr1 = ["juhus","Item2","Item1"];
try {
  console.warn = function () {
    var str = [].map.call(arguments, String).join("");
    new RegExp(utst_arr1.pop() + "[^]+at: ?0").test(str) ||
      utst_consoleWarn("Unexpected warning(s)!? : " + str);
  };
  Block.arrayFromObjects({"Item1":84,"Item2":83});
  Block.arrayFromObjects({name:"kurczus",position:{0:1,1:3,2:7},juhus:69});
  console.warn = utst_consoleWarn;
  if (Block.NAME[11] !== "cockpit_cruiser")
    throw new Error("Moly Sterakdary why is there wrong Block of ID 11?");
  var utst_arr0 = Block.arrayFromObjects([
    {"n":"NOPE",internalName:"__unknown__",properties:
      {invalidName:"cockpit_cruiser"}
    },{name:"__unknown__",properties:{invalidName:"juhus"}}]);
  if (utst_arr0[0].internalName !== "cockpit_cruiser")
    throw new Error("incorrectly revalidated block name");
  if (utst_arr0[1].internalName === "juhus" && !(Block.ID["juhus"] >= 0))
    throw new Error("incorrectly revalidated invalid name");
} catch (e) {console.error("Block.arrayFromObjects:");console.error(e);}
console.warn = utst_consoleWarn;
// TEST: Command.list[].items() //
try {
  for (var utst_i = Command.list.length; utst_i-- > 0;) {
    var utst_fn = Command.list[utst_i].items;
    typeof utst_fn == "function" && utst_fn(EL());
  }
  Logic.rend = !1;
} catch (e) {console.error("itemsInit<\"Select Block\">:");console.error(e);}
// TEST: Ship.toDBV //
/** @TODO the test for ^ */
// TEST: Ship.fromObject //
utst_arr1 = ["ControlBlock check1", "ControlBlock check1"];
try {
  console.timeEnd("Timestamp");
  console.warn = function () {
    var str = [].map.call(arguments, String).join("");
    new RegExp(utst_arr1.pop() || "^Unexpected warning!$").test(str) ||
      utst_consoleWarn("Unexpected warning(s)!? : " + str);
  };
  ship = Ship.fromObject(decodeCmprsShip(base64ToUint8array("gIAEDEFOT\
05fU2h1dHRsZQAEXVy0aoC/TzvnFnWt0z4R4pYUZx2CorwBRXLToKjrQJPehCK9CdKboLhB4MUPQ\
VwDhrgGiGuAuAaIa4C1XkER14AjrgFBjHHEFUWbA4oxBxTVDSjWu1FsOeBYccQw3YRiywPBlnFsG\
cGWcTR3YGgxji0HODKK5gYEzYXmQnOhrhXKGhDENSCIa0DR5oKjywFFigOOFQcczw0obnxxxDXgq\
GsSmGvBE1uuied3AltbMCw0NSw0NSw2OCwwLDQ1LDAsNDUsMTEzLDcxLDAsNDUsMCw0NSwwLDQ1L\
DAsNDUsMTg0LDY4LDI1Miw2OSwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0LDMyM\
Sw0NCwzMjEsNDQsMzIxLDQ0LDM2NSw1OSwzMjEsNDQsNDI0LDcwLDQ5NCw2NCw1NTgsNzAsNjI4L\
DQ5LDY3Nyw2Miw3MzksNTYsNzk1LDY3LDg2Miw2Miw5MjQsNjIsOTg2LDYyLDEwNDgsNjIsMTExM\
Cw2NSwxMTc1LDU5LDEyMzQsNjIsMTI5Niw2MiwxMzU4LDY1LDE0MjMsNjUsMTQ4OCw2NSwxNTUzL\
DY1LDE2MTgsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMTY2Miw3MCwxNzMyLDYyLDE3OTQsMzksM\
TgzMyw1NiwxODg5LDY2LDE5NTUsNjEsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0XSwie1wiY\
29sb3JcIjpcIk9yYW5nZVwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvc\
lwiOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzNdLFwid\
2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzE4MDAwX\
SxcIm5vZGVJbmRleFwiOlsyLDFdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHc\
mF5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzRdLFwid2VsZEdyb3VwXCI6M\
H17XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbWzAsMCwwLDBdXSxcIm5vZGVJbmRle\
FwiOls1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W\
10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJcIixcImNvbnRyb2xcIjpbMSwwXSxcIm5vZ\
GVJbmRleFwiOlszNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29ud\
HJvbFwiOltdLFwibm9kZUluZGV4XCI6WzIzLDIyLDIxLDIwXSxcIndlbGRHcm91cFwiOjB9e1wiY\
29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTksMThdLFwid\
2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiTGlnaHQgR3JheVwiLFwiY29udHJvbFwiOls3NTAwX\
SxcIm5vZGVJbmRleFwiOlsyNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJMaWdodCBHc\
mF5XCIsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiL\
FwiY29udHJvbFwiOlswXSxcIm5vZGVJbmRleFwiOlsxN10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvb\
G9yXCI6XCJcIixcImNvbnRyb2xcIjpbXSxcIm5vZGVJbmRleFwiOlsxMV0sXCJ3ZWxkR3JvdXBcI\
jowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiOlsyNzAwMF0sXCJub2RlSW5kZXhcI\
jpbNyw2XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6W\
zBdLFwibm9kZUluZGV4XCI6WzM3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrX\
CIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM2XSxcIndlbGRHcm91cFwiOjB9e1wiY\
29sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM4XSxcIndlb\
GRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZ\
GV4XCI6WzM1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sX\
CI6WzExMjVdLFwibm9kZUluZGV4XCI6WzMxXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcI\
lwiLFwiY29udHJvbFwiOlsxLDBdLFwibm9kZUluZGV4XCI6WzMzXSxcIndlbGRHcm91cFwiOjB9e\
1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzMyXSxcI\
ndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZ\
UluZGV4XCI6WzI1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250c\
m9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzI3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcI\
jpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzMwXSxcIndlbGRHc\
m91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZ\
GV4XCI6WzI4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sX\
CI6WzExMjVdLFwibm9kZUluZGV4XCI6WzI5XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcI\
kJsYWNrXCIsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0Z\
VwiLFwiY29udHJvbFwiOltdLFwibm9kZUluZGV4XCI6WzE2LDE1LDE0LDEzXSxcIndlbGRHcm91c\
FwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6W\
zEyXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY29udHJvbFwiOltdLFwid2VsZ\
Edyb3VwXCI6MH17XCJjb2xvclwiOlwiXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbM\
TBdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbNDUwM\
F0sXCJub2RlSW5kZXhcIjpbOSw4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlX\
CIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMjZdLFwid2VsZEdyb3VwXCI6MH0iXQ=="
  .replace(/ /g, ""))));
  ship.fixPositionAdjustment(!0);
  enableLogicEditing();
  enableShipEditing();
  Ship.fromObject(JSON.parse(JSON.stringify(ship)));
} catch (e) {console.error("Ship.fromObject:");console.error(e);}
console.warn = utst_consoleWarn;
// END OF TESTS //
console.timeEnd("Succesful unit tests, took");
if (error !== Error)
  Error = error;
void 0;
