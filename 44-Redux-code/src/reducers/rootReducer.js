// pure functions
// args => state , action
// return new state
import toyReducer from './toyReducer'
import { combineReducers } from 'redux'

let initialState = {
    count: 0,
    lecture: "react-redux"//,
    // toys: []
}

let countReducer = (state = initialState , action) => {

    // debugger
    // console.log(action)
    switch(action.type){
        case "inc":
            // return { ...state, count:state.count + 1 }
            return { ...state, count:state.count + action.payload }
        case "dec":
            return {...state, count: state.count - action.payload}
       
        default:
            return state 
    }
    // return state
}

const rootReducer = combineReducers({ countReducer, toyReducer})
// const rootReducer = combineReducers({ countReducer: countReducer, toyReducer: toyReducer})


export default rootReducer