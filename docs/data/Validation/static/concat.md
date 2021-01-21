# `Validation.concat(second, first)`

Concatenates two `Invalid` values together, replace a `Valid` with the `Invalid`; otherwise, take the first `Valid`.

## Alternatives

* `Validation.concat(second)(first)`

## Arguments

* `second (Validation)`: The second `Validation`.
* `first (Validation)`: The first `Validation`.

## Returns

* `(Validation)`: The first `Valid` for two valids, the first `Invalid` for mixed; otherwise, an `Invalid` of the concatenation of the invalid values.

## Throws

* `TypeError` if either value is not a `Validation`.

## Examples

```javascript
Validation.concat(
  Validation.Valid(0),
  Validation.Valid(1)
);
// => Valid(0)

Validation.concat(
  Validation.Valid(0),
  Validation.Invalid("a")
);
// => Invalid(["a"])

Validation.concat(
  Validation.Invalid("a"),
  Validation.Valid(0)
);
// => Invalid(["a"])

Validation.concat(
  Validation.Invalid("b"),
  Validation.Invalid("a")
);
// => Invalid(["a", "b"])
```
