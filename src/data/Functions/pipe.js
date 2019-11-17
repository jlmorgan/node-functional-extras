"use strict";

// Project
const curry = require("../Tuple/curry");

/**
 * Composes two functions {@code f} before {@code g}.
 *
 * @memberof Functions
 * @param {Function} f - The first function.
 * @param {Function} g - The second function.
 * @return {Function} A function that maps a value {@code a} to {@code c}.
 */
function pipe(f, g) {
  return x => g(f(x));
}

module.exports = curry(pipe);
