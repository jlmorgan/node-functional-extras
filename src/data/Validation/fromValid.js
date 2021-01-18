"use strict";

// Project
const { isValidation } = require("./Validation");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Valid}; otherwise, returns the {@code defaultValue}.
 *
 * @memberof Validation
 * @param {*} defaultValue - Value used if the {@code validation} is not a {@code Valid}.
 * @param {Validation} validation - The {@link Validation}.
 * @return {*} The underlying Valid values or default.
 */
function fromValid(defaultValue, validation) {
  return !isValidation(validation) || validation.isInvalid() ?
    defaultValue :
    validation.valueOf();
}

module.exports = curry(fromValid);
