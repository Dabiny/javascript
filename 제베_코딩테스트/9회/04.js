

function solution(arr) {
    arr.sort((a, b) => b - a);
    let mx = arr[0];
    arr.shift();

    let m = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        for (let j = i + 1; j < arr.length; j++) {
            num = arr[i] + arr[j];
            
            if (num >= mx) {
                m = Math.max(num, m);
            }
        }
    }
    
    if (m === 0) return 0;

    return parseInt(mx + m);
}

console.log(solution([3, 2, 3]));