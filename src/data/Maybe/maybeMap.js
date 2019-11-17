"use strict";

// Project
const curryN = require("../Tuple/curryN");
const fromJust = require("./fromJust");
const isJust = require("./isJust");
const requireFunction = require("../Functions/requireFunction");

/**
 * If the {@link Maybe} value is a {@code Nothing}, it returns the {@code defaultValue}; otherwise, applies the
 * {@code morphism} to the underlying value in the {@code Just} and returns the result.
 *
 * @memberof Maybe
 * @param {*} defaultValue - The value to use if the {@code maybe} is {@code null} or {@code Nothing}.
 * @param {Function} morphism - The function to map the underlying value of the {@code maybe} to the same type as the
 * return type.
 * @param {Maybe} value - The {@link Maybe}.
 * @return {*} The mapped underlying value for a {@code Just}; otherwise, the {@code defaultValue}.
 * @throws {TypeError} if the {@code morphism} is not a {@code Function}.
 */
function maybeMap(defaultValue, morphism, value) {
  return isJust(value) ?
    requireFunction(morphism, "morphism")(fromJust(value)) :
    defaultValue;
}

module.exports = curryN(3, maybeMap); // eslint-disable-line no-magic-numbers
