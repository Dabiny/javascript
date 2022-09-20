// 풀지못함 어떻게 쇠막대기를 잘린 쇠막대기 수 += 를 구해야할지 모르겠음.
function solution (s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else {
            if (s[i - 1] == '(') {
                stack.pop();
                answer += stack.length;
            }
            else {
                stack.pop();
                answer++;
            }
        }
    }
    return answer;
}
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));