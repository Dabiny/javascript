// function solution(n, words) {
//     let answer = [0, 0];
//     let cnt = 0; // 사람 번호
//     let round = 0; // 라운드
//     let arr = [];
//     const totalRound = Math.floor(words.length / n);

//     for (let i = 0; i < words.length; i++) {
//         if (cnt === n) {
//             cnt = 0;
//             round++;
//         }

//         if (arr.length === 0) {
//             arr.push(words[i]);
//             cnt++;
//         } else {
//             let str = arr[arr.length - 1];
//             if (
//                 str[str.length - 1] !== words[i][0] ||
//                 !arr.includes[words[i]]
//             ) {
//                 arr.push(words[i]);
//                 cnt++;
//             }
//             if (str[str.length - 1] === words[i][0] || arr.includes[words[i]]) {
//                 break;
//             }
//         }
//     }
//     if (cnt === n && round === totalRound) return [0, 0];
//     return [cnt, round];
// } //내가 푼문제 실패

function solution(n, words) {
    let answer = 0;
    for (let i = 1; i < words.length; i++) {
        if (
            words.indexOf(words[i]) !== i ||
            words[i - 1][words[i - 1].length - 1] !== words[i][0]
        ) {
            answer = i + 1;
            break;
        }
    }
    return answer ? [answer % n || n, Math.ceil(answer / n)] : [0, 0];
}
// 다시 정리하고 풀어보기

// reduce로 푼 문제 해석해보기 
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer =
            answer ||
            (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
                ? idx
                : answer);
        return now[now.length - 1];
    }, "");

    return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}

console.log(
    solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
    ])
);

console.log(
    solution(5, [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
    ])
);

console.log(
    solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
