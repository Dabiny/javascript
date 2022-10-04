function solution(answers) {
    var answer = [];
    let one = "12345";
    one = one.repeat(parseInt(answers.length / one.length) === 0 ? 1 : parseInt(answers.length / one.length));
    
    let two = "21232425";
    two = two.repeat(parseInt(answers.length / two.length) === 0 ?  1 : parseInt(answers.length / two.length));
    
    let three = "3311224455";
    three = three.repeat(parseInt(answers.length / three.length) === 0 ? 1 : parseInt(answers.length / three.length));
    
    let tmp = [0, 0, 0]; // 1, 2, 3의 맞힌 횟수
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == one[i]) tmp[0]++;
        else if (answers[i] == two[i]) tmp[1]++;
        else if (answers[i] == three[i]) tmp[2]++;
    }
    tmp
    for (let i = 0; i < tmp.length; i++) {
        if(tmp[i] === 0) continue;
        else {
            //if (tmp[i - 1] == tmp[i]) // 여기서 막힘 어떻게 정렬을 해줘야할지 ??
        }
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]));
console.log(solution([1, 3, 2, 4, 2]));


// 마지막 정렬 답 풀이
function solution(answers) {
    var answer = [];

    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let result = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (one[i % one.length] === answers[i]) result[0]++;
        if (two[i % two.length] === answers[i]) result[1]++;
        if (three[i % three.length] === answers[i]) result[2]++;
    }
    
    const maxValue = Math.max(...result); // 최대 값을 구한다. 
    
    for (let i = 0; i < result.length; i++) { // result을 돌면서
        if (maxValue === result[i]) answer.push(i + 1); // 최대값과 result값이 맞으면 push i + 1;
    }

    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]));
console.log(solution([1, 3, 2, 4, 2]));



