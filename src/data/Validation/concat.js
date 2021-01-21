"use strict";

// Project
const curry = require("../Tuple/curry");
const { Invalid } = require("./Validation");
const fromInvalid = require("./fromInvalid");
const requireValidation = require("./requireValidation");

/**
 * Concatenates two {@code Invalid} values together, replace a {@code Valid} with the {@code Invalid}; otherwise,
 * take the first {@code Valid}.
 *
 * @memberof Validation
 * @param {!Validation} second - The second {@link Validation}.
 * @param {!Validation} first - The first {@link Validation}.
 * @return {!Validation} The first {@code Valid} for two valids, the first {@code Invalid} for mixed; otherwise, a
 * {@code Invalid} of the concatenation of the invalid values.
 * @throws {TypeError} if the either value is not a {@link Validation}.
 */
function concat(second, first) {
  requireValidation(second, "second");
  requireValidation(first, "first");

  let result = first;

  if (first.isValid() && second.isInvalid()) {
    result = second;
  } else if (second.isInvalid()) {
    result = Invalid(fromInvalid([], first)
      .concat(fromInvalid([], second))
    );
  }

  return result;
}

module.exports = curry(concat);
