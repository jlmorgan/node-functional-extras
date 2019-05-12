"use strict";

/**
 * The {@code K} combinator. Creates a unary function that ignores the input value and returns the original value.
 *
 * @param {*} a - The return value of the unary function.
 * @return {Function} Returns a unary function that takes a value and returns the original value.
 */
function constant(a) {
  return () => a;
}

module.exports = constant;
