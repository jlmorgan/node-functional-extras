"use strict";

// Project
const curry = require("../Tuple/curry");
const id = require("./id");
const liftA2 = require("./liftA2");

/**
 * Composes a sequence of two functions {@code g} after {@code f} where {@code f} maps the input value to the first
 * argument of {@code g}.
 *
 * @memberof Functions
 * @param {!Function} g - The second function of the sequence.
 * @param {!Function} f - The first function of the sequence.
 * @return {!Function} A function that takes the value and applies it to the sequence.
 */
function bind(g, f) {
  return liftA2(g, id, f);
}

module.exports = curry(bind);
