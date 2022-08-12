function solution(arr){         
    let min = Math.min(...arr);
    return min;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

//min = Number.MAX_SAFE_INTEGER;