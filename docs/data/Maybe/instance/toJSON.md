# `Maybe#toJSON()`

Converts the `instance` to a [`JSON`][JSON] representation.

## Returns

* `(String)`: The `instance` as a [`JSON`][JSON] formatted `String`.

```javascript
Maybe.Just({ a: 1 }).toJSON();
// => '{"a":1}'

Maybe.Nothing().toJSON();
// => null
```

[JSON]: https://www.json.org
