# `Either.isLeft(value)`

Determines whether or not the `value` is a `Left`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Left`; otherwise, `false`.

## Examples

```javascript
Either.isLeft(Either.Left(1));
// => true

Either.isLeft(Either.Right(1));
// => false

Either.isLeft(1);
// => false
```
