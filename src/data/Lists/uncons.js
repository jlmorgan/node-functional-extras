"use strict";

// Project
const { of } = require("../Maybe/Maybe");
const head = require("./head");
const isNotEmpty = require("./isNotEmpty");
const tail = require("./tail");
const tupleMap = require("../Tuple/tupleMap");

/**
 * Decomposes a list into its head and tail. Returns {@code Nothing} if the {@code list} is empty; otherwise a
 * {@code Just (x, xs)} where {@code x} is the head of the {@code list} and {@code xs} is the tail.
 *
 * @memberof Lists
 * @param {Array} list - The list.
 * @return {Maybe} {@code Just} of the head and tail; otherwise, {@code Nothing}.
 */
function uncons(list) {
  return of(list)
    .filter(Array.isArray)
    .filter(isNotEmpty)
    .fmap(tupleMap(head, tail));
}

module.exports = uncons;
