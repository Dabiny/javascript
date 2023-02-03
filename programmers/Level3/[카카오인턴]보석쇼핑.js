function solution(gems) {
    const cnt = new Set(gems).size; // 보석수 
    if (cnt === 1) return [1, 1];
    let answer = [1, gems.length];
    let mp = new Map();
    
    mp.set(gems[0], 1);  // DIA, 1
    let l = 0;
    for (let r = 1; r <= gems.length; r++) {
        if (mp.size === cnt) { // 보석수랑 같다면 여기서부터 lp움직이기 
            while(l < r) { // l이 r보다 클때까지 돌기
                mp.set(gems[l], mp.get(gems[l]) - 1); 
                if (mp.get(gems[l]) === 0) {
                    answer = [l + 1, r];
                    return answer;
                }
                l++;
            }

        } else { // 다르면 계속 보석을 추가해줌         
            // 만약 map에 gems가 있다면 +1
            if (mp.has(gems[r])) mp.set(gems[r], mp.get(gems[r]) + 1)
            // 그게 아니면 set
            else mp.set(gems[r], 1);
        }
    }
} // 정확성: 15.6, 효율성: 13.3 / 28.9점

// 다른 해답
function solution(gems) {
    const cnt = new Set(gems).size;
    let answer = [1, gems.length]; // 1 ~ 8

    let l = 0, r = 0;
    const hit = new Map();
    hit.set(gems[0], 1);

    // r이 gems.length 일대까지
    while(r < gems.length) {
        if (hit.size === cnt) {
            // 나랑 다른점
            if (answer[1] - answer[0] > r - l) { // size는 같은데 기존간격차이가 크면 현재 작은걸로 바꾸기
                answer = [l + 1, r + 1];
            }
            hit.set(gems[l], hit.get(gems[l]) - 1);
            if (hit.get(gems[l]) === 0) {
                // 나랑다른점 delete를해준다. 지우지 않으면 뒤 탐색을 하지못한다. 자꾸 if에 걸림
                hit.delete(gems[l]);
            }
            l++;
        } else {
            r++;
            const right = hit.get(gems[r]);
            hit.set(gems[r], right ? right + 1 : 1);
        }
    }
    return answer;
}

console.log(
    solution([
        "DIA",
        "RUBY",
        "RUBY",
        "DIA",
        "DIA",
        "EMERALD",
        "SAPPHIRE",
        "DIA",
    ])
);
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));

// object보다 map이 훨씬 빠르다. 
