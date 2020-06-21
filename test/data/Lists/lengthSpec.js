"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { Lists: { length } } = require("../../..");

describe("length", () => {
  const randomInt = () => Math.ceil(Math.random() * 10); // eslint-disable-line no-magic-numbers

  it("should return 0 for an non-Array list", () => {
    const testList = 0;
    const expectedResult = 0;
    const actualResult = length(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return 0 for an empty list", () => {
    const testList = [];
    const expectedResult = 0;
    const actualResult = length(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return length of list", () => {
    const testLength = randomInt();
    const testList = new Array(testLength);
    const expectedResult = testLength;
    const actualResult = length(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
