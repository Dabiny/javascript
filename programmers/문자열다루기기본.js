function solution(s) {
    let answer = true;
    if (s.length === 4 || s.length === 6) {
        if (isNaN(Number(s))||s.includes('e')) answer = false;
        // 지수표기까지 예외처리를 해주어야한다. 11번테케
        else answer = true;
    }
    else answer = false;

    return answer;
}
console.log(solution("a234"));
console.log(solution("1234"));