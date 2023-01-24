function solution(begin, target, words) {
    let answer = Number.MAX_SAFE_INTEGER; // 최소 횟수 구하기
    const ch = Array.from({length: words.length}, () => 0);
    if (!words.includes(target)) return 0;
    function dfs(vertex, word, words) {
        if (word === target) {
            answer = Math.min(answer, vertex);
        }
        else {
            for (let i = 0; i < words.length; i++) {
                const compNum = compareWord(words[i], word);
                const wordName = words[i];
                if (compNum === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    dfs(vertex + 1, wordName, words);
                    ch[i] = 0;
                }                
            }
        }
    };
    dfs(0, begin, words);
    return answer;
}
function compareWord(targetword, word) {
    let num = 0;
    for (let i = 0; i < targetword.length; i++) {
        if (targetword[i] !== word[i]) num++;
    }
    return num;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));

