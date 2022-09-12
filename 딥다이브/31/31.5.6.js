const target = 'https://dabin.com';
// https로 시작하는지 검색한다.
let reg = /^https/;
console.log(reg.test(target)); // true
