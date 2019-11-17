# `foldRight(fold, initialValue, list)`

Folds a list from head to last.

## Alternatives

* `foldRight(fold)(initialValue)(list)`
* `foldRight(fold, initialValue)(list)`
* `foldRight(fold)(initialValue, list)`

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

foldRight(fold, initialValue, letters);
// => 'abc'
```
