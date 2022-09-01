function factorial(number) {
    if (number == 1) {
        return number;
    }

    return factorial(number - 1) * number;
}

function solution(s) {
    let res = 0;

    for (let i = 1; i < s; i++){
        res += factorial(i);
    }

    return res;
}

console.log(solution(3));