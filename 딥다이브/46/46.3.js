// function* genFunc() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = genFunc();
// console.log(generator);
// console.log(Symbol.iterator in generator); // true
// console.log('next' in generator); // true

function* genFunc() {
    try {
        yield 1;
        yield 2;
        yield 3;
    }
    catch(e) {
        console.error(e);
    }
}

const generator = genFunc();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.return('End!')); //{ value: 'End!', done: true }
console.log(generator.throw('Error'));