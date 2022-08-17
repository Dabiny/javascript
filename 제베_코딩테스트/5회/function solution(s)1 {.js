function solution(s) {
    let max = [...s].sort((a, b ) => b - a)[0];
    let answer = new Array(s.length).fill(0); // 나온횟수
    let numberArr = [];
    for (let i = 0; i < s.length; i++){
        numberArr.push(parseInt(s[i]));
    }
    // 횟수 집어넣기
    for (let i = 0; i < numberArr.length; i++){
        answer[numberArr[i]]++;
    }
    let num = [];
    console.log(numberArr);
    console.log(answer);
    for (let i = 0; i < numberArr.length; i++) {
        let n = answer.indexOf(Math.max(...answer));
        console.log(n);
        num.push(n);
        answer[n] = 0;
    }

    
    return num;
}

console.log(solution('221123'));