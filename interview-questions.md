# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is the piece or pieces of the code that tell the computer what to look at while the argument is the portion of the code telling the computer how to analyze those parameters. For example, if I would like to have the computer add two numbers together, my two numbers, num1 and num2 would be the parameters. The process of adding those two numbers, num1 + num2, is the argument. 

  Researched answer: Parameters are the placeholder variables that belong to the specific function of the specified piece of code. The parameters can be different every time the function is invoked. Once the parameter is defined in the function expression, it can be used anywhere in the function. For example, if I was making a function expression saying "Welcome __" to a specific person, I would put (name) as a parameter because the name will be different every time the function is invoked. The argument would be the specific name or other content that is in the function invocation (console.log(name("Barry")). In this example the argument would be "Barry" with quotations included because "Barry" is a string. Wherever the parameter (name) is in the function, "Barry" will go into that parameter. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The predefined parameters are value, index and array. Value is required while index and array are optional. Value is always required because if a parameter does not have a defined value then the fuction and/ or method cannot run. The output would be undefined. 

  Researched answer: The predefined parameters for .map are (value, index, array). .map iterates through an array returning a new array with the same amount of values. For example if the original array was myArray = [1, 2, 3] and the function was calling each value to be multiplied by 2, the invoked function would return [2, 4, 6]. The value parameter would be used to tell the computer the value of the array at the current iteration. Not every method will need an index or will have an array that a HOF was referring to. 
    Telling the computer the value and what I want it to do with the values, for example, mulitiplied by two, is how to utilize the value parameter. An example would look like this: 
    var myArray = [1, 2, 3] 
    const arrayTwice = myArray.map(value => {
      return value * 32
      })
      console.log(arrayTwice)
    Output: [2, 4, 6]


3. What is the difference between map and filter?

  Your answer: Filter iterates through the array and returns what was specified in the function which may or may not be the same number of values in the array. Map iterates through the array and performs what the function states but returns the same amount of values in the array. 

  Researched answer: Map and filter are both examples of higher order functions (HOF). Map will iterate through an array and return a new array with the same amount of values. However, the values will be different depending on the function logic. The filter function will loop through an array and return a new subset array with ONLY the values in the original array that satisfy the stated condition. 



4. What is the difference between a function and a method?

  Your answer: A function is an expression of code telling the computer what to do. However a function needs to be invoked by a console.log. A method tells the computer what to do with the predetermined parameters and does not need an invoking command such as console.log. If there is one line of code using a method, the computer will automatically return an output. If there is more than one expected output or new variables need to be established then a "return" must be declared. 

  Researched answer: A function is a set of instructions telling the computer how to do a specific task. A function has to be told when to execute (using console.log) at a certain time and how often. The logic of the function should be encapsulated and not interact with the rest of the program. A method is when a function belongs to an object.  An object is a collection of data/ functionality consisting of key value pairs. The method can create a variable to access the value within the object. For example, if there was an object of a dog (const dog) that consisted of the key value pairs of breed: "Shiba Inu" and age: 9, creating a function named dogData using string interpolation would return the breed and age of the dog when the method dogData was called upon. An example would be 
  const dog = {
    breed: "Shiba Inu",
    age: 9,
    dogData: function() {
      return `${this.breed} is ${this.age}'s old`
    }
  }
  console.log(dog.dogData())
   



5. What is object destructuring?

  Your answer: Object destructuring is putting the nested classes into a method. When the object is called on to run, instead of invoking multiple nested items, the destructured object is ran. For example, if I was making a smoothie, which is the object, with multiple classes (categories) of ingredients, fruits, liquid base, boost, and extras, there are mulitple items in each of those classes (categories). Putting the empty class name in the method instead of specifying the individual value will allow the object to be specified and have an esthetically pleasing code.  

  Researched answer: Object destructuring is taking the property values of a variable and turning them into individual seperate variables that can be recalled. For example, if a variable such as a dog had their name and age as their key value pairs, destructuring each value would result in dog.name and dog.age. With the dog object destructured, recalling each value specific to the situation is simpler and efficient. 
   



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting in Javascript is bringing certain code to the forefront and putting it in front of all the other code. 

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: When a class is created with basic/ common properties and those properties are used in another class with the basic properties along with additional attributes and behaviors creating a parent-child relationship. 

2. React: React is a javascript library that is used to create user interfaces such as webpages and mobile applications. React is a reusable block of code that receives different pieces of data run in a constant function. 

3. React state: React State is an object that stores a components data and determines how to use that component. 

4. React lifecycle methods: There are three main phases during the lifecycle, Mounting, updating, and unmounting. The two methods are render phase and commit phase which are run during these different methods. 

5. DOM: A program that defines how an HTML docuent is accessed and manipulated. 
  //I had a hard time finding this term using the syllabus so I got my answer from w3. If these answers seem short it is because I try not to confuse myself by understanding it wrong and then having to unlearn and relearn. I realized I did that last week with the key terms. 
