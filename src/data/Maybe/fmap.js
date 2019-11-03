"use strict";

// Project
const curry = require("../Tuple/curry");
const requireMaybe = require("./requireMaybe");

/**
 * Maps the underlying value of a {@link Maybe} in a {@code null}-safe way.
 *
 * @param {Function} morphism - The morphism.
 * @param {Maybe} maybe - The {@link Maybe}.
 * @return {Maybe} The mapped {@link Maybe}.
 */
function fmap(morphism, maybe) {
  return requireMaybe(maybe, "maybe").fmap(morphism);
}

module.exports = curry(fmap);
