"use strict";

// Project
const curry = require("../Tuple/curry");
const fromJust = require("./fromJust");
const isFunction = require("../../isFunction");
const isJust = require("./isJust");

/**
 * A version of {@code map} which can throw out elements. If the result of the function is {@code Nothing}, no element
 * is added to the result list; otherwise, the value is added.
 *
 * @memberof Maybe
 * @param {Function} morphism - The function that maps the value in the {@code list} to a {@link Maybe} of the result.
 * @param {Array} list - The {@code list} of values.
 * @return {Array} A list of mapped {@code Just} values.
 * @throws {TypeError} if the {@code morphism} is {@code null}.
 */
function mapMaybe(morphism, list) {
  if (!isFunction(morphism)) {
    throw new TypeError("morphism must be a Function");
  }

  return (list || [])
    .map(morphism)
    .filter(isJust)
    .map(fromJust);
}

module.exports = curry(mapMaybe);
