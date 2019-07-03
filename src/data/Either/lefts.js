"use strict";

// Project
const fromLeft = require("./fromLeft");
const isLeft = require("./isLeft");

/**
 * Extracts from a list of {@link Either} all of the {@code Left} elements in extracted order.
 *
 * @param {Either[]} list - The list of {@link Either}.
 * @return {Array} The list of underlying {@code Left} values.
 */
function lefts(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isLeft)
    .map(fromLeft(null));
}

module.exports = lefts;
