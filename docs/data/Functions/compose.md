# `compose(g, f)`

Composes two functions `g` after `f`.

## Alternatives

* `compose(g)(f)`

## Arguments

* `g (Function)`: The second function.
* `f (Function)`: The first function.

## Returns

* `(Function)`: A function that maps a value `a` to `c`.

## Example

```javascript
const add = a => b => a + b;
const square = a => a * a;
const decrementAndSquare = compose(square, add(-1));
const incrementAndSquare = compose(square)(add(1));

decrementAndSquare(3);
// => 4

incrementAndSquare(2);
// => 9
```
