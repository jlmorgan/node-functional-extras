# `Maybe.maybeToList(maybe)`

An empty list for `Nothing`; otherwise, a singleton list of the underlying value of the `Just`.

## Arguments

* `maybe (Maybe)`: The `Maybe`.

## Types

* `(*)`: The underlying type.

## Returns

* `(Array)`: A singleton list of the underlying value within the `maybe` for a `Just`; otherwise, an empty list for `Nothing`.

## Examples

```javascript
Maybe.maybeToList(Maybe.Just(1));
// => [1]

Maybe.maybeToList(Maybe.Nothing());
// => []

Maybe.maybeToList(null);
// => []
```
