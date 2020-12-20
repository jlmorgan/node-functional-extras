"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { isSome, Maybe } = require("../..");

describe("Maybe", () => {
  describe(".catMaybes", () => {
    it("should return empty list for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Maybe.catMaybes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Maybe.catMaybes(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of non-null values for mixed list", () => {
      const testValue1 = uuid();
      const testValue2 = uuid();
      const testList = [
        Maybe.Just(testValue1),
        Maybe.Nothing(),
        Maybe.Just(testValue2),
        Maybe.Nothing()
      ];
      const expectedResult = [testValue1, testValue2];
      const actualResult = Maybe.catMaybes(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".filter", () => {
    const testPredicate = value => value % 2 === 0;

    it("should throw exception for non-Function predicate", () => {
      const testMaybe = Maybe.Just(0);

      expect(() => Maybe.filter(null, testMaybe)).to.throw(
        TypeError,
        "predicate must be a Function"
      );
    });

    it("should throw exception for non-Maybe maybe", () => {
      const testMaybe = null;

      expect(() => Maybe.filter(testPredicate, testMaybe)).to.throw(
        TypeError,
        "maybe must be a Maybe"
      );
    });

    it("should return Just for true predicate", () => {
      const testMaybe = Maybe.Just(0);
      const expectedResult = testMaybe;
      const actualResult = Maybe.filter(testPredicate)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Nothing for false predicate", () => {
      const testMaybe = Maybe.Just(1);
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.filter(testPredicate)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Nothing for Nothing", () => {
      const testMaybe = Maybe.Nothing();
      const expectedResult = testMaybe;
      const actualResult = Maybe.filter(testPredicate)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fmap", () => {
    const testMorphism = list => list[0];

    it("should throw exception for non-Function morphism", () => {
      const testMaybe = Maybe.Just(0);

      expect(() => Maybe.fmap(null, testMaybe)).to.throw(
        TypeError,
        "morphism must be a Function"
      );
    });

    it("should throw exception for non-Maybe maybe", () => {
      const testMaybe = null;

      expect(() => Maybe.fmap(testMorphism, testMaybe)).to.throw(
        TypeError,
        "maybe must be a Maybe"
      );
    });

    it("should map the underlying value", () => {
      const testValue = [uuid()];
      const testMaybe = Maybe.Just(testValue);
      const expectedResult = Maybe.Just(testValue[0]);
      const actualResult = Maybe.fmap(testMorphism)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Nothing for null return value", () => {
      const testMaybe = Maybe.Just([null]);
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.fmap(testMorphism)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Nothing for Nothing", () => {
      const testMaybe = Maybe.Nothing();
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.fmap(testMorphism)(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".fromJust", () => {
    it("should throw exception for undefined", () => {
      expect(() => Maybe.fromJust()).to.throw(
        TypeError,
        "maybe must not be Nothing"
      );
    });

    it("should throw exception for null", () => {
      expect(() => Maybe.fromJust(null)).to.throw(
        TypeError,
        "maybe must not be Nothing"
      );
    });

    it("should throw exception for nothing", () => {
      expect(() => Maybe.fromJust(Maybe.Nothing())).to.throw(
        TypeError,
        "maybe must not be Nothing"
      );
    });

    it("should return value for just", () => {
      const testValue = uuid();
      const testMaybe = Maybe.Just(testValue);
      const expectedResult = testValue;
      const actualResult = Maybe.fromJust(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".fromMaybe", () => {
    const testDefaultValue = uuid();

    it("should return default value for undefined", () => {
      const expectedResult = testDefaultValue;
      const actualResult = Maybe.fromMaybe(testDefaultValue)();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for null", () => {
      const testMaybe = null;
      const expectedResult = testDefaultValue;
      const actualResult = Maybe.fromMaybe(testDefaultValue)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for nothing", () => {
      const testMaybe = Maybe.Nothing();
      const expectedResult = testDefaultValue;
      const actualResult = Maybe.fromMaybe(testDefaultValue)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should value for just", () => {
      const testValue = uuid();
      const testMaybe = Maybe.Just(testValue);
      const expectedResult = testValue;
      const actualResult = Maybe.fromMaybe(testDefaultValue)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".isJust", () => {
    it("should return false for undefined", () => {
      expect(Maybe.isJust()).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for null", () => {
      expect(Maybe.isJust(null)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for Nothing", () => {
      expect(Maybe.isJust(Maybe.Nothing())).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return true for Just", () => {
      expect(Maybe.isJust(Maybe.Just(uuid))).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });

  describe(".isNothing", () => {
    it("should return false for undefined", () => {
      expect(Maybe.isNothing()).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for null", () => {
      expect(Maybe.isNothing(null)).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return true for Nothing", () => {
      expect(Maybe.isNothing(Maybe.Nothing())).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it("should return false for Just", () => {
      expect(Maybe.isNothing(Maybe.Just(uuid))).to.be.false; // eslint-disable-line no-unused-expressions
    });
  });

  describe(".Just", () => {
    it("should throw exception for undefined", () => {
      expect(() => Maybe.Just()).to.throw(TypeError, "value must not be null or undefined");
    });

    it("should throw exception for null", () => {
      expect(() => Maybe.Just(null)).to.throw(TypeError, "value must not be null or undefined");
    });
  });

  describe(".listToMaybe", () => {
    it("should return Nothing for undefined list", () => {
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.listToMaybe();

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return Nothing for null list", () => {
      const testList = null;
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.listToMaybe(testList);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return Nothing for empty list", () => {
      const testList = [];
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.listToMaybe(testList);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return Nothing for blank list", () => {
      const testList = [null];
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.listToMaybe(testList);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return Just for first in list", () => {
      const testValue = uuid();
      const testList = [null, testValue, uuid()];
      const expectedResult = Maybe.Just(testValue);
      const actualResult = Maybe.listToMaybe(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".mapMaybe", () => {
    const testMorphism = value => (isSome(value) && value % 2 === 0 ?
      Maybe.Just(value) :
      Maybe.Nothing()
    );

    it("should throw exception for non-Function morphism", () => {
      const testInvalidMorphism = null;
      const testMaybe = Maybe.Nothing();

      expect(() => Maybe.mapMaybe(testInvalidMorphism)(testMaybe)).to.throw(TypeError, "morphism must be a Function");
    });

    it("should return nothing for undefined list", () => {
      const expectedResult = [];
      const actualResult = Maybe.mapMaybe(testMorphism)();

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return nothing for null list", () => {
      const testList = null;
      const expectedResult = [];
      const actualResult = Maybe.mapMaybe(testMorphism)(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return nothing for empty list", () => {
      const testList = [];
      const expectedResult = [];
      const actualResult = Maybe.mapMaybe(testMorphism)(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return nothing for blank list", () => {
      const testList = [null];
      const expectedResult = [];
      const actualResult = Maybe.mapMaybe(testMorphism)(testList);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return list of mapped values for list", () => {
      const testList = [0, 1, 2, 3]; // eslint-disable-line array-bracket-newline, no-magic-numbers
      const expectedResult = [0, 2];
      const actualResult = Maybe.mapMaybe(testMorphism)(testList);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".maybeMap", () => {
    const testDefaultValue = uuid().charAt(0);

    it("should throw exception for non-Function morphism", () => {
      const testMorphism = null;
      const testMaybe = Maybe.Just(uuid());

      expect(() => Maybe.maybeMap(testDefaultValue)(testMorphism)(testMaybe)).to.throw(
        TypeError,
        "morphism must be a Function"
      );
    });

    it("should return default value for null maybe", () => {
      const testMorphism = value => value.charAt(0);
      const testMaybe = null;
      const expectedResult = testDefaultValue;
      const actualResult = Maybe.maybeMap(testDefaultValue)(testMorphism)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should return default value for nothing", () => {
      const testMorphism = value => value.charAt(0);
      const testMaybe = Maybe.Nothing();
      const expectedResult = testDefaultValue;
      const actualResult = Maybe.maybeMap(testDefaultValue)(testMorphism)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });

    it("should returnValue for Just", () => {
      const testValue = uuid();
      const testMorphism = value => value.charAt(0);
      const testMaybe = Maybe.Just(testValue);
      const expectedResult = testValue.charAt(0);
      const actualResult = Maybe.maybeMap(testDefaultValue)(testMorphism)(testMaybe);

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe(".maybeToList", () => {
    it("should return empty list for undefined Maybe", () => {
      const expectedResult = [];
      const actualResult = Maybe.maybeToList();

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for null Maybe", () => {
      const testMaybe = null;
      const expectedResult = [];
      const actualResult = Maybe.maybeToList(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for nothing", () => {
      const testMaybe = Maybe.Nothing();
      const expectedResult = [];
      const actualResult = Maybe.maybeToList(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return empty list for just", () => {
      const testValue = uuid();
      const testMaybe = Maybe.Just(testValue);
      const expectedResult = [testValue];
      const actualResult = Maybe.maybeToList(testMaybe);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe(".of", () => {
    it("should return Nothing for undefined", () => {
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.of();

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Nothing for null", () => {
      const testValue = null;
      const expectedResult = Maybe.Nothing();
      const actualResult = Maybe.of(testValue);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should return Just of value for some value", () => {
      const testValue = 0;
      const expectedResult = Maybe.Just(testValue);
      const actualResult = Maybe.of(testValue);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("Just", () => {
    const testValue = uuid();
    const testMaybe = Maybe.Just(testValue);

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testMaybe.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for Nothing", () => {
        const testOther = Maybe.Nothing();
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing values", () => {
        const testOther = Maybe.Just(uuid());
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const testOther = testMaybe;
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same value", () => {
        const testOther = Maybe.Just(testValue);
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isJust", () => {
      it("should return true", () => {
        expect(testMaybe.isJust()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isNothing", () => {
      it("should return false", () => {
        expect(testMaybe.isNothing()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify(testValue);
        const actualResult = JSON.stringify(testMaybe);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a formatted string", () => {
        const expectedResult = `Just(${testValue})`;
        const actualResult = testMaybe.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const testObject = { value: testValue };
      const testMaybeObject = Maybe.Just(testObject);
      const expectedResult = "Just([object Object])";
      const actualResult = testMaybeObject + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });

  describe("Nothing", () => {
    const testMaybe = Maybe.Nothing();

    describe("#equals", () => {
      it("should return false for undefined", () => {
        const actualResult = testMaybe.equals();

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for null", () => {
        const testOther = null;
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return false for differing type", () => {
        const testOther = {};
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
      });

      it("should return true for Nothing", () => {
        const testOther = Maybe.Nothing();
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });

      it("should return true for same instance", () => {
        const testOther = testMaybe;
        const actualResult = testMaybe.equals(testOther);

        expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isJust", () => {
      it("should return false", () => {
        expect(testMaybe.isJust()).to.be.false; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#isNothing", () => {
      it("should return true", () => {
        expect(testMaybe.isNothing()).to.be.true; // eslint-disable-line no-unused-expressions
      });
    });

    describe("#toJSON", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = JSON.stringify(null);
        const actualResult = JSON.stringify(testMaybe);

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe("#toString", () => {
      it("should return a JSON formatted string", () => {
        const expectedResult = "Nothing()";
        const actualResult = testMaybe.toString();

        expect(actualResult).to.eql(expectedResult);
      });
    });

    it("should coerce the underlying value", () => {
      const expectedResult = "null";
      const actualResult = testMaybe + ""; // eslint-disable-line prefer-template, no-implicit-coercion

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
