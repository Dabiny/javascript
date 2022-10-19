function solution(arr){
    let lank = [...arr].sort((a, b) => b - a);
    let answer = [];
    for (let i = 0; i < arr.length; i++){
        answer.push(lank.indexOf(arr[i]) + 1);
    }
    return answer;
}
console.log(solution([87, 89, 92, 100, 76]));

function solution(arr){
    let answer = new Array(arr.length).fill(1); //일단 모두 1등으로 설정해놈
    // let answer = Array.from({length: arr.length}, () => 1); //이렇게도 가능
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]){ // i가 '나' j가 '다른사람' 나보다 다른사람이 점수높으면 내등수는 밀려남++;
                answer[i]++;
            }
        }
    }
    return answer;
}
console.log(solution([92, 92, 92, 100, 76]));