function solution(arr) {
    arr.sort((a, b) => b - a);
    arr.shift();
    arr.pop();

    const average = arr.reduce((acc, cur, i, { length }) => {
        return i === length - 1 ? (acc + cur) / length : acc + cur;
    });

    return parseInt(average);
}

console.log(solution([1, 3, 3, 3, 5]))