function solution (s, t) {
    let arr = [];
    let answer = new Array(s.length).fill(-1);
    for (let i = 0; i < s.length; i++){
        if (s[i] == t) answer[i] = 0;
    }
   
    for (let i = 0; i < s.length; i++) {
        if (answer[i + 1] == 0 || answer[i - 1] == 0) {
            answer[i] = 1;
        }
        if (answer[i + 1] == 1 || answer[i - 1] == 1) {
            answer[i] = 2;
        }
    }

    answer
}

console.log(solution("teachermode", "e"))