// 내 풀이 통과
function solution(s) {
    let str = s.replace(/['0']/g, "");
    let zero = s.length - str.length; // 0개 갯수
    let num = str.length; // 제거후 길이
    let count = 1;

    while (num != 1) {
        count++;
        str = num.toString(2).replace(/['0']/g, "");
        zero += num.toString(2).length - str.length;
        num = str.length;
    }

    return [count, zero];
}
console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));

// match를 쓴 다른 풀이
function solution(s) {
    var answer = [0, 0]; // [카운트, 0갯수]
    while (s.length > 1) { // s.length가 1보다 클때까지 계속돌기
        answer[0]++;
        answer[1] += (s.match(/0/g) || []).length; // match는 배열을 반환하는데 그배열의 길이를 저장하면됨. 
        s = s.replace(/0/g, "").length.toString(2); // 다시 0을빼고 그 길이를 이진수로 바꾸기 
    }
    return answer;
}
