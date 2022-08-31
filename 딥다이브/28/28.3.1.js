Number.isFinite(0); // true
Number.isFinite(Number.MAX_VALUE); // true
Number.isFinite(Number.MIN_VALUE); // true

console.log(Number.isFinite(Number.EPSILON)); // true
Number.isFinite(Infinity); // false;
Number.isFinite(-Infinity); // false;

console.log(Number.isFinite(null)); // false
console.log(isFinite(null)); // true
