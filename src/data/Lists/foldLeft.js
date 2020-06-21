"use strict";

// Project
const { of } = require("../Maybe/Maybe");
const curryN = require("../Tuple/curryN");
const id = require("../Functions/id");
const maybeMap = require("../Maybe/maybeMap");
const requireFunction = require("../Functions/requireFunction");

/**
 * Folds a list from last to head.
 *
 * @memberof Lists
 * @param {!Function} fold - Folding function.
 * @param {*} initialValue - Initial value.
 * @param {Array} list - The list.
 * @return {*} The result of the fold.
 * @throws {TypeError} if the {@code fold} is not a {@code Function}.
 */
function foldLeft(fold, initialValue, list) {
  requireFunction(fold, "fold");

  let index = maybeMap([], id, of(list).filter(Array.isArray)).length;
  let result = initialValue;

  while (index > 0) {
    index -= 1;

    result = fold(result, list[index]);
  }

  return result;
}


module.exports = curryN(3, foldLeft); // eslint-disable-line no-magic-numbers
