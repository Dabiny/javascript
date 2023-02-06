// function solution(stones, k) {
//     let number = [...new Set(stones)];
//     number.sort((a, b) => a - b);
    
//     let r = 0, l = 0;
//     let answer = 0;
//     while(r < number.length) {
//         for (let i = 0; i < stones.length; i++) {
//             if (number[r] === stones[i]) { 
//                 stones[i] = 0; // 0으로 변경
//             }
//         }
//         // 여기서 더 건널수 있는지 확인
//         let test = [...stones];
//         while (test.includes(0)) {
//             const index = test.indexOf(0); // 0의 첫번째 인덱스
//             const sli = test.splice(index, k).filter((elem) => elem === 0).length;
//             if (sli < k) { // 0가 k보다 적으면 넘어갈 수 있다. 
//                 continue;
//             }
//             else {
//                 return answer;
//             }
//         } 
//         answer += number[r];
//         r++;
//     }
//     return answer;
// } // 1차시도 실패

// 최대 건널수 있는사람수는 stones의 최고 숫자이다. 
// function solution(stones, k) {
//     let number = Math.max(...stones);
//     let answer = 0;
//     while (number) {
//         for (let i = 0; i < stones.length; i++) {
//             if (stones[i] > 0) stones[i]--;
//         }
//         // 0의 길이를 못재겠다... 어떻게 재야할지 모르겠음 ㅜㅜ


//         number--;
//     }
// } // 2차시도 실패

// 이분탐색을 통한 풀이
function solution(stones, k) {
   let left = 1;
   let right = 200000000;

   while (left <= right) {
    const mid = (left + right) / 2 >> 0; // 소수점버려주기
    const copy = stones.slice();
    let flag = false; // 플래그 
    let count = 0;

    for (let i = 0; i < copy.length; i++) {
        copy[i] -= mid;
    }
    for (const value of copy) {
        count = value <= 0 ? count + 1 : 0; // 0 개수세기 

        if (count === k) {
            flag = true;
            break;
        }
    }
    flag ? right = mid - 1 : left = mid + 1;
   }
   return left;
} // 3차 해답 효율성 통과 X

function solution(stones, k) {
    let left = 1;
    let right = 200000000;

    while (left <= right) {
        const mid = (left + right) / 2 >> 0;

        let count = 0;
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] - mid <= 0) count++;
            else count = 0;

            if (count === k) break;
        }

        if (count === k) right = mid - 1;
        else left = mid + 1;
    }
    return left;
} // 효율성 14번 통과 x

function possible(stones, k, n) {
    let tmp = stones.slice();
    let leaf = 0;

    for (let i = 0; i < tmp.length; i++) {
        tmp[i] -= n;
    }

    for (let i = 0; i < stones.length; i++) {
        if (tmp[i] <= 0) {
            leaf++;
        } else {
            leaf = 0;
        }
        if (leaf >= k) return false;
    }

    return true;
}
function solution(stones, k) {
    let result = 0;

    let start = 0;
    let end = 200000000;
    //let cnt = 0;
    while (start <= end) {
        //cnt++;
        //if (cnt>100) break;
        let mid = start + Math.floor((end - start) / 2);

        //console.log(start,end,mid)

        if (possible(stones, k, mid)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    //console.log(end,start);
    return start;
} //통과 ..

// 이분탐색의 개념을 익히게 된 문제이다. 다시풀어보기 
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));

// 스택을 이용한 풀이 
function solution(stones, k) {
    stones.push(Infinity);
    let stack = [{ count: Infinity, idx: -1 }];
    let answer = Infinity;
    for (let i = 0; i < stones.length; i++) {
        const right = { count: stones[i], idx: i };
        while (stack[stack.length - 1].count < right.count) {
            const mid = stack.pop();
            const left = stack[stack.length - 1];
            if (right.idx - left.idx > k) {
                answer = Math.min(answer, mid.count);
            }
        }
        stack.push(right);
    }
    return answer;
}
