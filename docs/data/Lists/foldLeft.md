# `foldLeft(fold, initialValue, list)`

Folds a list from last to head.

## Alternatives

* `foldLeft(fold)(initialValue)(list)`
* `foldLeft(fold, initialValue)(list)`
* `foldLeft(fold)(initialValue, list)`

## Arguments

* `fold (Function)`: Folding function.
* `initialValue (*)`: Initial value.
* `list (Array)`: The list.

## Returns

* `(*)`: The result of the fold.

## Throws

* `TypeError` if the `fold` is not a `Function`.

## Example

```javascript
const letters = ["a", "b", "c"];
const fold = (accumulator, value) => accumulator + value;
const initialValue = "";

foldLeft(fold, initialValue, letters);
// => 'cba'
```
