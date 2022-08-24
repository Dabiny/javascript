function solution(s){  
    let length = Number.MAX_SAFE_INTEGER;
    let answer = "";
    for (let i of s){
        if (i.length > length){
            length = i.length;
            answer = i;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));