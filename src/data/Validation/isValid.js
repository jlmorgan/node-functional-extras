"use strict";

// Project
const Validation = require("./Validation");

/**
 * Determines whether or not the {@code value} is a {@code Valid}.
 *
 * @memberof Validation
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Valid}; otherwise, {@code false}.
 */
function isValid(value) {
  return Validation.isValidation(value) && value.isValid();
}

module.exports = isValid;
