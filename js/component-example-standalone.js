'use strict'
function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('')
}
exports.appendText = appendTextHandler

function promiseHandler(highFn) {
    let output = {data:[]}
    highFn = highFn || function () {}
    if (highFn() && typeof(highFn()) === 'boolean') {
      this.success = function (fn) {
        return fn.call(this,output)
      }
    }
    if (!highFn() && typeof(highFn()) === 'boolean') {
      this.fail = fn => {
	return fn.call(this,output)
      }
    }
    if (typeof(highFn()) === 'object') {
      this.then = fn => {
	output.data.push(highFn())
        return fn.call(this,output)
      }

      this.when = fn => {
	output.data.push(highFn())
	return fn.call(this,output)
      }

      this.result = fn => {
	output.data.push(highFn());
        return fn.call(this,output)
      }
    }
    return this
}
exports.promise = promiseHandler;
