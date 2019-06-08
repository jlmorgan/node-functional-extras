"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { id } = require("../../..");

describe("id", () => {
  it("should return value", () => {
    const testValue = uuid();
    const expectedResult = testValue;
    const actualResult = id(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
