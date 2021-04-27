
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
// import PaintingList, {List} from './PaintingList'
import PaintingList from './PaintingList'
import paintings from './paintings-array'
import { Component } from 'react'



// function App() {
//   console.log(paintings)
//   return (
//     <div>
//       <NavBar color="red" />
//       <PaintingList paintingsArray={paintings} />
//     </div>
//   );
// }

class App extends Component{

  render(){
    return( <div>
             <NavBar color="red" />
             <PaintingList paintingsArray={paintings} />
           </div>)
  }

}

export default App;
