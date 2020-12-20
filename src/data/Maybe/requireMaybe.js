"use strict";

// Project
const { isMaybe } = require("./Maybe");
const curry = require("../Tuple/curry");
const requireType = require("../../requireType");

/**
 * Throws a {@link TypeError} if the {@code value} provided is not an {@link Maybe}.
 *
 * @param {Maybe?} value - Instance to be tested.
 * @param {!String} name - Name of the instance.
 * @return {!Maybe} The instance.
 */
function requireMaybe(value, name) {
  return requireType(isMaybe, value, `${name} must be a Maybe`);
}

module.exports = curry(requireMaybe);
