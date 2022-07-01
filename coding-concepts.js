// ASSESSMENT 2: Coding Conceptual Questions

const { workerData } = require("worker_threads")

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.


// --------------------1) What will this log?

var cohort = "Delta 2022"
//console.log(cohort.split(""))

// a) Your answer: D,e,l,t,a 2,0,2,2
// b) Verify and explain: [
//   'D', 'e', 'l', 't',
//   'a', ' ', '2', '0',
//   '2', '2'
// ]
// When using the .split() method, a string will be converted to an array. Each value in the string will be split into individual values because there is no space in between the quotations located in the argument. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:'Hello LEARN Student'
// b) Verify and explain: undefined; Even though there was a function invocation, there was no return. If there is no return, then the function will come back undefined. 
//


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]; When using the .map HOF, a new array with the same amount of values will be returned. .map iterates over each value, which is the mandatory parameter when .map is being used. The argument in the parenthesis states that each value in the array will be multiplied by two. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [ 11, 13, 15 ]; The .filter() HOF will return a new array after iterating with only the values that are defined in the function logic. In this example, the odd values are being defined by the logic % 2 !== 0, which results in only the odd values in the array being returned.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: ["JavaScript"]
// b) Verify and explain: JavaScript; I made the error of putting the output in brackets. The value at index [0] of the languages key value pair is "JavaScript". Using dot notation to access the object variable and the specified key of languages, the output results in "JavaScript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George, Bravo, 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 }; My error was not taking into account that the key values would also be part of the output. A new LEARN object was created with the student name "George".


