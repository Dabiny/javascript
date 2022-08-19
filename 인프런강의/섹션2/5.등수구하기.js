function solution(arr){
    let lank = [...arr].sort((a, b) => b - a);
    let answer = [];
    for (let i = 0; i < arr.length; i++){
        answer.push(lank.indexOf(arr[i]) + 1);
    }
    return answer;
}
console.log(solution([87, 89, 92, 100, 76]));