# `Either.eitherMap(leftMorphism, rightMorphism, either)`

Provides a catamorphism of the `either` to a singular value. If the value is `Left a`, apply the first function to `a`; otherwise, apply the second function to `b`.

## Alternatives

* `Either.eitherMap(leftMorphism, rightMorphism)(either)`
* `Either.eitherMap(leftMorphism)(rightMorphism)(either)`

## Arguments

* `leftMorphism (Function)`: Maps the value of a `Left a` to `c`.
* `rightMorphism (Function)`: Maps the value of a `Right b` to `c`.
* `either (Either)`: The `Either`.

## Returns

* `(*)`: The result of the catamorphism of the `either`.

## Throws

* `TypeError` if the `leftMorphism` or `rightMorphism` is not a `Function`.
* `TypeError` if the `either` is not an `Either`.

## Examples

```javascript
Either.eitherMap(
  error => error.message,
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Either.Right(1)
);
// => "The value is odd"

Either.eitherMap(
  error => error.message,
  value => `The value is ${value % 2 === 0 ? "even" : "odd"}`,
  Either.Left(new Error("The value is not a number"))
);
// => "The value is not a number"
```
