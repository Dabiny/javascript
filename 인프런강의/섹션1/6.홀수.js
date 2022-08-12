function solution(arr){
    let answer=[];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1) answer.push(arr[i]);
    }
    let min = Math.min(...answer);
    return min;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// for (let x of arr) 인수를 찾는다. 