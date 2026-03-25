// Question # 01 

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// Output: 
    // Start
    // End
    // Timeout

// Question # 02 

// (Promise vs setTimeout)

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// (Multiple Promises)
// console.log("Start");

// Promise.resolve().then(() => {
//   console.log("P1");
// });

// Promise.resolve().then(() => {
//   console.log("P2");
// });

// console.log("End");

// Output:
    // Start
    // End
    // P1
    // P2
    
    
// Timeouts inside Promises in JavaScript:
    
// console.log("Start");

// Promise.resolve().then(() => {
//   console.log("Promise");

//   setTimeout(() => {
//     console.log("Timeout inside Promise");
//   }, 0);
// });

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");