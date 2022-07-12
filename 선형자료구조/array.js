// /* some()
//     배열 내 단 하나라도 콜백 함수의 조건을 만족하는 요소가 있다면 true, 아니면 false 반환 (빈 배열인 경우 false)
//     Array.some(function(item, index, array){}), item -> 배열요소, index -> 배열 위치, array -> 배열
// */

// let users = [
//     {name : "bob", age: 17, job: false },
//     {name : "alick", age: 20, job: false },
//     {name : "jon", age: 27, job: true },
// ];
// let some_job = users.some(function(user){
//     return user.job == false;
// });
// console.log(some_job);

// let some_age = users.some(function(user){
//     return user.age < 16;
// });
// console.log(some_age);

// let empty = [].some((item) => item > 16);
// console.log(empty);

// /* every()
//     배열 내 모든 요소가 콜백 함수의 조건을 만족한다면 true, 아니면 false 반환 (빈 배열인 경우 true)
//     Array.every(function(item, index, array){})
// */
// let users2 = [
//     {name : "bob", age: 17, job: false },
//     {name : "alick", age: 20, job: false },
//     {name : "jon", age: 27, job: true },
// ];
// let every_job = users2.every(function(user){
//     return user.job == true;
// })
// console.log(every_job);

// let every_age = users2.every(function(user){
//     return user.age > 20;
// })

// let empty2 = [].every((item) => item > 20); //빈 배열 내에 결과값을 넣으면 비교할값이 없으니 true
// console.log(empty2);