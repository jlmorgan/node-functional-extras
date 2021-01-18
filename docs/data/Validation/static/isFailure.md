# `Validation.isInvalid(value)`

Determines whether or not the `value` is an `Invalid`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for an `Invalid`; otherwise, `false`.

## Examples

```javascript
Validation.isInvalid(Validation.Invalid(1));
// => true

Validation.isInvalid(Validation.Valid(1));
// => false

Validation.isInvalid(1);
// => false
```
