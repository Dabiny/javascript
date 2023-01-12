function solution(s) {
    const mp = new Map();
    const str = s.replace(/[\{\}]/g, '').split(',').map((v) => +v);
    for (let x of str) {
        if(mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    const sortMp = [...mp].sort((a, b) => a[1] - b[1]).reverse();
    const answer = [];
    for(let [x, y] of sortMp) {
        answer.push(x);
    }
    return answer;
}
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
// Map활용 