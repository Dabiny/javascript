function solution(s) {
    // replace 2번째 인자에 정규표현식 \w를 어떻게 변환할건지 정의해주는 식이다. 
    let str = s.toUpperCase().replace(/(\w)(\w)/g, (a) => {
        return a[0].toUpperCase() + a[1].toLowerCase();
    });
    return str;
}
console.log(solution("try hello world"));