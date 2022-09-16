

// function solution(money, arr){
//     let answer = 0;
//     let cnt = money;
//     arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i][0] + arr[i][1];
//         if (money - sum < 0){
//             sum = 0;
//             sum = (arr[i][0] / 2) + arr[i][1]; //쿠폰쓰기
//             if (money - sum < 0){
//                 continue;
//             }
//             else if (money - sum == 0){
//                 money -= sum;
//                 answer++;
//                 break;
//             }
//         }
//         else {
//             money -= sum;
//             answer++;
//         }
//     }
    
//     return answer;
// }

// let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution(28, arr));



// 해설
// 총비용(물건가격 + 배송비)을 정렬해놓기 
// 최대한 많이 사려면 제일 비용이 적은것 부터 담아야한다. 
// 쿠폰을 한번 쓸수 있다는 것에 한번 더 생각해야함. 
// 그냥 모든경우를 다해보는것. 모든경우 -> 어떤상품을 할인 받을건지 탐색
// 나머지를 다 한번씩 할인해보고 개수 세보기 
// 이런생각을 해봐야한다 (완탐)

function solution(m, product){
    let answer = 0; //최대 개수를 저장하는 변수
    let n = product.length; 
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])) //a[0]상품가격 + a[1]배송비

    for (let i = 0; i < n; i++){ //i번째 상품을 할인받는다. 가정
        let money = m - (product[i][0] / 2 + product[i][1]); // 물건값 쿠폰적용 후(배송비 제외) 빼기 
        let cnt = 1;
        for (let j = 0; j < n; j++) { // 쭉 사보기
            // 만약 3원남았는데 나머지 애들이 예산보다 크다면 더이상 못사니까 break해주기
            if(j !== i && (product[j][0] + product[j][1]) > money) break;  

            // j상품이랑 할인받은 i상품이랑 겹치면안됨 && 남은예산과 같거나 작아야됨
            if (j !== i && (product[j][0] + product[j][1]) <= money) {
                money -= (product[j][0] + product[j][1]);
                cnt++; // 상품을 하나 더 샀다고 표시
            }
            answer = Math.max(answer, cnt);
        }
    }

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
// 다시 풀어보기 (정리)

