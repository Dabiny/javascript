const set = new Set();
console.log(set); // Set(0) {}

set.add(1).add(2).add(2);
console.log(set); // Set(2) { 1, 2 }

console.log(NaN === NaN); // false
console.log(-0 === 0); // true

set.add(NaN).add(NaN);
set.add(0).add(-0);
console.log(set); Set(4) // { 1, 2, NaN, 0 }