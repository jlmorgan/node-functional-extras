# `Maybe.isNothing(value)`

Determines whether or not the `value` is a `Nothing`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `Nothing`; otherwise, `false`.

## Examples

```javascript
Maybe.isNothing(Maybe.Just(1));
// => false

Maybe.isNothing(Maybe.Nothing());
// => true

Maybe.isNothing(null);
// => false
```
