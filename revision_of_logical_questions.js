const arr = [
 {id:1,name:"A"},
 {id:2,name:"B"},
 {id:1,name:"A"}
]

const removeDuplicates = (array) => {
    const seenIds = {}

    const result = []

    for (let i = 0 ; i < array.length ; i++) {
        const item = array[i]

        if (!seenIds[item?.id]) {
            seenIds[item.id] = true 
            result.push(item)
        } 

    }

    return result

}

console.log(removeDuplicates(arr))