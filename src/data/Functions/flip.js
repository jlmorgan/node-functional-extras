"use strict";

// Project
const curry = require("../Tuple/curry");
const requireFunction = require("./requireFunction");

/**
 * Flips the argument order of the specified function.
 *
 * @memberof Functions
 * @param {!Function} f - The function to flip.
 * @return {!Function} The curried flipped function.
 * @throws {TypeError} if {@code f} is not an {@link Function}.
 */
function flip(f) {
  return curry((b, a) => requireFunction(f, "f")(a, b));
}

module.exports = flip;
