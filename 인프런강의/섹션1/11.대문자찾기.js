function solution(s) {
    let count = 0;
    let str = s.toUpperCase(); //원본을 바꾸진않음
    for (let i = 0; i < s.length; i++){
        if (str[i] == s[i]){
            count++;
        }
    }
    return count;
}

console.log(solution("KoreaTimeGood"));

// 인강 답
function solution(s) {
    let count = 0;
    for (let iter of s) {
        // let n = iter.charCodeAt();
        // if (n < 97) count++;  // 답2

        //if (x === x.toUpperCase()) count++; //답1
    }
    return count;
}

console.log(solution("KoreaTimeGood"));

//아스키 대문자 : 65 ~ 90
//아스키 소문자 : 95 ~ 123