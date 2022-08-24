function solution(s) {
    let strIndex = Math.floor(s.length / 2);
    let str = ""
    if (s.length % 2 == 0) {
        str = s[strIndex - 1];
        str += s[strIndex];
    }
    else {
        str = s[strIndex];
    }

    return str;
}

console.log(solution("good"));
console.log(solution("studyt"));

//substring(3, 4): (3번 index부터, 4번 index번호 전까지)뽑는다. 
//substr(3, 2): (3번 index부터, 2개를 뽑아내라)


