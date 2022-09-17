function solution(A, B) {
    let a = {};
    let b = {};

    let flag;
    for (let x of A) {
        if (a[x]) a[x]++;
        else a[x] = 1;
    }
    for (let x of B) {
        if (b[x]) b[x]++;
        else b[x] = 1;
    }

    for (let x of Object.keys(a)){
        if (a[x] === b[x]) flag = true;
        else flag = false;
    }
    return flag === true ? "YES" : "NO";
}

console.log(solution("AbaAeCe","baeeACA"));
console.log(solution("abaCC","Caaab"));