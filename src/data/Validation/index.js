"use strict";

// Project
const { Failure, Success } = require("./Validation");
const concat = require("./concat");
const failures = require("./failures");
const fromFailure = require("./fromFailure");
const fromSuccess = require("./fromSuccess");
const isFailure = require("./isFailure");
const isSuccess = require("./isSuccess");
const partitionValidations = require("./partitionValidations");
const requireValidation = require("./requireValidation");
const successes = require("./successes");
const validate = require("./validate");
const validationMap = require("./validationMap");

module.exports = {
  concat,
  Failure,
  failures,
  fromFailure,
  fromSuccess,
  isFailure,
  isSuccess,
  partitionValidations,
  requireValidation,
  Success,
  successes,
  validate,
  validationMap
};
