// const orders = [
//   { customerId: 1, amount: 500, status: "paid" },
//   { customerId: 2, amount: 300, status: "pending" },
//   { customerId: 3, amount: 300},
//   { customerId: 1, amount: 700, status: "paid" },
//   { customerId: 2, amount: 400, status: "paid" }
// ];

// Expected output:

// {
//   1: 1200,
//   2: 400
// }

// const totalAmount = (array) => {
//     const obj = {}
//     let id 

//     for (let i = 0 ; i < array.length ; i++) {
        
//         if (array[i]?.status == "paid") {
        
            
//             id = array[i]?.customerId

//         if (!obj[id]) {
//             obj[id] = 0
//         }

//         obj[id] += array[i]?.amount
        
//         }

//     }

//     return obj

// }

// console.log(totalAmount(orders))

// const totalAmount  = (array) => {
    
//     let obj = {}
//     let key

//     array.forEach((item) => {
        
//         if (item?.status == "paid") {
        
//             key = item?.customerId
            
//             if (!obj[key]) {
//                 obj[key] = 0
//             }

//             obj[key] += item?.amount

//         }

        

//     })

//     return obj

// }

// console.log(totalAmount(orders))

// again practice of same question:

// const totalAmount = (arr) => {
    
//     let obj = {}
//     let id 

//     arr.forEach((item) => {
        
//         if (item?.status?.toLowerCase() == "paid") {
//             id = item?.customerId

//             if (!obj[id]) {
//                 obj[id] = 0
//             }

//             obj[id] += item?.amount

//         }

//     })

//     return obj

// }

// console.log(totalAmount(orders))

// without status of "paid"

const orders = [
  { customerId: 1, amount: 500 },
  { customerId: 2, amount: 300 },
  { customerId: 1, amount: 700 },
  { customerId: 3, amount: 200 },
  { customerId: 2, amount: 400 }
];


// Expected Output:

// {
//   1: 1200,
//   2: 700,
//   3: 200
// }

const totalAmount = (arr) => {
    
    let obj= {}
    let id
    let iteration = 0
    
    arr.forEach((item) => {
        id = item?.customerId
        iteration++
        console.log(`iteration : ${iteration}`)
        console.log("id is => " , id)
        if (!obj[id]) {
            obj[id] = 0
        }
        
        obj[id] += item?.amount
        
    } )

    return obj
    
}

console.log(totalAmount(orders))