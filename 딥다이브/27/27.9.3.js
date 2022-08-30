const numbers = [1, 4, 9];

// map 메서드는 numbers의 모든 요소를 순회하며 콜백함수를 반복 호출한다. 
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다. 
const roots = numbers.map(item => Math.sqrt(item));
console.log(roots); // [ 1, 2, 3 ]


[1, 3, 4].map((item, index, arr) => {
    console.log(`요소값: ${item}, index: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
});


class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    // add(arr) {
    //     return arr.map(function(item) {
    //         // 외부에서 this를 전달하지 않으면 undefined를 가리킨다. 
    //         return this.prefix + item;
    //     }, this); // map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달.
    // }
    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const pre = new Prefixer('-webkit-');
console.log(pre.add(['transistion', 'user-select']));
// [ '-webkit-transistion', '-webkit-user-select' ]