# `Maybe#isNothing()`

Determines whether or not the `Maybe` is a `Nothing`.

## Returns

* `(boolean)`: `true` for a `Nothing`; otherwise, `false`.

## Examples

```javascript
Maybe.Just("a").isNothing();
// => false

Maybe.Nothing().isNothing();
// => true
```
