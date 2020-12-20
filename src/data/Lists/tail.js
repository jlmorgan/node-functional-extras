"use strict";

// Project
const requireNonEmpty = require("./requireNonEmpty");

/**
 * Extracts the elements of a non-null, non-empty list excluding the first element.
 *
 * @memberof Lists
 * @param {!Array} list - The list.
 * @return {!Array} Elements in the list excluding the first.
 * @throws {TypeError} if the {@code list} is not a non-empty {@code Array}.
 */
function tail(list) {
  return requireNonEmpty(list).slice(1, list.length);
}

module.exports = tail;
