// Question # 01 

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Output: 
    // Start
    // End
    // Timeout

// Question # 02 

// (Promise vs setTimeout)

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");