"use strict";

// Project
const curry = require("../Tuple/curry");
const { Failure } = require("./Validation");
const fromFailure = require("./fromFailure");
const requireValidation = require("./requireValidation");

/**
 * Concatenates two {@code Failure} values together, replace a {@code Success} with the {@code Failure}; otherwise,
 * take the first {@code Success}.
 *
 * @memberof Validation
 * @param {!Validation} second - The second {@link Validation}.
 * @param {!Validation} first - The first {@link Validation}.
 * @return {!Validation} The first {@code Success} for two successes, the first {@code Failure} for mixed; otherwise, a
 * {@code Failure} of the concatenation of the failure values.
 * @throws {TypeError} if the either value is not a {@link Validation}.
 */
function concat(second, first) {
  requireValidation(second, "second");
  requireValidation(first, "first");

  let result = first;

  if (first.isSuccess() && second.isFailure()) {
    result = second;
  } else if (second.isFailure()) {
    result = Failure(fromFailure([], first)
      .concat(fromFailure([], second))
    );
  }

  return result;
}

module.exports = curry(concat);
