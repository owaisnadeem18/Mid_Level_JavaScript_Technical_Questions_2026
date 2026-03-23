let a = 10;
let b = a;
b = 20;

console.log(a); // 10 → 'a' is unaffected because b gets a copy of a's value in a separate memory location
console.log(b); // 20 → 'b' is independent of 'a'

// Stack vs Heap in JavaScript:

// Stack:
// - Stores primitive types (number, string, boolean, null, undefined, symbol)
// - Memory allocated in Last-In-First-Out (LIFO) order
// - Faster access

// Heap:
// - Stores reference types (objects, arrays, functions)
// - Memory allocated dynamically
// - Slower access compared to stack

// Key Takeaway:
// - Primitive types → copied by value → independent variables
// - Reference types → copied by reference → shared memory