"use strict";

// Project
const { Failure, Success } = require("./Try");

/**
 * Wraps a successful execution in a {@code Success} and a thrown {@link Error} in a {@code Failure}.
 *
 * @memberof Try
 * @param {Function} supplier - A function that supplies the value.
 * @return {!Try} A {@code Try} of the value.
 */
function attempt(supplier) {
  try {
    return Success(supplier);
  } catch (error) {
    return Failure(error);
  }
}

module.exports = attempt;
