"use strict";

// Project
const { Left, Right } = require("./Either");
const eitherMap = require("./eitherMap");
const fromLeft = require("./fromLeft");
const fromRight = require("./fromRight");
const isLeft = require("./isLeft");
const isRight = require("./isRight");
const lefts = require("./lefts");
const partitionEithers = require("./partitionEithers");
const requireEither = require("./requireEither");
const rights = require("./rights");

module.exports = {
  eitherMap,
  fromLeft,
  fromRight,
  isLeft,
  isRight,
  Left,
  lefts,
  partitionEithers,
  requireEither,
  Right,
  rights
};
