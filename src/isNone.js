"use strict";

// Project
const isNull = require("./isNull");
const isUndefined = require("./isUndefined");


/**
 * Determines whether or not the {@code value} is {@code null} or {@code undefined}.
 *
 * @param {*} value - The value.
 * @return {Boolean} {@code true} if {@code value} is {@code null} or {@code undefined}; otherwise, {@code false}.
 */
function isNone(value) {
  return isNull(value) || isUndefined(value);
}

module.exports = isNone;
