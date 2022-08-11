function countdown(n) {
    for (var i = n; i >= 0; i--){
        console.log(i);
    }
}

countdown(10);

function countdown2(n) {
    if (n < 0)
        return;
    console.log(n);
    countdown2(n - 1); // 재귀 호출
}

countdown2(10);

// n! = 1 * 2 * .... * (n - 1) * n
function factorial(n){
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

console.log (factorial(0)); // 0! = 1
console.log (factorial(1)); // 1! = 1
console.log (factorial(2)); // 2! = 2 * 1 = 2
console.log (factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log (factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log (factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120


//함수 표현식
var factorial2 = function foo (n) {
    if (n <= 1) return 1;
    // 함수를 가리키는 식별자로 자기 자신을 재귀호출 한다.
    return n * factorial2(n - 1);

    //함수 이름으로 자기자신을 재귀 호출할 수도 있다.
    //return n * foo (n -1);
};

function factorial3(n) {
    var res = n;
    while (--n){
        res *= n;
    }
    return res;
}

console.log(factorial3(4)); // 24