// Event Listening
    // 1) Find the element
    // 2) Add the event listener
    // 3) Write out the process 

let tacoButton = document.querySelector("#taco")
let theForm = document.querySelector("#emoji-form")
let emojisUl = document.querySelector("ul#blobs")




theForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    // console.log(evt)

    // debugger;
    // Stops the code from execution and puts the console in that scope

    let form = evt.target
        // You can find the input using the "name" or "ID" of the input 
    let input = form.emoji
    let whatUserTyped = input.value

    // let whatUserTyped = evt.target.emoji.value

    
    // DOM MANIPULATION

    // 1) Get blank sheet of paper 
    let blankLi = document.createElement("li")

    // 2) Razzmatazz
    blankLi.className = "emoji"
    blankLi.innerText = whatUserTyped
    // 3) Put on fridge

    emojisUl.append(blankLi)




})












tacoButton.addEventListener("click", (evt) => {
    // 1) Get blank sheet of paper 
    let blankLi = document.createElement("li")

    // 2) Razzmatazz
    blankLi.className = "taco shmaco"
    blankLi.innerText = "🌮"
    // 3) Put on fridge

    emojisUl.append(blankLi)

})


// tacoButton.addEventListener("contextmenu", function(){
//     console.log("Right click");
// })