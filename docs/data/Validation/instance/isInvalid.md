# `Validation#isInvalid()`

Determines whether or not the `Validation` is an `Invalid`.

## Returns

* `(Boolean)`: `true` for an `Invalid`; otherwise, `false`.

## Examples

```javascript
Validation.Invalid("a").isInvalid();
// => true

Validation.Valid("a").isInvalid();
// => false
```
