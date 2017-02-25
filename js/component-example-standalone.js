'use strict'
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('')
}
exports.appendText = appendTextHandler

function promiseHandler(highFn) {
    let data = []
    highFn = highFn || function () {}
    if (highFn() && typeof(highFn()) === 'boolean') {
      this.success = function (fn) {
        return fn({data:data})
      }
    }
    if (!highFn() && typeof(highFn()) === 'boolean') {
      this.fail = fn => {
        return fn({data:data})
      }
    }
    if (typeof(highFn()) === 'object') {
      this.then = fn => {
	data.push(highFn())
        return fn.call(this,{data:data})
      }

      this.when = fn => {
	data.push(highFn())
	return fn.call(this,{data:data})
      }

      this.result = fn => {
	data.push(highFn());
        return fn.call(this,{data:data})
      }
    }
    return this
}
exports.promise = promiseHandler;
