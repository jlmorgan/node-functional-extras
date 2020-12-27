"use strict";

/**
 * Determines whether or not the {@code value} is {@code null}.
 *
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} if {@code null}; otherwise, {@code false}.
 */
function isUndefined(value) {
  return value === null;
}

module.exports = isUndefined;
