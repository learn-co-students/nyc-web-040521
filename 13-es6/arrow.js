// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?
    // 1) Arrow functions
    // 2) No curlies
    // 3) Singular line

    // Importance in Phase 2: 🔥🔥🔥🔥🔥

let returnsChicken = () => "chicken"
let returns23 = () => 23

function funcName(){
    return "Hello"
}

let return1 = funcName
    // return1 is a func def
let return2 = funcName()
    // return2 is the return value of that func invocation







let arrayOfNumbers = [100, 23, 21, 192, 231]
let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]
let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]


// ******* MAP

    // Map returns a new transformed array of the same size
        // Callback needs to return the transformation

   let higherNumbers = arrayOfNumbers.map(function(num){ 
        return num + 1
    })

   let wordCount = arrayOfStrings.map((animalStr) => animalStr.length)

// APPLICATION:
    // [{}, {}, {}] -> [<HTML>, <HTML>, <HTML>]

// *******



// ******* FILTER

    // Filter returns a subarray of the same elements
        // Callback needs to return a boolean

    let evenNumbers = arrayOfNumbers.filter(function(num){return num % 2 === 0})
    let oddNumbers = arrayOfNumbers.filter(num => num % 2 === 1)
    let longAnimals = arrayOfStrings.filter(animal => animal.length > 4)
    let aAnimals = arrayOfObjs.filter(function(animal){
        return animal.name[0] === "a"
    })

    // APPLICATION:
        // [{}, {}, {}] -> [{}] 


// *******


// ******* SORT

    // Sort mutates the original array
        // Callback needs to return a number (positive or negative)

    let copyOfStrings = [...arrayOfStrings]

        copyOfStrings.sort(function(stringA, stringB){
            return stringA.localeCompare(stringB)
        })

    let copyOfNumbers = [...arrayOfNumbers]

        copyOfNumbers.sort((numA, numB) => {
            return numA - numB
        })

    let copyOfObjs = [...arrayOfObjs]

        copyOfObjs.sort(function(objectA, objectB){
            return objectA.name.localeCompare(objectB.name)
        })
// *******

function transformArr(arr){

    let transformed = arr.map(function(element){
        return element.length
    })

    return transformed
}
