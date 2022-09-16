// //ES5
// var user = {
//     fisrtName: 'ungmo',
//     lastName: 'lee'
// };

// // var fisrtName = user.fisrtName;
// // var lastName = user.lastName;
// // console.log(fisrtName, lastName); // ungmo lee

// // ES6
// const {lastName, fisrtName} = user;
// console.log(fisrtName, lastName); // ungmo lee

//const {lastName, firstName} = { firstName: 'ungmo', lastName: 'lee' };

// const {lastName, firstName} = user;
// // ==
// const {lastName: lastName, firstName: firstName} = user;


const user = {
    firstName: 'ungmo',
    lastName: 'lee'
};

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 
// 프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당하고
// 프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당한다. 
// const {lastName = 'ungmo', firstName: fn} = user;
// console.log(fn, ln); // ungmo lee


// const {firstName = 'ungmo', lastName} = {lastName: 'Lee'};
// console.log(firstName, lastName); // ungmo Lee

const {firstName: fn = 'ungmo', lastName: ln} = {lastName: 'Lee'};
console.log(fn, ln); // ungmo Lee


const str = 'Hello';

// String 래퍼 객체로부터 length 프로퍼티만 추출한다.
// const { length } = str;
// console.log(length); // 5

// const todo = {
//     id: 1,
//     content: 'HTML',
//     completed: true
// };

// const { id } = todo;
// console.log(id);

// function printTodo(todo) {
//     console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다. `);
// }
// printTodo({ id: 1, content: 'HTML', completed: true });
// // 할일 HTML은 완료 상태입니다.


function printTodo({ content, completed }) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다. `);
}
printTodo({ id: 1, content: 'HTML', completed: true });
// 할일 HTML은 완료 상태입니다.


const todos = [
    { id: 1, content: 'HTML', completed: 'true'},
    { id: 2, content: 'CSS', completed: 'true'},
    { id: 3, content: 'javaScript', completed: 'false'},
    { id: 4, content: 'typeScript', completed: 'false'},
];

// todos 배열의 두 번째 요소인 객체 id 프로퍼티만 추출한다. 
const [, { id }] = todos;
console.log(id); // 2


const person = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};

const { address: { city }} = person;
console.log(city); // seoul

const {x, ...rest } = { x: 1, y: 2, z: 3};
console.log(x, rest); // 1 { y: 2, z: 3 }