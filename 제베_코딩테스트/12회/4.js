function solution(finish, submit) {
    var answer = 0;
    for (let i = 0; i < finish.length; i++) {
        if (finish.indexOf(finish[i]) !== -1 && submit.indexOf(finish[i]) !== -1) answer++;
    }
    return answer;
}
console.log(solution(["A", "B", "C", "D"], ["B", "C", "D", "E"]));

// 1.0