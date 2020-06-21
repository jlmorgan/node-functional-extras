# `head(list)`

Extracts the first element of a non-null, non-empty list.

## Arguments

* `list (Array)`: The list.

## Returns

* `(*)`: First item in the list.

## Throws

* `TypeError` if the `list` is not a non-empty `Array`.

## Example

```javascript
head([]);
// => TypeError("list must be a non-empty Array")

head([0]);
// => 0

head([1, 2, 3]);
// => 1
```
