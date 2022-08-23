const arr = ['apple', 'banana', 'orange'];

console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': {
    value: 'apple',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: 'banana',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '2': {
    value: 'orange',
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

const arr1 = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [ ],
    { },
    function() {}
];

const arr2 = [];
console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
    arr[i] = i;
}

console.timeEnd('Array Performance Test');

// 91.094ms  ~ 102.ms

const obj = {};
console.time('Object');
for (let i = 0; i < 10000000; i++){
    obj[i] = i;
}
console.timeEnd('Object');
// 약 124ms