"use strict";

// Project
const isNone = require("../../isNone");

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
   * Determines whether or not the {@link Maybe} is a {@code Nothing}.
   *
   * @return {Boolean} {@code true} for a {@code Nothing}; otherwise, {@code false}.
   */
  isNothing() {
    return !this.isJust();
  }
}

/**
 * Encapsulates a non-null value.
 *
 * @extends Maybe
 */
class Just extends Maybe {
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

module.exports = {
  isMaybe: Maybe.isMaybe,

  /**
   * Creates a {@code Just} of the value.
   *
   * @constructor
   * @param {*} value - A non-null value.
   * @return {Maybe} The {@link Maybe} of the {@code value}.
   * @throws {TypeError} if the {@code value} is {@code null} or {@code undefined}.
   */
  Just(value) {
    if (isNone(value)) {
      throw new TypeError("value must not be null or undefined");
    }

    return new Just(value);
  },

  /**
   * Creates a nothing to represent {@code null} or a missing value.
   *
   * @constructor
   * @return {Maybe} A {@code Nothing}.
   */
  Nothing() {
    return INSTANCE;
  }
};
