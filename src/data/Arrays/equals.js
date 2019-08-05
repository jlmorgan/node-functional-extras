"use strict";

// Project
const curry = require("../Tuple/curry");
const requireArray = require("./requireArray");

/**
 * Shallow compares the contents of two arrays in order.
 *
 * @private
 * @param {Array} second - Array to compare.
 * @param {Array} first - Array to compare.
 * @return {Boolean}
 */
function safeIsEqual(second, first) {
  return second.length === first.length ?
    !second.some((value, index) => first[index] !== value) :
    false;
}

/**
 * Shallow compares the contents of two arrays in order.
 *
 * @param {Array} second - Array to compare.
 * @param {Array} first - Array to compare.
 * @return {Boolean} {@code true} if the arrays are equal; otherwise, {@code false}.
 * @throws {TypeError} if either argument is not an {@link Array}.
 */
function isEqual(second, first) {
  return safeIsEqual(
    requireArray(second, "second"),
    requireArray(first, "first")
  );
}

module.exports = curry(isEqual);
