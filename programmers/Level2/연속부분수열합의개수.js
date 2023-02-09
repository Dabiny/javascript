function solution(elements) {
    let elem = [...elements, ...elements];
    let idx = 1;
    let arr = [];
    
    let tail = 0;
    let head = 0;

    while(tail < elements.length) {

    }
   

}
console.log(solution([7, 9, 1, 1, 4]));

function solution(elements) {
    const set = new Set();

    const len = elements.length;

    for (let i = 1; i <= len; i++) { // 연속부분수열의 길이만큼 돌아야한다. 1개 부터 len개까지 잘라봤을때
        
        // 수열의 길이만큼 반복, i의 길이만큼 잘라본다. (부분 수열)
        elements.forEach((_, j) => {
            // 자르는 길이가 수열끝에 도달할경우 남은 값을 앞에서 자르기위해 나머지값 구하기
            // re = (elem인덱스 + i개) % len => 나머지는 n개 부족한거니까 n개만큼 붙여야한다. 
            let re = (j + i) % len;
            
            // 만약 자르는 길이가 수열 끝은 넘을 경우
            if ((j + i) / len > 1) {
                // 넘는만큼 앞에서 잘라 (0, re)해주고, 해당 배열의 합을 set에 담기
                set.add([...elements.slice(0, re), ...elements.slice(j, j + i)].reduce((p, c) => p + c, 0));
            }
            else { // 수열을 넘지 않는다면
                set.add(elements.slice(j, j + i).reduce((p, c) => p + c , 0));
                // set에 elements를 j부터 j + i개만큼 잘라서 그합을 구한다. 
            }
        })
    }
    return set.size;
}


// 내가 구현하고 싶었던거 다시풀어보기 ⭐️
function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            set.add(sum);
        }
    }
    return set.size;
}