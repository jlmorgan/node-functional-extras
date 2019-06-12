"use strict";

/**
 * Curries a function with two arguments.
 *
 * @memberof Tuple
 * @param {Function} f - The function to curry.
 * @return {Function} The curried function.
 */
function curry(f) {
  return function caller(a, b) {
    switch (arguments.length) {
      case 1: { return value => f(a, value); }

      default: { return f(a, b); }
    }
  };
}

module.exports = curry;
