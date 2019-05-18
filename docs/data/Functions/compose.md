# `compose(g, f) | compose(g)(f)`

Composes two functions `g` after `f`.

## Arguments

* `g (Function)`: The second function.
* `f (Function)`: The first function.

## Returns

* `(Function)`: Returns a function that maps a value `a` to `c`.

## Example

```javascript
const add = a => b => a + 1;
const square = a => a * a;
const decrementAndSquare = compose(square, add(-1));
const incrementAndSquare = compose(square)(add(1));

decrementAndSquare(3);
// => 4

incrementAndSquare(2);
// => 9
```
