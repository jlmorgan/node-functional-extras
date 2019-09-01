"use strict";

// Project
const { Failure, Success } = require("./Validation");
const curryN = require("../Tuple/curryN");
const requireFunction = require("../Functions/requireFunction");

/**
 * Validates a value {@code b} and returns a {@code Success} of {@code b} if the {@code predicate} returns
 * {@code true}; otherwise, a {@code Failure} of {@code a}.
 * @param {Function} predicate - The predicate.
 * @param {*} failureValue - The failure value.
 * @param {*} value - The value to test.
 * @return {Validation} A {@code Success} of the {@code value} if the {@code predicate} returns {@code true}; otherwise,
 * a {@code Failure} of {@code failureValue}.
 * @throws {TypeError} if the {@code predicate} is not a {@code Function}.
 */
function validate(predicate, failureValue, value) {
  return requireFunction(predicate, "predicate must be a Function")(value) ?
    Success(value) :
    Failure(failureValue);
}

module.exports = curryN(3, validate); // eslint-disable-line no-magic-numbers
