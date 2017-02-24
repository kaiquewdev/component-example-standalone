"use strict";
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('');
}
exports.appendText = appendTextHandler;

function promiseHandler() {
    this.then = function (fn) {
      return fn({data:[]});
    };
    this.when = function (fn) {
      return fn({data:[]});
    };
    this.fail = function (fn) {
      return fn({data:[]});
    };
    this.result = function (fn) {
      return fn({data:[]});
    };
    return this;
}
exports.promise = promiseHandler;
