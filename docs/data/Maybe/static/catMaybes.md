# `Maybe.catMaybes(list)`

Takes a list of `Maybe` and returns a list of the `Just` values.

## Arguments

* `list (Array)`: List of `Maybe`.

## Returns

* `(Array)`: A list of the `Just` values.

## Examples

```javascript
Maybe.catMaybes(Arrays.asList(
  Maybe.Just(1),
  Maybe.Nothing(),
  Maybe.Just(2),
  Maybe.Nothing()
));
// => [1, 2]
```
