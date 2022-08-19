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