const today = new Date('2020/7/24/12:30');

console.log(today.toString()); 
//Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)

console.log(today.toDateString());
//Fri Jul 24 2020

console.log(today.toTimeString());
// 12:30:00 GMT+0900 (대한민국 표준시)

console.log(today.toISOString()); 
//2020-07-24T03:30:00.000Z

console.log(today.toISOString().slice(0, 10)); 
// 2020-07-24

console.log(today.toISOString().slice(0, 10).replace(/-/g, ' '));
// 2020 07 24

console.log(today.toLocaleString()); 
//2020. 7. 24. 오후 12:30:00

console.log(today.toLocaleString('ko-KR'));
// 2020. 7. 24. 오후 12:30:00

console.log(today.toLocaleString('en-US'));
// 7/24/2020, 12:30:00 PM

console.log(today.toLocaleString('ja-JP'));
// 2020/7/24 12:30:00

console.log(today.toLocaleTimeString()); // 오후 12:30:00
console.log(today.toLocaleTimeString('ko-KR')); // 오후 12:30:00
console.log(today.toLocaleTimeString('en-US')); // 12:30:00 PM
console.log(today.toLocaleTimeString('ja-JP')); // 12:30:00