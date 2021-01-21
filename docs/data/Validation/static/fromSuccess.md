# `Validation.fromValid(defaultValue, validation)`

Extracts the value out of a `Valid`; otherwise, returns the `defaultValue`.

## Alternatives

* `Validation.fromValid(defaultValue)(validation)`

## Arguments

* `defaultValue (*)`: Value used if the `validation` is not a `Valid`.
* `validation (Validation)`: The `Validation`.

## Returns

* `(*)`: The underlying right value or default.

## Examples

```javascript
Validation.fromValid(0, Validation.Valid(1));
// => 1

Validation.fromValid(0, "a");
// => 0

Validation.fromValid(0, Validation.Invalid("a"));
// => 0
```
