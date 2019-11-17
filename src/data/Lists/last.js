"use strict";

// Project
const requireNonEmpty = require("./requireNonEmpty");

/**
 * Extracts the last element of a non-null, non-empty list.
 *
 * @memberof Lists
 * @param {!Array} list - The list.
 * @return {*} Last item in the list.
 * @throws {TypeError} if the {@code list} is not a non-empty {@code Array}.
 */
function last(list) {
  return requireNonEmpty(list)[list.length - 1];
}

module.exports = last;
