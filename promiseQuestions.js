// Mid-Level Interview Questions on Promises (With Practice):

// Q1️⃣ Promise Output Question: 

// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//     return res + 1;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Output: 
// 1
// 2

// Q2️⃣ Promise Chain Error Handling:

// Promise.resolve()
//   .then(() => {
//     throw new Error("Error Occurred");
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((err) => {
//     console.log("Caught");
// });

// Output:
// Caught 

// Q3️⃣ Promise.all() Logic Question:

// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
//   .then(console.log)
//   .catch(console.log);

// Output:  
// B 

// Expalanation: 
// Promise all only runs in this case , if all promises get resolved:

// Q4️⃣ async/await vs .then()

// async function test() {
//   return "Hello";
// }

// test().then(console.log); 

// Output: 
// Hello 

// Q5️⃣ Sequential vs Parallel Promises 

const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts";

await fetch(url1);
await fetch(url2);

// vs

await Promise.all([fetch(url1), fetch(url2)]);

// We have to tell that which is more faster:

