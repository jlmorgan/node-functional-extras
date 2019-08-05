# `Validation#isFailure()`

Determines whether or not the `Validation` is a `Failure`.

## Returns

* `(Boolean)`: `true` for a `Failure`; otherwise, `false`.

## Examples

```javascript
Validation.Failure("a").isFailure();
// => true

Validation.Success("a").isFailure();
// => false
```
