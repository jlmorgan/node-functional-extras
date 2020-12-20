"use strict";

// Project
const Maybe = require("../Maybe");
const length = require("./length");

/**
 * Determines whether or not the {@code list} is {@code undefined}, {@code null}, or empty.
 *
 * @memberof Lists
 * @param {Array} list - The list.
 * @return {!Boolean} {@code true} for an empty; otherwise, {@code false}.
 */
function isEmpty(list) {
  return Maybe.of(list)
    .filter(Array.isArray)
    .fmap(length)
    .filter(value => value > 0)
    .isNothing();
}

module.exports = isEmpty;
