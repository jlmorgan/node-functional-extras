# `Maybe#filter(predicate)`

Tests the underlying value against the `predicate`, returning the `Just` of the value for `true`; otherwise, `Nothing`.

## Alternatives

* `Maybe.filter(predicate)(maybe)`
* `Maybe.filter(predicate, maybe)`

## Arguments

* `predicate (Function)`: The predicate with which to test the value.

## Returns

* `(Maybe)`: The `Just` of the value for `true`; otherwise, `Nothing`.

## Throws

* `TypeError` if the `predicate` is `null`.

## Examples

```javascript
isEven = value => value % 2 === 0;
Maybe.Just(0)
  .filter(isEven);
// => Just(1)

Maybe.Just(1)
  .filter(isEven);
// => Nothing()

Maybe.Nothing()
  .filter(isEven);
// => Nothing()

Maybes.filter(isEven).apply(Maybe.Just(0));
// => Just(0)

Maybes.filter(isEven, Maybe.Just(1));
// => Nothing()

Maybes.filter(isEven, Maybe.Nothing());
// => Nothing()
```
