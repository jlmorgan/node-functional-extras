# `Tuple#toJSON()`

Converts the `instance` to a [`JSON`][JSON] representation.

## Returns

* `(String)`: The `instance` as a [`JSON`][JSON] formatted `String`.

```javascript
const tuple = Tuple.of("a", 1);

tuple.toJSON();
// => '{"tuple":[1, "a"]}'
```

[JSON]: https://www.json.org
