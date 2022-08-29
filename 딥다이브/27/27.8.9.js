const arr = [1, 2, 3];

// arr[0]부터 arr[1]이전까지 복사하여 반환한다.
arr.slice(0, 1); // [1]

// arr[1]부터 arr[2]이전까지 복사하여 반환한다.
arr.slice(1, 2); // [1, 2]

// 원본은 변경되지 않음
console.log(arr); // [1, 2, 3]

// 배열 끝에서부터 요소를 두 개 복사하여 반환한다.
console.log(arr.slice(-2)); //[2, 3]

const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
];

const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos의 참조값이 다른 별개의 객체다
console.log(_todos === todos); // false

// 배열 요소와 참조값이 같다. 즉, 얕은복사 되었다.
console.log(_todos[0] === todos[0]); // true



function sum() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr); // [1, 2, 3]

    return arr.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3)); // 6


function sum2() {
    const arr = Array.from(arguments);
    console.log(arr); // [1, 2, 3]

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6