/*
OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진 시험에서
연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서다음과 같이 점수 계산을 하기 로 하였다. 
1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다. 
또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 
틀린 문제는 0점으로 계산한다.예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 
틀린 경 우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 
총 점수는 1+1+2+3+1+2=10 점이다
*/

function solution (number, arr){
    let score = 0;
    let num = arr[0];
    let bonus = 0;
    for (let i = 1; i < number; i++){
        if (arr[i] == 0 && num == 1){
            bonus = 0;
            num = arr[i];
        }
        if (arr[i] == 1 && num == 0) {
            score++;
            num = arr[i];
        }
        if (arr[i] == 1 && num == 1){
            bonus++;
            score+= bonus;
            num = arr[i];
        }
        if (arr[i] == 0 && num == 0){
            bonus = 0;
            num = arr[i];
        }
    }
    return score;
}
console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

function solution(n, arr) {
    let answer = 0;
    let cnt = 0;
    for (let iter of arr) {
        if (iter === 1) {
            cnt++;
            answer += cnt;
        }
        else cnt = 0;
    }
    return answer;
}
console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));