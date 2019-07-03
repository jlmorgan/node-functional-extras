# `Either.isRight(value)`

Determines whether or not the `value` is a `Right`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Right`; otherwise, `false`.

## Examples

```javascript
Either.isRight(Either.Right(1));
// => true

Either.isRight(Either.Left(1));
// => false

Either.isRight(1);
// => false
```
