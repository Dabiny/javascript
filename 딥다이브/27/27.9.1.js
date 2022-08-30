const fruits = ['Banana', 'Orange', 'Apple'];

fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Orange' ]

const ko = ['바나나', '오렌지', '사과'];

ko.sort();
console.log(ko); // [ '바나나', '사과', '오렌지' ]


const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
// 숫자 요소들로 이루어진 배열을 의도대로 정렬되지 않는다.
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5]

// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다. 
points.sort((a, b) => a - b);
console.log(points); // 1, 2, 5, 10, 25, 40, 100

// 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다. 
points.sort((a, b) => b - a);
console.log(points); // 100, 40, 25, 10, 5, 2, 1


const todos =  [
    { id: 4, content: 'Javascript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
];

// 비교함수
function compare(key) {
    // 프로퍼티 값이 문자열인 경우 - 산술연산으로 비교하면 NaN이 나오므로 비교연산을 사용한다.
    // 비교 함수는 양수 / 음수 /0 을 반환하면 되므로 -산술 연산대신 비교 연산을 사용할 수 있다.
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));

    // a['id'] > b['id'] ? 1: (a['id'] < b['id'] ? -1 : 0);
}

todos.sort(compare('id')); //'id'순으로 오름차순 정렬
console.log(todos);

todos.sort(compare('content'));
console.log(todos); // 'content'순으로 오름차순 정렬