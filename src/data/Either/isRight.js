"use strict";

// Project
const Either = require("./Either");

/**
 * Determines whether or not the {@code value} is a {@code Right}.
 *
 * @memberof Either
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Right}; otherwise, {@code false}.
 */
function isRight(value) {
  return Either.isEither(value) && value.isRight();
}

module.exports = isRight;
