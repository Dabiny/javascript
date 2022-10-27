function solution(s) {
    let str = s
        .toLowerCase()
        .split(" ")
        .filter((v) => v.trim())
        .join(" ")
        .replace(/\b[a-z]/g, (char) => char.toUpperCase());  
         // \b는 문자의 경계선을 의미 
    return str;
}

console.log(solution("3people  unFollowed me"));

function solution(s) {
    let str = s
        .split(" ")
        .map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase());

    return str.join(' ');
}

//charAt활용 해답
function solution(s) {
    return s
        .split(" ")
        .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
        .join(" ");
}