const sum = [1, 2, 3, 4].reduce((accmulator, currentValue, index, arr) =>
accmulator + currentValue , 0)

console.log(sum); // 10


const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); //3.5


const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 6


const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const cnt = fruits.reduce((acc, cur) => {
    // 첫번째 순회시 acc 초기값은 {}이고 cur은 첫번째요소인 banana다. 
    // 초기값으로 전달받은 빈 객체에 요소값인 cur를 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다. 
    // 만약 프로퍼티값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화 한다. 
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(cnt); // { banana: 1, apple: 2, orange: 2 }

const arr = [1, [2, 3], 4, [5, 6]];

const flatten = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten); //[ 1, 2, 3, 4, 5, 6 ]


// 27-120

const val = [1, 2, 1, 3, 5, 6, 1, 4, 5, 3, 4, 4];

const result = val.reduce(
    (unique, val, i, _values) =>
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소다. 
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 다르다면 val은 이미 중복된 요소다. 
    // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거된다.
    _values.indexOf(val) === i ? [...unique, val] : unique 
, []);

console.log(result); // [ 1, 2, 3, 5, 6, 4 ]

const res = val.filter((val, i, _values) => _values.indexOf(val) === i);

const set = [...new Set(val)];


// 27-126
const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
];

/*
1번째 : acc => 0, cur => 100
2번째 : acc => 100, cur => 200
3번째 : acc => 300, cur => 300
return 600
*/
const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);

console.log(priceSum);

