# `Maybe.maybeMap(defaultValue, morphism, maybe)`

If the `Maybe` value is a `Nothing`, it returns the `defaultValue`; otherwise, applies the `morphism` to the underlying value in the `Just` and returns the result.

## Alternatives

* `Maybe.maybeMap(defaultValue, morphism)(maybe)`
* `Maybe.maybeMap(defaultValue)(morphism, maybe)`
* `Maybe.maybeMap(defaultValue)(morphism)(maybe)`

## Arguments

* `defaultValue (*)`: The value to use if the `maybe` is `null` or `Nothing`.
* `morphism (Function)`: The function to map the underlying value of the `maybe` to the same type as the return type.
* `maybe (Maybe)`: The `Maybe`.

## Returns

* `(*)`: The mapped underlying value for a `Just`; otherwise, the `defaultValue`.

## Throws

* `TypeError` if the `morphism` is `null`.

## Examples

```javascript
Maybe.maybeMap(0, value => value + 1, Maybe.Just(1));
// => 2

Maybe.maybeMap(0)(value => value + 1, null);
// => 1

Maybe.maybeMap(0)(value => value + 1)(Maybe.Nothing());
// => 1
```
