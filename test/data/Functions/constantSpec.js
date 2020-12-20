"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { constant } = require("../../..");

describe("constant", () => {
  it("should ignore input value", () => {
    const testValue = uuid();
    const testSecondValue = "test";
    const testFunction = constant(testValue);
    const expectedResult = testValue;
    const actualResult = testFunction(testSecondValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
