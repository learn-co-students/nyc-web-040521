import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import { useSelector, useDispatch } from 'react-redux'


function App(){

  const [display, changeDisplay] = useState(false)
  // const [toys, setToys] = useState([])

  console.log(useSelector((state) => state))
  // let count = useSelector((state) => state.countReducer.count) // access the state from the store
  let {count} = useSelector((state) => state.countReducer) // access the state from the store
  let toys = useSelector(state => state.toyReducer.toys)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    // .then(json => setToys(json))
    .then(json => dispatch({type: "setToys", payload: json}))

  }, []) //componentDidMount()

  let handleClick = () => {
    changeDisplay(!display)
  }

  let handleSubmit = (e, newToy) => {
    e.preventDefault()
    e.target.reset()

    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...newToy, likes: 0})
    })
    .then(resp => resp.json())
    .then(newToy => dispatch({type: "addAToy", payload: newToy}))
  }

  let handleDelete = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(json => {
      console.log(`Deletion of ${id} was great success!`)
      
      const newToys = toys.filter(toy => {
        return toy.id !== id
      })

      // setToys(newToys)
      dispatch({type: "deleteAToy", payload: newToys})
      }
    )
  }

  let handleLike = (id, newLikes) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({likes: newLikes + 1})
    })
    .then(resp => resp.json())
    .then(json => {

      const newToys = toys.map(toy => {
        return toy.id === id ? json : toy
      })

      // setToys(newToys)
      dispatch({type: "likeAToy", payload: newToys})
      }
    )
  }  

    return (
      <div>
        <Header/>
        <h3> current count: {count} </h3>
        <button onClick={() => dispatch({type:"inc" , payload:3})}> 
        Increment count 
        </button>
        <button onClick={() => dispatch({type:"dec" , payload:2})}> 
        decrement count 
        </button>

        { display
        ? <ToyForm handleSubmit={handleSubmit} />
        : null
        }
        <div className="buttonContainer">
        <button onClick={handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
        toys={toys}
        handleDelete={handleDelete}
        handleLike={handleLike}
        />

      </div>
    );

}

export default App;
