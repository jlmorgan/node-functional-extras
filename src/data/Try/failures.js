"use strict";

// Project
const fromFailure = require("./fromFailure");
const isFailure = require("./isFailure");

/**
 * Extracts from a list of {@link Try} all of the {@code Failure} elements in extracted order.
 *
 * @memberof Try
 * @param {!Array.<Try>} list - The list of {@link Try}.
 * @return {!Array} The list of underlying {@code Failure} values.
 */
function failures(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isFailure)
    .map(fromFailure(null));
}

module.exports = failures;
