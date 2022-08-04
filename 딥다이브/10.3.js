// 프로퍼티

// 예제 10-03
var person = {
    name: 'lee',
    age: 20
};

// 예제 10-04
// var person = {
//     firstName: 'ung-mo', // 식별자 네이밍을 준수하는 키
//     'last-name': 'Lee' // 식별자 네이밍을 준수하지 않은 키
// };


// 예제 10-05
// var person = {
//     firstName: 'ung-mo',
//     last-name: 'lee'  // 오류!! -를 연산자가있는 표현식으로 해석해버린다. 따옴표를 두르기
// };

// 예제 10-06
var obj = {};
var key = 'hello';

// ES6: 프로퍼티 키 동적 생성
obj[key] = 'world';

// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj);


// 예제 10-07
var foo = {
    '':''
};

// 예제 10-08
var foo = {
    0: 1,
    1: 2,
    2: 3
};

// 예제 10-09
var foo = {
    var: '',
    function: ''
};

// 예제 10-10
var foo = {
    name: 'Lee',
    name: 'Kim'
};
