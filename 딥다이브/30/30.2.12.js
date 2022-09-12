let today = new Date();

today.setHours(7);
console.log(today.getHours()); // 7


today.setHours(0, 0, 0, 0); // 00:00:00:00
console.log(today); //2022-09-11T15:00:00.000Z

console.log(new Date().getMinutes()); // 14

today = new Date();

today.setMinutes(50);
console.log(today.getMinutes()); //50

// 분, 초, 밀리초 지정
today.setMinutes(5, 10, 999); // HH:05:10:999
console.log(today); // 2022-09-12T06:05:10.999Z


today = new Date();
console.log(today.getSeconds()); 

today.setSeconds(30);
console.log(today.getSeconds()); // 30

// 초, 밀리초 지정
today.setSeconds(10, 0); // HH:MM:10:000
console.log(today); // 2022-09-12T06:22:10.000Z

console.log(new Date().getMilliseconds()); // 728

today = new Date();
today.setMilliseconds(123);
console.log(today.getMilliseconds()); // 123