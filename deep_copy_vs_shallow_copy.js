const obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
}

const obj2 = {...obj1} // Shallow Copy

obj2.name = "Owais"

console.log(obj1.name) 
console.log(obj2.name) 

obj2.address.country = "America"

console.log(obj1)

