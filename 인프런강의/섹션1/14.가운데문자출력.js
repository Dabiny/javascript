function solution(s) {
    let strIndex = Math.floor(s.length / 2);
    let str = ""
    if (s.length % 2 == 0) {
        str = s[strIndex - 1];
        str += s[strIndex];
    }
    else {
        str = s[strIndex];
    }

    return str;
}

console.log(solution("good"));