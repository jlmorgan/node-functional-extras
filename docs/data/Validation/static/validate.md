# `Validation.validate(predicate, failureValue, value)`

Validates a value `b` and returns a `Success` of `b` if the `predicate` returns `true`; otherwise, a `Failure` of `a`.

## Alternatives

* `Validation.validate(predicate, failureValue)(value)`
* `Validation.validate(predicate)(failureValue)(value)`

## Arguments

* `predicate (Function)`: The predicate.
* `failureValue (*)`: The failure value.
* `value (*)`: The value to test.

## Returns

* `(Validation)`: A `Success` of the `value` if the `predicate` returns `true`; otherwise, a `Failure` of `failureValue`.

## Throws

* `TypeError` if the `predicate` is not a `Function`.

## Examples

```javascript
Validation.validate(
  value => value % 2 === 0,
  new TypeError("The value must be even"),
  0
);
// => Success(0)

Validation.validate(
  value => value % 2 === 0,
  new TypeError("The value must be even"),
  1
);
// => Failure([TypeError("The value must be even")])
```
