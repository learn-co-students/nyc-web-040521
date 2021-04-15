let mainImage = document.querySelector(".detail-image")
let titleH2 = document.querySelector("h2.title")
let ingredientsUl = document.querySelector("ul.ingredients-list")
let updateNameForm = document.querySelector("form#update-form")
let newIngredientForm = document.querySelector("form#ingredient-form")

let displayedSpice = {}

// BONUS
let spiceContainerDiv = document.querySelector("#spice-images")


// BONUS
fetch("http://localhost:3000/spiceblends")
    .then(res => res.json())
    .then((spicesArr) => {
        spicesArr.forEach(spice => {
            let imageTag = document.createElement("img")
                imageTag.src = spice.image
            spiceContainerDiv.append(imageTag)


            imageTag.addEventListener("click", () => {

                fetch(`http://localhost:3000/spiceblends/${spice.id}`)
                    .then(res => res.json())
                    .then((spiceObj) => {
                        displayOneSpice(spiceObj)
                    })
            })

        })
    })


// {} -> <HTML >
function displayOneSpice(spiceObj){
    mainImage.src = spiceObj.image
    titleH2.innerText = spiceObj.title

    // Update the DOM with the ID
    updateNameForm.dataset.id = spiceObj.id
    newIngredientForm.dataset.id = spiceObj.id

    // Update the Object in Memory with the entire information
    displayedSpice = spiceObj

    let arrOfIngredients = spiceObj.ingredients
    ingredientsUl.innerHTML = ""
    arrOfIngredients.forEach((ing) => {
        let ingredientLi = document.createElement("li")
            ingredientLi.innerText = ing.name
        ingredientsUl.append(ingredientLi)

        // Unstable Event Listener
        // ingredientLi.addEventListener("click", () => {
        //     console.log("Hello from", ing.name);
        // })
    })
}









// write your code here
fetch("http://localhost:3000/spiceblends/1")
.then(res => res.json())
.then((spiceObj) => {
    displayOneSpice(spiceObj)
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

    fetch("http://localhost:3000/ingredients", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: newIngredientName,
            spiceblendId: displayedSpice.id
        })
    })
        .then(res => res.json())
        .then((newIngredient) => {
            let ingredientLi = document.createElement("li")
                ingredientLi.innerText = newIngredient.name            
                // ingredientLi.innerText = newIngredientName
                // newIngredient.name = newIngredientName
            ingredientsUl.append(ingredientLi)

            // UPDATE THE OBJECT (Spice) IN MEMORY
            displayedSpice.ingredients.push(newIngredient)
        })


})

