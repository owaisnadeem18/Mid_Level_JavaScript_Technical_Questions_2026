const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];

// expected output:

// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// solution:

const countApples = (arr) => {
    
    let obj = {}
    let key

    for (let i = 0 ; i<arr.length ; i++) {

        key = arr[i]

        if (!obj[key]) {
            obj[key] = 1
        }

        else {
            obj[key]++
        }

    }

    return obj

}

console.log(countApples(fruits))