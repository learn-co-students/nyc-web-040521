// ***** Question 1 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 1", "color: red") 

let counter = 1
counter = 2


// console.log(counter) 
// // => 2
// console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
// console.log("%cQuestion 2", "color: red") 

const name = "Eric"

// console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
// console.log("%c----------", "color: red") 



// ***** Question 3 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 3", "color: red") 

// Baseless functions
function drinkWater(thirstLevel){
  console.log("Man I sure am thirsty")
  let newLevel = thirstLevel - 1
  console.log("Ahh that hits the spot")
  return newLevel
}


// Arrow Functions
  // One parameter - you don't need the parentheses 
  // Body {} is sometimes not needed (for implicit returns)

const drinkWaterAF = (thirstLevel) => {
  console.log("Man I sure am thirsty inside AF")
  let newLevel = thirstLevel - 1
  console.log("Ahh that hits the spot inside AF")
  return newLevel
}


const shortFuncThatImplicitlyReturnsHello = () => "hello"




// console.log(drinkWaterAF(12))
// // => "Man I sure am thirsty"
// // => "Ahh that hits the spot"
// // => 11
// console.log("%c----------", "color: red") 





// ***** Question 4 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 4", "color: red") 

// Threequals - Strict comparison (No data conversion)
// Double equals - Loose comparison (Converts right to try and match the left)


function sameSameButDifferent(num1, num2){

  if(num1 === num2){
    return "same same"
  } else if(num1 == num2){
    return "same same (but different)"
  } else {
    return "different"
  }

}


let sameSameButDifferentAF = (num1, num2) => {
  if(num1 === num2){
    return "same same"
  } else if(num1 == num2){
    return "same same (but different)"
  } else {
    return "different"
  }
}




// console.log(sameSameButDifferent(5, 5)) 
// // => "same same"

// console.log(sameSameButDifferent(123, "123")) 
// // => "same same (but different)"

// console.log(sameSameButDifferent(5, 7)) 
// // => "different"

// console.log(sameSameButDifferent(123, "122")) 
// // => "different"
// console.log("%c----------", "color: red") 



// ***** Question 5 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 5", "color: red")

// const pointing to non-primitives can be modified, but not reassigned
const student1 = { name: "Duane", grade: 88 }

function updateGrade(studentObj, newGrade){
  studentObj.grade = newGrade
}


updateGrade(student1, 92)
// console.log(student1)
// // => { name: "Duane", grade: 92 }
// console.log("%c----------", "color: red")



// ***** Question 6 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]

// [{}, {}]


// users.forEach( (userObj) => {
//   console.log("******")

//   console.log(userObj.name)
//   console.log("Cell:", userObj.phones.cell)
//   console.log("Office:", userObj.phones.office)

//   console.log(Object.values(userObj.phones))
//   // [ "555-123-4567", "555-456-7890"]

//   console.log("******")

// } )


function myForEach(callback){
  callback()
}








// printNameAndPhones(users)
// // => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
// console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test
// console.log("%cCallbacks - Question 1", "color: red")


function triple(num){
  return num * 3
}


// console.log(myMap([1,2,3,4,5], triple)) 
// // => [3,6,9,12,15]

// console.log(myMap([2,4,6,8], triple))   
// // => [6,12,18,24]
// console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
// *** Uncomment the lines below to test
// console.log("%cCallbacks - Question 2", "color: red")


let greet = (name) => {
  return `Hi, ${name}!`
}

console.log(myMap(["Raffy", "Chase"], greet)) 
// // => ["Hi, Raffy!", "Hi, Chase!"]
// console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

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
// ***** Scope & Closures - Question 1 *****

let theNumber = 0

function takeATicketNumber(lineArg){
  theNumber = theNumber + 1
  lineArg.push(theNumber)
  return `Welcome, you are ticket number ${theNumber}`
}


// *** Uncomment the lines below to test
// console.log("%cScope & Closures - Question 1", "color: red")

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 1`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 2`

// console.log(nowServing(line))
// // => `Currently serving 1.`

// console.log(nowServing(line))
// // => `Currently serving 2.`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 3`

// console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test
// console.log("%cScope & Closures - Question 2", "color: red")

const newLine = []


function ticketNumberGeneratorFunc(){
  let innerHiddenNumber = 0
  console.log("How many times will this show up")


  
  function theFuncDefToBeReturned(line){
    innerHiddenNumber = innerHiddenNumber + 1
    line.push(innerHiddenNumber)
    return `Welcome, you are ticket number ${innerHiddenNumber}`
  }

  return theFuncDefToBeReturned

}



let takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// // => `Currently serving 1.`

console.log(nowServing(newLine))
// // => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 3`

// console.log("%c----------", "color: red") 