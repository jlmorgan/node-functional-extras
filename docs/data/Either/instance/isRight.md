# `Either#isRight()`

Determines whether or not the `Either` is a `Right`.

## Returns

* `(Boolean)`: `true` for a `Right`; otherwise, `false`.

## Examples

```javascript
Either.Left("a").isRight();
// => false

Either.Right("a").isRight();
// => true
```
