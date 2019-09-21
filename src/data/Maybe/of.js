"use strict";

// Project
const isNone = require("../../isNone");
const Maybe = require("./Maybe");

/**
 * Creates a {@link Maybe} of the {@code value} where:
 *   - undefined -> Nothing
 *   - null -> Nothing
 *   - a -> Just(a)
 *
 * @param {*} value - The value.
 * @return {Maybe} {@code Nothing} if the {@code value} is {@code null} or {@code undefined}; otherwise, {@code Just} of
 * the {@code value}.
 */
function of(value) {
  return isNone(value) ? Maybe.Nothing() : Maybe.Just(value);
}

module.exports = of;
