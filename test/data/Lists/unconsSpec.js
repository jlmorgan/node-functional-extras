"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const {
  Lists: { uncons },
  Maybe,
  Tuple
} = require("../../..");

describe("uncons", () => {
  it("should return Nothing for an non-Array list", () => {
    const testList = 0;
    const expectedResult = Maybe.Nothing();
    const actualResult = uncons(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return Nothing for an empty list", () => {
    const testList = [];
    const expectedResult = Maybe.Nothing();
    const actualResult = uncons(testList);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return Just of Tuple of head and tail of list", () => {
    const testValue1 = uuid();
    const testValue2 = uuid();
    const testValue3 = uuid();
    const testList = [testValue1, testValue2, testValue3];
    const expectedResult = Maybe.Just(Tuple.of(testValue1, [testValue2, testValue3]));
    const actualResult = uncons(testList);

    expect(actualResult).to.eql(expectedResult);
  });
});
