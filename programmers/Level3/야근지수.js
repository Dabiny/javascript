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
function solution(works, n) {
    let result = 0; // 최소 야근 피로도
    let workSum = works.reduce((p, c) => p + c, 0); // 업무량 총합
    if (workSum <= n) return 0; // 만약 남은시간보다 업무량이 적거나 같으면 시간안에 처리가능하므로 0리턴

    // 1. 제곱은 근이 작을수록 제일 작은값이 나오기 때문에 큰 숫자를 먼저 상쇄시키는게 좋다. 
    // 먼저 작업량을 오름차순으로 정렬시켜놓는다. 
    works.sort((a, b) => a - b);

    // 2. 남은시간n을 계속 상쇄시키면서 업무량을 깎아내줄 것이기 때문에 while문을 돌려준다. 
    while(n !== 0) {
        // 3. 제일 끝이 제일큰 숫자이기때문에 --해주고 n도 --해준다. 
        works[works.length - 1]--;
        n--;

        // 4. 상쇄시켜주었다면 아직도 끝요소가 제일 큰지 확인을 해주어야한다. 
        pq(works);
        // 9. pq를 빠져나와서 그 다음 제일큰숫자가 뒤에있으니 그 숫자를 다시 --해주는 로직이다. 
    }
    function pq(works) {
        // 5. 제일 큰 값을 pop 시켜서 변수에 저장후 비교할 것이다. 
        const num = works.pop();
        const length = works.length;

        // 6. works의 그다음 큰 수와 비교할것이라서 거꾸로 탐색하는 for문을 정의
        for (let i = length - 1; i >= 0; i--) {
            // 7. 만약 가장큰 값 num이 그다음큰 요소 works[i]보다 크거나 같으면 다시 i뒤로 넣어주어야한다. 
            //   
            if (num >= works[i]) { 
                works.splice(i + 1, 0, num);
                break;
            }
        }

        // 8. 만약 pop된게 works 요소들보다 작았다면 pop요소가 work요소들중 제일 작은 숫자인 뜻.
        // 그렇기때문에 아직 pop된 요소는 다시 배열에 들어가지 않았다. 오름차순으로 정렬해놨으니 앞으로 넣어주자.
        if (length === works.length) {
            works.unshift(num);
        }
        
    }
}
