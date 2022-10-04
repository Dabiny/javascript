// // sleep 함수는 일정시간이 경과한 이후에 콜백 함수를 호출한다.
// function sleep (func, delay) {
//     const delayUntil = Date.now() + delay;

//     // 현재 시간에 delay를 더한 delayUntil이 현재시간보다 작으면 계속 반복한다.
//     while (Date.now() < delayUntil);

//     // 일정 시간이 경과한 이후에 콜백 함수를 호출한다.
//     func();
// }

// function foo() {
//     console.log('foo');
// }

// function bar() {
//     console.log('bar');
// }

// sleep(foo, 3 * 1000);
// // bar함수는 sleep함수의 실행이 종료된 이후에 호출되므로 3초 이상 블로킹된다.
// bar();
// // 3초경과후... foo호출 -> 바로 bar호출


// 42-03
function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

setTimeout(foo, 0);
bar();
// bar -> 3초 경과뒤 ...  -> foo호출