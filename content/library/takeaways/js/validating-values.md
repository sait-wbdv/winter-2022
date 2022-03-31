---
title: Vaildating Value Types
description: 
---

A common task in untyped languages is confirming the value type that you're working with. For example, when you think a variable is a `Number`,

```
console.log('$' + price.toFixed(2));
```

But you get an error:

```
Uncaught TypeError: price.toFixed is not a function
```

Maybe the value of `price` was submitted from a form,which always converts to a `String`, and does not have the `toFixed` method. Errors like this can be avoided by:

1. Testing for the correct type and/or;
2. Converting to the expected type explicitly

Here are the generally accepted methods of doing both for each of the common value types.

### Undefined?
```js
if (typeof myVar !== 'undefined') {
  // Variable has been assigned!
}
```

### String
Test for `String` value type:

```js
if (typeof myVar === 'string') {
  // Variable is a string!
}
```

### Number
Test for `Number` value type:

```js
if (typeof myVar === 'number') {
  // Variable is a number!
}
```

### Boolean
Test for `Boolean` value type:

```js
if (typeof myVar === 'boolean') {
  // Variable is a boolean!
}
```

### Null
Test if a variable is NOT `null`:

```js
if (typeof myVar === "object" && !myVar) {
  // Variable is a NOT null!
}
```
- `typeof null` evaluates to "object" because of an old and non-fixable bug in Javascript. See [How to Check for null in JavaScript](https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5) for all the gory details.

### Array
Test for `Array` value type:

```js
// Method 1
if (myVar.constructor == Array) {
  // Variable is an array!
}

// Method 2
if (Array.isArray(myVar)) {
  // Variable is an array!
}
```
- [source](https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript)

Test for a NON-EMPTY array:

```js
// Method 1
if (myVar.constructor == Array && myVar.length) {
  // Variable is anon-empty array!
}

// Method 2
if (Array.isArray(myVar) && myVar.length) {
  // Variable is anon-empty array!
}
```

### Object
Test for `Object` value type:

```js
if (typeof myVar === 'object' && myVar !== null) {
  // Variable is an object!
}
```
- `null` variables also return "object" because of a bug in Javascript, hence the extra test for `null`

Optional chaining operator (`?.`):

```js
const myVar = myObject?.name;
```
- returns `undefined` (instead of an error) if `name` does not exist
