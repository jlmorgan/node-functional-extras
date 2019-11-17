"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { Lists: { empty } } = require("../../..");

describe("empty", () => {
  it("should return empty list", () => {
    const expectedResult = [];
    const actualResult = empty();

    expect(actualResult).to.eql(expectedResult);
  });
});
