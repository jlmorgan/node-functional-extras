"use strict";

// Project
const curry = require("../Tuple/curry");

/**
 * Flips the argument order of the specified function.
 *
 * @memberof Functions
 * @param {Function} f - The function to flip.
 * @return {Function} The curried flipped function.
 */
function flip(f) {
  return curry((b, a) => f(a, b));
}

module.exports = flip;
