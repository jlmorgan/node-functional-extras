# `Validation.validate(predicate, invalidValue, value)`

Validates a value `b` and returns a `Valid` of `b` if the `predicate` returns `true`; otherwise, an `Invalid` of `a`.

## Alternatives

* `Validation.validate(predicate, invalidValue)(value)`
* `Validation.validate(predicate)(invalidValue)(value)`

## Arguments

* `predicate (Function)`: The predicate.
* `invalidValue (*)`: The invalid value.
* `value (*)`: The value to test.

## Returns

* `(Validation)`: A `Valid` of the `value` if the `predicate` returns `true`; otherwise, an `Invalid` of `invalidValue`.

## Throws

* `TypeError` if the `predicate` is not a `Function`.

## Examples

```javascript
Validation.validate(
  value => value % 2 === 0,
  new TypeError("The value must be even"),
  0
);
// => Valid(0)

Validation.validate(
  value => value % 2 === 0,
  new TypeError("The value must be even"),
  1
);
// => Invalid([TypeError("The value must be even")])
```
