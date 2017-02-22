"use strict";
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('');
}
exports.appendText = appendTextHandler;

function promiseHandler() {
  return {then: function (fn) {return fn({data:[]});}}
}
exports.promise = promiseHandler;
