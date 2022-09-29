// no pain no gain 중복제거
function solution(arr) {
    var answer = 0;
    let str = [...arr].map((v) => v.split(' '));
    let a = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            a.push(str[i][j]);
        }
    }
    let set = [...new Set(a)].length;
    
    return set;
}
console.log(solution(["no pain", "no", "gain"]));