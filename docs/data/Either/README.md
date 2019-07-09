# `Either`

The `Either` type is a right-biased disjunction that represents two possibilities: either a `Left` of `a` or a `Right` of `b`. By convention, the `Either` is used to represent a value or an error result of some function or process as a `Left` of the error or a `Right` of the value.

* [Constructors](./constructors)
    * [`.Left`](./constructors/Left.md)
    * [`.Right`](./constructors/Right.md)
* [Static Methods](./static)
    * [`.eitherMap`](./static/eitherMap.md)
    * [`.fromLeft`](./static/fromLeft.md)
    * [`.fromRight`](./static/fromRight.md)
    * [`.isLeft`](./static/isLeft.md)
    * [`.isRight`](./static/isRight.md)
    * [`.lefts`](./static/lefts.md)
    * [`.partitionEithers`](./static/partitionEithers.md)
    * [`.rights`](./static/rights.md)
* [Instance Methods](./instance)
    * [`#equals`](./instance/equals.md)
    * [`#isLeft`](./instance/isLeft.md)
    * [`#isRight`](./instance/isRight.md)
    * [`#toJSON`](./instance/toJSON.md)
    * [`#toString`](./instance/toString.md)
