"use strict";

// Project
const Arrays = require("./Arrays");
const Either = require("./Either");
const Functions = require("./Functions");
const Maybe = require("./Maybe");
const Tuple = require("./Tuple");
const Validation = require("./Validation");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  { Arrays: Arrays },
  { Either: Either },
  Functions,
  { Maybe: Maybe },
  { Tuple: Tuple },
  { Validation: Validation }
);
