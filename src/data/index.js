"use strict";

// Project
const Arrays = require("./Arrays");
const Either = require("./Either");
const Functions = require("./Functions");
const Lists = require("./Lists");
const Maybe = require("./Maybe");
const Tuple = require("./Tuple");
const Validation = require("./Validation");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  { Arrays: Arrays },
  { Either: Either },
  { Lists: Lists },
  { Maybe: Maybe },
  { Tuple: Tuple },
  { Validation: Validation },
  Functions
);
