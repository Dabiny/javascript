const person = {
    name : 'lee',
    address: 'seoul'
};

console.log('name' in person); // true
console.log('address' in person); // true

console.log('age' in person); // false

console.log('toString' in person); // true


// 19-61 
console.log(Reflect.has(person, 'name')); // tr
console.log(Reflect.has(person, 'toString')); // true

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('toString')); // false