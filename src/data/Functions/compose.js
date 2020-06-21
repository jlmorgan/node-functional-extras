"use strict";

// Project
const curry = require("../Tuple/curry");

/**
 * Composes two functions {@code g} after {@code f}.
 *
 * @memberof Functions
 * @param {Function} g - The second function.
 * @param {Function} f - The first function.
 * @return {Function} A function that maps a value {@code a} to {@code c}.
 */
function compose(g, f) {
  return x => g(f(x));
}

module.exports = curry(compose);
