// 배열의 기본적인 선언과 사용법
let arr_1 = new Array(10); //() 괄호로 표현하는것이 특이한점
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits); //배열요소들
console.log(fruits.length); //배열길이 3
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]= "kiwi"; //요소 변경
console.log(fruits);

//배열의 실체 (희소배열) 키값을 바탕으로 요소를 찾는 구조구나
let nums = [];

nums.push("one");
nums.push("two");
console.log(nums.length);
console.log(nums);

nums["once"] = "once"; //key value? 
nums["twice"] = "twice";
console.log(nums.length);
console.log(nums);

console.log(Object.getOwnPropertyDescriptors(nums));

//배열 타입 확인 및 요소 삭제
let num2 = 123.456;
let str = "Here I am!";
let fruits2 = ["apple", "orange", "melon"];

console.log(Array.isArray(num2));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));

console.log(fruits2);
console.log(fruits2.length);

delete fruits2[1];
console.log(fruits2);
console.log(fruits2.length); //삭제해도 배열 사이즈가 그대로인 문제점 

//배열 조작
let ret;
ret = fruits.push("watermelon");

console.log(fruits);
console.log(fruits.length);
console.log(ret);

ret = fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log(ret); //ret에 pop한 요소를 리턴해주는 

ret = fruits.unshift("watermelon");
console.log(fruits);
console.log(fruits.length);
console.log(ret);

ret = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log(ret + "\n");

//배열조작 2. 삭제 / 변경 (index)
let fruits3 = ["apple", "orange", "melon"];
let tex;
ret = fruits3.splice(1);
console.log(ret);  //잘린 오렌지, 멜론 값
console.log(fruits3 + "\n");  //매개변수 apple을 빼고 날릴수 있다. 

fruits3 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits3.splice(1, 1)); //오렌지만 삭제하고 싶을 때 
console.log(fruits3 + "\n"); //apple,melon,strawberry

console.log(fruits3.splice(1, 1, "mango", "kiwi")); //중간을 또삭제하고(melon자리) 더나아가 새로운요소를 추가하고 싶을때
console.log(fruits3 + "\n");
//splice는 원본에 영향을 미친다. 

let fruits4 = ["apple", "orange", "melon"];
console.log(fruits4.slice(1));
console.log(fruits4);
//slice는 원본에 영향을 미치지 않음.

console.log(fruits4.slice(1, 2)); //(첫번째에서, 두번째까지 (end index)); 
console.log(fruits4.slice(-2)); //음수로도 접근가능하다. 

console.log(fruits4.concat("strawberry"));
console.log(fruits4.concat(["cherry", "banana"])); //한번에 여러개 붙이고 싶을때
console.log(fruits4);
console.log(fruits4.concat(["cheey", "banana"], "mango")); 
console.log(fruits4 + "\n");

//배열 반복문 
/* 다양한 반복문 문법을 통해 배열 요소에 접근 가능하다. */
//1. for...length(index 접근)
for(let i = 0; i < fruits4.length; i++)
    console.log(fruits4[i]);

//2. for...of (element 접근)
for (let i of fruits4)
    console.log(i);

//3. for... in (key 접근)
for (let key in fruits4)
    console.log(fruits4[key]);


//배열 탐색
//1. index 탐색
console.log(fruits4.indexOf("orange")); 
console.log(fruits4.indexOf("Orange")); //배열에 없으면 -1
console.log(fruits4.indexOf("orange",2) + "\n"); //2번째부터 오랜지 찾기 -> 인덱스 값 반환

console.log(fruits4.lastIndexOf("orange"));
console.log(fruits4.lastIndexOf("orange", -3));
console.log(fruits4.lastIndexOf("orange", 0) + "\n"); //0에서 뒤로 찾아라 하니까 아무것도 없으니 -1반환

//2. 값 포함 여부확인
console.log(fruits4.includes("banana"));
console.log(fruits4.includes("Orange")); // 없으니까 -1 
console.log(fruits4.includes(0)); //없는값을 넣어도 -1

console.log("\n");
//배열 변형
//1. 배열 정렬, 반전
let numss = [1, -1, 4, 5, 2, 0];
console.log(numss.sort()); //오름차순
console.log(numss.reverse()); //내림차순

let fruits5 = ["apple", "orange", "banana", "melon"];
console.log(fruits5.sort()); //abc순
console.log(fruits5.reverse()); //역순

//2. 배열값을 문자열로 변환
str = fruits5.join();
console.log(str); //콤마기준으로 문자열을 만들어준다.

let str_seperator = fruits5.join(";"); //";"기준으로 문자열을 만들어줌
console.log(str_seperator);

let res = str.split(";");
console.log(res);