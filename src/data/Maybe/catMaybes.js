"use strict";

// Project
const isJust = require("./isJust");
const fromJust = require("./fromJust");

/**
 * Takes a list of {@link Maybe} and returns a list of the {@code Just} values.
 *
 * @memberof Maybe
 * @param {Maybe[]} list - List of {@link Maybe}.
 * @return {Array} A list of the {@code Just} values.
 */
function catMaybes(list) {
  return (list || [])
    .filter(isJust)
    .map(fromJust);
}

module.exports = catMaybes;
