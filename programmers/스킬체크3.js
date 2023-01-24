function solution(n, cores) {
    var answer = 0;
    let arr = Array.from({length: cores.length} , () => 0);
    while(n !== 0) {
        for (let i = 0; i < cores.length; i++) {
            if (cores[i] === 0) {
                arr[i] = 1; // core에 1이라는 작업넣기
                n--; // 작업 --;
                
            }
        }
        // [1, 1, 1] => [0, 1, 2]
        // [1, 1, 2] => [0, 0, 1]
        for (let i = 0; i < arr.length; i++) {
            arr[i] = cores[i] - arr[i];
        }
    }
    return answer;
} // 해결 x
console.log(solution(6, [1, 2, 3])); 

// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%84%A0%EC%9E%85-%EC%84%A0%EC%B6%9C-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81-JS