"use strict";

// Project
const { of } = require("../Tuple");
const invalids = require("./invalids");
const valids = require("./valids");

/**
 * Partitions a list of {@link Validation} into two lists. All {@code Invalid} elements are extracted, in order, to the
 * first position of the output. Similarly for the {@code Valid} elements in the second position.
 *
 * @memberof Validation
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {!Tuple} A couple of a list of the underlying {@code Invalid} values and a list of the underlying
 * {@code Valid} values.
 */
function partitionValidations(list) {
  return of(invalids(list), valids(list));
}

module.exports = partitionValidations;
