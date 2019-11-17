"use strict";

// Project
const requireNonEmpty = require("./requireNonEmpty");

/**
 * Extracts the elements of a non-null, non-empty list excluding the last element.
 *
 * @memberof Lists
 * @param {!Array} list - The list.
 * @return {Array} Elements in the list excluding the last.
 * @throws {TypeError} if the {@code list} is not a non-empty {@code Array}.
 */
function init(list) {
  return requireNonEmpty(list).slice(0, list.length - 1);
}

module.exports = init;
