"use strict";

// Project
const curryN = require("../Tuple/curryN");
const of = require("./of");
const requireFunction = require("../Functions/requireFunction");

/**
 * Maps the {@code value} into the elements of the {@link Tuple} after applying a morphism for each position.
 *
 * @memberof Tuple
 * @param {!Function} firstMorphism - The function to map the {@code value} into the first element.
 * @param {!Function} secondMorphism - The function to map the {@code value} into the second element.
 * @param {*} value - The value.
 * @return {!Tuple} The mapped tuple.
 * @throws {TypeError} if the {@code firstMorphism} or {@code secondMorphism} is not a {@code Function}.
 */
function tupleMap(firstMorphism, secondMorphism, value) {
  return of(
    requireFunction(firstMorphism, "firstMorphism")(value),
    requireFunction(secondMorphism, "secondMorphism")(value)
  );
}

module.exports = curryN(3, tupleMap); // eslint-disable-line no-magic-numbers
