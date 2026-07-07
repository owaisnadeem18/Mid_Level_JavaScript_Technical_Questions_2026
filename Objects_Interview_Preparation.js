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

// const employees = [
//   { name: "Ali", department: "IT", salary: 50000 },
//   { name: "Ahmed", department: "HR", salary: 30000 },
//   { name: "Sara", department: "IT", salary: 40000 },
//   { name: "Ayesha", department: "HR", salary: 35000 },
//   { name: "Zain", department: "Sales", salary: 60000 }
// ];

// // expected output:
// // {
// //   IT: 90000,
// //   HR: 65000,
// //   Sales: 60000
// // }

// const countTotalDeptSalaries = (employees) => {
    
//     let obj = {}
//     let id
    
//     employees.forEach((item) => {
//         id = item?.department

//         if (!obj[id]) {
//             obj[id] = 0
//         }

//         obj[id] += item?.salary

//     })

//     return obj

// }

// console.log(countTotalDeptSalaries(employees))


// const employees = [
//   { name: "Ali", department: "IT", salary: 50000 },
//   { name: "Ahmed", department: "HR", salary: 30000 },
//   { name: "Sara", department: "IT", salary: 40000 },
//   { name: "Ayesha", department: "HR", salary: 35000 },
//   { name: "Zain", department: "Sales", salary: 60000 }
// ];

// expected output:

// {
//   IT: 2,
//   HR: 2,
//   Sales: 1
// }

// const countEmployeesDeptWise = (arr) => {
    
//     let obj = {}
//     let key 
    
//     arr.forEach((item) => {
//         key = item?.department 
        
//         if (!obj[key]) {
//             obj[key] = 0
//         } 
        
//         obj[key]++
        
//     })
    
//     return obj
    
// }

// console.log(countEmployeesDeptWise(employees))

// const marks = [
//   { student: "Ali", marks: 80 },
//   { student: "Ahmed", marks: 70 },
//   { student: "Ali", marks: 90 },
//   { student: "Ahmed", marks: 60 },
//   { student: "Sara", marks: 95 }
// ];

// // {
// //   Ali:170,
// //   Ahmed:130,
// //   Sara:95
// // }

// const findStudentTotalMarks = (arr) => {
//     let obj = {}
//     let key

//     arr.forEach((item) => {
//         key = item?.student

//         if (!obj[key]) {
//             obj[key] = 0
//         }

//         obj[key] += item?.marks

//     })

//     return obj

// }

// console.log(findStudentTotalMarks(marks))

// const purchases = [
//   { customer: "Ali", amount: 500 },
//   { customer: "Ahmed", amount: 1200 },
//   { customer: "Ali", amount: 700 },
//   { customer: "Sara", amount: 900 }
// ];

// const highestSpender = (arr) => {
//     let obj = {}
//     let key
//     let highestSpender = ""
//     let highestAmountSpent = 0
    
//     arr.forEach((item) => {
//         key = item?.customer
//         if (!obj[key]) {
//             obj[key] = 0
//         }
        
//         obj[key] += item?.amount
        
//     })
    
//     for (let i in obj) {
        
//         if (obj[i] > highestAmountSpent) {
//             highestAmountSpent = obj[i]
//             highestSpender = i
//         }
        
        
//     }
    
//     return highestSpender
    
// } 

// console.log(highestSpender(purchases))

// const employees = [
//   { name: "Ali", department: "IT" },
//   { name: "Ahmed", department: "HR" },
//   { name: "Sara", department: "IT" },
//   { name: "Ayesha", department: "HR" },
//   { name: "Zain", department: "Sales" }
// ];

// expected output:

// {
//   IT: ["Ali", "Sara"],
//   HR: ["Ahmed", "Ayesha"],
//   Sales: ["Zain"]
// }

// let obj = {}
// let key

// employees.forEach((item) => {
//     key = item?.department

//     if (!obj[key]) {
//         obj[key] = []
//     }

//     obj[key].push(item?.name)

// })

// console.log(obj)

// count occurences  

// const sentence = "owais";

// let obj = {}
// let key

// sentence.toLowerCase().split("").forEach((item) => {
//     key = item

//     if (!obj[key]) {
//         obj[key] = 0
//     }
//     obj[key]++
// } )

// console.log(obj)

const sent = "hello world man"

const countOcc = (arr) => {
    let obj = {}

    arr.toLowerCase().split("").forEach((item) => {
        
        
        key = item

        if ( item !== " " ) {
            
            if (!obj[key]) {
                obj[key] = 1        
            }

            obj[key]++
        
        }
    
    })

    return obj

}

console.log(countOcc(sent))