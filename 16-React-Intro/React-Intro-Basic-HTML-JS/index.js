console.log("Are we here?")

// <div class="ui inverted red menu">
// <a class='item'>
//   <h2 class="ui header">
//     <i class="bug icon"></i>
//     <div class="content">
//       bugger
//     </div>
//   </h2>
// </a>
// </div> 

const container = document.querySelector("div#container")

// const div = document.createElement("div")
// div.className = "ui inverted red menu"

// container.append(div)

// const NavBarDiv = React.createElement('div', {className: "ui inverted red menu" }, 
//                   React.createElement('a', {className: "item"}))

const NavBarDiv = (props) => {
  console.log(props.color)
  return(
  <div className={`ui inverted ${props.color} menu`}>
   <a class='item'>
   <h2 class="ui header">
    <i class="paint brush icon"></i>
     <div class="content">
       Painting App
    </div>
    </h2>
  </a>
  </div> 
  )
}

const Main = () =>  {
  return(<div>
    <h4>Welcome</h4>
  </div>)
}

const App = () => {
  return(
    <div>
      <NavBarDiv color="blue"/>
      <Main />
    </div>
  )
}

ReactDOM.render( <App /> , container)
// ReactDOM.render( NavBarDiv({text: "test", day: "Monday"}) , container)


