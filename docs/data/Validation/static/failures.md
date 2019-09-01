# `Validation.failures(list)`

Extracts from a list of `Validation` all of the `Failure` elements in extracted order.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Types

* `(*)`: The underlying left values.

## Returns

* `(Array)`: The list of underlying `Failure` values.

## Examples

```javascript
Validation.failures([
  Validation.Failure("a"),
  Validation.Failure(["b", "c"]),
  Validation.Success(0),
  Validation.Success(1)
]);
// => ["a", "b", "c"]
```
