# Callbacks and Scope

## Higher Order Functions
- Receives a function as an argument 
- Returns a function as output.
- or both

## CallBack Functions
#### What are callback functions?
- Callbacks are just regular Function definitions! What makes it a callback is how we use it.
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### Write some example code
- Where have we already seen callbacks used in JS?
- Create a callback using *setInterval* or *setTimeout* - demo asynchronous js
- Use callbacks to write cleaner more resusable code.

## Closure and Scope
#### What are closures?
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. -MDN
#### Write some example code
- multiplier
- counter
- add name to an array

## Terminology

- **first-class functions**:
>A programming language is said to have first-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be **passed as an argument to other functions, can be returned by another function and can be arguments of a function (See Callbacks). 

- **functions**:
>A function in Javascript can be thought of as an abstracted process - it is instructions that the computer knows and can execute. Javscript functions can work with arguments and there's no limitation on the length of the body.

- **callback**:
>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. -- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)