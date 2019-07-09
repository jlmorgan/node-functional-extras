# `Maybe.isJust(value)`

Determines whether or not the `value` is a `Just`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Just`; otherwise, `false`.

## Examples

```javascript
Maybe.isJust(Maybe.Just(1));
// => true

Maybe.isJust(Maybe.Nothing());
// => false

Maybe.isJust(1);
// => false
```
