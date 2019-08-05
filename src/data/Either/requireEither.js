"use strict";

// Project
const { isEither } = require("./Either");
const curry = require("../Tuple/curry");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not a {@code Either}.
 *
 * @param {*} value - The value to require.
 * @param {String} name - The variable name.
 * @return {*} The value.
 */
function requireEither(value, name) {
  return requireType(isEither, value, `${name} must be an Either`);
}

module.exports = curry(requireEither);
