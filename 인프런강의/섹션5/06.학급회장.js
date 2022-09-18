// function solution(str) {
//     let vote = {};
//     let answer = "";
//     for (let x of str) {
//         if (vote[x]) vote[x]++;
//         else vote[x] = 1;
//     }
//     let mx = Number.MIN_SAFE_INTEGER;
//     for (let x of Object.keys(vote)){
//         if (vote[x] > mx) {
//             mx = vote[x];
//             answer = x;
//         }
//     }
    
//     return answer;
// }
// console.log(solution("BACBACCACCBDEDE"));

// 해설 맵으로 풀기
function solution(str) {
    let sh = new Map();
    let answer = "";
    for (let x of str) {
        if (sh.has(x)) sh.set(x, sh.get(x) + 1);
        else sh.set(x, 1);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of sh){
        if (val > max) {
            max = val;
            answer = key;
        }
    }
    return answer;
}
console.log(solution("BACBACCACCBDEDE"));