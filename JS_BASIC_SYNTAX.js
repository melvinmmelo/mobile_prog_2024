// JS BASIC SYNTAX

// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let name = "Max"; // let / variables are used for values that can change
let age = 29;
let hasHobbies = true;

var full_name ="John";

const nameThatCannotChange = "Max"; // const / constants are used for values that should not change
// meaning const nameThatCannotChange = "Max"; cannot be changed in the entire

// * CONDITIONAL STATEMENTS
if(hasHobbies == true && hasHobbyIncludes === "Programming") { // if hasHobbies is true
  console.log("I have hobbies and I love Programming.");
}

if(age > 25){
  console.log("You are older than 25.");
}else if(age < 25){
  console.log("You are younger than 25.");
}else{
  console.log("You are 25 years old.");
}

switch (name) {
  case "Max":
    console.log("You are Max");
    break; // break is used to exit the switch statement
  case "John":
    console.log("You are John");
    break;
  case "Jane":
    console.log("You are Jane");
    break;
  default: // default is used when none of the cases are met
    console.log("You are not Max");
}

// 2. PRINTING TO THE CONSOLE

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

// STRING CONCATENATION
console.log("My name is " + name + " and I am " + age + " years old.");

console.log(`My name is ${name} and I am ${age} years old.`);

// Output: My name is Max and I am 29 years old. // `${name}` this is a example of string interpolation

console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Max and I am 29 years old. // `${name}` this is a example of string interpolation

// 2. ARRAY DECLARATION

let hobbies = ["Sports", "Cooking", "Programming"]; // an array is a list of values

hobbies.l; // this is used to get the length of the array
// Output: 3

// printing the array
console.log(hobbies); // Output: ["Sports", "Cooking"]
// accessing an element in the array
console.log(hobbies[1]); // Output: Cooking

for (let hobby of hobbies) {
  console.log(hobby);
}

// adding an element to the array
hobbies.push("Programming");

console.log(hobbies); // Output: ["Sports", "Cooking", "Programming"]

// * MAPPING AN ARRAY
// mapping is used to loop through an array and modify the elements
hobbies.map((hobby) => {
  hobby = hobby + " is fun";
});

console.log(hobbies); // Output: ["Sports is fun", "Cooking is fun", "Programming is fun"]

// 3. OBJECT DECLARATION

let person = { //
  name: "Max", // this is a property/field
  age: 29, // this is a property/field
  hasHobbies: true, // this is a property/field
  greet(){ // this is a method/function of the object
    console.log("Hello, I am " + this.name); // "this" refers to the object itself
  }
};

// accessing object properties
console.log(person.name); // Output: Max
console.log(person.age); // Output: 29
console.log(person.hasHobbies); // Output: true
person.greet(); // Output: Hello, I am Max

// .4 FUNCTION DECLARATION

function myFunction() {
  // code
  console.log("Hello");
}

function computeAverage(num1, num2) {
  return (num1 + num2) / 2;
}


function identifyIfPassOrFail() {

  const score = 70;
  const result = computeAverage(score);

  if(result >= 50) {
    console.log("Pass");
  } else {
    console.log("Pass");
  }

  // return result;
}

identifyIfPassOrFail();

// calling the function
myFunction(); // Output: Hello


// arrow function
const myFunction = (arg1, arg2) => {
  // code

  return "Hello"; // RETURN is used to return a value from a function, you can return a string, number, boolean, array, object etc
  // return stops the function from executing further
};

// ! in functions, you can add variables, if statements, loops, arrays, objects etc
// calling the function
console.log(myFunction()); // Output: Hello

// * ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS

function describeStudent(name, age) { // this is a function that takes in two parameters/arguments
  console.log("This person is " + name + " and is " + age + " years old");
}

describeStudent(name, age); // Output: This person is Max and is 29 years old


// * ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
const describeStudent = (name, age) => {
  return `This person is ${name} and is ${age} years old`;
};

// short way to write an arrow function without arguments
const describeStudent = () => "Test short arrow function";

// calling the function
console.log(describeStudent()); // Output: Test short arrow function

console.log(describeStudent(name, age)); // Output: This person is Max and is 29 years old

// ACTIVITY FOR TODAY 24-AUG-2024.
// 1. STUDY AND RECODE (INCLUDE COMMENTS)
// 2. PLAY WITH THE CODE
    // CHANGE THE VARIABLE NAMES AND VALUES
    // CHANGE FUNCTIONS NAMES AND VALUES
    // CREATE YOUR OWN VARIABLES, ARRAYS, OBJECTS, FUNCTIONS
    // CREATE YOUR OWN CONDITIONAL STATEMENTS

// SUBMIT TO OUR LMS WITH TWO FILES
    // 1. JS_BASIC_SYNTAX.js
    // 2. PLAY.js

// !!! NO COPY PASTE
// !!! NO SENDING YOUR WORK TO OTHERS

// arrow function vs regular function
// arrow function does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

// Regular function
// regular functions are best suited for methods, constructors, and object properties.