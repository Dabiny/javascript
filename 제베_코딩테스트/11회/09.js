// 0과 가까운수 
function solution(arr) {
    const target = 0;
    let near = 0;
    let abs = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        abs = ((arr[i] - target) < 0) ? -(arr[i] - target) : (arr[i] - target);
        if (abs < min) {
            min = abs;
            near = arr[i];
        }
    }

    return near;
}
console.log(solution([-5, 2, -1, 1, 3]));