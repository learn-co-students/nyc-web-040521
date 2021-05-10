import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import PaintingsList from "./PaintingsList"

function App() {

  // create a state
  // class - constructor / state

  // const [day, changeDay] = useState("Monday!") //array destructuring
  // const day = useState("Monday!")[0]
  // const changeDay = useState("Monday!")[1]
  const [paintings, changePaintings] = useState([])
  // {key: {nestedKey: ""}}

  const [obj, updateObj] = useState({week: {day: "Monday!!", hour: "12 PM"}})

  // componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3000/paintings")
    .then(res => res.json())
    .then(paintingsData => changePaintings(paintingsData) )
  }, [])

  // useEffect(() => console.log("mounted or updated/ rerendered"))
  // useEffect(() => console.log("mounted") , [])
  // useEffect(() => console.log("stateKey is changed!"), [stateKey]) 



  // use/access a state
  // class - this.state.key
  // console.log(day)

  // change a state
  // class - this.setState
  // function hooks - function 
  console.log(obj)

  return (
    <div>
      <h3>Today is {obj.week.day}</h3>
      <button 
      onClick={() => updateObj({week: {...obj.week, day: "Friday"}}) }>Switch Day</button>

      <PaintingsList allPaintings={paintings} />

    </div>
  );
}

export default App;
