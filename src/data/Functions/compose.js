"use strict";

/**
 * Composes two functions {@code g} after {@code f}.
 *
 * @memberof Functions
 * @param {Function} g - The second function.
 * @param {Function} f - The first function.
 * @return {Function} Returns a function that maps a value {@code a} to {@code c}.
 */
function compose(g, f) {
  return arguments.length === 1 ?
    f1 => compose(g, f1) :
    x => g(f(x));
}

module.exports = compose;
