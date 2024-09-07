const hobbies = ["Sports", "Cooking", "Programming"];

const person = {
  name: "John",
  age: 25,
  hobbies: hobbies,
  greet() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

printName(person);


// function printHobbies() {
//   console.log("My ultimate hobbies is: " + hobbies[2]);
// }

// const ultimateHobby = () => {
//   console.log("My ultimate hobbies is: " + hobbies[2]);
// }

// ultimateHobby(); // Output: My ultimate hobbies is: Programming