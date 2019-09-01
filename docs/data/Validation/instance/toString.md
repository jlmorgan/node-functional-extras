# `Validation#toString()`

Converts the `instance` to a `String` representation.

## Returns

* `(String)`: The `instance` as a `String`.

## Examples

```javascript
Validation.Failure("a").toString();
// => "Failure(a)"

Validation.Success("a").toString();
// => "Success(a)"
```
