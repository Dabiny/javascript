var count = 1;

// 순수함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

// 순수함수가 반환한 결과값을 변수에 재할당해서 상태를 변경.
count = increase(count);
console.log(count); //2

count = increase(count);
console.log(count); //3



var count2 = 0;
// 비순수 함수
function increase2() {
    return ++count2; //외부상태에 의존하며 외부 상태를 변경한다. 
}

// 비순수 함수는 외부상태(count2)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase2();
console.log(count2); //1

increase2();
console.log(count2); //2