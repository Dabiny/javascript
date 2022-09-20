function solution(arr, m){
    arr.sort((a, b) => a - b);
    let index = arr.indexOf(m);
    return index + 1;
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));