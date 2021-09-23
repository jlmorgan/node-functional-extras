"use strict";

// Project
const failures = require("./failures");
const successes = require("./successes");
const Tuple = require("../Tuple");

/**
 * Partitions a list of {@link Try} into two lists. All {@code Failure} elements are extracted, in order, to the first
 * position of the output. Similarly for the {@code Success} elements in the second position.
 *
 * @memberof Try
 * @param {!Array.<Try>} list - The list of {@link Try}.
 * @return {!Tuple} A couple of a list of the underlying {@code Failure} values and a list of the underlying
 * {@code Success} values.
 */
function partitionTries(list) {
  return Tuple.of(failures(list), successes(list));
}

module.exports = partitionTries;
