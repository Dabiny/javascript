function square (number) {
    return number * number;
}

console.dir(square);
console.log(Object.getOwnPropertyDescriptors(square));

//__proto__는 square함수의 프로퍼티가 아니다. 
console.log(Object.getOwnPropertyDescriptors(square, '__proto__'));

// square함수는 Object.prototye 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다. 
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/


// 18-06
function sum() { // 매개변수를 설정해놓지 않음 (가변인자함수)
    let res = 0;

    // argumnets 객체는 length 프ㅗ퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다. 
    for (let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum()); //0
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6


// 18-07
function sum2() {
    // arguments 객체를 배열로 반환
    const array = Array.prototype.slice.call(arguments);
    
    // array의 reduce 사용가능
    return array.reduce(function (pre, cur){
        return pre + cur;
    }, 0);
}

console.log(sum2(1, 2)); //3
console.log(sum2(1, 2, 3, 4, 5)); //15

// 18-08 ES6 Rest parameter
function sum3(...args) { // ...이런식으로 바로 배열로 풀어버리기 
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(1, 2)); //3
console.log(sum3(1, 2, 3, 4, 5)); //15
