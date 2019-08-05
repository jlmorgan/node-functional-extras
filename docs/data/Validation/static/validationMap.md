# `Validation.validationMap(failureMap, successMap, validation)`

Provides a catamorphism of the `validation` to a singular value. If the value is `Failure a`, apply the first function to `a`; otherwise, apply the second function to `b`.

## Alternatives

* `Validation.validationMap(failureMap, successMap)(validation)`
* `Validation.validationMap(failureMap)(successMap)(validation)`

## Arguments

* `failureMap (Function)`: Maps the value of a `Failure a` to `c`.
* `successMap (Function)`: Maps the value of a `Success b` to `c`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The result of the catamorphism of the `validation`.

## Throws

* `TypeError` if the `failureMap` or `successMap` is not a `Function`.
* `TypeError` if the `validation` is not an `Validation`.

## Examples

```javascript
Validation.validationMap(
  errors => errors.map(error => error.message).join(", "),
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Validation.Success(1)
);
// => "The value is odd"

Validation.validationMap(
  errors => errors.map(error => error.message).join(", "),
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Validation.Failure(new Error("The value is not a number"))
);
// => "The value is not a number"
```
