const person = {
    name: 'lee',
    address: 'seoul',
    __proto__: {
        age: 20
    }
};

console.log(Object.keys(person)); //[ 'name', 'address' ]
console.log(Object.values(person)); //[ 'lee', 'seoul' ]

console.log(Object.entries(person)); //[ [ 'name', 'lee' ], [ 'address', 'seoul' ] ]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name lee
address seoul
*/