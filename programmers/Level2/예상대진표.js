function solution(n, a, b) {
    let num = 1;
    let cnt = 0;
    while(true) {
        num = cnt ** 2;
        cnt++;
        if (num === n) break;
    }
    return num;
}

console.log(solution(8, 4, 7));
console.log(solution(12, 4, 7));

function solution(n, a, b) {
    let answer = 1; // 1라운드부터 시작
    while(Math.ceil(a / 2) !== Math.ceil(b / 2)) {
        a = Math.ceil(a / 2); 
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}

// 1. 지수승으로n명이 짝을지어서 대전을 진행하면,
// 1  2  3  4  5  6  7  8
//  2(1)  4(2)  5(3)  7(4) 
//   ...
//  이런식으로 둘이 대결해서 한명이 내려오는 방식을 취해야 하는데, 내려오고나서 다시 순서가 1 2 3 4로 변경되어야 한다. 
//  그래서 나누기 올림을 통해서 1번도 2로나누면 1번으로 맞춰지게 해놓도록 한다. 
//  계속쭉쭉 이어가다보면 a와 b가 만나는구간은 함께 대결해서 나누기올림을하면 같은값이 나오는 순간이다. 
//  그렇게 하면 몇 라운드를 진행하였는지 알아낼 수 있다. 
