// Group Anagrams:

let strs = ["eat","tea","tan","ate","nat","bat"]

let groupAnagrams = (arr) => {
    
    let obj = {}

    for (let i = 0 ; i < arr.length ; i++) {
        // we have to create a key here , in order to group the anagrams:

        let str = arr[i] 
        
        let key = str.split("").sort().join("")

        if (!obj[key]) {
            obj[key] = []
        }

        obj[key].push(str)

    }

    return Object.values(obj)

}


console.log(groupAnagrams(strs))