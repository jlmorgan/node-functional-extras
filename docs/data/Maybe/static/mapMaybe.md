# `Maybe.mapMaybe(morphism, list)`

A version of `map` which can throw out elements. If the result of the function is `Nothing`, no element is added to the result list; otherwise, the value is added.

## Alternatives

* `Maybe.mapMaybe(morphism)(list)`

## Arguments

* `morphism (Function)`: The function that maps the value in the `list` to a `Maybe` of the result.
* `list (Array)`: The list of values.

## Returns

* `(Array)`: A list of mapped `Just` values.

## Throws

* `TypeError` if the `morphism` is `null`.

## Examples

```javascript
const isEven = value => value % 2 === 0;

Maybe.mapMaybe(
  value => isEven(value) ? Maybe.Just(value) : Maybe.Nothing(),
  [0, 1, 2, 3]
);
// => [0, 2]

Maybe.mapMaybe(
  value => isEven(value) ? Maybe.Just(value) : Maybe.Nothing(),
  null
);
// => []

Maybe.mapMaybe(
  value => isEven(value) ? Maybe.Just(value) : Maybe.Nothing(),
  []
);
// => []
```
