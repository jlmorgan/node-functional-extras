"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { ap } = require("../../..");

describe("ap", () => {
  it("should apply the value to the sequence", () => {
    const testValue = 10;
    const testAToB = value => value ** 2;
    const testAAndBToC = (a, b) => a - b;
    const expectedResult = testValue - (testValue ** 2); // eslint-disable-line no-extra-parens
    const actualResult = ap(testAAndBToC)(testAToB)(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
