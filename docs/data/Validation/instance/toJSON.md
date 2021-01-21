# `Validation#toJSON()`

Converts the `instance` to a [`JSON`][JSON] representation.

## Returns

* `(String)`: The `instance` as a [`JSON`][JSON] formatted `String`.

```javascript
Validation.Invalid({ a: 1 }).toJSON();
// => '{"invalid":{"a":1}}'

Validation.Valid({ a: 1 }).toJSON();
// => '{"valid":{"a":1}}'
```

[JSON]: https://www.json.org
