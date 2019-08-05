"use strict";

// Project
const failures = require("./failures");
const successes = require("./successes");
const Tuple = require("../Tuple");

/**
 * Partitions a list of {@link Validation} into two lists. All {@code Failure} elements are extracted, in order, to the
 * first position of the output. Similarly for the {@code Success} elements in the second position.
 *
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {Array} A couple of a list of the underlying {@code Failure} values and a list of the underlying
 * {@code Success} values.
 */
function partitionValidations(list) {
  return Tuple.of(failures(list), successes(list));
}

module.exports = partitionValidations;
