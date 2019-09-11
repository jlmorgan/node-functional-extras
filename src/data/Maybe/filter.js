"use strict";

// Project
const curry = require("../Tuple/curry");
const requireMaybe = require("./requireMaybe");

/**
 * Tests the underlying value against the {@code predicate}, returning the {@code Just} of the value for {@code true};
 * otherwise, {@code Nothing}.
 *
 * @param {Function} predicate - The predicate with which to test the value.
 * @param {*} maybe - The maybe.
 * @return {Maybe} The {@code Just} of the value for {@code true}; otherwise, {@code Nothing}.
 */
function filter(predicate, maybe) {
  return requireMaybe(maybe, "maybe").filter(predicate);
}

module.exports = curry(filter);
