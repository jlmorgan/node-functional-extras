"use strict";

// Project
const { of } = require("../Maybe/Maybe");
const curryN = require("../Tuple/curryN");
const id = require("../Functions/id");
const maybeMap = require("../Maybe/maybeMap");
const requireFunction = require("../Functions/requireFunction");

/**
 * Folds a list from head to last.
 *
 * @memberof Lists
 * @param {!Function} fold - Folding function.
 * @param {*} initialValue - Initial value.
 * @param {Array} list - The list.
 * @return {*} The result of the fold.
 * @throws {TypeError} if the {@code fold} is not a {@code Function}.
 */
function foldRight(fold, initialValue, list) {
  requireFunction(fold, "fold");

  const { length } = maybeMap([], id, of(list).filter(Array.isArray));
  let index = 0;
  let result = initialValue;

  while (index < length) {
    result = fold(list[index], result);

    index += 1;
  }

  return result;
}

module.exports = curryN(3, foldRight); // eslint-disable-line no-magic-numbers

