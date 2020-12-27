"use strict";

// Project
const curry = require("../Tuple/curry");
const requireFunction = require("./requireFunction");

/**
 * Composes two functions {@code f} before {@code g}.
 *
 * @memberof Functions
 * @param {!Function} f - The first function.
 * @param {!Function} g - The second function.
 * @return {!Function} A function that maps a value {@code a} to {@code c}.
 * @throws {TypeError} if any argument is not an {@link Function}.
 */
function pipe(f, g) {
  return x => requireFunction(g, "g")(
    requireFunction(f, "f")(x)
  );
}

module.exports = curry(pipe);
