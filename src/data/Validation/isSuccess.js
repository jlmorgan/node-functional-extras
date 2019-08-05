"use strict";

// Project
const Validation = require("./Validation");

/**
 * Determines whether or not the {@code value} is a {@code Success}.
 *
 * @memberof Validation
 * @param {*} value - The value.
 * @return {Boolean} {@code true} for a {@code Success}; otherwise, {@code false}.
 */
function isSuccess(value) {
  return Validation.isValidation(value) && value.isSuccess();
}

module.exports = isSuccess;
