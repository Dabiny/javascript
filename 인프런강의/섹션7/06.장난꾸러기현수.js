function solution (arr) {
    let answer = [];
    let arr1 = [...arr];
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr1[i] !== arr[i]) answer.push(i + 1);
    }
    return answer;
}
console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
