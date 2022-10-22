function solution(nums) {
    let choose = nums.length / 2; // 몇가지를 선택할 수 있는지
    let arr = new Set(nums).size;
    return  answer = choose >=  arr ? arr : choose;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));