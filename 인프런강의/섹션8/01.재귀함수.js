// function recursive(n, answer) {
//     if (n === 0) return;
//     recursive(n - 1);
// }
// function solution(n) {
//     let answer = [];
//     answer.push(recursive(n));
//     return answer; // 3 2 1을 배열에 집어넣어야하는데 어떻게 집어넣냐고....진짜 .... 
// }
// console.log(solution(3));

// 해설

function solution(n) {
    function DFS(l) { // l => 트리레벨
        if(l == 0) return; // 함수 종료
        else {
            DFS(l - 1);
            console.log(l);
        }
    }
    DFS(n)
}
console.log(solution(3));