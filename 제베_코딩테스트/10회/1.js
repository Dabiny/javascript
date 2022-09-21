function solution(s) {
    let answer = 0;
    let mp = new Map();
    for (let x of s) {
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    } 
    let mx = 0;
    for (let [key, value] of mp){
        if (value > mx){
            mx = value;
            answer = key;
        }
    }
    return Number(answer);
}
console.log(solution('104001100'));