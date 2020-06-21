"use strict";

// Project
const { isTuple } = require("./Tuple");
const curry = require("./curry");
const curryN = require("./curryN");
const of = require("./of");
const tupleMap = require("./tupleMap");

module.exports = {
  curry,
  curryN,
  isTuple,
  of,
  tupleMap
};
