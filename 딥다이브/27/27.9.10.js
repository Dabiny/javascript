const arr = ['hello', 'world'];

const n = arr.map(x => x.split('')).flat();
console.log(n); 
/*
[
  'h', 'e', 'l', 'l',
  'o', 'w', 'o', 'r',
  'l', 'd'
]
*/

const nn = arr.flatMap(x => x.split(''));
console.log(nn);

/*
[
  'h', 'e', 'l', 'l',
  'o', 'w', 'o', 'r',
  'l', 'd'
]
*/