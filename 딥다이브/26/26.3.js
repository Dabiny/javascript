const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6

// const power = x => x ** 2;
// console.log(power(2)); // 4

// // 위 표현은 다음과 같다. 
// const power = x => {
//     return x ** 2;
// }

const arrow = () => {
    const x = 1;
};


// const create = (id, content) => ({ id, content });
// console.log(create(1, 'js')); // { id: 1, content: 'js' }

// // 위 표현은 다음과 같다. 
// const create = (id, content) => {
//     return {id, content};
// };

const sum = (a, b) => {
    const result = a + b;
    return result;
};


const person = (name => ({
    sayHi() {
        return `Hi my name is ${name}.`;
    }
}))('lee');

console.log(person.sayHi());


// ES5
[1, 2, 3].map(function(V) {
    return V * 2;
});

// ES6
[1, 2, 3].map(v => v * 2);
