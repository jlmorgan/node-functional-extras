"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Lists: { append } } = require("../../..");

describe("append", () => {
  it("should return second list for non-Array first", () => {
    const testSecond = [uuid()];
    const testFirst = 0;
    const expectedResult = testSecond;
    const actualResult = append(testSecond)(testFirst);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return first list for non-Array second", () => {
    const testSecond = 0;
    const testFirst = [uuid()];
    const expectedResult = testFirst;
    const actualResult = append(testSecond)(testFirst);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return empty list for empty lists", () => {
    const testSecond = [];
    const testFirst = [];
    const expectedResult = [];
    const actualResult = append(testSecond)(testFirst);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return appended list", () => {
    const testValue2 = uuid();
    const testValue1 = uuid();
    const testSecond = [testValue2];
    const testFirst = [testValue1];
    const expectedResult = [testValue1, testValue2];
    const actualResult = append(testSecond)(testFirst);

    expect(actualResult).to.eql(expectedResult);
  });
});
