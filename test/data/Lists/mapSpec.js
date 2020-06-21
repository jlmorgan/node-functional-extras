"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { Lists: { map } } = require("../../..");

describe("map", () => {
  const randomInt = () => Math.ceil(Math.random() * 10); // eslint-disable-line no-magic-numbers

  it("should throw an exception for non-Array list", () => {
    const testList = 0;
    const testMorphism = value => value + 1;
    const expectedError = TypeError;
    const expectedMessage = "list must be an Array";

    expect(() => map(testMorphism)(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should throw an exception for non-Function morphism", () => {
    const testList = [];
    const testMorphism = 0;
    const expectedError = TypeError;
    const expectedMessage = "morphism must be a Function";

    expect(() => map(testMorphism)(testList)).to.throw(expectedError, expectedMessage);
  });

  it("should return mapped list", () => {
    const testMorphism = value => value + 1;
    const testValue1 = randomInt();
    const testValue2 = randomInt();
    const testValue3 = randomInt();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = [testValue1 + 1, testValue2 + 1, testValue3 + 1];
    const actualResult = map(testMorphism)(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
