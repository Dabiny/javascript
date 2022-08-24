function solution (s) {
    let answer = "";
    for (let iter of s) {
        let n = iter.charCodeAt();
        if (n >= 97 && n <= 122) answer += String.fromCharCode(n - 32);
        else if (n >= 65 && n <= 90) answer += String.fromCharCode(n + 32);
    }
    return answer;
}

console.log(solution("StuDY"));