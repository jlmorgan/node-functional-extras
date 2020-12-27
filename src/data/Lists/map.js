"use strict";

// Project
const curry = require("../Tuple/curry");
const requireArray = require("../Arrays/requireArray");
const requireFunction = require("../Functions/requireFunction");

/**
 * Maps the values of the {@code list} into a new list.
 *
 * @memberof Lists
 * @param {!Function} morphism - The morphism.
 * @param {!Array} list - The list.
 * @return {!Array} The mapped list.
 * @throws {TypeError} if the {@code morphism} is not a {@code Function}.
 */
function map(morphism, list) {
  requireFunction(morphism, "morphism");

  const items = requireArray(list, "list");
  const { length } = items;
  const result = new Array(length);
  let index = 0;

  while (index < length) {
    result[index] = morphism(items[index]);
    index += 1;
  }

  return result;
}

module.exports = curry(map);
