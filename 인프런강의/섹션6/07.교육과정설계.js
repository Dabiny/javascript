// function solution(s, t){
//     let q1 = [];
//     for (let x of s) q1.push(x); //필수과목을 큐에 넣음.
//     for (let x of t) {
//         if (q1[0] == x) q1.shift();
//     }
//     if (q1.length === 0) return 'YES';
//     return 'NO';
// }
// console.log(solution("CBA", "CBDAGE")); // YES 정답출력됨
// console.log(solution("CBA", "BDAGEC")); // NO 


// 해설 중간에 'No' 판별법 
function solution(need, plan){
    let queue = need.split(''); // 선언과 동시에 초기화 (문자열)
    for (let x of plan) {
        if (queue.includes(x)){
            if (x !== queue.shift()) return 'NO';
        }
    }
    if (queue.length > 0) return 'NO';
    return 'YES';
}
console.log(solution("CBA", "CBDAGE")); 
console.log(solution("CBA", "BDGEC"));