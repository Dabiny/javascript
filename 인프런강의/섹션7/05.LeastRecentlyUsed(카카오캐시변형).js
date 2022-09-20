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