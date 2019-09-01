"use strict";

// Project
const isEqual = require("../Arrays/equals");

/**
 * The {@link Validation} type is a right-biased disjunction that represents two possibilities: either a {@code Failure}
 * of {@code a} or a {@code Success} of {@code b}. By convention, the {@link Validation} is used to represent a value or
 * failure result of some function or process as a {@code Failure} of the failure message or a {@code Success} of the
 * value.
 */
class Validation {
  /**
   * Determines whether or not the {@code value} is a {@link Validation}.
   *
   * @param {*} value - The value.
   * @return {Boolean} {@code true} for a {@link Validation}; otherwise, {@code false}.
   */
  static isValidation(value) {
    return value instanceof Validation;
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Failure}.
   *
   * @return {Boolean} {@code true} for a {@code Left}; otherwise, {@code false}.
   */
  isFailure() {
    return !this.isSuccess();
  }
}

/**
 * Encapsulates the failure value(s) of the disjunction.
 *
 * @extends Validation
 */
class Failure extends Validation {
  constructor(values) {
    super();

    this._values = Array.isArray(values) ? values : [values];
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return Validation.isValidation(other) &&
      other.isFailure() &&
      isEqual(other.valueOf(), this.valueOf());
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Failure}.
   *
   * @return {Boolean} {@code true} for a {@code Failure}; otherwise, {@code false}.
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
    return { failure: this._values };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Failure([${this._values.join(",")}])`;
  }

  /**
   * Returns the primitive value of the instance.
   *
   * @return {null} The primitive value.
   */
  valueOf() {
    return this._values;
  }
}

/**
 * Encapsulates the success value of the disjunction.
 *
 * @extends Validation
 */
class Success extends Validation {
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
    return Validation.isValidation(other) &&
      other.isSuccess() &&
      other.valueOf() === this.valueOf();
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Success}.
   *
   * @return {Boolean} {@code true} for a {@code Success}; otherwise, {@code false}.
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
    return { success: this._value };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Success(${this._value})`;
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
   * Creates a {@code Failure} from an arbitrary value or array of values.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {Either} A {@code Failure} of the value.
   */
  Failure(value) {
    return new Failure(value);
  },

  isValidation: Validation.isValidation,

  /**
   * Creates a {@code Success} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {Either} A {@code Success} of the value.
   */
  Success(value) {
    return new Success(value);
  }
};
