// Variable Declaration - let/const - block scoped {}
    // const cannot be reassigned
        // anotherVariable = false 
    // let can be 
        // theAnswer = "The Answer"
    
// var exists - function scoped


// String, Number, Undefined, Null, Boolean (Symbols, BigIntegers)
const anotherVariable = "Hello, I am another variable"
let theAnswer = 5 + 5
let nothing = undefined
let anotherNothing = null
let boolean = true || false

// String Interpolation - `` + ${}
let sentence = `The answer to 5 + 5 is ${theAnswer}`

console.log(sentence)




// NON PRIMITIVES

// ARRAYS
    // List of things and we care about the order
    // Index - Begins at 0
    // Use the indices to access the information
    
let continents = ["Asia", "Europe", "Antarctica"]
    continents[0] // -> "Asia"
    continents[2] // -> "Antarctica"
let booleans = [true, false]
    booleans[1] // -> false
let integers = [0,1,2,3]
    integers[3] //-> 3

let mixedBagsOfGoodies = [0, true, {}, function(){}]



// OBJECTS (POJO - Plain Old JavaScript Objects {})
    // Relevant information in one package
    // Key - Value 
    // Use the keys to access the information

let hasibul = {
    name: "Hasibul",
    occupation: "Batman",
    lives: true,
    brainCells: 1000000000,
    foods: ["Chicken", "Noodle", "Soup"],
    car: {
        fast: "yes",
        model: "Lexus"
    }
}

// BRACKET NOTATION
hasibul["name"] //-> "Hasibul"
// DOT NOTATION
hasibul.name //-> "Hasibul"

hasibul.foods // -> [...]
hasibul.foods[0] // -> "Chicken"
hasibul.foods[2] // -> "Soup"

hasibul.car // -> {...}
hasibul.car.model // -> "Lexus"
hasibul["car"]["model"] // -> "Lexus"


let eric = {
    name: "Eric",
    occupation: "Robin",
    lives: true,
    brainCells: 2,
    foods: ["Chicken", "Sandwich", "Pickles"],
    car: {
        fast: "No",
        model: "Scooter"
    }
}

let instructors = [hasibul, eric]
// instructors -> [{}, {}]

instructors[0] // -> {}
instructors[0].brainCells // -> 1000000000






// FUNCTIONS
    // You can do as many proccesses as you like
    // Implicitly return `undefined` (Can only return one thing)
    // You write at the end `return`

function nameOfFunction(){

}

// Definition
function sayHello(){
    console.log("Hello")
    console.log("My name is Eric")
    console.log("Nice to meet you")
    return 92
}

// Execution/Invocation/Call
let returnValue = sayHello()
    returnValue // -> 92



