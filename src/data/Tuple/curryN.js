"use strict";

// Project
const curry = require("./curry");

/**
 * Creates a variadic curried function.
 *
 * @private
 * @memberof Tuple
 * @param {Array} collected - Collected arguments.
 * @param {Number} length - The number of arguments to collect.
 * @param {Function} f - The function to curry.
 * @return {Function} The curried function.
 */
function createCurry(collected, length, f) {
  return function(...values) {
    const received = collected.concat(values).slice(0, length);

    return received.length >= length ?
      f(...received) :
      createCurry(received, length, f);
  };
}

/**
 * Curries a function ({@code f}) with {@code length} number of arguments.
 *
 * @memberof Tuple
 * @param {Number} length - The number of arguments.
 * @param {Function} f - The function to curry.
 * @return {Function} The curried function.
 */
function curryN(length, f) {
  return createCurry([], length, f);
}

module.exports = curry(curryN);
