"use strict";

// Project
const curryN = require("../Tuple/curryN");
const fromFailure = require("./fromFailure");
const fromSuccess = require("./fromSuccess");
const requireTry = require("./requireTry");
const requireFunction = require("../Functions/requireFunction");

/**
 * Provides a catamorphism of the {@code instance} to a singular value. If the value is {@code Failure a}, apply the
 * first function to {@code a}; otherwise, apply the second function to {@code b}.
 *
 * @memberof Try
 * @param {!Function} failureMorphism - Maps the value of a {@code Failure a} to {@code c}.
 * @param {!Function} successMorphism - Maps the value of a {@code Success b} to {@code c}.
 * @param {!Try} instance - The {@link Try}.
 * @return {*} The result of the catamorphism of the {@code instance}.
 * @throws {TypeError} if the {@code failureMorphism} or {@code successMorphism} is not a {@code Function}.
 * @throws {TypeError} if the {@code instance} is not an {@link Try}.
 */
function tryMap(failureMorphism, successMorphism, instance) {
  return requireTry(instance, "instance").isSuccess() ?
    requireFunction(successMorphism, "successMorphism")(fromSuccess(null, instance)) :
    requireFunction(failureMorphism, "failureMorphism")(fromFailure(null, instance));
}

module.exports = curryN(3, tryMap); // eslint-disable-line no-magic-numbers
