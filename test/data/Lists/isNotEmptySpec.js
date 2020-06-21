"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Lists: { isNotEmpty } } = require("../../..");

describe("isNotEmpty", () => {
  it("should return false for undefined list", () => {
    const testList = undefined;
    const actualResult = isNotEmpty(testList);

    expect(actualResult).to.be.false;
  });

  it("should return false for null list", () => {
    const testList = null;
    const actualResult = isNotEmpty(testList);

    expect(actualResult).to.be.false;
  });

  it("should return false for empty list", () => {
    const testList = [];
    const actualResult = isNotEmpty(testList);

    expect(actualResult).to.be.false;
  });

  it("should return true for a blank list", () => {
    const testList = [undefined, null];
    const actualResult = isNotEmpty(testList);

    expect(actualResult).to.be.true;
  });

  it("should return true for non-empty list", () => {
    const testList = [uuid(), uuid(), uuid()];
    const actualResult = isNotEmpty(testList);

    expect(actualResult).to.be.true;
  });
});
