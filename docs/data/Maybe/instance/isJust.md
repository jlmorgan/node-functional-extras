# `Maybe#isJust()`

Determines whether or not the `Maybe` is a `Just`.

## Returns

* `(Boolean)`: `true` for a `Just`; otherwise, `false`.

## Examples

```javascript
Maybe.Just("a").isJust();
// => true

Maybe.Nothing().isJust();
// => false
```
