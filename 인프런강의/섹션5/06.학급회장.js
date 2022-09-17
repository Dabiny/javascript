function solution(str) {
    let vote = {};
    let answer = "";
    for (let x of str) {
        if (vote[x]) vote[x]++;
        else vote[x] = 1;
    }
    let mx = Number.MIN_SAFE_INTEGER;
    for (let x of Object.keys(vote)){
        if (vote[x] > mx) {
            mx = vote[x];
            answer = x;
        }
    }
    
    return answer;
}
console.log(solution("BACBACCACCBDEDE"));