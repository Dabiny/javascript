function solution(S) {
    let result = "";
    let regex = /[^0-9]/g;
    let num = S.replace(regex, ",");
    let answer = 0;
    for(let i = 0; i < S.length; i++) {
        if (S[i] == '+') {
            let n = parseInt(result);
            n += parseInt(S.substr(i + 1));
            answer = n;
        }
        if (S[i] == '-') {
            let n = parseInt(result);
            n -= parseInt(S.substr(i + 1));
            answer = n;
        }
        if (S[i] == '*') {
            let n = parseInt(result);
            n *= parseInt(S.substr(i + 1));
            answer = n;
        } 
        if (S[i] == '/') {
            let n = parseInt(result);
            n /= parseInt(S.substr(i + 1));
            answer = n;
        }
        result += S[i];
    }
    return answer;
}   

console.log(solution("23+5/63+15"));