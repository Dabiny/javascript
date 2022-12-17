// function solution(N, M) {
//     let answer = 0;
//     for (let i = 1; i <= N; i++) {
//         for (let j = 1; j <= N; j++){
//             console.log(i, j);
//             answer++;
//         }
//     }
//     return answer;
// }
// console.log(solution(3, 2));

function solution(N, M) {
    let answer = [];
    let tmp = Array.from({length: M}, () => 0);
    function DFS(l) {
        if(l === M) {
            // answer.push(tmp); // 같은주소(얕은복사)여서 이렇게넣으면안됨
            answer.push(tmp.slice()); // 새롭게 복사해서 값을 넣어주자. 
            return;
        }
        else{
            for (let i = 1; i <= N; i++){
                tmp[l] = i;
                DFS(l + 1);
            }
        }
    }   
    DFS(0); // root level부터
    return answer;
}
console.log(solution(4, 2)); // 4P3 