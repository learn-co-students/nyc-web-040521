// Function Definition - A grocery list

function takesThreeParameters(thing1, thing2, thing3){
    console.log("The first thing is:", thing1)
    console.log("The second thing is:", thing2)
    console.log("The third thing is:", thing3)

    let theThingyToBeInterpolated

    if(thing3){
        theThingyToBeInterpolated = thing3
    } else {
        theThingyToBeInterpolated = thing1
    }

    return function(){
        console.log(theThingyToBeInterpolated);
        console.log("Hello, I like Chicken")
    }
}


// Function Execution/Invocation/Call - You going to the store
    
// When we do:
    // let variable = functionInvocation()
    // variable is the return value of that function

// Perfect number of arguments 
// let returnValue = takesThreeParameters("Hello", 2, {})

// Too few arguments - Fills in the missing arguments with undefined
// let anotherReturnValue = takesThreeParameters(5, "Goodbye")

// Too many arguments - Ignores the extra arguments (Look at only the first N arguments)

// let thirdReturnValue = takesThreeParameters(7, 8, function(){}, 10, "chicken")





// Function Definition
    // First class functions - It treats function definitions to be like other data types
        // Array of Function definition
        // Function can return Function definition
        // Function can take in Function definition  
takesThreeParameters






let arrayOfGoodies = [10, 9, 8, 7]

// for(let i= 0;i < arrayOfGoodies.length; i++){
//     console.log(arrayOfGoodies[i])
// }

// forEach takes one callback as its definition
    // Callbacks are function definitions (takesThreeParameters) being passed into function invocations (forEach)

    // Callbacks are at the mercy of the function receiving it

    // takesThreeParameters has to play by the rules of forEach
    // forEach decides how the callback is to be used

// Named callback

arrayOfGoodies.forEach( takesThreeParameters )

// Anonymous callback

arrayOfGoodies.forEach(function (number){
    console.log(number + number)
})





// SCOPE - Variables can go outside in, but not inside out. {}

let globalVariable = "I am defined on the outermost scope"


function goThroughAnArray(arrayArg){
    let innerVariable = "I am defined in goThroughAnArray"
    // globalVariable and innerVariable ✅
    // element and innerMostVar ⛔️
    
    
    
    arrayArg.forEach(function(element){
        // globalVariable, innerVariable, element and innerMostVar ✅
        let innerMostVar = "I am inside callback"
    })
    
    console.log(globalVariable);
    
}

// globalVariable ✅
// element, innerVariable, innerMostVar ⛔️
 
