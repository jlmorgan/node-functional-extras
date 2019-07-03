"use strict";

// Project
const curryN = require("../Tuple/curryN");
const isFunction = require("../../isFunction");
const fromLeft = require("./fromLeft");
const fromRight = require("./fromRight");
const { isEither } = require("./Either");

/**
 * Provides a catamorphism of the {@code either} to a singular value. If the value is {@code Left a}, apply the first
 * function to {@code a}; otherwise, apply the second function to {@code b}.
 *
 * @param {Function} leftMorphism - Maps the value of a {@code Left a} to {@code c}.
 * @param {Function} rightMorphism - Maps the value of a {@code Right b} to {@code c}.
 * @param {Either} either - The {@link Either}.
 * @return {*} The result of the catamorphism of the {@code either}.
 * @throws {TypeError} if the {@code leftMorphism} or {@code rightMorphism} is not a {@code Function}.
 * @throws {TypeError} if the {@code either} is not an {@link Either}.
 */
function eitherMap(leftMorphism, rightMorphism, either) {
  if (!isFunction(leftMorphism)) {
    throw new TypeError("leftMorphism must be a Function");
  }

  if (!isFunction(rightMorphism)) {
    throw new TypeError("rightMorphism must be a Function");
  }

  if (!isEither(either)) {
    throw new TypeError("either must be an Either");
  }

  return either.isRight() ?
    rightMorphism(fromRight(null, either)) :
    leftMorphism(fromLeft(null, either));
}

module.exports = curryN(3, eitherMap); // eslint-disable-line no-magic-numbers
