/* eslint-disable max-lines */

"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Validation, Tuple } = require("../..");

/* eslint-disable max-lines-per-function */
describe("Validation", () => {
  describe(".concat", () => {
    it("should throw exception for non-Validation second", () => {
      const testSecond = null;
      const testFirst = Validation.Failure(new Error());

      expect(() => Validation.concat(testSecond)(testFirst)).to.throw(
        TypeError,
        "second must be a Validation"
      );
    });

    it("should throw exception for non-Validation first", () => {
      const testSecond = Validation.Failure(new Error());
      const testFirst = null;

      expect(() => Validation.concat(testSecond)(testFirst)).to.throw(
        TypeError,
        "first must be a Validation"
      );
    });

    it("should return first for both successes", () => {
      const testSecond = Validation.Success(uuid());
      const testFirst = Validation.Success(uuid());
      const expectedResult = testFirst;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return first for first failure", () => {
      const testSecond = Validation.Success(uuid());
      const testFirst = Validation.Failure(new Error());
      const expectedResult = testFirst;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return second for second failure", () => {
      const testSecond = Validation.Failure(new Error());
      const testFirst = Validation.Success(uuid());
      const expectedResult = testSecond;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return concatenated failures", () => {
      const testValue1 = new Error(uuid());
      const testValue2 = new Error(uuid());
      const testSecond = Validation.Failure(testValue2);
      const testFirst = Validation.Failure(testValue1);
      const expectedResult = Validation.Failure([testValue1, testValue2]);
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".failures", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Validation.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Validation.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Validation.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Validation.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of failure values for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Validation.Failure(testFailureValue1),
        Validation.Failure(testFailureValue2),
        Validation.Success(testSuccessValue1),
        Validation.Success(testSuccessValue2)
      ];
      const expectedResult = [
        testFailureValue1,
        testFailureValue2
      ];
      const actualResult = Validation.failures(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fromFailure", () => {
    const testDefaultValue = uuid();

    it("should throw an exception for a non-Array defaultValues", () => {
      const testValidation = Validation.Success(uuid());

      expect(() => Validation.fromFailure(testDefaultValue)(testValidation)).to.throw(
        TypeError,
        "defaultValues must be an Array"
      );
    });

    it("should return the default value for undefined", () => {
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromFailure([testDefaultValue])();

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return the default value for null", () => {
      const testValidation = null;
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromFailure([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return the default value for Success", () => {
      const testValidation = Validation.Success(uuid());
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromFailure([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return value for Failure", () => {
      const testFailureValue = uuid();
      const testValidation = Validation.Failure(testFailureValue);
      const expectedResult = [testFailureValue];
      const actualResult = Validation.fromFailure([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fromSuccess", () => {
    const testDefaultValue = uuid();

    it("should return default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromSuccess(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for null", () => {
      const testValidation = null;
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromSuccess(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for Failure", () => {
      const testValidation = Validation.Failure(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromSuccess(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Success", () => {
      const testSuccessValue = uuid();
      const testValidation = Validation.Success(testSuccessValue);
      const expectedResult = testSuccessValue;
      const actualResult = Validation.fromSuccess(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".partitionValidations", () => {
    it("should return empty lists for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = Tuple.of([], []);
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for null list", () => {
      const testList = null;
      const expectedResult = Tuple.of([], []);
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for empty list", () => {
      const testList = [];
      const expectedResult = Tuple.of([], []);
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for blank list", () => {
      const testList = [null];
      const expectedResult = Tuple.of([], []);
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return lists for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Validation.Failure(testFailureValue1),
        Validation.Failure(testFailureValue2),
        Validation.Success(testSuccessValue1),
        Validation.Success(testSuccessValue2)
      ];
      const expectedResult = Tuple.of(
        [testFailureValue1, testFailureValue2],
        [testSuccessValue1, testSuccessValue2]
      );
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".successes", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Validation.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Validation.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Validation.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Validation.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of success values for mixed list", () => {
      const testFailureValue1 = new Error(uuid());
      const testFailureValue2 = new Error(uuid());
      const testSuccessValue1 = uuid();
      const testSuccessValue2 = uuid();
      const testList = [
        Validation.Failure(testFailureValue1),
        Validation.Failure(testFailureValue2),
        Validation.Success(testSuccessValue1),
        Validation.Success(testSuccessValue2)
      ];
      const expectedResult = [
        testSuccessValue1,
        testSuccessValue2
      ];
      const actualResult = Validation.successes(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".validate", () => {
    const testFailureValue = new Error(uuid());
    const testValue = uuid();

    it("should throw an exception for non-Function predicate", () => {
      const testPredicate = null;

      expect(() => Validation.validate(testPredicate)(testFailureValue)(testValue)).to.throw(
        TypeError,
        "predicate must be a Function"
      );
    });

    it("should return failure for false predicate", () => {
      const testPredicate = () => false;
      const expectedResult = Validation.Failure(testFailureValue);
      const actualResult = Validation.validate(testPredicate)(testFailureValue)(testValue);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return success for true predicate", () => {
      const testPredicate = () => true;
      const expectedResult = Validation.Success(testValue);
      const actualResult = Validation.validate(testPredicate)(testFailureValue)(testValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".validationMap", () => {
    it("should throw an exception for non-Function failure morphism", () => {
      const testFailureMorphism = null;
      const testSuccessMorphism = number => number.toFixed(2);
      const testValidation = Validation.Failure(new Error(uuid()));

      expect(() => Validation.validationMap(testFailureMorphism)(testSuccessMorphism)(testValidation)).to.throw(
        TypeError,
        "failureMorphism must be a Function"
      );
    });

    it("should throw an exception for non-Function success morphism", () => {
      const testFailureMorphism = list => list.map(error => error.message).join(",");
      const testSuccessMorphism = null;
      const testValidation = Validation.Success(Math.random());

      expect(() => Validation.validationMap(testFailureMorphism)(testSuccessMorphism)(testValidation)).to.throw(
        TypeError,
        "successMorphism must be a Function"
      );
    });

    it("should throw an exception for non-Validation validation", () => {
      const testFailureMorphism = list => list.map(error => error.message).join(",");
      const testSuccessMorphism = number => number.toFixed(2);
      const testValidation = null;

      expect(() => Validation.validationMap(testFailureMorphism)(testSuccessMorphism)(testValidation)).to.throw(
        TypeError,
        "validation must be a Validation"
      );
    });

    it("should return mapped value for failure", () => {
      const testFailureMorphism = list => list.map(error => error.message).join(",");
      const testSuccessMorphism = number => number.toFixed(2);
      const testFailureValues = [
        new Error(uuid()),
        new Error(uuid())
      ];
      const testValidation = Validation.Failure(testFailureValues);
      const expectedResult = testFailureMorphism(testFailureValues);
      const actualResult = Validation.validationMap(testFailureMorphism)(testSuccessMorphism)(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return mapped value for success", () => {
      const testFailureMorphism = list => list.map(error => error.message).join(",");
      const testSuccessMorphism = number => number.toFixed(2);
      const testValue = Math.random();
      const testValidation = Validation.Success(testValue);
      const expectedResult = testSuccessMorphism(testValue);
      const actualResult = Validation.validationMap(testFailureMorphism)(testSuccessMorphism)(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("Failure", () => {
    const testFailureValue = uuid();
    const testValidation = Validation.Failure(testFailureValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testValidation.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Validation.Failure(uuid());
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testValidation.equals(testValidation);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Validation.Failure(testFailureValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Success", () => {
        const testOther = Validation.Success(testFailureValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isFailure", () => {
      it("should return true", () => {
        expect(testValidation.isFailure()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isSuccess", () => {
      it("should return false", () => {
        expect(testValidation.isSuccess()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ failure: [testFailureValue] });
        const actualResult = JSON.stringify(testValidation);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const testFailureValues = [uuid(), uuid()];
        const testFailure = Validation.Failure(testFailureValues);
        const expectedResult = `Failure([${testFailureValues.join(",")}])`;
        const actualResult = testFailure.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testFailureValue };
      const testValidationObject = Validation.Failure(testObject);
      const expectedResult = "Failure([[object Object]])";
      const actualResult = testValidationObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("Success", () => {
    const testSuccessValue = uuid();
    const testValidation = Validation.Success(testSuccessValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testValidation.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Validation.Success(uuid());
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testValidation.equals(testValidation);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Validation.Success(testSuccessValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Failure", () => {
        const testOther = Validation.Failure(testSuccessValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isFailure", () => {
      it("should return false", () => {
        expect(testValidation.isFailure()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isSuccess", () => {
      it("should return true", () => {
        expect(testValidation.isSuccess()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ success: testSuccessValue });
        const actualResult = JSON.stringify(testValidation);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Success(${testSuccessValue})`;
        const actualResult = testValidation.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testSuccessValue };
      const testValidationObject = Validation.Success(testObject);
      const expectedResult = "Success([object Object])";
      const actualResult = testValidationObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
