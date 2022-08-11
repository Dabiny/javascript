var str = 'string';

// 문자열은 원시값이므로 변경할 수 없다. 이 때 에러가 발생하지 않는다.
str[0] = 'S';
console.log(str);

let str1 = str.split("");
str1[0] = 'S';
str1 = str1.join("");
console.log(str1);