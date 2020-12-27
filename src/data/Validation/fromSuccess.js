"use strict";

// Project
const { isValidation } = require("./Validation");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Success}; otherwise, returns the {@code defaultValue}.
 *
 * @memberof Validation
 * @param {*} defaultValue - Value used if the {@code validation} is not a {@code Success}.
 * @param {Validation} validation - The {@link Validation}.
 * @return {*} The underlying Success values or default.
 */
function fromSuccess(defaultValue, validation) {
  return !isValidation(validation) || validation.isFailure() ?
    defaultValue :
    validation.valueOf();
}

module.exports = curry(fromSuccess);
