// function solution(n, works) {
//     const total = works.reduce((p, c) => p + c);
//     if (n >= total) return 0;

//     while(n > 0) {
//         let mxNum = Math.max(...works);
//         let index = works.indexOf(mxNum);
//         works[index]--;
//         n--;
//     }
    
//     const answer = works.reduce((p, c) => p + (c ** 2), 0);
//     return answer;
// } // 효율성 테스트 1,2 실패 

// console.log(solution(4, [4, 3, 3]));
// console.log(solution(1, [2, 1, 2]));
// console.log(solution(3, [1, 1]));

// 해설 
// 최대힙(우선순위 큐)을 이용한 문제풀이
function solution(n, works) {
    let answer = 0;
    const lastIndex = works.length - 1;
    const sum = works.reduce((p, c) => p + c, 0);
    if(n >= sum) return 0;

    works.sort((a, b) => a - b);
    while (n !== 0) {
        works[lastIndex]--;
        n--;
        popAndAddToPQ(works);
    }
    answer = works.reduce((p, c) => p + (c ** 2), 0);
    return answer;
}
function popAndAddToPQ(queue) {
    const item = queue.pop();
    const length = queue.length;
    for (let i = length - 1; i >= 0; i--) {
        // 만약 queue의 마지막요소가 pop한(제일큰수 - 1)과 같거나 작으면 뒤로 다시 넣기
        if(queue[i] <= item) {
            // (index, 제거할요소 개수, items(요소목록))
            // (2, 0, item): 0으로 지정하면 아무런 요소도 제거하지 않고 새로운요소를 삽입
            // index 다음칸에 item을 추가 (정렬)
            queue.splice(i + 1, 0, item);
            break;
        }
    }
    // queue 마지막요소가 item보다 크다면 pop된게 그대로인채 for문을 빠져나온다. 
    // 즉, item(젤큰 수 - 1)이 queue마지막요소보다 작으므로 제일 앞쪽에 다시 집어넣는다. (정렬) 
    if (length === queue.length) queue.unshift(item);
};

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));

// 최대힙 다시보기 (복습)