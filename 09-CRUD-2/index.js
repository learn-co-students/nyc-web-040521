// `defer` guarantees that the initial fetch happens after page load


// Stable elements (elements written out in index.html) have their event listener added once on the global level
// Unstable elements (elements created in JS) have their event listener added on the same scope that they were created in 

let foodsOl = document.querySelector("#grocery-list")
let foodForm = document.querySelector("#new-food")

fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then((foodsArr) => {
        // foodsArr -> [{}, {}]
        foodsArr.forEach(function(foodObj){
            turnFoodObjToHTML(foodObj)
        })

    })





foodForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let whatUserTyped = evt.target.food_name.value

    fetch("http://localhost:3000/foods", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: whatUserTyped,
            count: 1
        })
    })
        .then(res => res.json())
        .then((newlyCreatedFood) => {
            turnFoodObjToHTML(newlyCreatedFood)
        })

})






// {} -> < HTML Listener/>
function turnFoodObjToHTML(foodPOJO){
    console.log(foodPOJO)
    // CREATE ELEMENTS/MANIPULATE THE DOM
    let outerLi = document.createElement("li")
        outerLi.className = "item"

    let foodNameP = document.createElement("p")
        foodNameP.className = "js-food middle aligned content"

    let countSpan = document.createElement("span")
        countSpan.innerText = foodPOJO.count

    let incrementButton = document.createElement("button")
        incrementButton.innerText = "Increment"

    let deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.innerText = "X"

    foodNameP.append(`${foodPOJO.name} - `, countSpan)
    outerLi.append(foodNameP, incrementButton, deleteButton)
    
    // outerLi.id = `food-${foodPOJO.id}`
    outerLi.dataset.id = foodPOJO.id


    foodsOl.append(outerLi)

    // Increasing Button Event Listener
    incrementButton.addEventListener("click", (evt) => {
        console.log("Hello")
        // console.log(outerLi.dataset.id)
        
        // BACKEND 
        fetch(`http://localhost:3000/foods/${foodPOJO.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                count: foodPOJO.count + 1
            })
        })
            .then(res => res.json())
            .then((updatedFoodObj) => {
                // THE DOM
                countSpan.innerText = updatedFoodObj.count

                // OBJECT IN MEMORY
                foodPOJO.count = updatedFoodObj.count

            })


    })


    // Delete Button event listener
    deleteButton.addEventListener("click", (evt) => {
        fetch(`http://localhost:3000/foods/${foodPOJO.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((emptyObj) => {
                // Me being pessimistic
                // UPDATE THE DOM
                outerLi.remove()
            })

    })

}