// 삼각형 넓이 구하기 * 2
function solution(points) {
    let first = (points[0] * points[3]) + (points[2] * points[5]) + (points[4] * points[1]);
    let second = (points[1] * points[2]) + (points[3] * points[4]) + (points[5] * points[0]);
    let re = (first - second) * 0.5;

    if (re >= 0) return re * 2;
    else
        return re * -1 * 2;
}


console.log(solution([0, 0, 0, 5, 5, 0]));