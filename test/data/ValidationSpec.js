/* eslint-disable max-lines */

"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Validation, Tuple } = require("../..");

/* eslint-disable max-lines-per-function */
describe("Validation", () => {
  describe(".concat", () => {
    it("should throw exception for non-Validation second", () => {
      const testSecond = null;
      const testFirst = Validation.Invalid(new Error());

      expect(() => Validation.concat(testSecond)(testFirst)).to.throw(
        TypeError,
        "second must be a Validation"
      );
    });

    it("should throw exception for non-Validation first", () => {
      const testSecond = Validation.Invalid(new Error());
      const testFirst = null;

      expect(() => Validation.concat(testSecond)(testFirst)).to.throw(
        TypeError,
        "first must be a Validation"
      );
    });

    it("should return first for both valids", () => {
      const testSecond = Validation.Valid(uuid());
      const testFirst = Validation.Valid(uuid());
      const expectedResult = testFirst;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return first for first invalid", () => {
      const testSecond = Validation.Valid(uuid());
      const testFirst = Validation.Invalid(new Error());
      const expectedResult = testFirst;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return second for second invalid", () => {
      const testSecond = Validation.Invalid(new Error());
      const testFirst = Validation.Valid(uuid());
      const expectedResult = testSecond;
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return concatenated invalids", () => {
      const testValue1 = new Error(uuid());
      const testValue2 = new Error(uuid());
      const testSecond = Validation.Invalid(testValue2);
      const testFirst = Validation.Invalid(testValue1);
      const expectedResult = Validation.Invalid([testValue1, testValue2]);
      const actualResult = Validation.concat(testSecond)(testFirst);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fromInvalid", () => {
    const testDefaultValue = uuid();

    it("should throw an exception for a non-Array defaultValues", () => {
      const testValidation = Validation.Valid(uuid());

      expect(() => Validation.fromInvalid(testDefaultValue)(testValidation)).to.throw(
        TypeError,
        "defaultValues must be an Array"
      );
    });

    it("should return the default value for undefined", () => {
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromInvalid([testDefaultValue])();

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return the default value for null", () => {
      const testValidation = null;
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromInvalid([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return the default value for Valid", () => {
      const testValidation = Validation.Valid(uuid());
      const expectedResult = [testDefaultValue];
      const actualResult = Validation.fromInvalid([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return value for Invalid", () => {
      const testInvalidValue = uuid();
      const testValidation = Validation.Invalid(testInvalidValue);
      const expectedResult = [testInvalidValue];
      const actualResult = Validation.fromInvalid([testDefaultValue])(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fromValid", () => {
    const testDefaultValue = uuid();

    it("should return default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromValid(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for null", () => {
      const testValidation = null;
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromValid(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for Invalid", () => {
      const testValidation = Validation.Invalid(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Validation.fromValid(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Valid", () => {
      const testValidValue = uuid();
      const testValidation = Validation.Valid(testValidValue);
      const expectedResult = testValidValue;
      const actualResult = Validation.fromValid(testDefaultValue)(testValidation);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".invalids", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Validation.invalids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Validation.invalids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Validation.invalids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Validation.invalids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of invalid values for mixed list", () => {
      const testInvalidValue1 = new Error(uuid());
      const testInvalidValue2 = new Error(uuid());
      const testValidValue1 = uuid();
      const testValidValue2 = uuid();
      const testList = [
        Validation.Invalid(testInvalidValue1),
        Validation.Invalid(testInvalidValue2),
        Validation.Valid(testValidValue1),
        Validation.Valid(testValidValue2)
      ];
      const expectedResult = [
        testInvalidValue1,
        testInvalidValue2
      ];
      const actualResult = Validation.invalids(testList);

      expect(actualResult).to.eql(expectedResult);
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
      const testInvalidValue1 = new Error(uuid());
      const testInvalidValue2 = new Error(uuid());
      const testValidValue1 = uuid();
      const testValidValue2 = uuid();
      const testList = [
        Validation.Invalid(testInvalidValue1),
        Validation.Invalid(testInvalidValue2),
        Validation.Valid(testValidValue1),
        Validation.Valid(testValidValue2)
      ];
      const expectedResult = Tuple.of(
        [testInvalidValue1, testInvalidValue2],
        [testValidValue1, testValidValue2]
      );
      const actualResult = Validation.partitionValidations(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".valids", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Validation.valids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Validation.valids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Validation.valids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Validation.valids(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of valid values for mixed list", () => {
      const testInvalidValue1 = new Error(uuid());
      const testInvalidValue2 = new Error(uuid());
      const testValidValue1 = uuid();
      const testValidValue2 = uuid();
      const testList = [
        Validation.Invalid(testInvalidValue1),
        Validation.Invalid(testInvalidValue2),
        Validation.Valid(testValidValue1),
        Validation.Valid(testValidValue2)
      ];
      const expectedResult = [
        testValidValue1,
        testValidValue2
      ];
      const actualResult = Validation.valids(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".validate", () => {
    const testInvalidValue = new Error(uuid());
    const testValue = uuid();

    it("should throw an exception for non-Function predicate", () => {
      const testPredicate = null;

      expect(() => Validation.validate(testPredicate)(testInvalidValue)(testValue)).to.throw(
        TypeError,
        "predicate must be a Function"
      );
    });

    it("should return invalid for false predicate", () => {
      const testPredicate = () => false;
      const expectedResult = Validation.Invalid(testInvalidValue);
      const actualResult = Validation.validate(testPredicate)(testInvalidValue)(testValue);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return valid for true predicate", () => {
      const testPredicate = () => true;
      const expectedResult = Validation.Valid(testValue);
      const actualResult = Validation.validate(testPredicate)(testInvalidValue)(testValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".validationMap", () => {
    it("should throw an exception for non-Function invalid morphism", () => {
      const testInvalidMorphism = null;
      const testValidMorphism = number => number.toFixed(2);
      const testValidation = Validation.Invalid(new Error(uuid()));

      expect(() => Validation.validationMap(testInvalidMorphism)(testValidMorphism)(testValidation)).to.throw(
        TypeError,
        "invalidMorphism must be a Function"
      );
    });

    it("should throw an exception for non-Function valid morphism", () => {
      const testInvalidMorphism = list => list.map(error => error.message).join(",");
      const testValidMorphism = null;
      const testValidation = Validation.Valid(Math.random());

      expect(() => Validation.validationMap(testInvalidMorphism)(testValidMorphism)(testValidation)).to.throw(
        TypeError,
        "validMorphism must be a Function"
      );
    });

    it("should throw an exception for non-Validation validation", () => {
      const testInvalidMorphism = list => list.map(error => error.message).join(",");
      const testValidMorphism = number => number.toFixed(2);
      const testValidation = null;

      expect(() => Validation.validationMap(testInvalidMorphism)(testValidMorphism)(testValidation)).to.throw(
        TypeError,
        "validation must be a Validation"
      );
    });

    it("should return mapped value for invalid", () => {
      const testInvalidMorphism = list => list.map(error => error.message).join(",");
      const testValidMorphism = number => number.toFixed(2);
      const testInvalidValues = [
        new Error(uuid()),
        new Error(uuid())
      ];
      const testValidation = Validation.Invalid(testInvalidValues);
      const expectedResult = testInvalidMorphism(testInvalidValues);
      const actualResult = Validation.validationMap(testInvalidMorphism)(testValidMorphism)(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return mapped value for valid", () => {
      const testInvalidMorphism = list => list.map(error => error.message).join(",");
      const testValidMorphism = number => number.toFixed(2);
      const testValue = Math.random();
      const testValidation = Validation.Valid(testValue);
      const expectedResult = testValidMorphism(testValue);
      const actualResult = Validation.validationMap(testInvalidMorphism)(testValidMorphism)(testValidation);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("Invalid", () => {
    const testInvalidValue = uuid();
    const testValidation = Validation.Invalid(testInvalidValue);

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
        const testOther = Validation.Invalid(uuid());
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testValidation.equals(testValidation);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Validation.Invalid(testInvalidValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Valid", () => {
        const testOther = Validation.Valid(testInvalidValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isInvalid", () => {
      it("should return true", () => {
        expect(testValidation.isInvalid()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isValid", () => {
      it("should return false", () => {
        expect(testValidation.isValid()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ invalid: [testInvalidValue] });
        const actualResult = JSON.stringify(testValidation);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const testInvalidValues = [uuid(), uuid()];
        const testInvalid = Validation.Invalid(testInvalidValues);
        const expectedResult = `Invalid([${testInvalidValues.join(",")}])`;
        const actualResult = testInvalid.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testInvalidValue };
      const testValidationObject = Validation.Invalid(testObject);
      const expectedResult = "Invalid([[object Object]])";
      const actualResult = testValidationObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("Valid", () => {
    const testValidValue = uuid();
    const testValidation = Validation.Valid(testValidValue);

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
        const testOther = Validation.Valid(uuid());
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testValidation.equals(testValidation);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Validation.Valid(testValidValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Invalid", () => {
        const testOther = Validation.Invalid(testValidValue);
        const actualResult = testValidation.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isInvalid", () => {
      it("should return false", () => {
        expect(testValidation.isInvalid()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isValid", () => {
      it("should return true", () => {
        expect(testValidation.isValid()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ valid: testValidValue });
        const actualResult = JSON.stringify(testValidation);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Valid(${testValidValue})`;
        const actualResult = testValidation.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testValidValue };
      const testValidationObject = Validation.Valid(testObject);
      const expectedResult = "Valid([object Object])";
      const actualResult = testValidationObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
