function solution(n, arrA, arrB){
    let answer = [];
    for (let i = 0; i < n; i++) { // 1: 가위, 2:바위, 3:보
        if (arrA[i] == 1){ // A가 가위일때
            if (arrB[i] == 2){
                answer.push('B');
            }
            if (arrB[i] == 3){
                answer.push('A');
            } 
            if (arrB[i] == 1) {
                answer.push('D');
            }
        }
        if (arrA[i] == 2){ //A가 바위낼떄
            if (arrB[i] == 1){
                answer.push('A');
            }
            if (arrB[i] == 2) {
                answer.push('D');
            }
            if (arrB[i] == 3) {
                answer.push('B');
            }
        }
        if (arrA[i] == 3){ //A가 보낼때
            if (arrB[i] == 1) {
                answer.push('B');
            }
            if (arrB[i] == 2) {
                answer.push('A');
            }
            if (arrB[i] == 3) {
                answer.push('D');
            }
        }
    }
    return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

//기준을 무엇을 잡아서 풀어야할까 생각하기 (a기준 잡고 풀었음)
function solution(a, b){
    let answer = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += 'D' + ' ';
        else if (a[i] === 1 && b[i] === 3) answer += 'A' + ' ';
        else if (a[i] === 2 && b[i] === 1) answer += 'A' + ' ';
        else if (a[i] === 3 && b[i] === 2) answer += 'B' + ' ';
        else answer += 'B' + ' '; 
    }
    return answer;
}
console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));