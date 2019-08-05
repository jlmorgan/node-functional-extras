# `Validation.concat(second, first)`

Concatenates two `Failure` values together, replace a `Success` with the `Failure`; otherwise, take the first `Success`.

## Alternatives

* `Validation.concat(second)(first)`

## Arguments

* `second (Validation)`: The second `Validation`.
* `first (Validation)`: The first `Validation`.

## Returns

* `(Validation)`: The first `Success` for two successes, the first `Failure` for mixed; otherwise, a `Failure` of the concatenation of the failure values.

## Throws

* `TypeError` if either value is not a `Validation`.

## Examples

```javascript
Validation.concat(
  Validation.Success(0),
  Validation.Success(1)
);
// => Success(0)

Validation.concat(
  Validation.Success(0),
  Validation.Failure("a")
);
// => Failure(["a"])

Validation.concat(
  Validation.Failure("a"),
  Validation.Success(0)
);
// => Failure(["a"])

Validation.concat(
  Validation.Failure("b"),
  Validation.Failure("a")
);
// => Failure(["a", "b"])
```
