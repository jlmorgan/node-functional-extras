"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { liftA2 } = require("../../..");

describe("liftA2", () => {
  it("should apply the value to the sequence", () => {
    const testValue = 10;
    const testAToB = value => value ** 2;
    const testAToC = value => value / 2;
    const testBAndCToD = (b, c) => b - c;
    const expectedResult = (testValue ** 2) - (testValue / 2); // eslint-disable-line no-extra-parens
    const actualResult = liftA2(testBAndCToD)(testAToC)(testAToB)(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
