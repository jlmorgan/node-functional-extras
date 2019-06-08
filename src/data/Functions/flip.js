"use strict";

/**
 * Flips the argument order of the specified function.
 *
 * @memberof Functions
 * @param {Function} f - The function to flip.
 * @return {Function} The curried flipped function.
 */
function flip(f) {
  return function(b, a) {
    return arguments.length === 1 ?
      a1 => f(a1, b) :
      f(a, b);
  };
}

module.exports = flip;
