let addToy = false;
let toyCollectionDiv = document.querySelector("#toy-collection")
let toyForm = document.querySelector("form.add-toy-form")
let toys = []

fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then((toysArr) => {
    toysArr.forEach((toyObj) => {
      toys = toysArr
      renderToyCard(toyObj)
    })
  })
  
// {id, name, image, likes} -> <div>...</div>
  
function renderToyCard(toy){
  // Create element

  let toyCardDiv = document.createElement("div")
    toyCardDiv.className = "card"
    // toyCardDiv.dataset.id = toy.id
    // toyCardDiv.classList.add("card")

  let toyNameH2 = document.createElement("h2")
    toyNameH2.innerText = toy.name

  let toyImg = document.createElement("img")
    toyImg.src = toy.image
    toyImg.className = "toy-avatar"

  let toyLikesP = document.createElement("p")
    toyLikesP.innerText = `${toy.likes} Likes`

  let likeButton = document.createElement("button")
    likeButton.innerText = "Like <3"
    likeButton.classList.add("like-btn")

  // CONSTRUCT THE CARD
  toyCardDiv.append(toyNameH2, toyImg, toyLikesP, likeButton)
  // APPEND TO THE DOM
  toyCollectionDiv.append(toyCardDiv)


  likeButton.addEventListener("click", (e) => {
    console.log("********");
    console.log("OLD TOY:", toy)

    // UPDATE THE BACKEND: localhost:3000
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
      .then(res => res.json())
      .then((updatedToy) => {
        // UPDATE THE DOM: <HTML>
        toyLikesP.innerText = `${updatedToy.likes} Likes`

        console.log("UPDATED TOY:", updatedToy);
        // UPDATE THE OBJECT IN MEMORY: {}
        toy.likes = updatedToy.likes
      })
  })
}







toyForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // event -> form -> input -> value
  // form -> input -> value
  // input -> value

  let nameVar = e.target.name.value
  let imageVar = e.target.image.value

  fetch(`http://localhost:3000/toys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameVar,
      image: imageVar,
      likes: 100
    })
  })
    .then(res => res.json())
    .then((newToy) => {
      // RENDER DOM
      renderToyCard(newToy)
      e.target.reset()
    })


})


























document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});






function makeFetchHappen(url, configObj = {}){
  return fetch(url, configObj).then(res => res.json())
}

function makeGetRequest(url){
  return fetch(url).then(res => res.json())
}

function makePostRequest(url, body){
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "Application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}

function makePatchRequest(url, body){
  return fetch(url, {
    method: "PATCH",
    headers: {
      "content-type": "Application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}

function makePostOrPatchRequest(url, verb, body){
  return fetch(url, {
    method: verb,
    headers: {
      "content-type": "Application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(thingy => {
    return thingy
  })
}

let superFetchTool = {
  makeFetchHappen: makeFetchHappen,
  makeGetRequest: makeGetRequest,
  makePatchRequest: makePatchRequest,
  makePostRequest: makePostRequest,
}


// Returns <Promise: Actual Response>