"use strict";

// Project
const Either = require("./Either");

/**
 * Determines whether or not the {@code value} is a {@code Left}.
 *
 * @memberof Either
 * @param {*} value - The value.
 * @return {Boolean} {@code true} for a {@code Left}; otherwise, {@code false}.
 */
function isLeft(value) {
  return Either.isEither(value) && value.isLeft();
}

module.exports = isLeft;
