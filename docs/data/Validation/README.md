# `Validation`

The `Validation` type is a right-biased disjunction that represents two possibilities: either a `Failure` of `a` or a `Success` of `b`. By convention, the `Validation` is used to represent a value or failure result of some function or process as a `Failure` of the failure message or a `Success` of the value.

* [Constructors](./constructors)
    * [`.Failure`](./constructors/Failure.md)
    * [`.Success`](./constructors/Success.md)
* [Static Methods](./static)
    * [`.concat`](./static/concat.md)
    * [`.failures`](./static/failures.md)
    * [`.fromFailure`](./static/fromFailure.md)
    * [`.fromSuccess`](./static/fromSuccess.md)
    * [`.isFailure`](./static/isFailure.md)
    * [`.isSuccess`](./static/isSuccess.md)
    * [`.partitionValidations`](./static/partitionValidations.md)
    * [`.successes`](./static/successes.md)
    * [`.validate`](./static/validate.md)
    * [`.validationMap`](./static/validationMap.md)
* [Instance Methods](./instance)
    * [`#equals`](./instance/equals.md)
    * [`#isFailure`](./instance/isFailure.md)
    * [`#isSuccess`](./instance/isSuccess.md)
    * [`#toJSON`](./instance/toJSON.md)
    * [`#toString`](./instance/toString.md)
