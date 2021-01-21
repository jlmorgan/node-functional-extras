"use strict";

// Project
const concat = require("../Arrays/concat");
const fromInvalid = require("./fromInvalid");
const isInvalid = require("./isInvalid");

/**
 * Extracts from a list of {@link Validation} all of the {@code Invalid} elements in extracted order. The underlying
 * lists are concatenated together.
 *
 * @memberof Validation
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {!Array} The list of underlying {@code Invalid} values.
 */
function invalids(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isInvalid)
    .map(fromInvalid([]))
    .reduce(concat, []);
}

module.exports = invalids;
