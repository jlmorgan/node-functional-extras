"use strict";

// Project
const { isEither } = require("./Either");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Left}; otherwise, returns the {@code defaultValue}.
 *
 * @param {*} defaultValue - Value used if the {@code either} is not a {@code Left}.
 * @param {Either} either - The {@link Either}.
 * @return {*} The underlying left value or default.
 */
function fromLeft(defaultValue, either) {
  return !isEither(either) || either.isRight() ?
    defaultValue :
    either.valueOf();
}

module.exports = curry(fromLeft);
