"use strict";

// Project
const fromValid = require("./fromValid");
const isValid = require("./isValid");

/**
 * Extracts from a list of {@link Validation} all of the {@code Valid} elements in extracted order.
 *
 * @memberof Validation
 * @param {Validation[]} list - The list of {@link Validation}.
 * @return {!Array} The list of underlying {@code Valid} values.
 */
function valids(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isValid)
    .map(fromValid(null));
}

module.exports = valids;
