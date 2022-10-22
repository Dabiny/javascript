function solution(survey, choices) {
    var answer = "";
    // 오: 동의, 왼: 비동의
    const type = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"], 
    ];
    const result = {};
    
    for (let i = 0; i < survey.length; i++) {
        let choiceType = '';
        if (choices[i] > 4) choiceType = survey[i][1]; // 동의쪽
        if (choices[i] < 4) choiceType = survey[i][0]; // 비동의쪽

        let score = Math.abs(choices[i] - 4); // 점수

        if (result[choiceType]) result[choiceType] += score;
        else result[choiceType] = score;
    }
    
    for (let i = 0; i < type.length; i++) {
        let A = result[type[i][0]] === undefined ? 0 : result[type[i][0]]; // 동의
        let B = result[type[i][1]] === undefined ? 0 : result[type[i][1]]; // 비동의

        let re = A < B ? type[i][1] : type[i][0];
        if (A === B) re = type[i][0];
        
        answer += re;
    }
    
    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));