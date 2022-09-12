const target = 'https://dabin.com';
// 'com'으로 끝나는지 검사한다.
let reg = /com$/;

console.log(reg.test(target)); // true