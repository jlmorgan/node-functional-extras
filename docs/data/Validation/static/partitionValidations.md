# `Validation.partitionValidations(list)`

Partitions a list of `Validation` into two lists. All `Failure` elements are extracted, in order, to the first position of the output. Similarly for the `Success` elements in the second position.

## Arguments

* `list (Validation[])` - The list of `Validation`.

## Returns

* `(Tuple)`: A couple of a list of the underlying `Failure` values and a list of the underlying `Success` values.

## Examples

```javascript
Validation.partitionValidations([
  Validation.Failure("a"),
  Validation.Failure(["b", "c"]),
  Validation.Success(0),
  Validation.Success(1)
]);
// => Tuple(["a", "b", "c"], [0, 1])
```
