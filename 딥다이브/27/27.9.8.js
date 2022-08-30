const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];

// id가 2인 첫번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다. 유의하자
console.log(users.find(user => user.id === 2)); //{ id: 2, name: 'Kim' }

const user = ['lee', 'kim', 'choi']; 
console.log(user.find(user => user == 'lee')); //lee 요소를 반환 배열 x


console.log([1, 2, 3].filter(item => item == 2)); // [2]
console.log([1, 2, 3].find(item => item == 2)); // 2