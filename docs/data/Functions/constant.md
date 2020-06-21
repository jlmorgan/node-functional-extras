# `constant(a)`

The `K` combinator. Creates a unary function that ignores the input value and returns the original value.

## Arguments

* `a (*)`: The value.

## Returns

* `(Function)`: A unary function that takes a value and returns the original value.

## Example

```javascript
alwaysOne = constant(1);

alwaysOne(0);
// => 1

alwaysOne(2);
// => 1
```
