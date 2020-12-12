"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { bind } = require("../../..");

describe("bind", () => {
  it("should apply the value to the sequence", () => {
    const testValue = 10;
    const testAToB = value => value + 1;
    const testBAndAToC = (a, b) => a + b;
    const expectedResult = testValue + testValue + 1;
    const actualResult = bind(testBAndAToC)(testAToB)(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
