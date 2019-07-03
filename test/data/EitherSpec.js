/* eslint-disable max-lines */

"use strict";

// Third Party
const { expect } = require("chai");
const uuid = require("uuid/v4");

// Project
const { Either, Tuple } = require("../..");

/* eslint-disable max-lines-per-function */
describe("Either", () => {
  describe(".eitherMap", () => {
    it("should throw exception for a non-function Left morphism", () => {
      const testLeftMorphism = null;
      const testRightMorphism = value => value.length;
      const testEither = Either.Right(uuid());

      expect(() => Either.eitherMap(testLeftMorphism)(testRightMorphism)(testEither)).to.throw(
        TypeError,
        "leftMorphism must be a Function"
      );
    });

    it("should throw exception for a non-function Right morphism", () => {
      const testLeftMorphism = error => error.message;
      const testRightMorphism = null;
      const testEither = Either.Right(uuid());

      expect(() => Either.eitherMap(testLeftMorphism)(testRightMorphism)(testEither)).to.throw(
        TypeError,
        "rightMorphism must be a Function"
      );
    });

    it("should throw exception for a non-Either either", () => {
      const testLeftMorphism = error => error.message;
      const testRightMorphism = value => value.length;
      const testEither = null;

      expect(() => Either.eitherMap(testLeftMorphism)(testRightMorphism)(testEither)).to.throw(
        TypeError,
        "either must be an Either"
      );
    });

    it("should return mapped value for Left", () => {
      const testLeftValue = new Error(uuid);
      const testLeftMorphism = error => error.message;
      const testRightMorphism = value => value.length;
      const testEither = Either.Left(testLeftValue);
      const expectedResult = testLeftValue.message;
      const actualResult = Either.eitherMap(testLeftMorphism)(testRightMorphism)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return mapped value for Right", () => {
      const testRightValue = uuid();
      const testLeftMorphism = error => error.message;
      const testRightMorphism = value => value.length;
      const testEither = Either.Right(testRightValue);
      const expectedResult = testRightValue.length;
      const actualResult = Either.eitherMap(testLeftMorphism)(testRightMorphism)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".fromLeft", () => {
    const testDefaultValue = uuid();

    it("should return the default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromLeft(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return the default value for null", () => {
      const testEither = null;
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromLeft(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return the default value for Right", () => {
      const testEither = Either.Right(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromLeft(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Left", () => {
      const testLeftValue = uuid();
      const testEither = Either.Left(testLeftValue);
      const expectedResult = testLeftValue;
      const actualResult = Either.fromLeft(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".fromRight", () => {
    const testDefaultValue = uuid();

    it("should return default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromRight(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for null", () => {
      const testEither = null;
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromRight(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for Left", () => {
      const testEither = Either.Left(uuid());
      const expectedResult = testDefaultValue;
      const actualResult = Either.fromRight(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return value for Right", () => {
      const testRightValue = uuid();
      const testEither = Either.Right(testRightValue);
      const expectedResult = testRightValue;
      const actualResult = Either.fromRight(testDefaultValue)(testEither);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".lefts", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Either.lefts(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Either.lefts(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Either.lefts(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Either.lefts(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of Left values for mixed list", () => {
      const testLeftValue1 = new Error(uuid());
      const testLeftValue2 = new Error(uuid());
      const testRightValue1 = uuid();
      const testRightValue2 = uuid();
      const testList = [
        Either.Left(testLeftValue1),
        Either.Left(testLeftValue2),
        Either.Right(testRightValue1),
        Either.Right(testRightValue2)
      ];
      const expectedResult = [
        testLeftValue1,
        testLeftValue2
      ];
      const actualResult = Either.lefts(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".partitionEithers", () => {
    it("should return empty lists for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = Tuple.of([], []);
      const actualResult = Either.partitionEithers(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for null list", () => {
      const testList = null;
      const expectedResult = Tuple.of([], []);
      const actualResult = Either.partitionEithers(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for empty list", () => {
      const testList = [];
      const expectedResult = Tuple.of([], []);
      const actualResult = Either.partitionEithers(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty lists for blank list", () => {
      const testList = [null];
      const expectedResult = Tuple.of([], []);
      const actualResult = Either.partitionEithers(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of Right values for mixed list", () => {
      const testLeftValue1 = new Error(uuid());
      const testLeftValue2 = new Error(uuid());
      const testRightValue1 = uuid();
      const testRightValue2 = uuid();
      const testList = [
        Either.Left(testLeftValue1),
        Either.Left(testLeftValue2),
        Either.Right(testRightValue1),
        Either.Right(testRightValue2)
      ];
      const expectedResult = Tuple.of(
        [testLeftValue1, testLeftValue2],
        [testRightValue1, testRightValue2]
      );
      const actualResult = Either.partitionEithers(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".rights", () => {
    it("should return empty list for undefined list", () => {
      const testList = undefined; // eslint-disable-line no-undefined
      const expectedResult = [];
      const actualResult = Either.rights(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Either.rights(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Either.rights(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Either.rights(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of Right values for mixed list", () => {
      const testLeftValue1 = new Error(uuid());
      const testLeftValue2 = new Error(uuid());
      const testRightValue1 = uuid();
      const testRightValue2 = uuid();
      const testList = [
        Either.Left(testLeftValue1),
        Either.Left(testLeftValue2),
        Either.Right(testRightValue1),
        Either.Right(testRightValue2)
      ];
      const expectedResult = [
        testRightValue1,
        testRightValue2
      ];
      const actualResult = Either.rights(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("Left", () => {
    const testLeftValue = uuid();
    const testEither = Either.Left(testLeftValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testEither.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Either.Left(uuid());
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testEither.equals(testEither);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Either.Left(testLeftValue);
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Right", () => {
        const testOther = Either.Right(testLeftValue);
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isLeft", () => {
      it("should return true", () => {
        expect(testEither.isLeft()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isRight", () => {
      it("should return false", () => {
        expect(testEither.isRight()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ left: testLeftValue });
        const actualResult = JSON.stringify(testEither);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Left(${testLeftValue})`;
        const actualResult = testEither.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testLeftValue };
      const testEitherObject = Either.Left(testObject);
      const expectedResult = "Left([object Object])";
      const actualResult = testEitherObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("Right", () => {
    const testRightValue = uuid();
    const testEither = Either.Right(testRightValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testEither.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Either.Right(uuid());
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const actualResult = testEither.equals(testEither);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Either.Right(testRightValue);
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return false for same value, but Left", () => {
        const testOther = Either.Left(testRightValue);
        const actualResult = testEither.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isLeft", () => {
      it("should return false", () => {
        expect(testEither.isLeft()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isRight", () => {
      it("should return true", () => {
        expect(testEither.isRight()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify({ right: testRightValue });
        const actualResult = JSON.stringify(testEither);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Right(${testRightValue})`;
        const actualResult = testEither.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testRightValue };
      const testEitherObject = Either.Right(testObject);
      const expectedResult = "Right([object Object])";
      const actualResult = testEitherObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
