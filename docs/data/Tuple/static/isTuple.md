# `isTuple(value)`

Determines whether or not the `value` is a [`Tuple`][Tuple].

## Arguments

* `value (*)`: The value to test.

## Returns

* `(Boolean)`: `true` if a [`Tuple`][Tuple]; otherwise, `false`.

## Example

```javascript
Tuple.isTuple(["a", 1]);
// => false

Tuple.isTuple(Tuple.of("a", 1));
// => true
```

[Tuple]: ..
