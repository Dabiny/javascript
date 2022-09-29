// 문자열 쪼개기 x
function solution(S1, S2) {
    if(S1.length !== S2.length) return 0;
    let answer = S2;
    for (let i = 0; i < S2.length; i++) {
        let str = S1.split(S2[i]);
        answer = str.join();
        console.log(answer)
        if(answer == S1) return 1;
    }
    return 0;
}
console.log(solution("HelloWorld", "WorldHello"));