# `Either.rights(list)`

Extracts from a list of `Either` all of the `Right` elements in extracted order.

## Arguments

* `list (Either[])` - The list of `Either`.

## Returns

* `(Array)`: The list of underlying `Right` values.

## Examples

```javascript
Either.rights([
  Either.Left("a"),
  Either.Left("b"),
  Either.Right(0),
  Either.Right(1)
]);
// => [0, 1]
```
