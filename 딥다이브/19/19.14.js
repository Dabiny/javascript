// const person = {
//     name: 'lee',
//     address: 'seoul'
// };

// for (const key in person){
//     console.log(key + ': ' + person[key]);
// }

/*
name: lee
address: seoul
*/

// const person = {
//     name: 'lee',
//     address: 'seoul',
//     __proto__: {
//         age: 20,
//     }
// };

// for (const key in person){
//     console.log(key + ": " + person[key]);
// }

/*
name: lee
address: seoul
age: 20
*/

// 19-68
const sym = Symbol();
const person = {
    name: 'lee',
    address: 'seoul',
    __proto__: {
        age: 20,
    },
    [sym]: 10
};

for (const key in person){
    console.log(key + ": " + person[key]);
}
/*
name: lee
address: seoul
age: 20
*/

for (const key in person) {
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ": " + person[key]);
}

/*
name: lee
address: seoul
*/


const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
};

for (const key in obj) {
    if (!obj.hasOwnProperty(key))continue;
    console.log(key + ': ' + obj[key]);
}

/*
1: 1
2: 2
3: 3
b: b
a: a
*/