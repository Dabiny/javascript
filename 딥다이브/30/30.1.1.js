console.log(new Date()); //2022-09-12T04:24:51.745Z

console.log(Date()); // 2022-09-12T04:25:49.903Z

console.log(new Date(0)); //1970-01-01T00:00:00.000Z

/*
86400000ms는 1day를 의미한다. 
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,000,000ms = 86,400,000ms

*/

// const myBirthday = new Date('Set 17, 1994 10:40:00');
// console.log(myBirthday);

// console.log(new Date('May 26, 2020 10:00:00')); //2020-05-26T01:00:00.000Z
// console.log(new Date('1994/09/17/10:00:00')); //1994-09-17T01:00:00.000Z

// 월을 나타내는 2월을 3월을 의미한다. 
console.log(new Date(2020, 2)); //2020-02-29T15:00:00.000Z

// 월을 나타내는 2는 3월을 의미한다. 
console.log(new Date(2020, 2, 26, 10, 00, 00, 0));
// 2020-03-26T01:00:00.000Z

// 가독성이 훨 좋다. 
console.log(new Date('2020/3/26/10:00:00:00'));
//2020-03-26T01:00:00.000Z


console.log(Date.now()); // 1662958617850

// Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970/1/1 00:00:00을
// 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.
const now = Date.now(); 
console.log(new Date(now)); //2022-09-12T04:58:54.813Z