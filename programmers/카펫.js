function solution(brown, yellow) {
    let answer = [];
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i == 0){
            let n = yellow / i; //몫

            let ga = n + 2; //가로
            let se = i + 2; //세로
            
            console.log(ga);
            if ((ga * se) - yellow == brown){
                answer.push(ga);
                answer.push(se);
                break;
            }
        }
    }
    return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));