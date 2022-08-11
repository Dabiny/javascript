// var perfix = 'prop';
// var i = 0;

// var obj = {};

// obj[perfix + '-' + ++i] = i; // 표현식을 사용해서 동적으로 생성
// obj[perfix + '-' + ++i] = i;
// obj[perfix + '-' + ++i] = i;

// console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }


const perfix = 'prop';
let i = 0;

const obj = {
    [`${perfix}-${++i}`]: i,
    [`${perfix}-${++i}`]: i,
    [`${perfix}-${++i}`]: i
};

console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }