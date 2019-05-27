"use strict";

// Project
const Functions = require("./Functions");
const Tuple = require("./Tuple");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  Functions,
  { Tuple: Tuple }
);
