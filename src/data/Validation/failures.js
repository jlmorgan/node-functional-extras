"use strict";

// Project
const concat = require("../Arrays/concat");
const fromFailure = require("./fromFailure");
const isFailure = require("./isFailure");

/**
 * Extracts from a list of {@link Validation} all of the {@code Failure} elements in extracted order. The underlying
 * lists are concatenated together.
 *
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {Array} The list of underlying {@code Failure} values.
 */
function failures(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isFailure)
    .map(fromFailure([]))
    .reduce(concat, []);
}

module.exports = failures;
