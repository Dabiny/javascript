function mySort(a, b) {
    let aa = a.toString(2).replace(/0/g, "");
    let bb = b.toString(2).replace(/0/g, "");
    
    if (aa.length == bb.length) return a - b;
    return aa.length - bb.length;
}
function solution(A) {
    return A.sort(mySort);
}

console.log(solution([1, 2, 3, 4]));