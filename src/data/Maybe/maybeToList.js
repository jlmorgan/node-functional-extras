"use strict";

// Project
const fromJust = require("./fromJust");
const isJust = require("./isJust");

/**
 * Returns an empty list for {@code Nothing}; otherwise, a singleton list of the underlying value of the {@code Just}.
 *
 * @memberof Maybe
 * @param {Maybe} maybe - The {@link Maybe}.
 * @return {Array} A singleton list of the underlying value within the {@code maybe} for a {@link Just}; otherwise, an
 * empty list for {@link Nothing}.
 */
function maybeToList(maybe) {
  return isJust(maybe) ? [fromJust(maybe)] : [];
}

module.exports = maybeToList;
