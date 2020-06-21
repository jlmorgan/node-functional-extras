"use strict";

// Project
const isNone = require("../../isNone");
const requireFunction = require("../Functions/requireFunction");

/**
 * The {@link Maybe} type is a disjunction that wraps an arbitrary value. The {@link Maybe} {@code a} either contains a
 * value of type {@code a} (read: {@code Just a}) or empty (read: {@code Nothing}). {@link Maybe} provides a way to deal
 * with error or exceptional behavior.
 */
class Maybe {
  /**
   * Determines whether or not the {@code value} is a {@link Maybe}.
   *
   * @param {*} value - The value.
   * @return {Boolean} {@code true} for a {@link Maybe}; otherwise, {@code false}.
   */
  static isMaybe(value) {
    return value instanceof Maybe;
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @function
   * @name Maybe#equals
   * @param {*} other - The other object.
   * @return {Boolean} {@code true} for equality; otherwise, {@code false}.
   */

  /**
   * Tests the underlying value against the {@code predicate}, returning the {@code Just} of the value for {@code true};
   * otherwise, {@code Nothing}.
   *
   * @function
   * @name Maybe#filter
   * @param {Function} predicate - The predicate with which to test the value.
   * @return {Maybe} The {@code Just} of the value for {@code true}; otherwise, {@code Nothing}.
   * @throws {TypeError} if the {@code predicate} is {@code null}.
   */

  /**
   * Maps the underlying value of a {@link Maybe} in a {@code null}-safe way.
   *
   * @function
   * @name Maybe#fmap
   * @param {Function} morphism - The morphism.
   * @return {Maybe} The mapped {@link Maybe}.
   */

  /**
   * Determines whether or not the {@link Maybe} is a {@code Just}.
   *
   * @function
   * @name Maybe#isJust
   * @return {Boolean} {@code true} for a {@code Just}; otherwise, {@code false}.
   */

  /**
   * Determines whether or not the {@link Maybe} is a {@code Nothing}.
   *
   * @return {Boolean} {@code true} for a {@code Nothing}; otherwise, {@code false}.
   */
  isNothing() {
    return !this.isJust();
  }
}

/**
 * Encapsulates the absence of a value.
 *
 * @extends Maybe
 */
class Nothing extends Maybe {
  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return this === other;
  }

  /**
   * Tests the underlying value against the {@code predicate}, returning the {@code Just} of the value for {@code true};
   * otherwise, {@code Nothing}.
   *
   * @param {Function} predicate - The predicate with which to test the value.
   * @return {Maybe} The {@code Just} of the value for {@code true}; otherwise, {@code Nothing}.
   */
  filter() {
    return this;
  }

  /**
   * Maps the underlying value of a {@link Maybe} in a {@code null}-safe way.
   *
   * @param {Function} morphism - The morphism.
   * @return {Maybe} The mapped {@link Maybe}.
   */
  fmap() {
    return this;
  }

  /**
   * Determines whether or not the {@link Maybe} is a {@code Just}.
   *
   * @return {Boolean} {@code true} for a {@code Just}; otherwise, {@code false}.
   */
  isJust() {
    return false;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return null;
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {String} The {@code instance} as a {@code String}.
   */
  toString() {
    return "Nothing()";
  }

  /**
   * Returns the primitive value of the instance.
   *
   * @return {null} The primitive value.
   */
  valueOf() {
    return null;
  }
}

const INSTANCE = new Nothing();

/**
 * Encapsulates a non-null value.
 *
 * @extends Maybe
 */
class Just extends Maybe {
  /**
   * Creates a {@code Just} of a {@code value}.
   *
   * @param {*} value - The value.
   */
  constructor(value) {
    super();

    this._value = value;
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return Maybe.isMaybe(other) &&
      other.isJust() &&
      other.valueOf() === this.valueOf();
  }

  /**
   * Tests the underlying value against the {@code predicate}, returning the {@code Just} of the value for {@code true};
   * otherwise, {@code Nothing}.
   *
   * @param {Function} predicate - The predicate with which to test the value.
   * @return {Maybe} The {@code Just} of the value for {@code true}; otherwise, {@code Nothing}.
   * @throws {TypeError} if the {@code predicate} is {@code null}.
   */
  filter(predicate) {
    return requireFunction(predicate, "predicate")(this._value) ? this : INSTANCE;
  }

  /**
   * Maps the underlying value of a {@link Maybe} in a {@code null}-safe way.
   *
   * @param {Function} morphism - The morphism.
   * @return {Maybe} The mapped {@link Maybe}.
   */
  fmap(morphism) {
    return Maybe.of(requireFunction(morphism, "morphism")(this.valueOf()));
  }

  /**
   * Determines whether or not the {@link Maybe} is a {@code Just}.
   *
   * @return {Boolean} {@code true} for a {@code Just}; otherwise, {@code false}.
   */
  isJust() {
    return true;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return this._value;
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Just(${this._value})`;
  }

  /**
   * Returns the primitive value of the instance.
   *
   * @return {*} The primitive value.
   */
  valueOf() {
    return this._value;
  }
}

/**
 * Creates a {@code Just} of the value.
 *
 * @constructor
 * @param {*} value - A non-null value.
 * @return {Maybe} The {@link Maybe} of the {@code value}.
 * @throws {TypeError} if the {@code value} is {@code null} or {@code undefined}.
 */
Maybe.Just = function(value) {
  if (isNone(value)) {
    throw new TypeError("value must not be null or undefined");
  }

  return new Just(value);
};

/**
 * Creates a nothing to represent {@code null} or a missing value.
 *
 * @constructor
 * @return {Maybe} A {@code Nothing}.
 */
Maybe.Nothing = function() {
  return INSTANCE;
};

/**
 * Creates a {@link Maybe} of the {@code value} where:
 *   - undefined -> Nothing
 *   - null -> Nothing
 *   - a -> Just(a)
 *
 * @param {*} value - The value.
 * @return {Maybe} {@code Nothing} if the {@code value} is {@code null} or {@code undefined}; otherwise, {@code Just}
 * of the {@code value}.
 */
Maybe.of = function of(value) {
  return isNone(value) ? INSTANCE : Maybe.Just(value);
};

module.exports = {
  isMaybe: Maybe.isMaybe,
  Just: Maybe.Just,
  Nothing: Maybe.Nothing,
  of: Maybe.of
};
