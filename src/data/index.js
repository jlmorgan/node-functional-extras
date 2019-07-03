"use strict";

// Project
const Either = require("./Either");
const Functions = require("./Functions");
const Maybe = require("./Maybe");
const Tuple = require("./Tuple");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  { Either: Either },
  Functions,
  { Maybe: Maybe },
  { Tuple: Tuple }
);
