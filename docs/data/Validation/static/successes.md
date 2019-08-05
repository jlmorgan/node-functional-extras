# `Validation.successes(list)`

Extracts from a list of `Validation` all of the `Success` elements in extracted order.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Types

* `(*)`: The underlying right values.

## Returns

* `(Array)`: The list of underlying `Success` values.

## Examples

```javascript
Validation.successes([
  Validation.Failure("a"),
  Validation.Failure("b"),
  Validation.Success(0),
  Validation.Success(1)
]);
// => [0, 1]
```
