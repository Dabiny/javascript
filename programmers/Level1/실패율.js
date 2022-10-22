function solution(N, stages) {
    var answer = []; // 실패율 담는 answer;
    let fal = Array.from({length: N}, () => 0);
    
    let people = stages.length;
    let tages = stages.sort((a, b) => a - b).filter((v) => v <= N);
    
    let cnt = lt = tmp = 0;
    // 투포인터로 시도해보려고 했지만 안됨 ㅜ
    for (let rt = 0; rt < tages.length; rt++) {
        if (tages[lt] < tages[rt]) {
            let tmp = lt;
            while(lt <= rt) {
                cnt++;
                lt++;
            }
            fal[tmp] = cnt / people;
            people--;
            cnt = 0;
        }

    }
    return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// 해답 필터를 잘 써야겠다. 
function solution(N, stages) {
    let answer = [];
    let people = stages.length;
    for (let i = 1; i <= N + 1; i++) {
        // 조건을 만족하는 원소만 추출 여기가 포인트 
        let tmp = stages.filter((n) => n === i).length;
        
        // 스테이지, 실패율
        answer.push([i , tmp / people]);
        // 실패한사람은 제외하기
        people -= tmp;
    }

    // 마지막은 모두 클리어한 사람들이므로 실패율이 없어서 pop();
    answer.pop();

    answer = answer.sort((a, b) => b[1] - a[1]);
    return answer.map(a => a[0]);
}
// 다시 풀기 



// 다른 해답
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}