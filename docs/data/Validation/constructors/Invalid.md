# `Validation.Invalid(value)`

Encapsulates an invalid value.

## Arguments

* `value (*)`: The value.

## Returns

* `(Validation)`: An `Validation` of the `value`.

## Example

```javascript
Validation.Invalid(0);
// => Invalid([0])

Validation.Invalid([0, 1, 2]);
// => Invalid([0, 1, 2])
```
