"use strict";
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('');
}
exports.appendText = appendTextHandler;

function promiseHandler(highFn) {
    highFn = highFn || function () {};
    if (highFn() && typeof(highFn()) === 'boolean') {
      this.success = function (fn) {
        return fn({data:[]});
      };
    }
    if (!highFn() && typeof(highFn()) === 'boolean') {
      this.fail = function (fn) {
        return fn({data:[]});
      };
    }
    if (typeof(highFn()) === 'object') {
      this.then = function (fn) {
	return fn({data:[]});
      };
      
      this.when = function (fn) {
        return fn({data:[]});
      };

      this.result = function (fn) {
        return fn({data:[]});
      };
    }
    return this;
}
exports.promise = promiseHandler;
