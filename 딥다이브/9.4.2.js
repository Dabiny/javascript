// 옵셔널 체이닝 연산자 ?.

// 예제 09-26.
// let elem = null;
// // elem이 null / undeidfined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티를 참조.
// let n = elem?.value;
// console.log(n);


// 예제 09-27
// let elem = null;
// // elem이 falsy값이면 elem으로 평가되고, elem이 truthy값이면 elem.value로 평가된다.
// var n = elem && elem.value;
// console.log(n);


// 예제 09-28
// let str = '';
// // 문자열의 길이를 참조한다.
// let leng = str && str.length; // str -> '' falsy && str.length -> 0 falsy?
// console.log(leng); //길이를 반환하지않고 ''를 출력함.


// 예제 09-29
let str = '';

// 문자열의 길이를 참조한다. 이때 좌항 피연산자가 false로 평가되는 falsy값이여도 null,undefined가
// 아니면 우항의 프로퍼티 참조를 이어간다.
let leng = str?.length;
console.log(leng); //0;


