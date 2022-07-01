// ASSESSMENT 2: Coding Practical Questions with Jest

//const { clear } = require("console")

//const { array } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of divisible and returns an array with all the divisible multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const divisibleArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const divisibleArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// Expected output: "-7 is not divisible by three"

//input: 15, 0, -7
//output: "num is/is not divisible by three"

describe("divisible",() => {
    it("decides if the number is evenly divisble by three or not", () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
        expect(divisible(num1)).toEqual("15 is divisible by three"),
        expect(divisible(num2)).toEqual("0 is divisible by three")
        expect(divisible(num3)).toEqual("-7 is not divisible by three")
    })
})
//ReferenceError: divisible is not defined
    //This was the very first error code that started a long journey to get a green pass. There were many others along the way that led all around to my final answer. Initially, I did not have the numbers put in the phrase in the expect() method and I did not  have each variable with its own expect() method. I had to reread the instructions and think about it differently. 

//Pseudo Code
//Initial thinking: Combine all the variables in a single array. Have the function iterate over each variable [num1, num2, num3] and see which ones have a remainder of zero when divided by 3 using %. 

//Declare a function: Divisible needs to be made into a function using a conditional (if, else if statements) to determine if the variables are or are not divisible by 3. Putting value as a parameter will allow the function to iterate over each variable. 
    //function logic: if the value of the variable is divisible by three (value % 3 === 0) then the output should be "the variable value is divisible by three". Else if the value of the variable is not divisible by three (value % 3 !== 0) then the output should be "'the variable value' is not divisible by three"
//Set parameters: (value) which equals 15, 0, -7
//Return: "15 is divisible by three", "O is divisible by three", "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const num1 = 15
const num2 = 0
const num3 = -7
const divisible = (value) => {
    if(value % 3 === 0) {
        return `${value} is divisible by three`
    }
    else if(value % 3 !== 0) {
        return `${value} is not divisible by three`
    }
} 

  console.log(divisible(num1, num2, num3)) 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("wordsCapitalized", () => {
   it("takes in an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
     expect(wordsCapitalized(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
     expect(wordsCapitalized(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
   })
 })
// //ReferenceError: wordsCapitalized is not defined

// //PsuedoCode:
// //In order to get the first letter of each value in the array to be capitalized, the array needs to use .map to iterate over the array and return the same amount of values. Since it is just a single letter in each word, the index of each word, which would be zero, would need to be uppercase. 
     //I had to do a lot of research to understand the example in the syllabus for higher order functions which is asking for the same output. I was not sure if there was a HOF which did just capitalization. After going through the resources provided, and google, all of the examples I saw were .toUpperCase the entire array, keeping zero index UpperCase and returning a .substring() method then joining the rest of the string together. I understand the concept but I had to look at the example for the syntax and the methods. 
// //Declare a function: wordsCapitalized
// //Parameters: randomNouns1, randomNouns2, 
// //Each value of the array will have the zero index upper cased. value[0].toUpperCase which will capitalize the first letter. value.substring(1) will "concantenate the remainder of the word." Since the first letter was .toUpperCase, the rest of the string needs to be joined together using .join(). join() will bring them back into one string. 
// //Return: "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"
         // "Temperature", "Database", "Chopsticks", "Mango", "Deduction"


// // b) Create the function that makes the test pass.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

 const wordsCapitalized = (array) => {
    let newWords = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
        return newWords.join(" ")
}
console.log(wordsCapitalized(randomNouns1, randomNouns2))

//I was unable to get the commas in my final output. I tried using .string(" ") to put the commas back in but no matter where I put it in the function, it was not returning the final output with commas seperating the values. 


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
     expect(firstVowel(vowelTester1)).toEqual(1)
     expect(firstVowel(vowelTester2)).toEqual(0)
     expect(firstVowel(vowelTester3)).toEqual(2)
   })
 })
 //ReferenceError: firstVowel is not defined

 // b) Create the function that makes the test pass.
 
 //use the .indexOf method to return the index of the first instance of the given value. The given value would be the first vowel instance of each string. The strings would need to be put in an array first by using the .join() method or concatinating them into one array and defined under a different variable. Now each word has to be seperated into its own value in the array using .split(" "). 
    //This is where I ran into the issue of not getting the words to seperate. So I decided to write a for loop for each of the variables.
//If i write a for loop for each variable, define the vowels in a new variable and utilize .indexOf, then the index of the first vowel should be returned. 
 //The vowels would have to be defined in a separate variable.
 //Parameters:"learn", "academy", "challenges"
 //Return: 1, 0, 2
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
console.log(vowelTester1.concat(vowelTester2))


  const firstVowel = [];
  for(let i=0, i <string.length, i++){
    let vowels = firstVowel[] = 'aeiou';
    console.log(vowels);
  }
console.log()
//This was where I left off. I do not understand how to put into logic what I want to do using what we learned. I've tried concat, join, split, even console logging every single vowel for each variable, which worked but there is an easier way. I do not know how to do it. I know what I want to do, I just don't know how to write it. I feel like I'm using the right tools but it's piecing them together that is bringing me to literal tears. 