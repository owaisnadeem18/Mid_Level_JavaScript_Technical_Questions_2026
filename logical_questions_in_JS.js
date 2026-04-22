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

// Group Anagrams:

// let strs = ["eat","tea","tan","ate","nat","bat"]

// let groupAnagrams = function(strs) {
    
//     let obj = {}

//     for (let i = 0 ; i < strs.length ; i++) {

//         let str = strs[i]

//         let key = str.split("").sort().join("")

//         if (!obj[key]) {
//             obj[key] = []
//         }

//         obj[key].push(str)

//     }

//     return Object.values(obj)

// };

// console.log(groupAnagrams(strs))

// 🧠 Problem: Two Sum
// 📌 Question:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.

// You cannot use the same element twice
// You can assume exactly one solution exists

// 🧾 Example 1:
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]

let nums = [2, 7, 11, 15]

const findTwoSums = (nums) => {
    
    let map = {}
    let target = 9

    for (let i = 0 ; i < nums.length ; i++) {

        let complement = target - nums[i]

        if (map[complement] !== undefined) {
            return [map[complement], i]
        }
        map[nums[i]] = i
    }       

}   

console.log(findTwoSums(nums))