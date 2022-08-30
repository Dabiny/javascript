const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하며 콜백 함수를 반복호출한다.
// 그리고 콜백 함수의 반환 값이 true인 요소로만 구성된 새로운 배열을 반환한다. 
const odds = numbers.filter(item => item % 2 === 1);
console.log(odds); // [ 1, 3, 5 ]

[1, 2, 3].filter(function(item, index, arr) {
    console.log(`요소값: ${item}, index: ${index}, this: ${arr}`);
    return item % 2;
});

class Users {
    constructor() {
        this.users = [
            { id: 1, name: 'Lee' },
            { id: 2, name: 'Kim'}
        ];
    }

    findById(id) {
        // id가 일치하는 사용자만 반환한다.
        return this.users.filter(user => user.id === id);
    }

    remove(id) {
        // id가 일치하지않는 사용자만 제거한다.
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new Users();

let user = users.findById(1);
console.log(user); // [ { id: 1, name: 'Lee' } ]

users.remove(1);
user = users.findById(1);
console.log(user); // []