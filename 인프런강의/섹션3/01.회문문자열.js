function solution(s) {
    let str = s.toUpperCase();
    let flag = true;
    
    for (let i = 0; i < parseInt(str.length / 2) ; i++){
        if (str[i] !== str[str.length - i - 1]){
            flag = false;
            break;
        }
        
    }
    
    return flag;
}

console.log(solution("gooG"));
console.log(solution("level"));
console.log(solution("kayaK"));
console.log(solution("madam"));
console.log(solution("solution"));
console.log(solution("kanyak"));
