"use strict";
// v.0.1.48 (global version of project when last changes were done)
var error = Error;
Error = function (message) {
  console.error(this.message = message);
  debugger;
};
console.log("Unit tests start:");
console.time("End of unit tests");
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
try {
  Block.arrayFromObjects({"Item1":84,"Item2":83});
  Block.arrayFromObjects({name:"kurczus",position:{0:1,1:3,2:7},juhus:69});
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
// TEST: Command.list[].items() //
try {
  for (var utst_i = Command.list.length; utst_i-- > 0;) {
    var utst_fn = Command.list[utst_i].items;
    typeof utst_fn == "function" && utst_fn(EL());
  }
} catch (e) {console.error("itemsInit<\"Select Block\">:");console.error(e);}
// END OF TESTS //
console.timeEnd("End of unit tests");
if (error !== Error)
  Error = error;
  void 0;
