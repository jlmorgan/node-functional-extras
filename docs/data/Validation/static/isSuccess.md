# `Validation.isSuccess(value)`

Determines whether or not the `value` is a `Success`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Success`; otherwise, `false`.

## Examples

```javascript
Validation.isSuccess(Validation.Success(1));
// => true

Validation.isSuccess(Validation.Failure(1));
// => false

Validation.isSuccess(1);
// => false
```
