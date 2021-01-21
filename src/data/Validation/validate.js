"use strict";

// Project
const { Invalid, Valid } = require("./Validation");
const curryN = require("../Tuple/curryN");
const requireFunction = require("../Functions/requireFunction");

/**
 * Validates a value {@code b} and returns a {@code Valid} of {@code b} if the {@code predicate} returns
 * {@code true}; otherwise, a {@code Invalid} of {@code a}.
 *
 * @memberof Validation
 * @param {!Function} predicate - The predicate.
 * @param {*} invalidValue - The invalid value.
 * @param {*} value - The value to test.
 * @return {!Validation} A {@code Valid} of the {@code value} if the {@code predicate} returns {@code true};
 * otherwise, a {@code Invalid} of {@code invalidValue}.
 * @throws {TypeError} if the {@code predicate} is not a {@code Function}.
 */
function validate(predicate, invalidValue, value) {
  return requireFunction(predicate, "predicate")(value) ?
    Valid(value) :
    Invalid(invalidValue);
}

module.exports = curryN(3, validate); // eslint-disable-line no-magic-numbers
