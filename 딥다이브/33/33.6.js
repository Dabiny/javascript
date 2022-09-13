// Array.prototype.sum = function () {
//     return this.reduce((acc, cur) => acc + cur, 0);
// };

// console.log([1, 2].sum()); // 3

Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for('sum')]()); // 3