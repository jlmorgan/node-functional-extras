# `Either#equals(other)`

Determines whether or not the `other` has the same value as the current `instance`.

## Arguments

* `other (Object)`: The other object.

## Returns

* `(Boolean)`: `true` for equality; otherwise, `false`.

## Examples

```javascript
const left = Either.Left("a");
const right = Either.Right("a");

right.equals("a");
// => false

right.equals(left);
// => false

right.equals(Either.Right("a"));
// => true

left.equals(Either.Left("a"));
// => true
```
