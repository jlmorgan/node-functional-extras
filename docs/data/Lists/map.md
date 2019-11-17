# `map(morphism, list)`

Maps the values of the `list` into a new `list`.

## Alternatives

* `map(morphism)(list)`

## Arguments

* `morphism (Function)`: The morphism.
* `list (Array)`: The list.

## Returns

* `(Array)`: The mapped list.

## Example

```javascript
const increment = value => value + 1;

map(increment, [1, 2, 3]);
// => [2, 3, 4]
```
