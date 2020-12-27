"use strict";

// Project
const ap = require("./ap");
const bind = require("./bind");
const compose = require("./compose");
const constant = require("./constant");
const flip = require("./flip");
const flipCurried = require("./flipCurried");
const id = require("./id");
const isFunction = require("./isFunction");
const liftA2 = require("./liftA2");
const pipe = require("./pipe");
const pure = require("./pure");
const requireFunction = require("./requireFunction");

module.exports = {
  ap,
  bind,
  compose,
  constant,
  flip,
  flipCurried,
  id,
  isFunction,
  liftA2,
  pipe,
  pure,
  requireFunction
};
