"use strict";

// Project
const { Just, Nothing } = require("./Maybe");
const isSome = require("../../isSome");

/**
 * Returns {@code Nothing} for an empty {@code list} or {@code Just} of the first element in the {@code list}.
 *
 * @memberof Maybe
 * @param {Array} list - The {@code list} of values.
 * @return {!Maybe} A {@code Just} of the first non-null value; otherwise, {@code Nothing}.
 */
function listToMaybe(list) {
  const value = Array.isArray(list) ?
    list.find(isSome) :
    null;

  return isSome(value) ? Just(value) : Nothing();
}

module.exports = listToMaybe;
