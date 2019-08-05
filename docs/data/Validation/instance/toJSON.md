# `Validation#toJSON()`

Converts the `instance` to a [`JSON`][JSON] representation.

## Returns

* `(String)`: The `instance` as a [`JSON`][JSON] formatted `String`.

```javascript
Validation.Failure({ a: 1 }).toJSON();
// => '{"failure":{"a":1}}'

Validation.Success({ a: 1 }).toJSON();
// => '{"success":{"a":1}}'
```

[JSON]: https://www.json.org
