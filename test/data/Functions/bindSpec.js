"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { bind } = require("../../..");

describe("bind", () => {
  it("should apply the value to the sequence", () => {
    const testValue = 10;
    const testAToB = value => value ** 2;
    const testBAndAToC = (b, a) => b - a;
    const expectedResult = (testValue ** 2) - testValue; // eslint-disable-line no-extra-parens
    const actualResult = bind(testBAndAToC)(testAToB)(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
