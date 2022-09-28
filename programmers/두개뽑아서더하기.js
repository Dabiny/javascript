function solution(numbers) {
    var answer = [];
    let tmp = Array.from({length: 2}, () => 0);
    let check = Array.from({length: numbers.length}, () => 0);
    function DFS(l) {
        if (l === 2) {
            answer.push(tmp[0] + tmp[1]);
        }
        else {
            for (let i = 0; i < numbers.length; i++) {
                if(check[i] === 0) {
                    check[i] = 1;
                    tmp[l] = numbers[i];
                    DFS(l + 1);
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    let ans = [... new Set(answer)];
    return ans.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1]));