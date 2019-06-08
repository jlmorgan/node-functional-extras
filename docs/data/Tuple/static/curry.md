# `curry(f)`

Curries a function with two arguments.

## Arguments

* `f (Function)`: The function to curry.

## Returns

* `(Function)`: The curried function.

## Examples

```javascript
const add = curry((a, b) => a + b);
const increment = add(1);

increment(5);
// => 6
```
