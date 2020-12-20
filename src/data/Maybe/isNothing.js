"use strict";

// Project
const Maybe = require("./Maybe");

/**
 * Determines whether or not the {@code value} is a {@code Nothing}.
 *
 * @memberof Maybe
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Nothing}; otherwise, {@code false}.
 */
function isNothing(value) {
  return Maybe.isMaybe(value) && value.isNothing();
}

module.exports = isNothing;
