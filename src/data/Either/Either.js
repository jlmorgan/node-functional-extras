"use strict";

/**
 * The {@link Either} type is a right-biased disjunction that represents two possibilities: either a {@code Left} of
 * {@code a} or a {@code Right} of {@code b}. By convention, the {@link Either} is used to represent a value or an
 * error result of some function or process as a {@code Left} of the error or a {@code Right} of the value.
 */
class Either {
  /**
   * Determines whether or not the {@code value} is a {@link Either}.
   *
   * @param {*} value - The value.
   * @return {!Boolean} {@code true} for a {@link Either}; otherwise, {@code false}.
   */
  static isEither(value) {
    return value instanceof Either;
  }

  /**
   * Determines whether or not the {@link Either} is a {@code Left}.
   *
   * @return {!Boolean} {@code true} for a {@code Left}; otherwise, {@code false}.
   */
  isLeft() {
    return !this.isRight();
  }
}

/**
 * Encapsulates a left value.
 *
 * @extends Either
 */
class Left extends Either {
  /**
   * @param {*} value - Left value.
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
    return Either.isEither(other) &&
      other.isLeft() &&
      other.valueOf() === this.valueOf();
  }

  /**
   * Determines whether or not the {@link Either} is a {@code Right}.
   *
   * @return {!Boolean} {@code true} for a {@code Right}; otherwise, {@code false}.
   */
  isRight() {
    return false;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return { left: this._value };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {!String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Left(${this._value})`;
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

/**
 * Encapsulates a right value.
 *
 * @extends Either
 */
class Right extends Either {
  /**
   * @param {*} value - Right value.
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
    return Either.isEither(other) &&
      other.isRight() &&
      other.valueOf() === this.valueOf();
  }

  /**
   * Determines whether or not the {@link Either} is a {@code Right}.
   *
   * @return {!Boolean} {@code true} for a {@code Right}; otherwise, {@code false}.
   */
  isRight() {
    return true;
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return { right: this._value };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {!String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Right(${this._value})`;
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
  isEither: Either.isEither,

  /**
   * Creates a {@code Left} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Either} A {@code Left} of the value.
   */
  Left(value) {
    return new Left(value);
  },

  /**
   * Creates a {@code Right} from an arbitrary value.
   *
   * @constructor
   * @param {*} value - The value.
   * @return {!Either} A {@code Right} of the value.
   */
  Right(value) {
    return new Right(value);
  }
};
