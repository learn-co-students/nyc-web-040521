# JS Fundamentals Assessment

*This Lab Lovingly Stolen From [Ian Hollander](https://github.com/ihollander) and [Michelle Rios](https://github.com/BrendaMichelle)*

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

Open the `index.html` file in the browser, and open the developer tools in the browser so you can see the console. You will be writing your code in the `index.js` file. As you write your code, uncomment the lines below each question to test your code. Any time you make changes in the `index.js` file, you'll need to refresh the page to see the your changes in the console.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Assignment

This assessment is meant to give you a chance to practice with the key skills you're expected to know as we go along. The topics you should focus on are listed out below. It's not expected that you will have mastered all these skills yet, but completing this assessment will help us learn how to best focus out time instructing the class as a whole and also how to help each student individually.

### Question 1

Create a variable called `counter` and assign it to a value of 1. Then, on a new line, *reassign* the value of `counter` to 2.

```js
console.log(counter) 
// => 2
```

### Question 2

Create a variable called `name` and assign it to a value of your name. You *should not* be able to reassign the variable after it has been created.

```js
// attempting to reassign should throw an error
name = "Not Raffy" 
// => TypeError
```

### Question 3

Define the function called `drinkWater`.
The function will take in a user's thirst level as an argument.
In the body {} of the function, it will:
 - log to the console the string: "Man I sure am thirsty"
 - subtract one from the user's thirst level
 - log to the console the string: "Ahh that hits the spot"
 - return the new thirst level 

Testing Code:

```js
console.log(drinkWater(12))
// => "Man I sure am thirsty"
// => "Ahh that hits the spot"
// RETURNS => 11
```

### Question 4

Write a function `sameSameButDifferent` that takes in two arguments, `num` and `maybeNum`. If `num` and `maybeNum` are both numbers, and the same value, it should return `"same same"`. If `num` is the same value as `maybeNum` after converting `maybeNum` to a number, it should return `"same same (but different)"`. Otherwise, it should return `"different"`.

```js
console.log(sameSameButDifferent(5, 5)) 
// => "same same"

console.log(sameSameButDifferent(123, "123")) 
// => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// => "different"

console.log(sameSameButDifferent(123, "122")) 
// => "different"
```

### Question 5

Write a function `updateGrade` that takes two arguments: a `student` (object), and a `grade` (number). Calling this function should update the grade property on the `student` object to be the value of the `grade` argument.

```js
const student1 = { name: "Duane", grade: 88 }

updateGrade(student1, 92)

console.log(student1)
// => { name: "Duane", grade: 92 }
```

### Question 6

Define a function that takes in an array of user objects.
Enumerate through the array and *for each* user, print to the console their:
- name
- cell phone number
- office phone number

Try to see if you can do this without using a `for` loop!

```
users = [
  { 
    name: "Duane",
    phones: {
      cell: "555-123-4567",
      office: "555-456-7890",
    }
  },
  {
    name: "Liza",
    phones: {
      cell: "555-234-5678",
      office: "555-567-1234"
    }
  }
]

print_name_and_phones(users)
# => "Duane"
# => "Cell: 555-123-4567"
# => "Office: 555-456-7890"
# => "Liza"
# => "Cell: 555-234-5678"
# => "Office: 555-567-1234"
```

### Callbacks

The function `myMap` takes in two arguments: an array, and a callback function. `myMap` will return a new array by calling the callback function with each element of the array. 

```js
function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}
```

You should not change any code inside the `myMap` function to get the following questions to work.

### Callbacks - Question 1

Write a function `triple` to be used as a callback function with the `myMap` function, so that calling `myMap` with an array of numbers and your `triple` function will return a new array with each value from the original array tripled.

```js
console.log(myMap([1,2,3,4,5], triple)) 
// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
```

### Callbacks - Question 2

Write a function `greet` to be used as a callback function with the `myMap` function, so that calling `myMap` with an array of names and your `greet` function will return a new array with a greeting for each name.

```js
console.log(myMap(["Raffy", "Chase"], greet)) 
// => ["Hi, Raffy!", "Hi, Chase!"]
```

### Scope & Closures

You may remember these functions from the old Deli Counter lab. The `takeANumber` function takes in two arguments: a `line` (array) and a `name` (string), adds the name to the end of the line, and returns a welcome message (string). The `nowServing` function takes a `line` (array); if the line is empty, it returns a message, if it's not empty, it removes the first customer from the line and returns a message.

```js
function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

console.log(takeANumber(line, "Loren"))
// => `Welcome, Loren. You are number 1 in line.`

console.log(takeANumber(line, "Liza"))
// => `Welcome, Liza. You are number 2 in line.`

console.log(nowServing(line))
// => `Currently serving Loren.`

console.log(nowServing(line))
// => `Currently serving Liza.`
```

### Scopes & Closures - Question 1

Create a `takeATicketNumber` function that will replace the `takeANumber` function. It only takes in one argument, a `line` (array). Instead of working with names, we'll have it work with ticket numbers. Calling `takeATicketNumber` should do two things:

- Add a ticket number to the line (starting with ticket number 1)
- Return a message `"Welcome. You are ticket number 1"`

You will need to create a new variable to solve this; think about where that variable should be in terms of *scope*. You should not have to change the `nowServing` function.

```js
const line = []

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 2`

console.log(nowServing(line))
// => `Currently serving 1.`

console.log(nowServing(line))
// => `Currently serving 2.`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 3`
```

### Scopes & Closures - Question 2 (BONUS)

Try to solve the problem above using a higher order function, and without using a global variable for the ticket number. Write a higher order function called `ticketNumberGeneratorFunc` that returns a nested `takeATicketNumber` function. The other functionality should remain the same. 

```js
const newLine = []

const takeATicketNumberFunc = ticketNumberGeneratorFunc()

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`

console.log(takeATicketNumberFunc(line))
// => `Welcome. You are ticket number 3`
```