"use strict";

// Project
const curryN = require("./data/Tuple/curryN");

/**
 * Throws a {@link TypeError} if the {@code value} provided fails the {@code predicate}.
 *
 * @param {!Function} predicate - The predicate to determine the type.
 * @param {*} value - The value to require.
 * @param {!String} message - The error message.
 * @return {*} The value.
 */
function requireType(predicate, value, message) {
  if (predicate(value)) {
    return value;
  }

  throw new TypeError(message);
}

module.exports = curryN(3, requireType); // eslint-disable-line no-magic-numbers
