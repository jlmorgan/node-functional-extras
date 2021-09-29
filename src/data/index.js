"use strict";

// Project
const Arrays = require("./Arrays");
const Either = require("./Either");
const Functions = require("./Functions");
const Lists = require("./Lists");
const Maybe = require("./Maybe");
const Try = require("./Try");
const Tuple = require("./Tuple");
const Validation = require("./Validation");

/* eslint-disable prefer-object-spread */
module.exports = Object.assign(
  {},
  { Arrays },
  { Either },
  { Lists },
  { Maybe },
  { Try },
  { Tuple },
  { Validation },
  Functions
);
