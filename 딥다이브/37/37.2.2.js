const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); // 2

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
// map.size = 10; // 무시된다.
// {
//     get: [Function: get size],
//     set: undefined,
//     enumerable: false,
//     configurable: true
//   }