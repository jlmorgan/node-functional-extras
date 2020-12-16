"use strict";

const curry = require("../Tuple/curry");

/**
 * Composes a sequence of two functions {@code g} after {@code f} with {@code value}.
 *
 * @memberof Functions
 * @param {Function} g - The second function using the ouput of the first and the original value.
 * @param {Function} f - The first function.
 * @param {*} value - The value.
 * @return {*} A function that takes the value and applies it to the sequence.
 */
function bind(g, f) {
  return value => g(f(value), value);
}

module.exports = curry(bind);
