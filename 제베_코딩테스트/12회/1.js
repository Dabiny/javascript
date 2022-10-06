function solution(s) {
    var answer = s.split(' ');
    let st = [...new Set(answer)]
    
    return st.length;
}
console.log(solution("Hello world Nice world"));
// 1.0