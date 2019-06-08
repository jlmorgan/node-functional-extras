# `Maybe.fromMaybe(defaultValue, maybe)`

Takes a `defaultValue` and a `Maybe` value. If the `Maybe` is `Nothing`, it returns the `defaultValue`; otherwise, it returns the underlying value of the `Just`.

## Alternatives

* `Maybe.fromMaybe(defaultValue)(maybe)`

## Arguments

* `defaultValue (*)`: The value to use if the `maybe` is `null` or `Nothing`.
* `maybe (Maybe)`: The `Maybe`.

## Returns

* `(*)`: The underlying value for a `Just`; otherwise, the `defaultValue`.

## Examples

```javascript
Maybe.fromMaybe(0, Maybe.Nothing());
// => 0

Maybe.fromMaybe(0, Maybe.Just(1));
// => 1
```
