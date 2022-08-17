function solution(nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            answer.push(i + 1);
        }
    }

    return answer;
}

console.log (solution([1, 3, 4, 8]));