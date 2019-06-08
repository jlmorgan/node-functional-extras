# `isFunction(value)`

Determines whether or not the `value` is a `function`.

## Arguments

* `value (*)`: The value.

## Returns

* `(Boolean)`: `true` for a `AsyncFunction`, `Function`, or `GeneratorFunction`; otherwise, `false`.

## Examples

```javascript
isFunction();
// => false

isFunction(null);
// => false

isFunction(value => value + 1);
// => true

isFunction(function() {});
// => true

isFunction(function *() {});
// => true

isFunction(async function () {});
// => true
```
