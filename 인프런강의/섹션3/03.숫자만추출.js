function solution (s) {
    let str = [...s].filter(v => {
        if (v.charCodeAt()>= 48 && v.charCodeAt() <= 57){
            return v;
        }
    })

    return parseInt(str.join(''));
}

console.log(solution("g0en2T0s8eSoft"))

// 다른 해답
function solution(str){
    let answer = 0;
    for (let x of str) {
        // 만약 x가 숫자이면 (isNaN이 false이면 숫자) 
        if (!isNaN(x)) answer = answer * 10 + Number(x);
    }

    return parseInt(answer);
}