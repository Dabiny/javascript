// 풀지못함 어떻게 쇠막대기를 잘린 쇠막대기 수 += 를 구해야할지 모르겠음.
function solution (s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else {
            if (s[i - 1] == '(') { // 레이저 
                stack.pop(); 
                answer += stack.length; // 레이저가 자른 조각들을 더해줌
            }
            else {
                stack.pop(); // 레이저가 아니고 막대기가 하나 끝났으니 pop하고
                answer++; // 1누적 (잘린 끄트머리)
            }
        }
    }
    return answer;
}
console.log(solution("()(((()())(())()))(())")); // 17
console.log(solution("(((()(()()))(())()))(()())")); // 24
// 다시 풀기 

