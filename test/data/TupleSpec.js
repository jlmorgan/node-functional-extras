"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Tuple } = require("../..");

describe("Tuple", () => {
  const testFirstValue = uuid();
  const testSecondValue = uuid();

  describe(".isTuple", () => {
    it("should return false for non-Tuple", () => {
      const actualResult = Tuple.isTuple(testFirstValue);

      expect(actualResult).to.be.false;
    });

    it("should return true for Tuple", () => {
      const testTuple = Tuple.of(testFirstValue, testSecondValue);
      const actualResult = Tuple.isTuple(testTuple);

      expect(actualResult).to.be.true;
    });
  });

  describe(".of", () => {
    it("should match un-curried result", () => {
      const expectedResult = Tuple.of(testFirstValue, testSecondValue);
      const actualResult = Tuple.of(testFirstValue)(testSecondValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".tupleMap", () => {
    const randomInt = () => Math.ceil(Math.random() * 10); // eslint-disable-line no-magic-numbers

    it("should throw an error if the first morphism is not a Function", () => {
      const testFirstMorphism = 0;
      const testSecondMorphism = value => value + 2;
      const testValue = randomInt();
      const expectedError = TypeError;
      const expectedMessage = "firstMorphism must be a Function";

      expect(() => Tuple.tupleMap(testFirstMorphism)(testSecondMorphism)(testValue))
        .to.throw(expectedError, expectedMessage);
    });

    it("should throw an error if the second morphism is not a Function", () => {
      const testFirstMorphism = value => value + 1;
      const testSecondMorphism = 0;
      const testValue = randomInt();
      const expectedError = TypeError;
      const expectedMessage = "secondMorphism must be a Function";

      expect(() => Tuple.tupleMap(testFirstMorphism)(testSecondMorphism)(testValue))
        .to.throw(expectedError, expectedMessage);
    });

    it("should return a tuple of the mapped values", () => {
      const testFirstMorphism = value => value + 1;
      const testSecondMorphism = value => value + 2;
      const testValue = randomInt();
      const expectedResult = Tuple.of(testValue + 1, testValue + 2);
      const actualResult = Tuple.tupleMap(testFirstMorphism)(testSecondMorphism)(testValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("#equals", () => {
    it("should return false for differing first values", () => {
      const testTuple1 = Tuple.of(uuid(), testSecondValue);
      const testTuple2 = Tuple.of(uuid(), testSecondValue);

      expect(testTuple1.equals(testTuple2)).to.be.false;
    });

    it("should return false for differing second values", () => {
      const testTuple1 = Tuple.of(testFirstValue, uuid());
      const testTuple2 = Tuple.of(testFirstValue, uuid());

      expect(testTuple1.equals(testTuple2)).to.be.false;
    });

    it("should return false for differing type", () => {
      const testTuple1 = Tuple.of(testFirstValue, uuid());
      const testOther = {};

      expect(testTuple1.equals(testOther)).to.be.false;
    });

    it("should return false for null", () => {
      const testTuple = Tuple.of(testFirstValue, uuid());
      const testOther = null;

      expect(testTuple.equals(testOther)).to.be.false;
    });

    it("should return true for same instance", () => {
      const testTuple = Tuple.of(testFirstValue, uuid());

      expect(testTuple.equals(testTuple)).to.be.true;
    });

    it("should return true for same values", () => {
      const testTuple1 = Tuple.of(testFirstValue, testSecondValue);
      const testTuple2 = Tuple.of(testFirstValue, testSecondValue);

      expect(testTuple1.equals(testTuple2)).to.be.true;
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
      const actualResult = JSON.stringify(testTuple);

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
