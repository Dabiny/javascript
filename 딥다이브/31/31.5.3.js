const target = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번 최대 2번 반복되는 문자열을 전역 검색한다.
let reg = /A{1,2}/g;

console.log(target.match(reg)); //[ 'A', 'AA', 'A', 'AA', 'A' ]

reg = /A{2}/g;
console.log(target.match(reg)); // [ 'AA', 'AA' ]

reg = /A{2,}/g;
console.log(target.match(reg)); // [ 'AA', 'AAA' ]

reg = /A+/g;
console.log(target.match(reg)); // [ 'A', 'AA', 'A', 'AAA' ]


const ex = 'color colour';

// 'colo'다음 'u'가 최대 한번(0번 포함)이상 반복하고 'r'이 이어지는
// 문자열 'color', 'colour'를 전역 검핵한다.
reg = /colou?r/g;
console.log(ex.match(reg)); //[ 'color', 'colour' ]


reg = /A|B/g;
console.log(target.match(reg));
/*
[
  'A', 'A', 'A', 'B',
  'B', 'B', 'A', 'B',
  'A', 'A', 'A'
]
*/

reg = /A|B+/g;
console.log(target.match(reg));
/*
[
  'A', 'A',  'A',
  'B', 'BB', 'A',
  'B', 'A',  'A',
  'A'
]
*/

reg = /[AB]+/g;
console.log(target.match(reg));
/*
[
  'A',   'AA',
  'B',   'BB',
  'A',   'B',
  'AAA'
]
*/

const ex2 = 'A AA BB ZZ Aa Bb AZ 12';
reg = /[A-Z]+/g;
console.log(ex2.match(reg));
// [ 'A', 'AA', 'BB', 'ZZ', 'A', 'B', 'AZ' ]


reg = /[A-Za-z]+/g;
console.log(ex2.match(reg));
/*
[
  'A',  'AA', 'BB',
  'ZZ', 'Aa', 'Bb',
  'AZ'
]
*/

reg = /[A-Z]+/gi; // 위와 같은방식으로 동작함.
console.log(ex2.match(reg));


reg = /[0-9]+/g;
console.log(ex2.match(reg));
// [ '12' ]

const ex3 = 'AA BB 12,345 12';
reg = /[0-9,]+/g;

console.log(ex3.match(reg));
// [ '12,345', '12' ]

reg = /\d/g;
console.log(ex3.match(reg));

reg = /[\d,]+/g;
console.log(ex3.match(reg));
// [ '12,345', '12' ]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또눈 ','가 한번 이상 반복되는 문자열을 검색한다.
reg = /[\D,]+/g;
console.log(ex3.match(reg)); // [ 'AA BB ', ',', ' ' ]


const ex4 = 'Aa Bb 12,345 _$%&';
// 알파벳, 숫자, 언더스코어, ','가 한번 이상 반복되는 문자열을 전역 검색
reg = /[\w,]+/g;
console.log(ex4.match(reg)); // [ 'Aa', 'Bb', '12,345', '_' ]

// 알파벳 숫자 언더스코어가 아닌 문자 또는 ','가 한번 이상 반복되는 문자열을 검색
reg = /[\W,]+/g;
console.log(ex4.match(reg)); // [ ' ', ' ', ',', ' ', '$%&' ]

