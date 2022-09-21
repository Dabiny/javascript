function solution(s, num) {
    let cache = [];
    for (let i = 0; i < num.length; i++) {
        if (cache.length == 0 && !cache.includes(num[i])) cache[0] = num[i];
        else if (cache.length !== 0 && !cache.includes(num[i])){ // cache miss
            cache.unshift(num[i]);
            if (cache.length > s) { // 길이가 넘어가면 잘라줌.
                cache.pop();
            }
        }
        else if (cache.length !== 0 && cache.includes(num[i])){ // cache Hit
            let n = cache[cache.indexOf(num[i])];
            let index = cache.indexOf(num[i]);
            
            cache.splice(index, 1); // 자르고
            cache.unshift(n); // 다시 앞에다가 업데이트
        }
    }
    return cache;
}
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));




// 해설
function solution(size, arr) {
    let answer = Array.from({length: size}, () => 0); // 0으로 초기화
    arr.forEach(x => {
        let pos = -1; // -1로초기화
        for (let i = 0; i < size; i++) { // hit인지 확인
            if (x === answer[i]) pos = i;
        }
        if (pos === -1) {
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
            //answer[0] = x; 한번만 하면된다. 
        }
        else { // hit난 상황
            for (let i = pos; i >= 1; i--) { // pos부터 1까지돌면서 땡겨준다. 
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = x;
    });
    return answer;
}
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));