"use strict";

// Project
const curryN = require("../Tuple/curryN");
const fromInvalid = require("./fromInvalid");
const fromValid = require("./fromValid");
const requireFunction = require("../Functions/requireFunction");
const requireValidation = require("./requireValidation");

/**
 * Provides a catamorphism of the {@code validation} to a singular value. If the value is {@code Invalid f}, apply the
 * first function to {@code f}; otherwise, apply the second function to {@code s}.
 *
 * @memberof Validation
 * @param {!Function} invalidMorphism - Maps the values of a {@code Invalid a} to {@code c}.
 * @param {!Function} validMorphism - Maps the value of a {@code Valid b} to {@code c}.
 * @param {!Validation} validation - The {@link Validation}.
 * @return {*} The result of the catamorphism of the {@code validation}.
 * @throws {TypeError} if the {@code invalidMorphism}, {@code validMorphism}, or {@code validation} is
 * {@code null}.
 */
function validationMap(invalidMorphism, validMorphism, validation) {
  return requireValidation(validation, "validation").isValid() ?
    requireFunction(validMorphism, "validMorphism")(fromValid(null, validation)) :
    requireFunction(invalidMorphism, "invalidMorphism")(fromInvalid([], validation));
}

module.exports = curryN(3, validationMap); // eslint-disable-line no-magic-numbers
