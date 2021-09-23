"use strict";

// Project
const Try = require("./Try");

/**
 * Determines whether or not the {@code value} is a {@code Success}.
 *
 * @memberof Try
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code Success}; otherwise, {@code false}.
 */
function isSuccess(value) {
  return Try.isTry(value) && value.isSuccess();
}

module.exports = isSuccess;
