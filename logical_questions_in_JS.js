// Question # 01 
// Count Occurrences 
// let arr = ["a", "b", "a", "c", "b", "a"];

// let arr = ["a", "b", "a", "c", "b", "a"];

// const countOccurences = (array) => {
//     let counts = {}

//     for (let i = 0 ; i < array.length ; i++) {
        
//         let element = array[i]

//         counts[element] = (counts[element] || 0) + 1

//     }

//     return counts

// }

// console.log(countOccurences(arr))

// Output:
// { a: 3, b: 2, c: 1 }


// Now also find out which is the most frequent element in the array , and it's max count:

// let arr = ["a", "b", "a", "c", "b", "a"];

// const countOccurences = (array) => {

//     let counts = {}
//     let maxCount = 0
//     let mostFreq = ""

//     for (let i = 0 ; i < array.length ; i++) {
        
//         let element = array[i]

//         counts[element] = (counts[element] || 0) + 1

//     }

//     for (let i in counts) {

//         if (counts[i] > maxCount) {
//             mostFreq = i
//             maxCount  = counts[i]
//         } 

//     }

//     return `The most frequent element in array is => "${mostFreq}" and it comes "${maxCount}" times in the array`



// }

// console.log(countOccurences(arr))

// If you want to keep it in a single loop then:

// let arr = ["a", "b", "a", "c", "b", "a"];

// const countOccurences = (array) => {

//     let counts = {}
//     let maxCount = 0
//     let mostFreq = ""

//     for (let i = 0 ; i < array.length ; i++) {
        
//         let element = array[i]

//         counts[element] = (counts[element] || 0) + 1

//         if (counts[element] > maxCount) {
//             maxCount = counts[element]
//             mostFreq = element    
//         }
        
//     }

//     // return `The most frequent element in array is => "${mostFreq}" and it comes "${maxCount}" times in the array`

//     return { mostFreq , maxCount}


// }

// console.log(countOccurences(arr))

// First Non-Repeating Character

// let str = "aabbcde";

// const findFirstNonRepeatingChar = (str) => {
//     let obj = {}
//     let nonRepeatingChar = ""

//     for (let i = 0 ; i < str.length ; i++) {
        
//         let elem = str[i]

//         obj[elem] = (obj[elem] || 0) + 1        

//     }

//     for (let i in obj) {
//         if (obj[i] === 1) {
//                 nonRepeatingChar = i
//                 return nonRepeatingChar
//             }
//     }


// }

// console.log(findFirstNonRepeatingChar(str))

// // 👉 Output:
// "c"


// let s = "leetcode"

// function firstUniqChar(s) { 
    
//     let obj = {}
    
//     for (let i = 0 ; i < s.length ; i++) {

//         let elem = s[i]
        
//         obj[elem] = (obj[elem] || 0) + 1   
        
//     }
    
//     for (let i = 0 ; i < s.length ; i++) {
        
//         if (obj[s[i]] === 1) {
            
//         return i

//     }

// }

// return -1

// }

// console.log(firstUniqChar(s))

// ❓ LeetCode 242 — Valid Anagram

// 👉#242
// ✔ Same frequency compare
// ✔ MOST IMPORTANT hashing base question

// let s = "anagram"
// let t = "nagaram"

// let isAnagram = (s, t) => {
//     if (s.length !== t.length) return false;

//     let map = {};

//     // Step 1: count frequency of s
//     for (let ch of s) {
//         map[ch] = (map[ch] || 0) + 1;
//     }

//     console.log(map)

//     // // Step 2: reduce using t
//     for (let ch of t) {
//         if (!map[ch]) return false;
//         map[ch]--;
//     }    

//     return map;
// };

// console.log(isAnagram(s,t))