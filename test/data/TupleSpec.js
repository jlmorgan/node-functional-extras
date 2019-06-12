"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Tuple } = require("../..");

/* eslint-disable max-lines-per-function */
describe("Tuple", () => {
  const testFirstValue = uuid();
  const testSecondValue = uuid();

  describe(".isTuple", () => {
    it("should return false for non-Tuple", () => {
      const actualResult = Tuple.isTuple(testFirstValue);

      expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return true for Tuple", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const actualResult = Tuple.isTuple(testTuple);

      expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });

  describe(".of", () => {
    it("should match un-curried result", () => {
      const expectedResult = Tuple.of(testFirstValue, testSecondValue);
      const actualResult = Tuple.of(testFirstValue)(testSecondValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("#equals", () => {
    it("should return false for differing first values", () => {
      const testTuple1 = Tuple.of(uuid(), testSecondValue);
      const testTuple2 = Tuple.of(uuid(), testSecondValue);

      expect(testTuple1.equals(testTuple2)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for differing second values", () => {
      const testTuple1 = Tuple.of(testFirstValue, uuid());
      const testTuple2 = Tuple.of(testFirstValue, uuid());

      expect(testTuple1.equals(testTuple2)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for differing type", () => {
      const testTuple1 = Tuple.of(testFirstValue, uuid());
      const testOther = {};

      expect(testTuple1.equals(testOther)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for null", () => {
      const testTuple = Tuple.of(testFirstValue, uuid());
      const testOther = null;

      expect(testTuple.equals(testOther)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return true for same instance", () => {
      const testTuple = Tuple.of(testFirstValue, uuid());

      expect(testTuple.equals(testTuple)).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it("should return true for same values", () => {
      const testTuple1 = Tuple.of(testFirstValue, testSecondValue);
      const testTuple2 = Tuple.of(testFirstValue, testSecondValue);

      expect(testTuple1.equals(testTuple2)).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });

  describe("#first", () => {
    it("should return first element", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const expectedResult = testFirstValue;
      const actualResult = testTuple.first();

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("#second", () => {
    it("should return second element", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const expectedResult = testSecondValue;
      const actualResult = testTuple.second();

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("#swap", () => {
    it("", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const expectedResult = Tuple.of(testSecondValue, testFirstValue);
      const actualResult = testTuple.swap();

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("#toJSON", () => {
    it("should return the JSON formatted String", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const expectedResult = JSON.stringify({
        "tuple": [testFirstValue, testSecondValue]
      });
      const actualResult = testTuple.toJSON();

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("#toString", () => {
    it("should return the String representation", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const expectedResult = `Tuple(${testFirstValue}, ${testSecondValue})`;
      const actualResult = testTuple.toString();

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
