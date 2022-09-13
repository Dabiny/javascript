const str = '   foo ';
console.log(str.trim()); // foo

console.log(str.trimStart()); //'foo '
console.log(str.trimEnd()); // '   foo'

// 위와 동일하게 동작
console.log(str.replace(/\s/g, ''));
console.log(str.replace(/^\s+/g, ''));
console.log(str.replace(/\s+$/g, ''));