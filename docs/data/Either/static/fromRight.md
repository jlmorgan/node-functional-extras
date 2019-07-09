# `Either.fromRight(defaultValue, either)`

Extracts the value out of a `Right`; otherwise, returns the `defaultValue`.

## Alternatives

* `Either.fromRight(defaultValue)(either)`

## Arguments

* `defaultValue (*)`: Value used if the `either` is not a `Right`.
* `either (Either)`: The `Either`.

## Returns

* `(*)`: The underlying right value or default.

## Examples

```javascript
Either.fromRight(0, Either.Right(1));
// => 1

Either.fromRight(0, "a");
// => 0

Either.fromRight(0, Either.Left("a"));
// => 0
```
