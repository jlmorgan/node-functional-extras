# `Maybe.fromJust(maybe)`

Extracts the value out of a `Just` and throws an error if its argument is a `Nothing`.

## Arguments

* `maybe (Maybe)`: The `Maybe`.

## Returns

* `(*)`: The underlying value.

## Throws

* `TypeError` if the `maybe` is `null` or `Nothing`.

## Examples

```javascript
Maybe.fromJust(Maybe.Just(1));
// => 1

Maybe.fromJust(Maybe.Nothing());
// => throws TypeError
```
