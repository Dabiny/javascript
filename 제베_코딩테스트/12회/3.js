function solution(S) {
    var answer = '';
    let y = 0;
    for (let i = S.length; i >= 0; i--) {
        if (S[i] === 'Y'){
            y = i;
            break;
        }
    }
    
    let tmp = S.substring(0, y) + S.substring(y + 1);
    let x = tmp.indexOf('X');
    
    answer = tmp.substring(0, x) + 'Y' + tmp.substring(x);
    return answer;
}
console.log(solution("AXYA"));
console.log(solution("ABCXAXYABC"));
console.log(solution("XY"));

// 0.2 특정 문자열을 잘라서 다른곳에 위치하는것이 어려움 해답보면서 다시보기 
// 문자열 S XY 바꾸기 문제