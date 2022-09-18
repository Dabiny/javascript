// function solution(A, B) {
//     let a = {};
//     let b = {};

//     let flag;
//     for (let x of A) {
//         if (a[x]) a[x]++;
//         else a[x] = 1;
//     }
//     for (let x of B) {
//         if (b[x]) b[x]++;
//         else b[x] = 1;
//     }

//     for (let x of Object.keys(a)){
//         if (a[x] === b[x]) flag = true;
//         else flag = false;
//     }
//     return flag === true ? "YES" : "NO";
// }

// console.log(solution("AbaAeCe","baeeACA"));
// console.log(solution("abaCC","Caaab"));


// 해설
function solution(A, B){
    let sh = new Map();
    for (let x of A) {
        if (sh.has(x)) sh.set(x, sh.get(x) + 1);
        else sh.set(x, 1);
    }
    
    for (let x of B) {
        if (!sh.has(x) || sh.get(x) === 0) return 'NO';
        sh.set(x, sh.get(x) - 1);
    }

    return 'YES';
}

console.log(solution("AbaAeCe","baeeACA"));
console.log(solution("abaCC","Caaab"));