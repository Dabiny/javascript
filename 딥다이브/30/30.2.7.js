const today = new Date();

today.setMonth(0); // 1월
console.log(today.getMonth()); // 0

today.setMonth(11, 1); // 12/1
console.log(today); // 2022-12-01T05:20:15.673Z

console.log(new Date().getDate()); // 12

today.setDate(3);
console.log(today.getDate()); // 3

console.log(new Date().getDay()); // 1

console.log(new Date().getHours()); // 14