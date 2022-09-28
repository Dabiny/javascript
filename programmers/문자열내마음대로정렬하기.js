function solution(strings, n) {
    var answer = [];
    return strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1; // 오름차순은 음수
        else if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            else return 0;
        } // 두 문자열의 차가 양수값이나, 음수값이냐를 이용하여 정렬하는 예제 (아스키값 비교)
    });
}
console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

// 다른사람의 풀이
function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}