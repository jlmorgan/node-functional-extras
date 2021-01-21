# `Validation#isValid()`

Determines whether or not the `Validation` is a `Valid`.

## Returns

* `(Boolean)`: `true` for a `Valid`; otherwise, `false`.

## Examples

```javascript
Validation.Invalid("a").isValid();
// => false

Validation.Valid("a").isValid();
// => true
```
