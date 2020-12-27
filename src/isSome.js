"use strict";

// Project
const isNone = require("./isNone");

/**
 * Determines whether or not the {@code value} is not {@code null} or {@code undefined}.
 *
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} if {@code value} is not {@code null} or {@code undefined}; otherwise, {@code false}.
 */
function isSome(value) {
  return !isNone(value);
}

module.exports = isSome;
