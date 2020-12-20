"use strict";

// Project
const curryN = require("../Tuple/curryN");
const fromFailure = require("./fromFailure");
const fromSuccess = require("./fromSuccess");
const requireFunction = require("../Functions/requireFunction");
const requireValidation = require("./requireValidation");

/**
 * Provides a catamorphism of the {@code validation} to a singular value. If the value is {@code Failure f}, apply the
 * first function to {@code f}; otherwise, apply the second function to {@code s}.
 *
 * @memberof Validation
 * @param {!Function} failureMorphism - Maps the values of a {@code Failure a} to {@code c}.
 * @param {!Function} successMorphism - Maps the value of a {@code Success b} to {@code c}.
 * @param {!Validation} validation - The {@link Validation}.
 * @return {*} The result of the catamorphism of the {@code validation}.
 * @throws {TypeError} if the {@code failureMorphism}, {@code successMorphism}, or {@code validation} is
 * {@code null}.
 */
function validationMap(failureMorphism, successMorphism, validation) {
  return requireValidation(validation, "validation").isSuccess() ?
    requireFunction(successMorphism, "successMorphism")(fromSuccess(null, validation)) :
    requireFunction(failureMorphism, "failureMorphism")(fromFailure([], validation));
}

module.exports = curryN(3, validationMap); // eslint-disable-line no-magic-numbers
