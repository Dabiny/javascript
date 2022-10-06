function solution(matrix) {
    let lengY = matrix.length - 1;
    let lengX = matrix[0].length - 1;
    
    if (matrix[lengY][0] === true && matrix[0][lengX] === true) return true;
    return false;
}
console.log(solution([[true, true, true, true], [true, true, false, true], [true, false, true, true], [true, true, true, true]]));
// 1.0 n*n크기의 2차원배열 