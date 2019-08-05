# `Validation#isSuccess()`

Determines whether or not the `Validation` is a `Success`.

## Returns

* `(Boolean)`: `true` for a `Success`; otherwise, `false`.

## Examples

```javascript
Validation.Failure("a").isSuccess();
// => false

Validation.Success("a").isSuccess();
// => true
```
