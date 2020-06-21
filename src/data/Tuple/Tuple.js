"use strict";

/**
 * A finite ordered sequence of elements.
 */
class Tuple {
  /**
   * Determines whether or not the {@code value} is a {@link Tuple}.
   *
   * @param {*} value - The value to test.
   * @return {Boolean} `true` if a {@link Tuple}; otherwise, `false`.
   */
  static isTuple(value) {
    return value instanceof Tuple;
  }

  /**
   * @param {*} first - First value.
   * @param {*} second - Second value.
   */
  constructor(first, second) {
    this._first = first;
    this._second = second;
  }

  /**
   * Determines whether or not the {@code other} has the same value as the current {@code instance}.
   *
   * @param {*} other - The other object.
   * @return {Boolean} {@code true} for equality; otherwise, {@code false}.
   */
  equals(other) {
    return this === other || ( // eslint-disable-line no-extra-parens
      Tuple.isTuple(other) &&
        this.first() === other.first() &&
        this.second() === other.second()
    );
  }

  /**
   * The first element.
   *
   * @return {*} The first element.
   */
  first() {
    return this._first;
  }

  /**
   * The second element.
   *
   * @return {*} The second element.
   */
  second() {
    return this._second;
  }

  /**
   * Creates a new {@link Tuple} with swapped values.
   *
   * @return {Tuple} The swapped {@link Tuple}.
   */
  swap() {
    return new Tuple(this.second(), this.first());
  }

  /**
   * Converts the {@code instance} to a {@code JSON} representation.
   *
   * @return {String} The {@code instance} as a {@code JSON} formatted {@code String}.
   */
  toJSON() {
    return {
      "tuple": [this.first(), this.second()]
    };
  }

  /**
   * Converts the {@code instance} to a {@code String} representation.
   *
   * @return {String} The {@code instance} as a {@code String}.
   */
  toString() {
    return `Tuple(${this.first()}, ${this.second()})`;
  }
}

module.exports = Tuple;
