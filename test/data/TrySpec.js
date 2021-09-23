"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Try, Tuple } = require("../..");

describe("Try", () => {
  describe(".tryMap", () => {
    it("should throw exception for a non-Function Failure morphism", () => {
      const testFailureMorphism = null;
      const testSuccessMorphism = value => value.length;
      const testTry = Try.Failure(uuid());

      expect(() => Try.tryMap(testFailureMorphism)(testSuccessMorphism)(testTry)).to.throw(
        TypeError,
        "failureMorphism must be a Function"
      );
    });

    it("should throw exception for a non-Function Success morphism", () => {
      const testFailureMorphism = error => error.message;
      const testSuccessMorphism = null;
      const testTry = Try.Success(uuid());

      expect(() => Try.tryMap(testFailureMorphism)(testSuccessMorphism)(testTry)).to.throw(
        TypeError,
        "successMorphism must be a Function"
      );
    });

    it("should throw exception for a non-Try instance", () => {
      const testFailureMorphism = error => error.message;
      const testSuccessMorphism = value => value.length;
      const testTry = null;

      expect(() => Try.tryMap(testFailureMorphism)(testSuccessMorphism)(testTry)).to.throw(
        TypeError,
        "instance must be an Try"
      );
    });

    it("should return mapped value for Failure", () => {
      const testFailureValue = new Error(uuid);
      const testFailureMorphism = error => error.message;
      const testSuccessMorphism = value => value.length;
      const testTry = Try.Failure(testFailureValue);
      const expectedResult = testFailureValue.message;
      const actualResult = Try.tryMap(testFailureMorphism)(testSuccessMorphism)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return mapped value for Success", () => {
      const testSuccessValue = uuid();
      const testFailureMorphism = error => error.message;
      const testSuccessMorphism = value => value.length;
      const testTry = Try.Success(testSuccessValue);
      const expectedResult = testSuccessValue.length;
      const actualResult = Try.tryMap(testFailureMorphism)(testSuccessMorphism)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".fromFailure", () => {
    const testDefaultValue = uuid();

    it("should return the default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromFailure(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return the default value for null", () => {
      const testTry = null;
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromFailure(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return the default value for Success", () => {
      const testTry = Try.Success(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromFailure(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Failure", () => {
      const testFailureValue = uuid();
      const testTry = Try.Failure(testFailureValue);
      const expectedResult = testFailureValue;
      const actualResult = Try.fromFailure(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".fromSuccess", () => {
    const testDefaultValue = uuid();

    it("should return default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromSuccess(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for null", () => {
      const testTry = null;
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromSuccess(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for Failure", () => {
      const testTry = Try.Failure(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Try.fromSuccess(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Success", () => {
      const testSuccessValue = uuid();
      const testTry = Try.Success(testSuccessValue);
      const expectedResult = testSuccessValue;
      const actualResult = Try.fromSuccess(testDefaultValue)(testTry);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".failures", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Try.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Try.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Try.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Try.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of Failure values for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Try.Failure(testFailureValue1),
        Try.Failure(testFailureValue2),
        Try.Success(testSuccessValue1),
        Try.Success(testSuccessValue2)
      ];
      const expectedResult = [
        testFailureValue1,
        testFailureValue2
      ];
      const actualResult = Try.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".partitionTries", () => {
    it("should return empty lists for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = Tuple.of([], []);
      const actualResult = Try.partitionTries(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for null list", () => {
      const testList = null;
      const expectedResult = Tuple.of([], []);
      const actualResult = Try.partitionTries(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for empty list", () => {
      const testList = [];
      const expectedResult = Tuple.of([], []);
      const actualResult = Try.partitionTries(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for blank list", () => {
      const testList = [null];
      const expectedResult = Tuple.of([], []);
      const actualResult = Try.partitionTries(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return lists for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Try.Failure(testFailureValue1),
        Try.Failure(testFailureValue2),
        Try.Success(testSuccessValue1),
        Try.Success(testSuccessValue2)
      ];
      const expectedResult = Tuple.of(
        [testFailureValue1, testFailureValue2],
        [testSuccessValue1, testSuccessValue2]
      );
      const actualResult = Try.partitionTries(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".successes", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Try.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Try.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Try.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Try.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of Success values for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Try.Failure(testFailureValue1),
        Try.Failure(testFailureValue2),
        Try.Success(testSuccessValue1),
        Try.Success(testSuccessValue2)
      ];
      const expectedResult = [
        testSuccessValue1,
        testSuccessValue2
      ];
      const actualResult = Try.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("Failure", () => {
    const testFailureValue = uuid();
    const testTry = Try.Failure(testFailureValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testTry.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Try.Failure(uuid());
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testTry.equals(testTry);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Try.Failure(testFailureValue);
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Success", () => {
        const testOther = Try.Success(testFailureValue);
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isFailure", () => {
      it("should return true", () => {
        expect(testTry.isFailure()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isSuccess", () => {
      it("should return false", () => {
        expect(testTry.isSuccess()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ failure: testFailureValue });
        const actualResult = JSON.stringify(testTry);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Failure(${testFailureValue})`;
        const actualResult = testTry.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testFailureValue };
      const testTryObject = Try.Failure(testObject);
      const expectedResult = "Failure([object Object])";
      const actualResult = testTryObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("Success", () => {
    const testSuccessValue = uuid();
    const testTry = Try.Success(testSuccessValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testTry.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Try.Success(uuid());
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testTry.equals(testTry);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Try.Success(testSuccessValue);
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Failure", () => {
        const testOther = Try.Failure(testSuccessValue);
        const actualResult = testTry.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isFailure", () => {
      it("should return false", () => {
        expect(testTry.isFailure()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isSuccess", () => {
      it("should return true", () => {
        expect(testTry.isSuccess()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ success: testSuccessValue });
        const actualResult = JSON.stringify(testTry);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Success(${testSuccessValue})`;
        const actualResult = testTry.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testSuccessValue };
      const testTryObject = Try.Success(testObject);
      const expectedResult = "Success([object Object])";
      const actualResult = testTryObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
