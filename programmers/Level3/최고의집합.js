function solution(n, s) {
    const share = s / n >> 0;

    if (!share) return [-1];
    
    let diff = s % n;
    const result = new Array(n).fill(share);
    
    for (let i = 0; i < diff; i++) {
        result[result.length - 1 - i]++;
    }
    return result;
}
console.log(solution(4, 11));
// console.log(solution(2, 1));
// console.log(solution(2, 8));

// 제한 숫자가 너무 크기때문에 완전탐색구현이 아니었다. 
// 답은 수학적으로 접근해야한다. 
// 같은 원소 중복 허용. 
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS

