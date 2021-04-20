// What is the spread operator and why would I want to use it?
  // Importance in Phase 2: 🔥🔥🔥🔥

  const pandemicEric = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    showering: false,
    eating: ["junk", "garbage"],
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"],
    exercise: "Lots",
    nachos: "Tons",
  }


  // Later the spread, the higher the priority

  const newEric = {
    ...pandemicEric,
    ...regularStandardsOfLiving,
    showering: false
  }


// APPLICATION:
  // When you want to change state, spread operator is around the corner



// Could I do it to an array?
  // Importance in Phase 2: 🔥🔥🔥🔥🔥

const bodyParts = ["head", "shoulders", "knees", "toes"];
const song = [...bodyParts, "knees", "toes", ...bodyParts, "knees", "toes"]


// APPLICATION:
  // Adding an element to the DOM requires spread operator
    // let newArr = [...oldArr, newResource] -> Change the DOM



    

// Could I do it to the parameters of a function?
  // Importance in Phase 2: 🔥🔥

  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }

  canTakeFourArguments(...bodyParts)


  // APPLICATION:
    // <Component {...obj} />
