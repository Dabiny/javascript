const numbers = [1, 2, 3];
let pows = [];

for (let i = 0; i < numbers.length; i++) {
    pows.push(numbers[i] ** 2);
}

console.log(pows); // [ 1, 4, 9 ]


// forEach
pows = [];
// forEach 메서드는 numbers배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다. 
numbers.forEach(iter => pows.push(iter ** 2));
console.log(pows); // [1, 4, 9]



[1, 2, 3].forEach((iter, index, arr) => {
    console.log(`요소값: ${iter}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

numbers.forEach((item, index, arr) => {
    arr[index] = item ** 2;
});

console.log(numbers); // [ 1, 4, 9 ]

const result = [1, 2, 3].forEach(console.log);
/*
forEach안의 console.log
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]
*/

console.log(result); // undefined



class Numbers {
    numbersArray = [];

    // multiply(arr) {
    //     arr.forEach(function(iter) {
    //         this.numbersArray.push(iter * iter);
    //     }, this); // forEach메서드의 콜백함수 내부에서 this로 사용할 객체를 전달.
    // }

    multiply(arr) {
        arr.forEach(iter => this.numbersArray.push(iter * iter));
    }
}

const num = new Numbers();
num.multiply([1, 2, 3]);
console.log(num.numbersArray); // [ 1, 4, 9 ]




if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        //첫 번째 인수가 함수가 아니면 TypeError를 발생시킨다. 
        if (typeof callback !== 'function'){
            throw new TypeError(callback + 'is not a function..');
        }

        // this로 사용할 두번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다. 
        thisArg = thisArg || window;

        // for문으로 배열을 순회하면서 콜백함수를 호출시킨다. forEach를 호출한 this.length만큼
        for (let i = 0; i < this.length; i++) { 
            // call 메서드를 통해서 thisArg를 전달하면서 콜백 함수를 호출한다. 
            // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다. 
            callback.call(thisArg, this[i], i, this);
        }
    };
}



// 27-105
const arr = [1, , 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, undefined, 3
}

// forEach 메서드는 희소 배열에 존재하지 않는 요소를 순회 대상에서 제외한다. 
arr.forEach(v => console.log(v)); // 1, 3