"use strict";

// Project
const isEqual = require("../Arrays/equals");

/**
 * The {@link Validation} type is a right-biased disjunction that represents two possibilities: either a {@code Invalid}
 * of {@code a} or a {@code Valid} of {@code b}. By convention, the {@link Validation} is used to represent a value or
 * invalid result of some function or process as a {@code Invalid} of the invalid message or a {@code Valid} of the
 * value.
 */
class Validation {
  /**
   * Determines whether or not the {@code value} is a {@link Validation}.
   *
   * @param {*} value - The value.
   * @return {!Boolean} {@code true} for a {@link Validation}; otherwise, {@code false}.
   */
  static isValidation(value) {
    return value instanceof Validation;
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Invalid}.
   *
   * @return {!Boolean} {@code true} for a {@code Left}; otherwise, {@code false}.
   */
  isInvalid() {
    return !this.isValid();
  }
}

/**
 * Encapsulates the invalid value(s) of the disjunction.
 *
 * @extends Validation
 */
class Invalid extends Validation {
  /**
   * @param {*} values - Invalid values.
   */
  constructor(values) {
    super();

    this._values = Array.isArray(values) ? values : [values];
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {!Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return Validation.isValidation(other) &&
      other.isInvalid() &&
      isEqual(other.valueOf(), this.valueOf());
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Invalid}.
   *
   * @return {!Boolean} {@code true} for a {@code Invalid}; otherwise, {@code false}.
   */
  isValid() {
    return false;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return { invalid: this._values };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {!String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Invalid([${this._values.join(",")}])`;
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
 * Encapsulates the valid value of the disjunction.
 *
 * @extends Validation
 */
class Valid extends Validation {
  /**
   * @param {*} value - Valid value.
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
    return Validation.isValidation(other) &&
      other.isValid() &&
      other.valueOf() === this.valueOf();
  }

  /**
   * Determines whether or not the {@link Validation} is a {@code Valid}.
   *
   * @return {!Boolean} {@code true} for a {@code Valid}; otherwise, {@code false}.
   */
  isValid() {
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
   * Creates a {@code Invalid} from an arbitrary value or array of values.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Either} A {@code Invalid} of the value.
   */
  Invalid(value) {
    return new Invalid(value);
  },

  isValidation: Validation.isValidation,

  /**
   * Creates a {@code Valid} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Either} A {@code Valid} of the value.
   */
  Valid(value) {
    return new Valid(value);
  }
};
