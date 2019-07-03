# `Either#toString()`

Converts the `instance` to a `String` representation.

## Returns

* `(String)`: The `instance` as a `String`.

## Examples

```javascript
Either.Left("a").toString();
// => "Left(a)"

Either.Right("a").toString();
// => "Right(a)"
```
