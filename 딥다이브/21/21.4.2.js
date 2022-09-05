// 표현식인 문
console.log(eval('1 + 2;')); // 3

// 표현식이 아닌 문
//console.log(eval('var x = 5;')); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다. 
//console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); //1

console.log(eval('1 + 2; 3 + 4;')); // 7


const xx = 1;
function foo() {
    // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다. 
    eval('var xx = 2;');
    console.log(xx);
}

foo(); // 2
console.log(xx); // 1

// 21-18
const xxx = 1;

function foo() {
    'use strict';

    eval('var xxx = 2; console.log(xxx);'); // 2
    //console.log(xxx);
}

foo();
console.log(xxx); //1

//21-20
console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite('10')); // true '10' -> 10
console.log(isFinite(null)); // true null -> 0

console.log(isFinite(NaN)); // false
console.log(isFinite('hi')); // false
console.log(isFinite('2005/12/12')); //false

//21-22
console.log(isNaN('blabla')); // true 'blabla' -> NaN
console.log(isNaN('10')); // flase '10' -> 10
console.log(isNaN('10.12')); //false '10.12' -> 10.12
console.log(isNaN('')); // false '' -> 0
console.log(isNaN(' ')); // false  ' ' -> 0
console.log(isNaN(true)); // false true -> 1
console.log(isNaN(null)); // false null -> 0

console.log(isNaN(undefined)); // true undefined -> NaN
console.log(isNaN({})); // true {} -> NaN

console.log(isNaN(new Date())); // false new Date -> number
console.log(isNaN(new Date().toString())); // true String -> NaN

// 21-23
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('10.00')); // 10
// 첫번째 문자열만 반환
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40

// 첫번째 문자열을 숫자로 못바꾼다면 NaN
console.log(parseFloat('he was 40')); // NaN

// 공백무시
console.log(parseFloat(' 60 ')); // 60


// 21-34
const uri = "https://example.com?name=이웅모&job=progrrmmer&teacher";

const enc = encodeURI(uri);
console.log(enc); // https://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=progrrmmer&teacher

const dec = decodeURI(enc);
console.log(dec); //https://example.com?name=이웅모&job=progrrmmer&teacher

// 21-36
const uriComp = 'name=이웅모&job=programmer&teacher';

let encode = encodeURIComponent(uriComp);
console.log(encode);
//name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let decode = decodeURIComponent(encode);
console.log(decode);
//name=이웅모&job=programmer&teacher