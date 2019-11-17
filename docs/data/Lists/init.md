# `init(list)`

Extracts the elements of a non-null, non-empty list excluding the last element.

## Arguments

* `list (Array)`: The list.

## Returns

* `(*)`: Elements in the list excluding the last.

## Throws

* `TypeError` if the `list` is not a non-empty `Array`.

## Example

```javascript
init([]);
// => TypeError("list must be a non-empty Array")

init([0]);
// => [0]

init([1, 2, 3]);
// => [1, 2]
```
