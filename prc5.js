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

