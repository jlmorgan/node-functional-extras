# `Validation.isFailure(value)`

Determines whether or not the `value` is a `Failure`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Failure`; otherwise, `false`.

## Examples

```javascript
Validation.isFailure(Validation.Failure(1));
// => true

Validation.isFailure(Validation.Success(1));
// => false

Validation.isFailure(1);
// => false
```
