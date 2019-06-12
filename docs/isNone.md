# `isNone(value)`

Determines whether or not the `value` is `null` or `undefined`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` if `value` is `null` or `undefined`; otherwise, `false`.

## Examples

```javascript
isNone();
// => true

isNone(null);
// => true

isNone(0);
// => false

isNone(false);
// => false

isNone("");
// => false

isNone([]);
// => false

isNone({});
// => false
```
