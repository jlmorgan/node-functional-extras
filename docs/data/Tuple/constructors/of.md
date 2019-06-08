# `of(first, second) | of(first)(second)`

Creates a [`Tuple`][Tuple] with two values.

## Arguments

* `first (*)`: The first value.
* `second (*)`: The second value.

## Returns

* `(Tuple)`: A `Tuple` of the two values.

## Example

```javascript
Tuple.of("a")(1);
// => Tuple("a", 1)

Tuple.of("b", 2);
// => Tuple("b", 2)
```

[Tuple]: ..
