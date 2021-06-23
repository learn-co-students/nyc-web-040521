let initialState = {
    toys: []
}

let toyReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "setToys":
            return {...state, toys: action.payload}
        case "addAToy":
            return {...state, toys: [...state.toys, action.payload]}
        case "deleteAToy":
            return {...state, toys: action.payload}
        case "likeAToy":
            return {...state, toys: action.payload}
        default:
            return state
    }
}

export default toyReducer