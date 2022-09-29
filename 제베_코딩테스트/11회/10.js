// color code 1.0
function solution(s) {
    if (s.length !== 6) return false;
    for (let x of s) {
        if (x.charCodeAt() > 90 || x.charCodeAt() > 71) return false;
    }
    return true;
}
console.log(solution("DACC32"));
console.log(solution("AH9201"));