"use strict";

// Project
const { Failure, Success } = require("./Try");
const attempt = require("./attempt");
const failures = require("./failures");
const fromFailure = require("./fromFailure");
const fromSuccess = require("./fromSuccess");
const isFailure = require("./isFailure");
const isSuccess = require("./isSuccess");
const partitionTries = require("./partitionTries");
const requireTry = require("./requireTry");
const successes = require("./successes");
const tryMap = require("./tryMap");

module.exports = {
  attempt,
  Failure,
  failures,
  fromFailure,
  fromSuccess,
  isFailure,
  isSuccess,
  partitionTries,
  requireTry,
  Success,
  successes,
  tryMap
};
