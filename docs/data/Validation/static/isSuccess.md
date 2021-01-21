# `Validation.isValid(value)`

Determines whether or not the `value` is a `Valid`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Valid`; otherwise, `false`.

## Examples

```javascript
Validation.isValid(Validation.Valid(1));
// => true

Validation.isValid(Validation.Invalid(1));
// => false

Validation.isValid(1);
// => false
```
