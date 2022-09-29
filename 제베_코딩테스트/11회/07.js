// 접미사가되는 array의 요소 개수 0.8
function solution(array, s) {
    var answer = 0;
    let stk = [...s]; 
    let tmp = [];
    for (let i = 0; i < s.length; i++) {
        if (array.includes(tmp.join(''))) {
            answer++;
        }
        tmp.unshift(stk.pop());
    }
    return answer;
}
console.log(solution(["er", "r", "ve"], "naver"));