# `Validation.validationMap(invalidMap, validMap, validation)`

Provides a catamorphism of the `validation` to a singular value. If the value is `Invalid a`, apply the first function to `a`; otherwise, apply the second function to `b`.

## Alternatives

* `Validation.validationMap(invalidMap, validMap)(validation)`
* `Validation.validationMap(invalidMap)(validMap)(validation)`

## Arguments

* `invalidMap (Function)`: Maps the value of a `Invalid a` to `c`.
* `validMap (Function)`: Maps the value of a `Valid b` to `c`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The result of the catamorphism of the `validation`.

## Throws

* `TypeError` if the `invalidMap` or `validMap` is not a `Function`.
* `TypeError` if the `validation` is not an `Validation`.

## Examples

```javascript
Validation.validationMap(
  errors => errors.map(error => error.message).join(", "),
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Validation.Valid(1)
);
// => "The value is odd"

Validation.validationMap(
  errors => errors.map(error => error.message).join(", "),
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Validation.Invalid(new Error("The value is not a number"))
);
// => "The value is not a number"
```
