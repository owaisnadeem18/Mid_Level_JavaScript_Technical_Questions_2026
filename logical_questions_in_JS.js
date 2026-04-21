// Question # 01 
// Count Occurrences
// let arr = ["a", "b", "a", "c", "b", "a"];

let arr = ["a", "b", "a", "c", "b", "a"];

const countOccurences = (array) => {
    let counts = {}

    for (let i = 0 ; i < array.length ; i++) {
        
        let element = array[i]

        counts[element] = (counts[element] || 0) + 1

    }

    return counts

}

console.log(countOccurences(arr))

// Output:
// { a: 3, b: 2, c: 1 }

