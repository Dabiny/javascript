const arr = [1, 2, 3];

// 배열 arr의 요소중에서 최대 값을 구하기 위해 Math.max를 사용한다. 
// const max = Math.max(arr); // NaN 

const max = Math.max(...arr); // 3

function foo(...rest) {
    console.log(rest);
}

// rest 파라미터는 인수들의 목록을 배열로 전달 받는다. 
foo(1, 2, 3); // 1, 2, 3 -> [1, 2, 3]

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다. 
foo(...[1, 2, 3]); // [1, 2, 3] -> 1, 2, 3