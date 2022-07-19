function solution(arr) {
    let num = 0;

    // 1. 2진수 최대자리 구하기
    for (let i = 0; i < arr.length; i++){
        if (num < arr[i].length){
            num = arr[i].length;
        }
    }

    // 2. 최대자리 숫자에 맞게 0 추가하기
    let zero = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length < num){
            let n = arr[i].length;
            while (n != num){
                zero += "0";
            }
            console.log(zero.length);
            arr[i] = zero + arr[i];
        }
        
    }

    let answer = arr[0];
    for (let i = 1; i < arr.length; i++){
        answer & arr[i];
    }
    return answer;
}

let arr1 = [ 
    "10110",
    "1010",
    "11110",
];

console.log(solution(arr1));

// let sum = "10110";
// let sum2 = "000000"
// let input = sum2 + sum;

// console.log(input);