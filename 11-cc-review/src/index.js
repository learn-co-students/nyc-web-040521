let mainImage = document.querySelector(".detail-image")
let titleH2 = document.querySelector("h2.title")
let ingredientsUl = document.querySelector("ul.ingredients-list")
let updateNameForm = document.querySelector("form#update-form")
let newIngredientForm = document.querySelector("form#ingredient-form")

let displayedSpice = {}

// write your code here
fetch("http://localhost:3000/spiceblends/1")
.then(res => res.json())
.then((spiceObj) => {
        mainImage.src = spiceObj.image
        titleH2.innerText = spiceObj.title

        // Update the DOM with the ID
        updateNameForm.dataset.id = spiceObj.id
        newIngredientForm.dataset.id = spiceObj.id

        // Update the Object in Memory with the entire information
        displayedSpice = spiceObj

        let arrOfIngredients = spiceObj.ingredients
        arrOfIngredients.forEach((ing) => {
            let ingredientLi = document.createElement("li")
                ingredientLi.innerText = ing.name
            ingredientsUl.append(ingredientLi)

            // Unstable Event Listener
            // ingredientLi.addEventListener("click", () => {
            //     console.log("Hello from", ing.name);
            // })
        })
    })


// Stable Event Listener
updateNameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newSpiceName = updateNameForm.title.value

    fetch(`http://localhost:3000/spiceblends/${displayedSpice.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: newSpiceName
        })
    })
        .then(res => res.json())
        .then((updatedSpice) => {
            // Updates the DOM
            titleH2.innerText = updatedSpice.title
            // Updates the OBJ in memory
            displayedSpice.title = updatedSpice.title
        })
})


newIngredientForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newIngredientName = newIngredientForm.name.value

    let ingredientLi = document.createElement("li")
        ingredientLi.innerText = newIngredientName
    ingredientsUl.append(ingredientLi)
})

