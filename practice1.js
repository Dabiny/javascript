function solution(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++){
        n[i] = parseInt(arr[i], 2);
    }
    let sum = n[0];
    for (let i = 1; i < n.length; i++){
        sum = sum & n[i]
    }
    return sum;
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