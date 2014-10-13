var ret = module.exports = function tpl(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];


buffer.data += '<div class="';
var callRet0
callRet0 = callFnUtil(tpl, scope, {escape:1,params:['input-wrap']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet0);
buffer.data += '">\r\n    <div class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['placeholder']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '">\r\n        ';
pos.line = 3;
var id2 = ((t=(affix.placeholder)) !== undefined ? t:((t = data.placeholder) !== undefined ? t :scope.resolveLooseUp(["placeholder"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '\r\n    </div>\r\n    <input class="';
pos.line = 5;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['input']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '"\r\n            autocomplete="off"/>\r\n</div>\r\n<div class="';
pos.line = 8;
var callRet4
callRet4 = callFnUtil(tpl, scope, {escape:1,params:['content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet4);
buffer.data += '">';
var id5 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
buffer = buffer.write(id5);
buffer.data += '</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;