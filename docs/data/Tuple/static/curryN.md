# `curryN(length, f)`

Curries a function (`f`) with `length` number of arguments.

## Arguments

* `length (Number)`: The number of arguments.
* `f (Function)`: The function to curry.

## Returns

* `(Function)`: The curried function.

## Examples

```javascript
const asSafe = curryN(3, (defaultValue, predicate, value) => predicate(value) ? value : defaultValue);
const asSafeArray = asSafe([], Array.isArray);

asSafeArray();
// => []

asSafeArray(null);
// => []

asSafeArray({});
// => []

asSafeArray([0, 1]);
// => [0, 1]
```
