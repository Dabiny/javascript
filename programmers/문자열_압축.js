// 문자열 압축
function solution(s) {
    let answer = 0;
    let left = '';
    let right = '';
    let result = [];
    for (let i = 1; i < s.length / 2 + 1; i++){
        result.push([]);
        let cnt = 1;
        for (let j = 0; j < s.length; j++){
            left = s.substr(j * i , i);
            right = s.substr((j * i) + i, i);

            if (left === right){
                cnt += 1;
            }
            else {
                if (cnt > 1){
                    result[i - 1] += String(cnt) + left;
                    console.log(result[i-1]);
                }
                else {
                    result[i - 1] += left;
                    console.log(result[i-1]);
                }
                cnt = 1;
            }
        }
    }
    let min = result[0].length;
    for (let i in result){
        if (min > result[i].length){
            min = result[i].length;
        }
    }
    return min;
}

// console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
// console.log(solution("abcabcdede"));
// console.log(solution("abcabcabcabcdededededede"));
// console.log(solution("xababcdcdababcdcd"));