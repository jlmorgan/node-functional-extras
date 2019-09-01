"use strict";

// Project
const curry = require("../Tuple/curry");
const requireArray = require("./requireArray");

/**
 * Concatenates two arrays.
 *
 * @param {Array} second - Array to compare.
 * @param {Array} first - Array to compare.
 * @return {Array} The concatenated array.
 * @throws {TypeError} if either argument is not an {@link Array}.
 */
function concatArrays(second, first) {
  return requireArray(second, "second").concat(requireArray(first, "first"));
}

module.exports = curry(concatArrays);
