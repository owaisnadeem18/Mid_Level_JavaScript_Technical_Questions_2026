// const fruits = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple"
// ];

// // expected output:

// // {
// //   apple: 3,
// //   banana: 2,
// //   orange: 1
// // }

// // solution:

// const countApples = (arr) => {
    
//     let obj = {}
//     let key

//     for (let i = 0 ; i<arr.length ; i++) {

//         key = arr[i]

//         if (!obj[key]) {
//             obj[key] = 1
//         }

//         else {
//             obj[key]++
//         }

//     }

//     return obj

// }

// console.log(countApples(fruits))

const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: true }
];

// expected output:
// 3

// const countActiveUsers = (arr) => {
//     let active = 0

//     arr.forEach((item) => {
//         if (item?.active) active++
//     } )

//     return active

// }

// console.log(countActiveUsers(users))

const employees = [
  { name: "Ali", department: "IT", salary: 50000 },
  { name: "Ahmed", department: "HR", salary: 30000 },
  { name: "Sara", department: "IT", salary: 40000 },
  { name: "Ayesha", department: "HR", salary: 35000 },
  { name: "Zain", department: "Sales", salary: 60000 }
];

// expected output:
// {
//   IT: 90000,
//   HR: 65000,
//   Sales: 60000
// }

const countTotalDeptSalaries = (employees) => {
    
    let obj = {}
    let id
    
    employees.forEach((item) => {
        id = item?.department

        if (!obj[id]) {
            obj[id] = 0
        }

        obj[id] += item?.salary

    })

    return obj

}

console.log(countTotalDeptSalaries(employees))