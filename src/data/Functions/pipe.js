"use strict";

/**
 * Composes two functions {@code f} before {@code g}.
 *
 * @memberof Functions
 * @param {Function} f - The first function.
 * @param {Function} g - The second function.
 * @return {Function} Returns a function that maps a value {@code a} to {@code c}.
 */
function pipe(f, g) {
  return arguments.length === 1 ?
    g1 => pipe(f, g1) :
    x => g(f(x));
}

module.exports = pipe;
