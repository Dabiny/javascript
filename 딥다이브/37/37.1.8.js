// Set.prototype.intersection = function(set) {
//     const result = new Set();

//     for (const val of set) {
//         if (this.has(val)) result.add(val);
//     }
//     return result;
// }; 

Set.prototype.intersection = function (set) {
    return new Set([...this].filter(v => set.has(v)));
};

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);

// console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
// console.log(setB.intersection(setA)); // Set(2) { 2, 4 }


// Set.prototype.union = function (set) {
//     const result = new Set(this);
//     for (const value of set) {
//         // 합집합은 2개의 Set 객체의 모든 요소로 구성된 집합니다. 중복된 요소는 포함되지 x
//         result.add(value);
//     }
//     return result;
// };

Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }
console.log(setB.union(setA)); // Set(4) { 2, 4, 1, 3 }

// Set.prototype.difference = function (set) {
//     const result = new Set(this);

//     for (let value of set) {
//         // 어느한쪽에는 존재하지만 다른 한쪽에는 존재하지 않는 요소로 구성된 집합이다. 
//         result.delete(value);
//     }
//     return result;
// };

Set.prototype.difference = function (set) {
    return new Set([...this].filter(v => !set.has(v)));
};

console.log(setA.difference(setB)); // Set(2) { 1, 3 }
console.log(setB.difference(setA)); // Set(0) {}



// Set.prototype.isSuperset = function (subset) {
//     for (const value of subset){
//         if (!this.has(value)) return false;
//     }
//     return true;
// };

Set.prototype.isSuperset = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
};

console.log(setA.isSuperset(setB)); // true
console.log(setB.isSuperset(setA)); // false

