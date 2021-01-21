# `Validation#equals(other)`

Determines whether or not the `other` has the same value as the current `instance`.

## Arguments

* `other (Object)`: The other object.

## Returns

* `(Boolean)`: `true` for equality; otherwise, `false`.

## Examples

```javascript
const invalid = Validation.Invalid("a");
const valid = Validation.Valid("a");

valid.equals("a");
// => false

valid.equals(invalid);
// => false

valid.equals(Validation.Valid("a"));
// => true

invalid.equals(Validation.Invalid("a"));
// => true
```
