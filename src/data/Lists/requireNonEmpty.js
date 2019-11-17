"use strict";

// Project
const isEmpty = require("./isEmpty");

/**
 * Throws a {@link TypeError} if the {@code list} is empty.
 *
 * @param {Array} list - The list.
 * @return {Array} The list.
 * @throws {TypeError} if the {@code list} is empty.
 */
function requireNonEmpty(list) {
  if (isEmpty(list)) {
    throw new TypeError("list must be a non-empty Array");
  }

  return list;
}

module.exports = requireNonEmpty;
