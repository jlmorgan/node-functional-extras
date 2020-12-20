"use strict";

// Project
const curryN = require("../Tuple/curryN");
const requireFunction = require("./requireFunction");

/**
 * Composes a sequence of two functions {@code g} and {@code f} and combines the results ({@code h}) where {@code f}
 * maps the input value to the first argument of {@code h} and {@code g} maps the input value to the second argument of
 * {@code h}.
 *
 * @param {!Function} h - The combining function of the sequence.
 * @param {!Function} g - The second function of the sequence.
 * @param {!Function} f - The first function of the sequence.
 * @return {!Function} A function that takes the value and returns the result of the sequence computation.
 * @throws {TypeError} if any argument is not an {@link Function}.
 */
function liftA2(h, g, f) {
  return value => requireFunction(h, "h")(
    requireFunction(f, "f")(value),
    requireFunction(g, "g")(value)
  );
}

module.exports = curryN(3, liftA2); // eslint-disable-line no-magic-numbers
