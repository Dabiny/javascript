const url = 'http://dabin.com';
let reg = /^http?:\/\//;
console.log(reg.test(url)); // true

reg = /^(http|https):\/\//; //위와 동일하게 돌아가는 정규표현식