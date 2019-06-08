"use strict";

/**
 * Determines whether or not the {@code value} is {@code undefined}.
 *
 * @param {*} value - A value.
 * @return {Boolean} {@code true} if {@code undefined}; otherwise, {@code false}.
 */
function isUndefined(value) {
  return typeof value === "undefined";
}

module.exports = isUndefined;
