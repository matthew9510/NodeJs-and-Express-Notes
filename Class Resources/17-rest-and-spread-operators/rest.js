var array1 = [1, 2, 3];
var array2 = [...array1, 4, 5];

array1.push(6);

console.log(array1); // outputs [1, 2, 3, 6]
console.log(array2); // outputs [1, 2, 3, 4, 5]

var person = {
    name: "Matt",
    age: 23
}

var copiedPerson = {...person};

person.name = "Marc";
console.log(person);
console.log(copiedPerson);

// Note nested objects and arrays work differently due to them being reference types not primitive types 
var employee = {
    name: "Matt",
    age: 23,
    payStubs: [3000,3000,3000,3000]
}

var copiedEmployee = {...employee};
employee.name = "Marc"
employee.payStubs.push(4000);
console.log(employee) // Outputs { name: 'Marc', age: 23, payStubs: [ 3000, 3000, 3000, 3000, 4000 ] }
console.log(copiedEmployee) // Outputs { name: 'Matt', age: 23, payStubs: [ 3000, 3000, 3000, 3000, 4000 ] }
