# `Validation.invalids(list)`

Extracts from a list of `Validation` all of the `Invalid` elements in extracted order.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Types

* `(*)`: The underlying left values.

## Returns

* `(Array)`: The list of underlying `Invalid` values.

## Examples

```javascript
Validation.invalids([
  Validation.Invalid("a"),
  Validation.Invalid(["b", "c"]),
  Validation.Valid(0),
  Validation.Valid(1)
]);
// => ["a", "b", "c"]
```
