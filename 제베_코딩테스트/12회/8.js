function solution(s) {
    var answer = '';
    let str1 = s.toUpperCase().split('').filter((v, i) => v !== s[i]).join('').toLowerCase();
    let str2 = s.toUpperCase().split('').filter((v, i) => v === s[i]).join('');
    
    let same = [];
    for (let x of str1) {
        if (str2.includes(x.toUpperCase())) same.push(x);
    }
    same.sort();
    return same[same.length - 1].toUpperCase();
}
console.log(solution("acBfbsTES"));

// 테스트3 런타임에러 0.8