"use strict";

// Project
const { isEither } = require("./Either");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Right}; otherwise, returns the {@code defaultValue}.
 *
 * @param {*} defaultValue - Value used if the {@code either} is not a {@code Right}.
 * @param {Either} either - The {@link Either}.
 * @return {*} The underlying right value or default.
 */
function fromRight(defaultValue, either) {
  return !isEither(either) || either.isLeft() ?
    defaultValue :
    either.valueOf();
}

module.exports = curry(fromRight);
