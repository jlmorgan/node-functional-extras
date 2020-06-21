"use strict";

// Project
const maybeMap = require("../Maybe/maybeMap");
const { of } = require("../Maybe/Maybe");

/**
 * Gets the length of the {@code list}; otherwise, defaults to {@code 0}.
 *
 * @memberof Lists
 * @param {Array} list - The list.
 * @return {Number} The length of the list.
 */
function length(list) {
  return maybeMap(0, items => items.length, of(list).filter(Array.isArray));
}

module.exports = length;
