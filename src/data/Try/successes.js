"use strict";

// Project
const fromSuccess = require("./fromSuccess");
const isSuccess = require("./isSuccess");

/**
 * Extracts from a list of {@link Try} all of the {@code Success} elements in extracted order.
 *
 * @memberof Try
 * @param {!Array.<Try>} list - The list of {@link Try}.
 * @return {!Array} The list of underlying {@code Success} values.
 */
function successes(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isSuccess)
    .map(fromSuccess(null));
}

module.exports = successes;
