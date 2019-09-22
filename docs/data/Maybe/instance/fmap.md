# `Maybe#fmap(morphism)`

Maps the underlying value of a `Maybe` in a `null`-safe way.

## Alternatives

* `Maybe.fmap(morphism)(maybe)`
* `Maybe.fmap(morphism, maybe)`

## Arguments

* `morphism (Function)`: The morphism.

## Returns

* `(Maybe)`: The mapped `Maybe`.

## Throws

* `TypeError` if the `maybe` is not a `Maybe`.
* `TypeError` if the `morphism` is not a `Function`.

## Examples

```javascript
const square = value => value * value;
Maybe.Just(4)
  .fmap(square);
// => Just(16)

Maybe.Nothing()
  .fmap(square);
// => Nothing()

Maybe.Just([null])
  .fmap(list => list[0]);
// => Nothing()
```
