# `Either.fromLeft(defaultValue, either)`

Extracts the value out of a `Left`; otherwise, returns the `defaultValue`.

## Alternatives

* `Either.fromLeft(defaultValue)(either)`

## Arguments

* `defaultValue (*)`: Value used if the `either` is not a `Left`.
* `either (Either)`: The `Either`.

## Returns

* `(*)`: The underlying left value or default.

## Examples

```javascript
Either.fromLeft(0, Either.Left(1));
// => 1

Either.fromLeft(0, "a");
// => 0

Either.fromLeft(0, Either.Right("a"));
// => 0
```
