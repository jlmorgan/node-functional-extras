"use strict";

// Project
const Validation = require("./Validation");

/**
 * Determines whether or not the {@code value} is a {@code Invalid}.
 *
 * @memberof Validation
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Invalid}; otherwise, {@code false}.
 */
function isInvalid(value) {
  return Validation.isValidation(value) && value.isInvalid();
}

module.exports = isInvalid;
