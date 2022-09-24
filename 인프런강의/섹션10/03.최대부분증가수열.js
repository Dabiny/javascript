// LIS 유명한 문제이다. 꼭 다시 보고 구현해보며 내것으로 만들기
function solution(arr){
    let answer = 0;
    let dy = Array.from({length: arr}, () => 0);
    dy[0] = 1;

    for (let i = 1; i < arr.length; i++) {
        let max = 0; //아무것도 없을때를 대비해서 0으로 초기화
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i] && dy[j] > max){
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));