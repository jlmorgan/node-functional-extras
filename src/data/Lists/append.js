"use strict";

// Project
const { of } = require("../Maybe/Maybe");
const curry = require("../Tuple/curry");
const id = require("../Functions/id");
const maybeMap = require("../Maybe/maybeMap");

/**
 * Appends two lists together. `null` or `undefined` lists are treated as empty lists.
 *
 * @memberof Lists
 * @param {Array} second - The list to append.
 * @param {Array} first - The list on which to append.
 * @return {Array} The appended list.
 */
function append(second, first) {
  return maybeMap([], id, of(first).filter(Array.isArray))
    .concat(maybeMap([], id, of(second).filter(Array.isArray)));
}

module.exports = curry(append);
