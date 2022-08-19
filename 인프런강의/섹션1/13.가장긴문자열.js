function solution(s){  
    let length = 0;
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