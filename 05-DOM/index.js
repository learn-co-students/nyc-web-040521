// Document Object Model - Allows us to interact with the HTML via objects
// It creates JS Objects to model the HTML Document

// READ an element
// querySelector("CSS SELECTOR") -> HTML Obj or null
// querySelectorAll("CSS SELECTOR")  -> Nodelist (arrayish) 

let h1Object = document.querySelector("h1")
let h1Span = h1Object.querySelector("span")





// CREATE an element

    // 1) Get a blank sheet of paper
    let blankLi = document.createElement("li")
    
    // 2) Razzmatazz
    blankLi.className = "taco"
    blankLi.id = "granny"
    blankLi.innerText = "🌮"
    
    // 3) Slap it on the DOM
    
    let emojisUl = document.querySelector("#blobs")
    // emojisUl.prepend(blankLi)
        emojisUl.append(blankLi)






// UPDATE

    // 1) Find the element 

    let firstH1 = document.querySelector("h1")

    // 2) Razzmatazz
        firstH1.id = "banner"
        firstH1.innerText = "Welcome granny! Here is nice list!!!"
        // DO NOT APPEND SOMETHING THAT'S ON THE PAGE

 



// DELETE 

    // 1) Find the element
        let firstBadLi = emojisUl.querySelector("li.bad")
    // 2) Politely ask it to remove itself
        firstBadLi.remove()



let allBadLis = emojisUl.querySelectorAll("li.bad")
    // [<HTML>, <HTML>, <HTML>]

allBadLis.forEach(function(badLi){
    console.log(badLi)
    badLi.remove()
})