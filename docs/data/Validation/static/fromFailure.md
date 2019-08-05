# `Validation.fromFailure(defaultValues, validation)`

Extracts the value out of a `Failure`; otherwise, returns the `defaultValues`.

## Alternatives

* `Validation.fromFailure(defaultValues)(validation)`

## Arguments

* `defaultValues (Array)`: Values used if the `validation` is not a `Failure`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The underlying left value or default.

## Examples

```javascript
Validation.fromFailure([0], Validation.Failure(1));
// => [1]

Validation.fromFailure([0], "a");
// => [0]

Validation.fromFailure([0], Validation.Success("a"));
// => [0]
```
