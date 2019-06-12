# `isSome(value)`

Determines whether or not the `value` is not `null` or `undefined`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` if `value` is not `null` or `undefined`; otherwise, `false`.

## Examples

```javascript
isSome();
// => false

isSome(null);
// => false

isSome(0);
// => true

isSome(false);
// => true

isSome("");
// => true

isSome([]);
// => true

isSome({});
// => true
```
