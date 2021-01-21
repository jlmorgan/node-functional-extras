# `Validation.partitionValidations(list)`

Partitions a list of `Validation` into two lists. All `Invalid` elements are extracted, in order, to the first position of the output. Similarly for the `Valid` elements in the second position.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Returns

* `(Tuple)`: A couple of a list of the underlying `Invalid` values and a list of the underlying `Valid` values.

## Examples

```javascript
Validation.partitionValidations([
  Validation.Invalid("a"),
  Validation.Invalid(["b", "c"]),
  Validation.Valid(0),
  Validation.Valid(1)
]);
// => Tuple(["a", "b", "c"], [0, 1])
```
