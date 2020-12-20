"use strict";

// Project
const curry = require("../Tuple/curry");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not an {@link Array}.
 *
 * @memberof Arrays
 * @param {*} value - The value to require.
 * @param {!String} name - The variable name.
 * @return {*} The value.
 */
function requireArray(value, name) {
  return requireType(Array.isArray, value, `${name} must be an Array`);
}

module.exports = curry(requireArray);
