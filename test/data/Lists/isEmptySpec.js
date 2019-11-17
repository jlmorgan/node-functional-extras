"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Lists: { isEmpty } } = require("../../..");

describe("isEmpty", () => {
  it("should return true for undefined list", () => {
    const testList = undefined;
    const actualResult = isEmpty(testList);

    expect(actualResult).to.be.true;
  });

  it("should return true for null list", () => {
    const testList = null;
    const actualResult = isEmpty(testList);

    expect(actualResult).to.be.true;
  });

  it("should return true for empty list", () => {
    const testList = [];
    const actualResult = isEmpty(testList);

    expect(actualResult).to.be.true;
  });

  it("should return false for a blank list", () => {
    const testList = [undefined, null];
    const actualResult = isEmpty(testList);

    expect(actualResult).to.be.false;
  });

  it("should return false for non-empty list", () => {
    const testList = [uuid(), uuid(), uuid()];
    const actualResult = isEmpty(testList);

    expect(actualResult).to.be.false;
  });
});
