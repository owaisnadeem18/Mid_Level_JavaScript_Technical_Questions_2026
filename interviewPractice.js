// Longest Number

const nums = [5, 12, 3, 99, 45, 100, 8];
let longestNum = 0


nums.forEach((item) => {
    if (item >longestNum ) {
        longestNum = item
    }
})

console.log(longestNum)