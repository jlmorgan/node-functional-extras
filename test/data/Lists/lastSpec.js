"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Lists: { last } } = require("../../..");

describe("last", () => {
  it("should throw an exception for undefined list", () => {
    const testList = undefined;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => last(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for null list", () => {
    const testList = null;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => last(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for empty list", () => {
    const testList = [];
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => last(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should return last element for non-empty list", () => {
    const testValue1 = uuid();
    const testValue2 = uuid();
    const testValue3 = uuid();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = testValue3;
    const actualResult = last(testList);

    expect(actualResult).to.equal(expectedResult);
  });
});
