const str = 'How are u doing?';

// 공백으로 구분하여 배열로 반환
console.log(str.split(' '));
// [ 'How', 'are', 'u', 'doing?' ]

// \s는 여러가지 공백 문자를 의미한다. 
console.log(str.split(/\s/));
// [ 'How', 'are', 'u', 'doing?' ]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다. 
console.log(str.split(''));
/*
[
  'H', 'o', 'w', ' ',
  'a', 'r', 'e', ' ',
  'u', ' ', 'd', 'o',
  'i', 'n', 'g', '?'
]
*/

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환.
console.log(str.split()); // [ 'How are u doing?' ]

console.log(str.split(' ', 3)); // [ 'How', 'are', 'u' ]

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello world!')); //!dlrow olleH