"use strict";

/**
 * Determines whether or not the {@code value} is a {@code function}.
 *
 * @memberof Functions
 * @param {*} value - The value.
 * @return {!Boolean} {@code true} for a {@code AsyncFunction}, {@code Function}, or {@code GeneratorFunction};
 * otherwise, {@code false}.
 */
function isFunction(value) {
  return typeof value === "function";
}

module.exports = isFunction;
