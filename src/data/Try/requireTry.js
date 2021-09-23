"use strict";

// Project
const { isTry } = require("./Try");
const curry = require("../Tuple/curry");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not a {@code Try}.
 *
 * @memberof Try
 * @param {*} value - The value to require.
 * @param {!String} name - The variable name.
 * @return {*} The value.
 */
function requireTry(value, name) {
  return requireType(isTry, value, `${name} must be a Try`);
}

module.exports = curry(requireTry);
