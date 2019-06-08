"use strict";

// Project
const isJust = require("./isJust");

/**
 * Extracts the value out of a {@code Just} and throws an error if its argument is a {@code Nothing}.
 *
 * @memberof Maybe
 * @param {Maybe} maybe - The {@link Maybe}.
 * @return {*} The underlying value.
 */
function fromJust(maybe) {
  if (!isJust(maybe)) {
    throw new TypeError("maybe must not be undefined, null, or Nothing");
  }

  return maybe.valueOf();
}

module.exports = fromJust;
