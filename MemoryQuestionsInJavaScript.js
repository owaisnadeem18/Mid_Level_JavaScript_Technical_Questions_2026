let a = 10;
let b = a;
b = 20;

// console.log(a); // 10 → 'a' is unaffected because b gets a copy of a's value in a separate memory location
// console.log(b); // 20 → 'b' is independent of 'a'

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

// ⚡ Shallow vs Deep (Quick Difference)
// Feature	Shallow Copy ❌	Deep Copy ✅
// Top-level copy	✅ Yes	✅ Yes
// Nested copy	❌ Reference	✅ New copy
// Safe changes	❌ No	✅ Yes
// Performance	⚡ Fast	🐢 Slower

let user = {
  name: "Owais",
  address: {
    city: "Karachi"
  }
};

let copy = { ...user }; // shallow copy

copy.name = "Ali"; // top level change
copy.address.city = "Lahore"; // nested change

// console.log(user.name);        // Owais ✅ (safe)
// console.log(user.address.city); // Lahore ❌ (changed)

console.log(copy)

// Shallow Copy vs Deep Copy in JavaScript:

// Shallow Copy:
// - Creates a new object with the same top-level properties as the original.
// - Nested objects are shared between the original and the copy (reference).
// - Changes to nested objects affect both the original and the copy.

// Deep Copy:
// - Creates a new object with the same properties as the original, including nested objects.
// - Nested objects are also copied, creating independent memory locations.
// - Changes to nested objects in the copy do not affect the original.