// ? 1
// What is asynchrnous code?
// Asynchronous code is code that runs in the background while the rest of the code runs. It allows the program to continue running without waiting for the asynchronous code to finish.

// To understand the async nature of JS, we will use setTimeout function
// setTimeout is a built-in function that is used to execute a function after a specified number of milliseconds.

console.log("Hello");

// setTimeout(() => {
//   console.log('Timer is done.');
// }, 2000);

// console.log('Hi!');

// this is asynchronous code because the timer is running in the background while the rest of the code is running.

// ? 2
// callback function
// A callback function is a function that is passed as an argument to another function. This function is executed after the completion of the first function.

// Example 1
// const fetchData = callback => {
//   setTimeout(() => {
//     console.log('Fetching data...');
//     callback('Done!');
//   }, 1500);
// }

// setTimeout(() => {
//   console.log('Timer is done.');
//   fetchData(text => {
//     console.log(text);
//   });
// }, 2000);

// What is the problem here
// The problem with callback functions is that it can lead to callback hell. Callback hell is a situation where the code becomes difficult to read and maintain due to the nested callbacks.

// Example 2
// const fetchData = callback => {
//   setTimeout(() => {
//     console.log('Fetching data...');
//     callback('Done!');
//   }, 1500);
// }

// setTimeout(() => {
//   console.log('Timer is done.');
//   fetchData(text => {
//     console.log(text);
//     fetchData(text2 => {
//       console.log(text2);
//       fetchData(text3 => {
//         console.log(text3);
//       });
//     });
//   });
// }, 2000);

// ? 3
// What is the solution?
// Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Example 3
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done.");

  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((text2) => {
      console.log(text2);
      return fetchData();
    })
    .then((text3) => {
      console.log(text3);
    });
}, 2000);

console.log("Hi");
