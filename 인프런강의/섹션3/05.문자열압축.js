// 실패
function solution (s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s.indexOf(s[i]))) continue;
        arr.push(s.indexOf(s[i]));
    }
    arr
    let str = "";
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        let n  = s.length - arr[i];
        n
    }
    for (let i = 1; i < a.length; i++) {
        let n = Math.abs(a[i] - a[i - 1]);
        str += String(s[arr[i - 1]]);
        str += n;
    }

    return str;
}

console.log(solution("KKHSSSSSSSE")); 
