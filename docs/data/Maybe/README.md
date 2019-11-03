# `Maybe`

The `Maybe` type is a disjunction that wraps an arbitrary value. A `Maybe` `a` either contains a value of type `a` (read: `Just a`) or empty (read: `Nothing`). `Maybe` provides a way to deal with error or exceptional behavior.

## Table of Contents

* [Constructors](./constructors)
    * [`.Just`](./constructors/Just.md)
    * [`.Nothing`](./constructors/Nothing.md)
* [Static Methods](./static)
    * [`.catMaybes`](./static/catMaybes.md)
    * [`.fromJust`](./static/fromJust.md)
    * [`.fromMaybe`](./static/fromMaybe.md)
    * [`.isJust`](./static/isJust.md)
    * [`.isNothing`](./static/isNothing.md)
    * [`.listToMaybe`](./static/listToMaybe.md)
    * [`.mapMaybe`](./static/mapMaybe.md)
    * [`.maybeMap`](./static/maybeMap.md)
    * [`.maybeToList`](./static/maybeToList.md)
    * [`.of`](./static/of.md)
* [Instance Methods](./instance)
    * [`#equals`](./instance/equals.md)
    * [`#filter](./instance/filter.md)
    * [`#fmap](./instance/fmap.md)
    * [`#hashCode`](./instance/hashCode.md)
    * [`#isJust`](./instance/isJust.md)
    * [`#isNothing`](./instance/isNothing.md)
    * [`#toJSON`](./instance/toJSON.md)
    * [`#toString`](./instance/toString.md)
