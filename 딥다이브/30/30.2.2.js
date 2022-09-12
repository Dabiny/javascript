// UTC
console.log(Date.parse('Jan 2, 1970 00:00:00 UTC')); // 86400000

// KST
console.log(Date.parse('Jan 2, 1970 09:00:00')); // 86400000

// KST
console.log(Date.parse('1970/01/02/09:00:00')); // 86400000


console.log(Date.UTC(1970, 0, 2)); // 86400000
console.log(Date.UTC('1970/1/2')); // NaN

console.log(new Date('2020/07/24').getFullYear()); // 2020


const today = new Date();

today.setFullYear(2000);
console.log(today.getFullYear()); // 2000

today.setFullYear(1900, 0, 1);
console.log(today); // 1900-01-01T05:47:36.984Z

console.log(new Date('2020/7/7').getMonth()); // 6
