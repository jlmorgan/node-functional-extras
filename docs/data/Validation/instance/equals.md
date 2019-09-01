# `Validation#equals(other)`

Determines whether or not the `other` has the same value as the current `instance`.

## Arguments

* `other (Object)`: The other object.

## Returns

* `(Boolean)`: `true` for equality; otherwise, `false`.

## Examples

```javascript
const failure = Validation.Failure("a");
const success = Validation.Success("a");

success.equals("a");
// => false

success.equals(failure);
// => false

success.equals(Validation.Success("a"));
// => true

failure.equals(Validation.Failure("a"));
// => true
```
