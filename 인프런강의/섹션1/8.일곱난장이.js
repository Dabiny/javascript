function solution(arr){
    let answer = arr; //둘다 같은 메모리주소가리키고있음 얕은복사
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++){
            if ((sum - (answer[i] + answer[j])) == 100){
                answer.splice(j, 1);
                answer.splice(i, 1);
                // 두개 위치다르게해주면 다른값이 나옴...배열이 조작됨. 
                // 뒤에꺼 먼저 지워주고 앞에거 지우면 인덱스가 변경되지 않는다.
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// function solution(arr){
//     let answer=arr;
//     let sum=answer.reduce((a, b)=>a+b, 0);
//     for(let i=0; i<8; i++){
//         for(let j=i+1; j<9; j++){
//             if((sum-(answer[i]+answer[j]))==100){
//                 answer.splice(j, 1);
//                 answer.splice(i, 1);
//             }
//         }
//     }
//     return answer;
// }

// let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));