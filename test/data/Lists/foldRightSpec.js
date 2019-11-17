"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { Lists: { foldRight } } = require("../../..");

describe("foldRight", () => {
  const randomInt = () => Math.ceil(Math.random() * 10); // eslint-disable-line no-magic-numbers
  const testFold = (a, b) => a + b;
  const testInitialValue = 0;

  it("should return initial value for undefined list", () => {
    const testList = undefined;
    const expectedResult = testInitialValue;
    const actualResult = foldRight(testFold)(testInitialValue)(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return initial value for null list", () => {
    const testList = null;
    const expectedResult = testInitialValue;
    const actualResult = foldRight(testFold)(testInitialValue)(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return initial value for empty list", () => {
    const testList = [];
    const expectedResult = testInitialValue;
    const actualResult = foldRight(testFold)(testInitialValue)(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return accumulated value for list", () => {
    const testValue1 = randomInt();
    const testValue2 = randomInt();
    const testValue3 = randomInt();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = testValue1 + testValue2 + testValue3;
    const actualResult = foldRight(testFold)(testInitialValue)(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
