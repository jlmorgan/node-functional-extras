"use strict";

// Project
const lefts = require("./lefts");
const rights = require("./rights");
const Tuple = require("../Tuple");

/**
 * Partitions a list of {@link Either} into two lists. All {@code Left} elements are extracted, in order, to the first
 * position of the output. Similarly for the {@code Right} elements in the second position.
 *
 * @param {Either[]} list - The list of {@link Either}.
 * @return {Array} A couple of a list of the underlying {@code Left} values and a list of the underlying {@code Right}
 * values.
 */
function partitionEithers(list) {
  return Tuple.of(lefts(list), rights(list));
}

module.exports = partitionEithers;
