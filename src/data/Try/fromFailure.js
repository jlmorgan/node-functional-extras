"use strict";

// Project
const { isTry } = require("./Try");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Failure}; otherwise, returns the {@code defaultValue}.
 *
 * @memberof Try
 * @param {*} defaultValue - Value used if the {@code instance} is not a {@code Failure}.
 * @param {!Try} instance - The {@link Try}.
 * @return {*} The underlying left value or default.
 */
function fromFailure(defaultValue, instance) {
  return !isTry(instance) || instance.isSuccess() ?
    defaultValue :
    instance.valueOf();
}

module.exports = curry(fromFailure);
