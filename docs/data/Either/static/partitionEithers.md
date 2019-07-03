# `Either.partitionEithers(list)`

Partitions a list of `Either` into two lists. All `Left` elements are extracted, in order, to the first position of the output. Similarly for the `Right` elements in the second position.

## Arguments

* `list (Either[])` - The list of `Either`.

## Returns

* `(Tuple)`: A couple of a list of the underlying `Left` values and a list of the underlying `Right` values.

## Examples

```javascript
Either.partitionEithers([
  Either.Left("a"),
  Either.Left("b"),
  Either.Right(0),
  Either.Right(1)
]);
// => Tuple(["a", "b"], [0, 1])
```
