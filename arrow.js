const person = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    street: "Broadway",
  },
  greet: () => {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // John
