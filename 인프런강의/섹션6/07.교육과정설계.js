function solution(s, t){
    let q1 = [];

    for (let x of s) {
        q1.push(x);
    }
    for (let x of t) {
        if (q1[0] == x) {
            q1.shift();
        }
    }

    if (q1.length === 0) return 'YES';
    return 'NO';
}
console.log(solution("CBA", "CBDAGE")); // 정답출력됨