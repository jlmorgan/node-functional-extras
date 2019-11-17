# `uncons(list)`

Decomposes a list into its head and tail. Returns `Nothing` if the `list` is empty; otherwise a `Just (x, xs)` where `x` is the head of the `list` and `xs` is the tail.

## Arguments

* `list (Array)`: The list.

## Returns

* `(Maybe(Tuple(*, Array)))`: `Just` of the head and tail; otherwise, `Nothing`.

## Example

```javascript
uncons([]);
// => Nothing

uncons([0]);
// => Just(Tuple(0, []))

uncons([1, 2, 3]);
// => Just(Tuple(1, [2, 3]))
```
