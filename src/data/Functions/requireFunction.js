"use strict";

// Project
const curry = require("../Tuple/curry");
const isFunction = require("./isFunction");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not an {@link Function}.
 *
 * @param {*} value - The value to require.
 * @param {String} name - The variable name.
 * @return {*} The value.
 */
function requireFunction(value, name) {
  return requireType(isFunction, value, `${name} must be a Function`);
}

module.exports = curry(requireFunction);
