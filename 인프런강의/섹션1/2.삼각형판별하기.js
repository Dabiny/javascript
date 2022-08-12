function solution(a, b, c){
    let long = Math.max(a, b, c);
    let side = a + b + c - long;
    return long < side ? "YES" : "NO";
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));

// 삼각형이 되는 조건 : 세변의 길이를 줬을때 길이가 가장 긴변의 길이 < 나머지 두변의 길이 