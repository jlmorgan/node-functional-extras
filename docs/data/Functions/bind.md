# `bind(g, f)`

Composes a sequence of two functions `g` after `f`.

## Alternatives

* `bind(g)(f)`

## Arguments

* `g (Function)`: The second function.
* `f (Function)`: The first function.

## Returns

* `(Function)`: A function that takes the second function (`g`) and returns the result of the sequence.

## Example

```javascript
const add = (a, b) => a + b;
const square = a => a * a;
const squareAndAdd = bind(add, square);

squareAndAdd(3);
// => 12

squareAndAdd(5);
// => 30
```
