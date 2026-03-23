// 🧠 Memory Questions in JavaScript (Hard + Real Interview Style)

// 🔥 1. Stack vs Heap (Trap Based)

// What happens in memory when you declare:

let a = 10;
let b = a;
b = 20;

// 👉 Why does a not change?

console.log(a) // Output: 10 (because a and b are stored in different memory locations. When we assign b = a, it creates a copy of the value of a and stores it in a different memory location. Therefore, when we change the value of b, it does not affect the value of a.)]

// stack vs heap memory allocation in JavaScript:

// stack: 
// - used for primitive data types (number, string, boolean, null, undefined, symbol)
// - memory is allocated in a last-in-first-out (LIFO) manner
// - faster access

// heap:
// - used for reference data types (objects, arrays, functions)
// - memory is allocated in a random manner
// - slower access compared to stack

    