a = [10, 11, 12, 13, 14, 15];

//a.forEach(pridicate, thisArg콜백함수내부에서 this에서 사용될애를 받는다.); //호출 두개의 인자를 받는다. 
// 포이치 함수 안
/*
function forEach(pridicate, thisArg) {
    포문 반복문을 사용하지 않겠다는 애
    for (let i = 0; i < a.length; i++) {
        요소를 탐색하는 반복문을 돌고, 
        predecate(a[i], i);를 호출하는것이다.
    }

}

*/
a.forEach(function(v, i) { //callback 함수 첫번째는 값, 두번쨰는 인덱스 외우자. 
    console.log(v, i, this); //this는 thisArg를 가리킴 [1, 2]
}, [1, 2]) 

/*
10 0
11 1
12 2
13 3
14 4
15 5
*/

// 내부 상상(?)도
/*
function map (pridicate, thisArg) {
    let list = [];
    for (let i = 0; i < a.length; i++) {
        list.push(pridicate(a[i], i));
    }
    return list;
}
*/
// 새로운 배열을 생성해준다. 
let answer = a.map(function(v, i) {
    if (v % 2 == 0){
        return v;
    }; //어떻게 생성해줄지 정한다. 
}, [1, 2]);

console.log(answer); // [ 100, 121, 144, 169, 196, 225 ]

// 맵이 만들어준 배열길이는 원본배열이랑 무조건 길이가 같다. 그래서 이렇게 나온다. 
// [ 10, undefined, 12, undefined, 14, undefined ]



/*
function filter (pridicate, thisArg) {
    let list = [];
    for (let i = 0; i < a.length; i++) {
        if(pridicate(a[i], i)) {
            list.push(a[i]);
        }
    }
    return list;
}
*/
//filter 원하는 원소만 가져온다. 새로운 배열을 생성한다. 맵하고차이점은 길이가 다르다는것.
answer = a.filter(function(v, i) {
    if (v % 2 == 0){
        return v;
    }; //어떤 원소를 골라 가져올지 정한다. 
}, [1, 2]);
console.log(answer); // [ 10, 12, 14 ]



/*
function reduce (pridicate, value) {
    let result = value; // 초기값
    for (let i = 0; i < a.length; i++) {
        result = predicate(result, a[i]); //이게 특징이다. 
    }
    return list;
}
*/

// 어떤 값을 생성해서 리턴해준다. 
answer = a.reduce(function(acc, value) { // 누적값, value, 
    return acc + value;
}, 0);
console.log(answer); //75