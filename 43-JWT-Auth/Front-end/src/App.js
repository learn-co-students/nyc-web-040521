import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './SignUp'
import LogIn from './Login'

function App() {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/instructors", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(instructors => {
      console.log(instructors)
      setInstructors(instructors)
    })
  }, [])

  const logOut = () => {
    localStorage.clear()
  }

  return(
  <BrowserRouter>
    <div className="App">
      HOME PAGE
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
      { localStorage.token ? <button onClick={logOut}>LogOut</button> : null}
      
    </div>
  </BrowserRouter>
  );
}

export default App;
