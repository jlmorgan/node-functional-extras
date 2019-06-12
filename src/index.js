"use strict";

// Project
const data = require("./data");
const isFunction = require("./isFunction");
const isNone = require("./isNone");
const isNull = require("./isNull");
const isSome = require("./isSome");
const isUndefined = require("./isUndefined");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  data,
  {
    isFunction,
    isNone,
    isNull,
    isSome,
    isUndefined
  }
);
