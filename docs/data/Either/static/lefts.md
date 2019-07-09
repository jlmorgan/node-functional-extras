# `Either.lefts(list)`

Extracts from a list of `Either` all of the `Left` elements in extracted order.

## Arguments

* `list (Either[])` - The list of `Either`.

## Types

* `(*)`: The underlying left values.

## Returns

* `(Array)`: The list of underlying `Left` values.

## Examples

```javascript
Either.lefts([
  Either.Left("a"),
  Either.Left("b"),
  Either.Right(0),
  Either.Right(1)
]);
// => ["a", "b"]
```
