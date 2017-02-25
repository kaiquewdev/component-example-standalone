"use strict";
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('');
}
exports.appendText = appendTextHandler;

function promiseHandler(highFn) {
    highFn = highFn || function () {};
    if (highFn()) {
      this.success = function (fn) {
        return fn({data:[]});
      };
    }
    this.then = function (fn) {
	return fn({data:[]});
    };
    this.when = function (fn) {
      return fn({data:[]});
    };
    if (!highFn()) {
      this.fail = function (fn) {
        return fn({data:[]});
      };
    }
    this.result = function (fn) {
      return fn({data:[]});
    };
    return this;
}
exports.promise = promiseHandler;
