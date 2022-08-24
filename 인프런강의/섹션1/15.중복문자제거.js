function solution(s){  
    let answer="";
    //console.log(s.indexOf("K"));
    for(let i = 0; i < s.length; i++){
        console.log(s[i], i, s.indexOf(s[i]));  
        if(s.indexOf(s[i]) === i) answer += s[i];
        /*
        s[i] i, indexOf(s[i]) 처음발견된 문자열의 인덱스를 가리킴계속
        k 0 0
        s 1 1
        e 2 2
        k 3 0
        k 4 0
        s 5 1
        e 6 2
        t 7 7
        kset
        */
    }
    return answer;
}
console.log(solution("ksekkset"));

// s.indexOf('특정문자열'을, 1(번 인덱스부터 찾기)); 발견못하면 -1 반환

// 중복된 문자 개수 세기
function solution(s) {
    let answer = 0;
    let pos = s.indexOf('k');
    while(pos !== -1){ // 못찾을때까지 돌기
        answer++;
        pos = s.indexOf('k', pos + 1);
    }
    return answer;
}
console.log(solution("ksekkset"));