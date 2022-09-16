function solution(s) {
    let answer = [];
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (!answer.includes(s[i])) answer.push(s[i]);
        else {
            cnt = Math.max(answer.length, cnt);
            answer = [];
            answer.push(s[i]);
        }
    }

    return cnt;
}

console.log(solution("abssccbsbsv"));