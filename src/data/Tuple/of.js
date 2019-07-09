"use strict";

// Project
const curry = require("./curry");
const Tuple = require("./Tuple");

/**
 * Creates a {@link Tuple} with two values.
 *
 * @memberof Tuple
 * @param {*} first - The first element.
 * @param {*} second - The second element.
 * @return {Tuple} A {@link Tuple} of two values.
 */
function of(first, second) {
  return new Tuple(first, second);
}

module.exports = curry(of);
