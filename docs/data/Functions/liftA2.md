# `liftA2(h, g, f)`

Composes a sequence of two functions `g` and `f` and combines the results (`h`) where `f` maps the input value to the first argument of `h` and `g` maps the input value to the second argument of `h`.

## Alternatives

* `liftA2(h)(g)(f)`
* `liftA2(h, g)(f)`
* `liftA2(h)(g, f)`

## Arguments

* `h (Function)`: The combining function of the sequence.
* `g (Function)`: The second function of the sequence.
* `f (Function)`: The first function of the sequence.

## Returns

* `(Function)`: A function that takes the value and returns the result of the sequence.

## Example

```javascript
const half = a => a / 2;
const subtract = (a, b) => a - b;
const square = a => a ** 2;
const subtractHalfFromSquare = liftA2(subtract, half, square);

subtractHalfFromSquare(3); // (3 * 3) - (3 / 2)
// => 7.5

subtractHalfFromSquare(5); // (5 * 5) - (5 / 2)
// => 22.5
```
