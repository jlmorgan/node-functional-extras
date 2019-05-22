"use strict";

// Project
const Tuple = require("./Tuple");

/**
 * Creates a {@link Tuple} with two values.
 *
 * @param {*} first - The first element.
 * @param {*} second - The second element.
 * @return {Tuple} A {@link Tuple} of two values.
 */
function of(first, second) {
  return arguments.length === 1 ?
    b => new Tuple(first, b) :
    new Tuple(first, second);
}

module.exports = of;
