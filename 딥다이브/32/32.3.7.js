const str = 'Hello World';

// 인데스 1부터 4이전까지의 부분문자열 반환
console.log(str.substring(1, 4)); // ell
console.log(str.substring(1)); // ello World

// 첫번재 인수 > 두번째 인수
console.log(str.substring(4, 1)); // ell

// 인수 < 0 -> 0으로 취급
console.log(str.substring(-2)); // Hello World

// 인수 > 문자열 길이인 경우 
console.log(str.substring(1, 100)); // ello World
console.log(str.substring(20)); // ''

// 스페이스 기준으로 앞에 있는 부분 문자열 취득
console.log(str.substring(0, str.indexOf(' '))); // Hello

// 스페이스 기준으로 앞에 있는 부분 문자열 취득
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // World