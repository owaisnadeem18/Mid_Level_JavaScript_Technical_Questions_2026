const orders = [
  { customerId: 1, amount: 500, status: "paid" },
  { customerId: 2, amount: 300, status: "pending" },
  { customerId: 3, amount: 300},
  { customerId: 1, amount: 700, status: "paid" },
  { customerId: 2, amount: 400, status: "paid" }
];

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