function solution(arr) {
    let section = [...new Set(arr)];
    return section.length;
}

console.log(solution([13, 14, 15, 15, 16]));
