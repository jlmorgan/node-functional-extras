# `tupleMap(firstMorphism, secondMorphism, value)`

Maps the `value` into the elements of the [`Tuple`][Tuple] after applying a morphism for each position.

## Alternatives

* `tupleMap(firstMorphism, secondMorphism)(value)`
* `tupleMap(firstMorphism)(secondMorphism)(value)`

## Arguments

* `firstMorphism (Function)`: The function to map the `value` into the first element.
* `secondMorphism (Function)`: The function to map the `value` into the second element.
* `value (*)`: The value.

## Returns

* `(Tuple)`: The mapped tuple.

## Throws

* `TypeError` if the `firstMorphism` or `secondMorphism` is not a `Function`.

## Example

```javascript
Tuple.tupleMap(increment, decrement, 10);
// => Tuple(11, 9)
```

[Tuple]: ..
