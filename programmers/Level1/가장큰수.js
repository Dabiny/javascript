function solution(numbers) {
    let answer = '';
    numbers = numbers.map(m => m + '');
    answer = numbers.sort((a, b) => (b + a) - (a + b)).join("");
    return numbers[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));

