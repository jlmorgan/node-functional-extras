# `Validation#toString()`

Converts the `instance` to a `String` representation.

## Returns

* `(String)`: The `instance` as a `String`.

## Examples

```javascript
Validation.Invalid("a").toString();
// => "Invalid(a)"

Validation.Valid("a").toString();
// => "Valid(a)"
```
