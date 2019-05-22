# `Tuple#equals(other)`

Determine whether or not the `other` has the same value as the current `instance`.

## Arguments

* `other (*)`: The other object.

## Returns

* `(Boolean)`: `true` for equality; otherwise, `false`.

```javascript
const tuple = Tuple.of("a", 1);

tuple.equals(null);
// => false

tuple.equals("a");
// => false

tuple.equals({});
// => false

tuple.equals(Tuple.of("a", 1));
// => true
```
