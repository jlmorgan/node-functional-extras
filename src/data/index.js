"use strict";

// Project
const Functions = require("./Functions");
const Maybe = require("./Maybe");
const Tuple = require("./Tuple");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  Functions,
  { Maybe: Maybe },
  { Tuple: Tuple }
);
