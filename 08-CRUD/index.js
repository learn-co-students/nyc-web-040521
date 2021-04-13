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
            // CREATE ELEMENTS/MANIPULATE THE DOM
            let outerLi = document.createElement("li")
                outerLi.className = "item"

            let foodNameP = document.createElement("p")
                foodNameP.className = "js-food middle aligned content"

            let countSpan = document.createElement("span")
                countSpan.innerText = foodObj.count

            let incrementButton = document.createElement("button")
                incrementButton.innerText = "Increment"

            let deleteButton = document.createElement("button")
                deleteButton.className = "delete-button"
                deleteButton.innerText = "X"

            foodNameP.append(`${foodObj.name} - `, countSpan)
            outerLi.append(foodNameP, incrementButton, deleteButton)
    

            foodsOl.append(outerLi)

            // incrementButton

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
        .then(function(newlyCreatedFoodObj){

        let outerLi = document.createElement("li")
            outerLi.className = "item"

        let foodNameP = document.createElement("p")
            foodNameP.className = "js-food middle aligned content"

        let countSpan = document.createElement("span")
            countSpan.innerText = newlyCreatedFoodObj.count

        let incrementButton = document.createElement("button")
            incrementButton.innerText = "Increment"

        let deleteButton = document.createElement("button")
            deleteButton.className = "delete-button"
            deleteButton.innerText = "X"

        foodNameP.append(`${newlyCreatedFoodObj.name} - `, countSpan)
        outerLi.append(foodNameP, incrementButton, deleteButton)


        foodsOl.append(outerLi)
        })


})
