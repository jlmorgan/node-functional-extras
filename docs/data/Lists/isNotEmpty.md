# `isNotEmpty(list)`

Determines whether or not the `list` is not `null` or empty.

## Arguments

* `list (Array)`: The list.

## Returns

* `(Boolean)`: `true` if the `list` is not empty; otherwise, `false`.

## Example

```javascript
isNotEmpty();
// => false

isNotEmpty([]);
// => false

isNotEmpty([undefined]);
// => true

isNotEmpty([null]);
// => true

isNotEmpty([0]);
// => true
```
