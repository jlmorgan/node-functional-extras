"use strict";

// Project
const { isValidation } = require("./Validation");
const curry = require("../Tuple/curry");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not a {@code Validation}.
 *
 * @memberof Validation
 * @param {*} value - The value to require.
 * @param {!String} name - The variable name.
 * @return {*} The value.
 */
function requireValidation(value, name) {
  return requireType(isValidation, value, `${name} must be a Validation`);
}

module.exports = curry(requireValidation);
