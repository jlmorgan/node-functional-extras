# `Validation.fromInvalid(defaultValues, validation)`

Extracts the value out of an `Invalid`; otherwise, returns the `defaultValues`.

## Alternatives

* `Validation.fromInvalid(defaultValues)(validation)`

## Arguments

* `defaultValues (Array)`: Values used if the `validation` is not an `Invalid`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The underlying left value or default.

## Examples

```javascript
Validation.fromInvalid([0], Validation.Invalid(1));
// => [1]

Validation.fromInvalid([0], "a");
// => [0]

Validation.fromInvalid([0], Validation.Valid("a"));
// => [0]
```
