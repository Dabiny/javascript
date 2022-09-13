const str = 'Hello World';

console.log(str.indexOf('l')); // 2
console.log(str.indexOf('or')); // 7 'o'자리
console.log(str.indexOf('x')); // -1

console.log(str.indexOf('x', 3)); // -1

if (str.indexOf('Hello') !== -1 ){
    console.log("찾았다",str.indexOf('Hello')); // 찾았다 0
}