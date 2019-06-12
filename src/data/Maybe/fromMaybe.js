"use strict";

// Project
const curry = require("../Tuple/curry");
const fromJust = require("./fromJust");
const isJust = require("./isJust");

/**
 * Takes a {@code defaultValue} and a {@link Maybe} value. If the {@link Maybe} is {@code Nothing}, it returns the
 * {@code defaultValue}; otherwise, it returns the underlying value of the {@code Just}.
 *
 * @memberof Maybe
 * @param {*} defaultValue The value to use if the {@code maybe} is {@code null} or {@code Nothing}.
 * @param {Maybe} maybe The {@link Maybe}.
 * @return {*} The underlying value for a {@code Just}; otherwise, the {@code defaultValue}.
 */
function fromMaybe(defaultValue, maybe) {
  return isJust(maybe) ? fromJust(maybe) : defaultValue;
}

module.exports = curry(fromMaybe);
