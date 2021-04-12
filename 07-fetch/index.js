const url = "https://dog.ceo/api/breeds/image/random"

// fetch("URL", {}) -> <Promise: RESP >
  // always returns a promise with a Response object in it
    // .then(callback) allows you to access the Response object

  // Promise Chaining ->
    // .then can be chained on after a promise -> returns a Promise
    // Promise.then().then().then()...
      // the return value of the callback becomes the argument in the next .then

// let promiseObj = fetch("https://dog.ceo/api/breeds/image/random")
// let secondPromise = promiseObj.then((res) => {
//   let innerPromise = res.json()
//   return innerPromise
// })
// secondPromise.then((actualResponse) => {
//   console.log(actualResponse)
// })




// Elements from the index.html go here
let dogButton = document.querySelector("button#hello-button")
let dogsUl = document.querySelector("#dogs")


dogButton.addEventListener("click", (evt) => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((responsePOJO) => {
      
      // console.log(responsePOJO)
      let blankLi = document.createElement("li")
      let blankImg = document.createElement('img')
      
      blankImg.src = responsePOJO.message
      
      blankLi.append(blankImg)
      dogsUl.append(blankLi)
      
    })

  })
  
  
  
  