# `flipCurried(f)`

Flips the argument order of the specified curried binary function.

## Arguments

* `f (Function)`: A curried binary function.

## Returns

### `flip`

* `(Function)`: The curried flipped binary function.

## Example

```javascript
const first = a => b => a;
const second = flipCurried(first);

first("a")("b");
// => "a"

second("a")("b");
// => "b"

second("a", "b");
// => "b"
```
