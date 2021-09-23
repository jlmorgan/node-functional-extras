"use strict";

// Project
const fromRight = require("./fromRight");
const isRight = require("./isRight");

/**
 * Extracts from a list of {@link Either} all of the {@code Right} elements in extracted order.
 *
 * @memberof Either
 * @param {!Array.<Either>} list - The list of {@link Either}.
 * @return {!Array} The list of underlying {@code Right} values.
 */
function rights(list) {
  return (Array.isArray(list) ? list : [])
    .filter(isRight)
    .map(fromRight(null));
}

module.exports = rights;
