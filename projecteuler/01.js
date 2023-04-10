// 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
// function solution(a, b, c){
//     let answer = 0;
//     let memo = [];
// //     for (let i = 1; i < c; i++) {
// //         if(i % a === 0 || i % b === 0){
// //             if (memo.includes(i)) continue;
// //             memo.push(i);
// //             answer += i;
// //         }
// //     }
// //     return answer;
// // }

// // console.log(solution(3, 5, 1000));

const start = Date.now();

const answer = (a, b, c) => {
        let answer = 0;
        // let memo = [];
        for (let i = 1; i < c; i++) {
            if (i % a === 0 || i % b === 0) {
                // if (memo.includes(i)) continue;
                // memo.push(i);
                answer += i;
            }
        }
        return answer;
};

console.log(answer(3, 5, 1000));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);