# `Maybe.listToMaybe(list)`

Returns `Nothing` for an empty `list` or `Just` of the first element in the `list`.

## Arguments

* `list (Array)`: The `list` of values.

## Returns

* `(Maybe)`: A `Just` of the first non-null value; otherwise, `Nothing`.

## Examples

```javascript
Maybe.listToMaybe([null, 0, null, 1]);
// => Just(0)

Maybe.listToMaybe(null);
// => Nothing()

Maybe.listToMaybe([]);
// => Nothing()

Maybe.listToMaybe([null]);
// => Nothing()
```
