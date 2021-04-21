const sideBarDiv = document.querySelector("#sidebar")
const listCollectionContainer = document.querySelector("#list-collection")
const listCollection = listCollectionContainer.querySelector(".list-group")
const listItems = document.querySelector("#list-items")

// ------------ RENDERS THE UNSTABLE LOGIN FORM ------------
function showLoginForm(){
    sideBarDiv.innerHTML = ""
    
    let loginForm = document.createElement("form")
        loginForm.classList.add("centered")

    let usernameDiv = document.createElement('div')
        usernameDiv.className = "form-group"
    let usernameLabel = document.createElement("label")
        usernameLabel.htmlFor = "username"
        usernameLabel.innerText = "Username"

    let usernameInput = document.createElement("input")
        usernameInput.type = "text"
        usernameInput.className = "form-control"
        usernameInput.id = "username"
        usernameInput.placeholder = "Enter Username"
        usernameInput.autocomplete = "off"

    usernameDiv.append(usernameLabel, usernameInput)
    
    let submitButton = document.createElement('button')
        submitButton.type = "submit"
        submitButton.className = "btn btn-primary"
        submitButton.innerText = "Login"

    loginForm.append(usernameDiv, submitButton)
  
    sideBarDiv.append(loginForm)
    loginForm.addEventListener("submit", handleLoginForm)

    let registerForm = document.createElement("form")
    registerForm.classList.add("centered")

    let usernameDiv2 = document.createElement('div')
        usernameDiv2.className = "form-group"
    let usernameLabel2 = document.createElement("label")
        usernameLabel2.htmlFor = "username2"
        usernameLabel2.innerText = "Username"

    let usernameInput2 = document.createElement("input")
        usernameInput2.type = "text"
        usernameInput2.className = "form-control"
        usernameInput2.id = "username2"
        usernameInput2.placeholder = "Enter Username"
        usernameInput2.autocomplete = "off"

    usernameDiv2.append(usernameLabel2, usernameInput2)

    let submitButton2 = document.createElement('button')
        submitButton2.type = "submit"
        submitButton2.className = "btn btn-primary"
        submitButton2.innerText = "Register"

    registerForm.append(usernameDiv2, submitButton2)

    sideBarDiv.append(registerForm)
    registerForm.addEventListener("submit", handleRegisterForm)

}   

// ------------ HOW DO WE HANDLE THE LOGIN FORM ------------
function handleLoginForm(evt){
    evt.preventDefault()
    let username = evt.target.username.value

    // FIND THE USER IN THE BACKEND
    fetch(`http://localhost:3000/users?_embed=lists&username=${username}`)
        .then(res => res.json())
        .then(potentialArray => {
            if(potentialArray.length > 0){
                let foundUser = potentialArray[0]
                showUserInformation(foundUser)
            } else {
                // WHAT IF THE USER MISTYPES (???)
                alert("No user exists")
            }
        })

  
}

function handleRegisterForm(evt){
    evt.preventDefault()
    let username = evt.target.username2.value

    // CREATE THE USER IN THE BACKEND
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: username
        })
    })
        .then(res => res.json())
        .then((newUser) => {
            // THERE ARE NO LISTS ASSOCIATED WITH A NEWLY CREATE USER (???)
                // FOR YOUR TOP RESOURCE, MAKE SURE TO ADD AN EMPTY ARRAY WHEN YOU CREATE
            newUser.lists = []
            showUserInformation(newUser)
        })
   
   
}



// ------------ WHAT TO DO WITH USER RESPONSE ------------
function showUserInformation(user){
    setSideBar(user)
    setLists(user)
}

// ------------ SET SIDE BAR AFTER LOGIN ------------

function setSideBar(user){
    sideBarDiv.innerHTML = ""
    let userUsernameP = document.createElement("p")
        userUsernameP.className = "font-weight-bold text-center"
        userUsernameP.innerText = `Logged in as ${user.username}`
    
    let logOutButton = document.createElement("button")
        logOutButton.className = "btn btn-danger"
        logOutButton.innerText = "Logout"
    
    sideBarDiv.append(userUsernameP, logOutButton)
    logOutButton.addEventListener("click", function(evt){
        logOut()
    })
}

function logOut(){
    listCollection.innerHTML = ""
    listItems.innerHTML = ""
    showLoginForm()
}


// ------------ SET MAIN CONTAINER AFTER LOGIN ------------
function setLists(user){
    listCollection.innerHTML = ""
    user.lists.forEach(function(list){
        renderListTitle(list, user)
    })
    renderNewListForm(user)
}

// ------------ RENDERS THE UNSTABLE FORM TO CREATE A LIST ------------
function renderNewListForm(user){
    let newListForm = document.createElement("form")
    let nameLabel = document.createElement("label")
        nameLabel.innerText = "Name:"
        nameLabel.htmlFor = "list_name"
    
    let nameInput = document.createElement("input")
        nameInput.type = "text"
        nameInput.id = "list_name"

    let submit = document.createElement("input")
        submit.type = "submit"
        submit.value = "Create a New List"

    newListForm.append(nameLabel, nameInput, submit)
    listCollection.append(document.createElement("hr"),newListForm)

    newListForm.addEventListener("submit", function(evt){
        evt.preventDefault()
        let newNameOfList = nameInput.value

        
        // CREATE A LIST IN THE BACKEND
        fetch("http://localhost:3000/lists", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: newNameOfList,
                items: [],
                userId: user.id
            })
        })
            .then(res => res.json())
            .then((newList) => {
                // UPDATE THE USER OBJECT IN MEMORY 
                    // REACT THING 
                let copyOfLists = [...user.lists, newList]
                user.lists = copyOfLists
                // CREATE THE LIST ON THE DOM
                setLists(user)
            })



    })
}


// {LIST} -> <HTML>
function renderListTitle(list, user){

    let listTitleLi = document.createElement("li")
        listTitleLi.className = "list-group-item d-flex justify-content-between align-items-center"
    let listNameSpan = document.createElement("span")
        listNameSpan.innerText = list.name
    let listLengthSpan = document.createElement("span")
        listLengthSpan.className = "badge badge-primary badge-pill"
        listLengthSpan.innerText = list.items.length
    let listDeleteButton = document.createElement("button")
        listDeleteButton.className = "btn btn-danger"
        listDeleteButton.innerText = "x"

    listTitleLi.append(listLengthSpan, listNameSpan, listDeleteButton)

    listCollection.append(listTitleLi)

    // ------------ HANDLE CLICK OF A LIST ------------ 
    listNameSpan.addEventListener("click", function(evt){
        listItems.innerHTML = ""
        list.items.forEach(function(itemStr){
            renderSingleItem(itemStr)
        })
    })


    // ------------ HANDLE DELETE OF A LIST ------------ 
    listDeleteButton.addEventListener("click", function(evt){
        handleDeleteFetch(list, user)
    })

}


// "ITEM" -> <HTML> 
function renderSingleItem(item){
    let itemP = document.createElement("p")
        itemP.className = "text-center"
        itemP.innerText = item
    listItems.append(itemP)
} 


function handleDeleteFetch(list, user){

    // DELETE THE LIST IN THE BACKEND
   fetch(`http://localhost:3000/lists/${list.id}`, {
       method: "DELETE"
   })
    .then(res => res.json())
    .then(emptyObj => {
        // UPDATE THE USER OBJECT IN MEMORY
            // REACT THING
            let copyOfLists = user.lists.filter(listObj => {
                return list.id !== listObj.id
            })
            user.lists = copyOfLists

        // UPDATE THE DOM
            setLists(user)
    })



}

// Add an item to an array attribute

// fetch("/lists/:id", {
//     method: "PATCH",
//     headers: {

//     },
//     body: JSON.stringify({
        // CREATE
//         items: [...list.items, "new item"],
        // DELETE
//         items: list.items.filter(itemStr => itemToDelete !== itemStr)
//     })
// })

showLoginForm()  
