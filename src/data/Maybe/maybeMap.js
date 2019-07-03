"use strict";

// Project
const curryN = require("../Tuple/curryN");
const fromJust = require("./fromJust");
const isFunction = require("../../isFunction");
const isJust = require("./isJust");

/**
 * If the {@link Maybe} value is a {@code Nothing}, it returns the {@code defaultValue}; otherwise, applies the
 * {@code morphism} to the underlying value in the {@code Just} and returns the result.
 *
 * @memberof Maybe
 * @param {*} defaultValue The value to use if the {@code maybe} is {@code null} or {@code Nothing}.
 * @param {Function} morphism The function to map the underlying value of the {@code maybe} to the same type as the
 * return type.
 * @param {Maybe} value - The {@link Maybe}.
 * @return {*} The mapped underlying value for a {@code Just}; otherwise, the {@code defaultValue}.
 * @throws {TypeError} if the {@code morphism} is {@code null}.
 */
function maybeMap(defaultValue, morphism, value) {
  if (!isFunction(morphism)) {
    throw new TypeError("morphism must be a Function");
  }

  return isJust(value) ? morphism(fromJust(value)) : defaultValue;
}

module.exports = curryN(3, maybeMap); // eslint-disable-line no-magic-numbers
