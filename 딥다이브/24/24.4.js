// let num = 0;

// const increase = function () {
//     return ++num;
// };

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

// const increase = function () {
//     let num = 0;

//     return ++num;
// };
 
// // 이전 상태를 유지하지 못한다.
// console.log(increase()); //1
// console.log(increase()); //2
// console.log(increase()); //3


// const increase = (function () {
//     let num = 0;

//     let numPlus = function () {
//         return ++num;
//     }

//     return numPlus;
// }());

// console.log(increase());
// console.log(increase());
// console.log(increase());


// const counter = (function () {
//     let num = 0;

//     // 클로저인 메서드를 갖는 객체를 반환한다.
//     // 객체 리터럴은 스코프를 만들지 않는다. 
//     // 따라서 아래 메서드들의 상위 스코프는 즉시 실행함수의 렉시컬이다. 
//     return  {
//         increase() {
//             return ++num;
//         },

//         decrease() {
//             return num > 0 ? --num : 0;
//         }
//     }
// }());

// console.log(counter.increase()); //1
// console.log(counter.increase()); //2

// console.log(counter.decrease()); //1
// console.log(counter.decrease()); //0

const Counter = (function () {
    let num = 0;

    function Counter() {
        //프로퍼티는 public하므로 은닉되지 않는다. 
    }

    Counter.prototype.increase = function () {
        return ++num;
    };

    Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
    };

    return Counter;
}());

const cnt = new Counter();
console.log(cnt.increase());
console.log(cnt.increase());

console.log(cnt.decrease());
console.log(cnt.decrease());

// // 함수를 인자로 전달받고 함수를 반환하는 고차함수
// // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다. 
// function makeCounter(aux) {
//     //카운트 상태를 유지하기 위한 자유 변수
//     let counter = 0;


//     // 클로저를 반환
//     return function () {
//         // 인자로 전달받은 보조 함수에 상태 변경을 위임한다. 
//         counter = aux(counter);
//         return counter;
//     };
// }

// // 보조함수
// function increase (n) {
//     return ++n;
// }

// // 보조함수
// function decrease (n) {
//     return n > 0 ? --n : 0;
// }

// const increaser = makeCounter(increase);
// console.log(increaser()); //1
// console.log(increaser()); //2

// const decreaser = makeCounter(decrease);
// console.log(decreaser()); //0
// console.log(decreaser()); //0

const counter = (function() {
    let counter = 0;

    return function(aux) {
        counter = aux(counter);
        return counter;
    };
}());

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

console.log(counter(increase)); // 1
console.log(counter(increase)); // 2
console.log(counter(increase)); // 3
console.log(counter(increase)); // 4

console.log(counter(decrease)); // 3
console.log(counter(decrease)); // 2