'use strict'

const BOOLEAN = 'boolean'
const OBJECT = 'object'

function appendText() { return Array.prototype.slice.call(arguments,[]).join('') }
exports.appendText = appendText

function promiseHandler(highFn) {
    let that = this;
    let output = {data:[]}
    let isBoolean = (v) => typeof(v) === BOOLEAN
    let isObject = (v) => typeof(v) === OBJECT
    highFn = highFn || function () {}
    if (highFn() && isBoolean(highFn())) {
      that.success = resolve => resolve.call(that,output)
    }
    if (!highFn() && isBoolean(highFn())) {
      that.fail = resolve => resolve.call(that,output)
    }
    if (isObject(highFn())) {
      that.then = resolve => {
	output.data.push(highFn())
        return resolve.call(that,output)
      }

      that.when = resolve => {
	output.data.push(highFn())
	return resolve.call(that,output)
      }

      that.result = resolve => {
	output.data.push(highFn());
        return resolve.call(that,output)
      }
    }
    return that
}
exports.promise = promiseHandler;
