"use strict";

// Project
const curry = require("../Tuple/curry");
const id = require("./id");
const liftA2 = require("./liftA2");

/**
 * Composes a sequence of two functions {@code g} after {@code f} where {@code f} maps the input value to the second
 * argument of {@code g}.
 *
 * @memberof Functions
 * @param {!Function} g - The second function of the sequence.
 * @param {!Function} f - The first function of the sequence.
 * @return {!Function} A function that takes the value and returns the result of the sequence computation.
 */
function ap(g, f) {
  return liftA2(g, f, id);
}

module.exports = curry(ap);
