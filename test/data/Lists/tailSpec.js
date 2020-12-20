"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Lists: { tail } } = require("../../..");

describe("tail", () => {
  it("should throw an exception for undefined list", () => {
    const testList = undefined;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => tail(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for null list", () => {
    const testList = null;
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => tail(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for empty list", () => {
    const testList = [];
    const expectedError = TypeError;
    const expectedMessage = "list must be a non-empty Array";

    expect(() => tail(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should return an empty array for a singleton list", () => {
    const testList = [uuid()];
    const expectedResult = [];
    const actualResult = tail(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return all elements excluding first for non-empty list", () => {
    const testValue1 = uuid();
    const testValue2 = uuid();
    const testValue3 = uuid();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = [testValue2, testValue3];
    const actualResult = tail(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
