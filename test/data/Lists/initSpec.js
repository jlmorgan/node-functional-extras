"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Lists: { init } } = require("../../..");

describe("init", () => {
  it("should throw an exception for undefined list", () => {
    const testList = undefined;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => init(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for null list", () => {
    const testList = null;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => init(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for empty list", () => {
    const testList = [];
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => init(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should return all elements excluding last for non-empty list", () => {
    const testValue1 = uuid();
    const testValue2 = uuid();
    const testValue3 = uuid();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = [testValue1, testValue2];
    const actualResult = init(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
