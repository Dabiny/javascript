function solution(s) {
    var answer = "";
    let str = s.split(/\s/).sort((A, B) => A - B);
    answer += str[0] + ' ';
    answer += str[str.length - 1];
    
    return answer;
}
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log("-1 -1");

function solution (s) {
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
}
// Math.min과 Math.max를 써서 간단히 구현가능하다. 