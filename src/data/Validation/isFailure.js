"use strict";

// Project
const Validation = require("./Validation");

/**
 * Determines whether or not the {@code value} is a {@code Failure}.
 *
 * @memberof Validation
 * @param {*} value - The value.
 * @return {Boolean} {@code true} for a {@code Failure}; otherwise, {@code false}.
 */
function isFailure(value) {
  return Validation.isValidation(value) && value.isFailure();
}

module.exports = isFailure;
