# `Maybe.of(value)`

Creates a `Maybe` of the `value` where:

* `undefined` &rarr; `Nothing`
* `null` &rarr; `Nothing`
* `a` &rarr; `Just(a)`

## Arguments

* `value (*)`: The value.

## Returns

* `(Maybe)`: `Nothing` if the `value` is `null` or `undefined`; otherwise, `Just` of the `value`.

## Examples

```javascript
Maybe.of();
// => Nothing()

Maybe.of(null);
// => Nothing()

Maybe.of(false);
// => Just(false)
```
