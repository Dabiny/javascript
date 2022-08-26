function solution(arr) {
    let a = [];
    let aa = [];

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i].split(' '));
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++){
            aa.push(a[i][j]);
        }
    }
    aa.sort((a, b) => a - b);
    for (let i = 0; i < aa.length; i++) {
        if (aa.indexOf(aa[i]) === i) res.push(aa[i]);
    }
    return res.sort();  
}

console.log(solution(
    ["We can", "give advice", "but we cannot give conduct"]));

    //["We", "advice", "but", "can", "cannot", "conduct", "give", "we"]