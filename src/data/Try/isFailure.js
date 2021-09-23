"use strict";

// Project
const Try = require("./Try");

/**
 * Determines whether or not the {@code value} is a {@code Failure}.
 *
 * @memberof Try
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Failure}; otherwise, {@code false}.
 */
function isFailure(value) {
  return Try.isTry(value) && value.isFailure();
}

module.exports = isFailure;
