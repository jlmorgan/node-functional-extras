# `pipe(f, g) | pipe(f)(g)`

Composes two functions `f` before `g`.

## Arguments

* `f (Function)`: The first function.
* `g (Function)`: The second function.

## Returns

* `(Function)`: Returns a function that maps a value of `a` to `c`.

## Example

```javascript
const add = a => b => a + 1;
const square = a => a * a;
const decrementAndSquare = pipe(add(-1), square);
const incrementAndSquare = pipe(add(1))(square);

decrementAndSquare(3);
// => 4

incrementAndSquare(2);
// => 9
```
