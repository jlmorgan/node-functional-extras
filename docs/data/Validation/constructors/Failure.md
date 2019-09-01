# `Validation.Failure(value)`

Encapsulates a failure value.

## Arguments

* `value (*)`: The value.

## Returns

* `(Validation)`: An `Validation` of the `value`.

## Example

```javascript
Validation.Failure(0);
// => Failure([0])

Validation.Failure([0, 1, 2]);
// => Failure([0, 1, 2])
```
