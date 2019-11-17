# `isEmpty(list)`

Determines whether or not the `list` is `undefined`, `null`, or empty.

## Arguments

* `list (Array)`: The list.

## Returns

* `(Boolean)`: `true` if the `list` is empty; otherwise, `false`.

## Example

```javascript
isEmpty();
// => true

isEmpty([]);
// => true

isEmpty([undefined]);
// => false

isEmpty([null]);
// => false

isEmpty([0]);
// => false
```
