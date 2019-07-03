# `Either#isLeft()`

Determines whether or not the `Either` is a `Left`.

## Returns

* `(Boolean)`: `true` for a `Left`; otherwise, `false`.

## Examples

```javascript
Either.Left("a").isLeft();
// => true

Either.Right("a").isLeft();
// => false
```
