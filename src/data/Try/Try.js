"use strict";

// Project
const isEqual = require("../Arrays/equals");

/**
 * The {@link Try} type is a right-biased disjunction that represents two possibilities; either a {@code Failure} of
 * {@code a} or a {@code Success} of {@code b}. By convention, the {@link Try} is used to represent a value or failure
 * result of some function or process as a {@code Failure} or a {@code Success} of the value.
 */
class Try {
  /**
   * Determines whether or not the {@code value} is a {@link Try}.
   *
   * @param {*} value - The value.
   * @return {!Boolean} {@code true} for a {@link Try}; otherwise, {@code false}.
   */
  static isTry(value) {
    return value instanceof Try;
  }

  /**
   * Determines whether or not the {@link Try} is a {@code Failure}.
   *
   * @return {!Boolean} {@code true} for a {@code Failure}; otherwise, {@code false}.
   */
  isFailure() {
    return !this.isSuccess();
  }
}

/**
 * Encapsulates a failure value.
 *
 * @extends Try
 */
class Failure extends Try {
  /**
   * @param {*} value - Failure value.
   */
  constructor(value) {
    super();

    this._value = value;
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {!Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return Try.isTry(other) &&
      other.isFailure() &&
      isEqual(other.valueOf(), this.valueOf());
  }

  /**
   * Determines whether or not the {@link Try} is a {@code Success}.
   *
   * @return {!Boolean} {@code true} for a {@code Success}; otherwise, {@code false}.
   */
  isSuccess() {
    return false;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return { invalid: this._value };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {!String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Failure(${this._value})`;
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
 * Encapsulates a success value.
 *
 * @extends Try
 */
class Success extends Try {
  /**
   * @param {*} value - Success value.
   */
  constructor(value) {
    super();

    this._value = value;
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {!Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return Try.isTry(other) &&
      other.isValid() &&
      isEqual(other.valueOf(), this.valueOf());
  }

  /**
   * Determines whether or not the {@link Try} is a {@code Success}.
   *
   * @return {!Boolean} {@code true} for a {@code Success}; otherwise, {@code false}.
   */
  isSuccess() {
    return true;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return { valid: this._value };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {!String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Valid(${this._value})`;
  }

  /**
   * Returns the primitive value of the instance.
   *
   * @return {null} The primitive value.
   */
  valueOf() {
    return this._value;
  }
}

module.exports = {
  /**
   * Creates a {@code Failure} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Try} A {@code Failure} of the value.
   */
  Failure(value) {
    return new Failure(value);
  },

  isTry: Try.isTry,

  /**
   * Creates a {@code Success} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Try} A {@code Success} of the value.
   */
  Success(value) {
    return new Success(value);
  }
};
