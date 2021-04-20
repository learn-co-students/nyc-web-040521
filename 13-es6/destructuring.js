// What is destructuring and why would I want to do it?
  // POJOs -> Variables
  // Importance in Phase 2: 🔥🔥🔥


  const phase1 = {
    name: "NYC SE 040521",
    population: 26,
    founded: 40521,
    pillarsOfJS: ["Event Listener", "DOM Manipulation", "Fetch"],
  }
 
  // const name = phase1.name;
  // const population = phase1.population
  // const founded = phase1.founded

  let {name, population, founded} = phase1

  // const pillars = phase1.pillarsOfJS

  let {pillarsOfJS: pillars} = phase1



// Application:   
  // let {id, name, image} = props.toy




// Could I do it to an array?
  // Importance in Phase 2: 🔥🔥🔥🔥


  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // let brooklynVar = boroughNames[0]
  // let theBronx = boroughNames[2]
  // let queensVar = boroughNames[3]

  let [brooklynVar, , theBronx, queensVar] = boroughNames

// APPLICATION:
  // let [counter, setCounter] = useState("")







// Could I do it to the parameters of a function?
  // Importance in Phase 2: 🔥🔥🔥🔥

  function greet({name, djName}) {
    return `Hello, ${ name }! Your DJ name is ${ djName }.`
  }

  const me = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    middleName: "Hank"
  }

  console.log(greet(me))


  // APPLICATION: 
    function Component({thing1, thing2, thing3}){

    }
