# `Validation.valids(list)`

Extracts from a list of `Validation` all of the `Valid` elements in extracted order.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Types

* `(*)`: The underlying right values.

## Returns

* `(Array)`: The list of underlying `Valid` values.

## Examples

```javascript
Validation.valids([
  Validation.Invalid("a"),
  Validation.Invalid("b"),
  Validation.Valid(0),
  Validation.Valid(1)
]);
// => [0, 1]
```
