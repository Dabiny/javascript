// function solution(msg) {
//     const str = msg.split('');
//     const dict = Array.from({length: 27}, () => 0);
//     const answer = [];
//     for (let i = 1; i < dict.length; i++) {
//         dict[i] = String.fromCharCode(64 + i);
//     }
    
//     for (let i = 0; i < str.length; i++) {
//         const s = str[i];

//         let st = s;
//         for (let j = i + 1; j < str.length; j++) {
//             st += str[j];
//         }

//         answer.push(dict.indexOf(s));
//     }
    
// }

// substring 활용하자 다시 복습하기 
function solution(msg) {
    const arr = [];

    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        arr.push(String.fromCharCode(i));
    }
    const answer = [];

    let i = 0; 
    while (i < msg.length) {
        let j = 1;
        while (arr.indexOf(msg.substring(i, i + j)) !== -1 && i + j <= msg.length) {
            j++;
        }

        arr.push(msg.substring(i, i + j));
        answer.push(arr.indexOf(msg.substring(i, i + j - 1)) + 1);
        console.log(i, j);
        i += j - 1;
        console.log(i);
    }

    return answer
}

function solution(msg) {
    const answer = [];
    let nextWord = '';
    let lastCount = 27;
    const dir = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
        O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

    const s = msg.split('').reduce((acc, cur) => {
        console.log(acc);
        nextWord = acc + cur;

        // 현재글자와 다음 글자를 더한 부분이 사전에 있는지 비교, 없다면 사전에 추가
        if (!dir[nextWord]) dir[nextWord] = lastCount++;
        else return acc + cur; // 있다면 다음 현재글자를 합친글자로 return 

        if (dir[acc]) answer.push(dir[acc]); // 
        return cur;
    });

    // 마지막 'O'를 해결해주기 위해 
    answer.push(dir[s]);
    return answer;
}

console.log(solution("KAKAO"));
// console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
// console.log(solution("ABABABABABABABAB"));
// console.log(
//     solution(
//         "THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS"
//     )
// );

