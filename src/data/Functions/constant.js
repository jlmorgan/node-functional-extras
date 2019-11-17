"use strict";

/**
 * The {@code K} combinator. Creates a unary function that ignores the input value and returns the original value.
 *
 * @memberof Functions
 * @param {*} a - The return value of the unary function.
 * @return {Function} A unary function that takes a value and returns the original value.
 */
function constant(a) {
  return () => a;
}

module.exports = constant;
