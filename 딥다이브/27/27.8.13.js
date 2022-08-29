const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어있는지 확인한다.
console.log(arr.includes(2)); // true
console.log(arr.includes(100)); // false

// 배열에 요소 1이 포함되어있는지 인덱스 1부터 확인한다.
console.log(arr.includes(1, 1)); // false

// 배열에 요소 3이 포함되어있는지 인덱스 2(arr.length - 1)부터 확인한다.
console.log(arr.includes(3, -1)); //true


[NaN].indexOf(NaN) !== -1; // false
[NaN].includes(NaN); // true