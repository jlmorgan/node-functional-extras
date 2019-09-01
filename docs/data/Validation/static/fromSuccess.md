# `Validation.fromSuccess(defaultValue, validation)`

Extracts the value out of a `Success`; otherwise, returns the `defaultValue`.

## Alternatives

* `Validation.fromSuccess(defaultValue)(validation)`

## Arguments

* `defaultValue (*)`: Value used if the `validation` is not a `Success`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The underlying right value or default.

## Examples

```javascript
Validation.fromSuccess(0, Validation.Success(1));
// => 1

Validation.fromSuccess(0, "a");
// => 0

Validation.fromSuccess(0, Validation.Failure("a"));
// => 0
```
