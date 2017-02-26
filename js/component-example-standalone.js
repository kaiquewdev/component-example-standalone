'use strict'

const BOOLEAN = 'boolean'
const OBJECT = 'object'

function appendTextHandler() {
  return Array.prototype.slice.call(arguments,[]).join('')
}
exports.appendText = appendTextHandler

function promiseHandler(highFn) {
    let that = this;
    let output = {data:[]}
    let isBoolean = (v) => typeof(v) === BOOLEAN
    let isObject = (v) => typeof(v) === OBJECT
    highFn = highFn || function () {}
    if (highFn() && isBoolean(highFn())) {
      that.success = function (fn) {
        return fn.call(that,output)
      }
    }
    if (!highFn() && isBoolean(highFn())) {
      that.fail = fn => {
	return fn.call(that,output)
      }
    }
    if (isObject(highFn())) {
      that.then = fn => {
	output.data.push(highFn())
        return fn.call(that,output)
      }

      that.when = fn => {
	output.data.push(highFn())
	return fn.call(that,output)
      }

      that.result = fn => {
	output.data.push(highFn());
        return fn.call(that,output)
      }
    }
    return that
}
exports.promise = promiseHandler;
