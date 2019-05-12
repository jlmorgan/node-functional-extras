"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { constant } = require("../../..");

describe("constant", () => {
  it("should ignore input value", () => {
    const testValue = uuid();
    const testSecondValue = "test";
    const testFunction = constant(testValue);
    const expectedResult = testValue;
    const actualResult = testFunction(testSecondValue);

    expect(expectedResult).to.eql(actualResult);
  });
});
