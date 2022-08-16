// function solution(clothes) {
//     let answer = 1; 
//     let arr = new Map();

//     let count = 1;
//     for (let i = 0; i < clothes.length; i++){
//         if (arr.has(clothes[i][1])){
//             arr.set(clothes[i][1], ++count);
//         }
//         arr.set(clothes[i][1], count);
//     }
    
//     for (let[key, value] of arr){
//         answer *= (value + 1); // (경우의수 + 최소하나이상은 입으니까 1)
//     }
//     return answer - 1; // 아예안입는 경우도 빼기 
// }

function solution(clothes){
    let answer = 1;
    let arr = {};

    for (let x of clothes){
        if (arr[x[1]]) arr[x[1]]++;
        else arr[x[1]] = 1;
    }
    for (let i of Object.keys(arr)) {
        answer *= arr[i] + 1; // 아무것도 입지 않은 경우를 +1 해준다. 
    }

    return answer - 1; // 둘다 아무것도 입지않은경우를 -1 해준다.
}
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));