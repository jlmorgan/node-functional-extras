"use strict";

// Project
const Maybe = require("./Maybe");

/**
 * Determines whether or not the {@code value} is a {@code Just}.
 *
 * @memberof Maybe
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Just}; otherwise, {@code false}.
 */
function isJust(value) {
  return Maybe.isMaybe(value) && value.isJust();
}

module.exports = isJust;
