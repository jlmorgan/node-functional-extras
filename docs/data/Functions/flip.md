# `flip(f)`

Flips the argument order of the specified binary function.

## Arguments

* `f (Function)`: A binary function.

## Returns

### `flip`

* `(Function)`: The curried flipped binary function.

## Example

```javascript
const append = (a, b) => a + b;
const prepend = flip(append);

prepend("a", "b");
// => "ba"

prepend("a")("b");
// => "ba"
```
