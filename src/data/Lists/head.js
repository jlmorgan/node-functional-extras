"use strict";

// Project
const requireNonEmpty = require("./requireNonEmpty");

/**
 * Extracts the first element of a non-null, non-empty list.
 *
 * @memberof Lists
 * @param {!Array} list - The list.
 * @return {*} First item in the list.
 * @throws {TypeError} if the {@code list} is not a non-empty {@code Array}.
 */
function head(list) {
  return requireNonEmpty(list)[0];
}

module.exports = head;
