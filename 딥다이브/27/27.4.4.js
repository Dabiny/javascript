console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); //[ 'a', 'b' ]
console.log(Array.from('Hello')); //[ 'H', 'e', 'l', 'l', 'o' ]

console.log(Array.from({ length: 3 })); //[ undefined, undefined, undefined ]
console.log(Array.from({ length: 3 }, (_, i) => i)); // [0, 1, 2]

console.log(Array.from({ length: 3 }, (_, i) => i + 1)); //[ 1, 2, 3 ]

// 27-30
const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3 
};

for (let i = 0; i < arrayLike.length; i++) { //객체이기 때문에 length를 객체에 넣어줘야 돌아간다.
    console.log(arrayLike[i]);
}

const arr = [1, , , 3];
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '3': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/

const arr2 = [0];
arr2[1] = 1; //배열 요소 추가

console.log(arr2); // [0, 1];
console.log(arr2.length); // 2

arr2[100] = 100;
console.log(arr2); //[ 0, 1, <98 empty items>, 100 ]
console.log(arr2.length); // 101

console.log(Object.getOwnPropertyDescriptors(arr2));
/*
{
  '0': { value: 0, writable: true, enumerable: true, configurable: true },
  '1': { value: 1, writable: true, enumerable: true, configurable: true },
  '100': { value: 100, writable: true, enumerable: true, configurable: true },
  length: {
    value: 101,
    writable: true,
    enumerable: false,
    configurable: false
  }
}
*/

// 27-38
const arr3 = [];
arr3[0] = 1;
arr3['1'] = 2;

arr3['foo'] = 3;
arr3.bar = 4;
arr3[1.1] = 5;
arr3[-1] = 6;

console.log(arr3); //[ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

// 프로퍼티로 생성된 요소들은 length에 포함되지 않는다. 
console.log(arr3.length); // 2 