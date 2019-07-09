# `Either#toJSON()`

Converts the `instance` to a [`JSON`][JSON] representation.

## Returns

* `(String)`: The `instance` as a [`JSON`][JSON] formatted `String`.

```javascript
Either.Left({ a: 1 }).toJSON();
// => '{"left":{"a":1}}'

Either.Right({ a: 1 }).toJSON();
// => '{"right":{"a":1}}'
```

[JSON]: https://www.json.org
