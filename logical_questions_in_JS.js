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

let arr = ["a", "b", "a", "c", "b", "a"];

const countOccurences = (array) => {

    let counts = {}
    let maxCount = 0
    let mostFreq = ""

    for (let i = 0 ; i < array.length ; i++) {
        
        let element = array[i]

        counts[element] = (counts[element] || 0) + 1

    }

    for (let i in counts) {

        if (counts[i] > maxCount) {
            mostFreq = i
            maxCount  = counts[i]
        } 

    }

    return `The most frequent element in array is => "${mostFreq}" and it comes "${maxCount}" times in the array`



}

console.log(countOccurences(arr))
