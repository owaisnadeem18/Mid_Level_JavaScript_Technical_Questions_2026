// const arr = [
//  {id:1,name:"A"},
//  {id:2,name:"B"},
//  {id:1,name:"A"}
// ]

// const removeDuplicates = (array) => {
//     const seenIds = {}

//     const result = []

//     for (let i = 0 ; i < array.length ; i++) {
//         const item = array[i]

//         if (!seenIds[item?.id]) {
//             seenIds[item.id] = true 
//             result.push(item)
//         } 

//     }

//     return result

// }

// console.log(removeDuplicates(arr))

// ❓ Question 2: Find Count of Occurrences

// Problem:
// Given an array of integers, find the count of each element using a HashMap.

// Example:
// Input:
// arr = [1, 2, 2, 3, 1, 4, 2]

// Output:
// 1 → 2
// 2 → 3
// 3 → 1
// 4 → 1

// arr = [1, 2, 2, 3, 1, 4, 2]

// const countOcc = (array) => {
//     const occ = {}

//     for (let i = 0 ; i < array.length ; i++) {
        
//         const item = array[i]

//         if (!occ[item]) {
//             occ[item] = 1
//         }

//         else {
//             occ[item]++
//         }

//     }

//     return Object.entries(occ)

// }

// console.log(countOcc(arr))

// Hashmap Questions