# `Maybe#equals(other)`

Determines whether or not the `other` has the same value as the current `instance`.

## Arguments

* `other (Object)`: The other object.

## Returns

* `(Boolean)`: `true` for equality; otherwise, `false`.

## Examples

```javascript
const maybe = Maybe.Just("a");

maybe.equals(null);
// => false

maybe.equals("a");
// => false

maybe.equals({});
// => false

maybe.equals(Maybe.Nothing());
// => false

maybe.equals(Maybe.Just("a"));
// => true

Maybe.Nothing().equals(Maybe.Nothing());
// => true
```
