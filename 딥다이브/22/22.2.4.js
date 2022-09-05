/**
 * 주어진 this바인딩와 인수 리스트 배열을 사용하여 함수를 호출한다. 
 * @param thisArg - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열
 * @returns 호출된 함수의 반환 값.
 */
//Function.prototype.apply(thisArg[, argsArray]);

/**
 * 주어진 this 바인딩과, 로 구분된 인수 리스트를 사용하여 함수를 호출한다.
 * @param thisArg -this로 사용할 객체
 * @param arg1, arg2, ...  - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
 */
//Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])

function getThisBinding() {
    return this;
}

// this로 사용할 객체
const thisArg = {
    a: 1
};

console.log(getThisBinding()); //window

// getTisBinding 함수를 호출하면서 인수로 전달할 객체를 getTisBinding함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); //{ a: 1 }
console.log(getThisBinding.call(thisArg)); //{ a: 1 }



//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다. 
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: f, ...]
// { a: 1 }

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다
console.log(getThisBinding.call(thisArg, 1, 2, 3)); 
//  Arguments(3) [1, 2, 3, callee: f, Symboll ...]
// { a: 1 }


// 22-21
function convertArgsToArray() {
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3 }

    // argumetns 객체를 배열로 변환
    // Array.prototype.slice를 인수없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments); // [ 1, 2, 3 ]

    console.log(arr);

    return arr;
}

convertArgsToArray(1, 2, 3);

// 22-22
console.log(getThisBinding.bind(thisArg)); //[Function: bound getThisBinding]

// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다. 
console.log(getThisBinding.bind(thisArg)()); // { a: 1 }


// 22-23
const person = {
    name: 'lee',

    foo (callback) {
        // 1. bind메서드로 callback 함수 내부의 this 바인딩을 전달
        setTimeout(callback.bind(this), 1000);
    }
};

person.foo(function() {
    console.log(`Hi! my name is ${this.name}`);
});