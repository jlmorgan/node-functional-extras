"use strict";

// Project
const { isValidation } = require("./Validation");
const curry = require("../Tuple/curry");
const requireArray = require("../Arrays/requireArray");

/**
 * Extracts the value of a {@code Invalid}; otherwise, returns the {@code defaultValues}.
 *
 * @memberof Validation
 * @param {!Array} defaultValues - Value used if the {@code validation} is not a {@code Invalid}.
 * @param {Validation} validation - The {@link Validation}.
 * @return {*} The underlying invalid values or default.
 * @throws {TypeError} if {@code defaultValues} is not an Array.
 */
function fromInvalid(defaultValues, validation) {
  return !isValidation(validation) || validation.isValid() ?
    requireArray(defaultValues, "defaultValues") :
    validation.valueOf();
}

module.exports = curry(fromInvalid);
