"use strict";

// Project
const { isTry } = require("./Try");
const curry = require("../Tuple/curry");

/**
 * Extracts the value of a {@code Success}; otherwise, returns the {@code defaultValue}.
 *
 * @memberof Try
 * @param {*} defaultValue - Value used if the {@code instance} is not a {@code Success}.
 * @param {!Try} instance - The {@link Try}.
 * @return {*} The underlying right value or default.
 */
function fromSuccess(defaultValue, instance) {
  return !isTry(instance) || instance.isFailure() ?
    defaultValue :
    instance.valueOf();
}

module.exports = curry(fromSuccess);
