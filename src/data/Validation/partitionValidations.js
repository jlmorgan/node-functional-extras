"use strict";

// Project
const { of } = require("../Tuple");
const failures = require("./failures");
const successes = require("./successes");

/**
 * Partitions a list of {@link Validation} into two lists. All {@code Failure} elements are extracted, in order, to the
 * first position of the output. Similarly for the {@code Success} elements in the second position.
 *
 * @memberof Validation
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {!Tuple} A couple of a list of the underlying {@code Failure} values and a list of the underlying
 * {@code Success} values.
 */
function partitionValidations(list) {
  return of(failures(list), successes(list));
}

module.exports = partitionValidations;
