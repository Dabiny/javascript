//panagram인지 1.0
function solution(s) {
    const str = "abcdefghijklmnopqrstuvwxyz"
    const set = [...new Set(s)].sort().join('').replace(/\s/g, '');
    
    return set === str ? true : false
}
console.log(solution("abcdefghi jklmn opqrstuvwxyz"));