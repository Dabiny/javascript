const users = [
    { id: 1, name: 'lee' },
    { id: 2, name: 'kim' },
    { id: 2, name: 'choi' },
    { id: 3, name: 'park' }
];

// id가 2인 요소의 인덱스를 구한다. 
console.log(users.findIndex(user => user.id === 2)); // 1

console.log(users.findIndex(user => user.name === 'park')); // 3

// 위와같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 
// 다음과 같이 콜백함수를 추상화 할 수 잇다. 
function predicate(key, value) {
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('id', 2))); // 1
console.log(users.findIndex(predicate('name', 'park'))); // 3