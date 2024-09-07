const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ', this.name);
  }
};


person.greet();


// let num = 10;

// function increase(num) {
//   num++;
// }

// increase(num);
// console.log(num); // 10

// let num = { value: 10 };

// function increase(num) {
//   num.value++;
// }

// increase(num);
// console.log(num.value); // 11


let x = 16 + 4 + "Volvo";
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

console.log(x); // 7