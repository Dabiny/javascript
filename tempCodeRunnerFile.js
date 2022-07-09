// 고차함수
// sort()문제와 한계점
/* 문제점: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬됨
    원인: sort메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생됨 */
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort()); //4가 맨 뒤에 있게됨. number형 이외에도 string도 가능한 함수라서 sort는 문자열로 모두 바꾼다음 비교한다.
// 글서 유니코드로 4가 더 크다보니까 4가 앞에 있는것.
console.log(nums.reverse()); //엉망진창

let fruits = ["apple", "Orange", "orange", "melon"]
// 한계점: 대소문자 구분없이 정렬하고 싶지만, 대소문자가 구분되어 정렬됨.
console.log(fruits.sort()); //Orange가 맨 앞에 와있음. 이것도 유니코드비교되어서 결과가 나오는것. 
console.log(fruits.reverse());

//해결법 : sort함수에서 callback함수를 받아 고차함수를 지원.
// 어떻게 해결할까?
let ascending_order = function(x, y) {return x - y}; 
let descending_order = function(x, y) {return y - x};
// ascending: 1, -1 (x, y) 0보다 큰값이니까  -1, 1 이런식으로 바뀌는 원리이다.
// -1, 4 (x, y) x가0보다 작으니까 가만히 냅두는식

//descending: x = 12, y = 20  8이 나오니까 20 12 이렇게 바뀐다.
let nums2 = [1, -1, 4, 0, 10, 20, 12];
console.log(nums2.sort(ascending_order));
console.log(nums2.sort(descending_order)); //구글링 해보기 잘 이해 x

// sort() 고차함수 2
let ascending_order2 = function(x, y) {
    x = x.toUpperCase(); // 모두 대문자로 바꿔서 비교하면 된다. 
    y = y.toUpperCase();

    if (x > y) return 1;
    else if (y > x) return -1;
    else return 0;
}

let descending_order2 = function(x, y){
    x = x.toUpperCase();
    y = y.toUpperCase();

    if (x < y) return 1;
    else if (y < x) return -1;
    else return 0;
}

let fruits2 = ["apple", "Orange", "orange", "melon"];
console.log(fruits2.sort(ascending_order2));
console.log(fruits2.sort(descending_order2));

let ascending_order3 = function(x, y){
    if (typeof x === "string") x = x.toUpperCase();
    if (typeof y === "string") y = y.toUpperCase();

    return x > y ? 1 : -1;
} // x가 클때 자리위치 바꾸기

let descending_order3 = function(x, y){
    if (typeof x === "string") x = x.toUpperCase();
    if (typeof y === "string") y = y.toUpperCase();

    return x < y ? 1 : -1;
} // y가 클때 자리위치 바꾸기


console.log("\n");
//for each()
// 배열 요소 별 콜백함수 각각에 실행

let nums3 = [1, 2, 3];
for (let i = 0; i < nums3.length; i++){
    console.log(nums3[i]);
}
//이것을 포이치문으로 바꾸면

nums3.forEach(function(i){
    console.log(i);
})
//각각의 요소에 대해서 펑션에 들어와 출력해준다. 포문처럼 수행된다.
console.log("\n");

//map()
// 배열 요소 별 함수 호출 및 결과를 배열로 변환한다. : Array.map(funtion(item, index, array){})
// item: 배열 요소, index: 배열 위치, array: 배열

let nums4 = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums4.length; i++){
    use_for_loop.push(nums4[i] * 2);
}
console.log(use_for_loop);

//use map
// map 원리 : 1. 유즈맵에 할당문 뒤에 있는 map(function (넘4요소값))이 함수 안에 들어와 곱하기를 연산한다.
//  2. 그리고 나서 연산뒤 리턴하여 유즈맵에 할당하게 된다. 새로운 변수선언없이 바로바로 대입가능
let use_map = nums4.map(function (item) {
    return item * 2;
})
console.log(use_map);
//item -> num4의 배열 요소 1, 2, 3, 4 ... 
//index -> num4의 배열 위치 [0] [1] [2] [3]
console.log("\n");

//find()
// 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환된다. Array.find(function(item, index, array){})
// item 배열 요소, index 배열 위치, array 배열

let users = [
    { name: "bob", age: 17, job: false },
    { name: "alice", age: 20, job: false},
    { name: "john", age: 27, job: true },
];
let find_job = users.find(function(user) {
    return user.job == false;
});
console.log(find_job); //밥 한명만 나온다.

let find_age = users.find(function (user){
    return user.age > 19;
});
console.log(find_age); //앨리스 한면망 나온다.
console.log("\n");
// 모든 값을 받아 보고 싶다면?
// filter() 
// 콜백 함수의 조건을 만족하는 값을 배열로 반환한다. Array.filter(funtion(item, index, array){})
// item 배열요소, index: 배열 위치, array: 배열
let filter_job = users.filter(function (user) {
    return user.job == false;    
});
console.log(filter_job);

let filter_age = users.filter(function (user){
    return user.age > 19;
});
console.log(filter_age);

/*  reduce()
    요소 별 함수 수행 누적 결과값 반환: Array.reduce(funtion(accumulator, item, index, array){})
    accumulator: 이전 함수 결과값이 누적됨(ititial로 초기값 설정 가능), item 배열 요소, index 배열 위치
    */
let call_count = 0;
console.log("result\t\tvalue\t\tindex");
let sum = nums4.reduce(function (accumulator, item, index, array){
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);
