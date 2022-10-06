function solution(note) {
    var answer = '';
    note.sort((a, b) => a - b);
    let mp = new Map();
    for (let x of note) {
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    let mx = 0;
    for (let [key, value] of mp) {
        if(value > mx) {
            mx = value;
            answer = key;
        }
    }
    return answer;
}
console.log(solution(["dolphin", "elephant", "elephant"]));
// 0.8 테스트 4번 틀림