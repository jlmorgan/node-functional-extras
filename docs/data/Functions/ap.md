# `ap(g, f)`

Composes a sequence of two functions `g` after `f` where `f` maps the input value to the second argument of `g`.

## Alternatives

* `ap(g)(f)`

## Arguments

* `g (Function)`: The second function of the sequence.
* `f (Function)`: The first function of the sequence.

## Returns

* `(Function)`: A function that takes the value and returns the result of the sequence.

## Example

```javascript
const subtract = (a, b) => a - b;
const square = a => a ** 2;
const subtractSquare = ap(subtract, square);

subtractSquare(3);
// => -6

subtractSquare(5);
// => -20
```
