# `Maybe#toString()`

Converts the `instance` to a `String` representation.

## Returns

* `(String)`: The `instance` as a `String`.

## Examples

```javascript
const maybe = Maybe.Just("a");

maybe.toString();
// => "Just(a)"

Maybe.Nothing().toString();
// => "Nothing()"
```
