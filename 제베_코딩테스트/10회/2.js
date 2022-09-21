function solution(orders, n) {
    let arr = Array.from({length: orders[orders.length - 1]}, (v, i) => i + 1);
    let cancel = [];
    for (let i = 0; i < arr.length; i++) {
        if (!orders.includes(arr[i])) cancel.push(arr[i]);
    }
    return cancel;
}
console.log(solution([2, 4, 5, 7, 10], 3));
// 효율성 0.4