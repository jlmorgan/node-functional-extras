# `last(list)`

Extracts the last element of a non-null, non-empty list.

## Arguments

* `list (Array)`: The list.

## Returns

* `(*)`: Last item in the list.

## Throws

* `TypeError` if the `list` is not a non-empty `Array`.

## Example

```javascript
last([]);
// => TypeError("list must be a non-empty Array")

last([0]);
// => 0

last([1, 2, 3]);
// => 3
```
