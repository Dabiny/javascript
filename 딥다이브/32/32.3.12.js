const str = 'abc';

console.log(str.repeat()); // ''
console.log(str.repeat(0)); // ''
console.log(str.repeat(1)); // 'abc'
console.log(str.repeat(2)); // 'abcabc'
console.log(str.repeat(2.5)); // 'abcabc' (2.5 -> 2)
console.log(str.repeat(-1)); // RangeError: Invalid count value
