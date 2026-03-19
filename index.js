console.log("2" + 34 + 56 +3)

// output: 234563 (because there is a string at the beginning, all the numbers are concatenated as strings)

console.log(4 + 34 + "56" +3)

// Reason: 4 + 34 is evaluated first, resulting in 38. Then "56" is concatenated to 38, resulting in "3856". Finally, 3 is concatenated to "3856", resulting in "38563". Because there is a string in the middle, all the numbers before it are added together first, and then the result is concatenated with the string and the remaining number.