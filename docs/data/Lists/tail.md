# `tail(list)`

Extracts the elements of a non-null, non-empty list excluding the first element.

## Arguments

* `list (Array)`: The list.

## Returns

* `(Array)`: Elements in the list excluding the first.

## Throws

* `TypeError` if the `list` is not a non-empty `Array`.

## Example

```javascript
tail([]);
// => TypeError("list must be a non-empty Array")

tail([0]);
// => []

tail([1, 2, 3]);
// => [2, 3]
```
