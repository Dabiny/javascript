function solution(k, tangerine) {
    const mp = new Map();
    for (let x of tangerine) {
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    const mapToArray = [...mp];
    mapToArray.sort((a, b) => b[1] - a[1]); // 최소 종류를 알아내기위해 소팅
    const sortedmap = new Map(mapToArray);
    
    let answer = 0; // 몇가지 종류로 가능한지 
    let tanger = k;
    
    for (let [key, val] of sortedmap) {
        if (tanger > 0) {
            tanger -= val;
            answer++;
        }
    }
    return answer;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));