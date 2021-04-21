let burgerContainerDiv = document.querySelector("#burger-menu")

fetch("http://localhost:3000/burgers")
  .then(res => res.json())
  .then(burgers => {
    burgers.forEach(makeToBurger)
  })


  // {} -> <HTML>
function makeToBurger(burger){
  // Create the outer element
  let burgerLi = document.createElement("li")
    burgerLi.className = "burger card"

  // Fill the contents of the outer element
    burgerLi.innerHTML = `
      <h3 class="burger_title">${burger.name}</h3>
      <img src="${burger.image}" class="card-img-top">
      <div class="card-body">
        <p class="burger_description card-text" >
          ${burger.description}
        </p>
      </div>
      <button class="button">Add to Order</button>
    `

  // Slap on the DOM
  burgerContainerDiv.append(burgerLi)

  // To find elements: outerContainer.querySelector()
  let addToOrderButton = burgerLi.querySelector(".button")

  // Add Event Listeners 
  addToOrderButton.addEventListener("click", () => {
    console.log(burger.name)
  })
}

