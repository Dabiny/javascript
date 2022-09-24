// function solution(arr){
//     let visited = Array.from(Array(7), () => Array(7).fill(0));
//     let answer = 0;
//     const arrLeng = arr.length - 1; // 배열길이
//     let dy = [-1, 0, 1, 0];
//     let dx = [0, 1, 0, -1];

//     function DFS(y, x){
//         if(y === arrLeng && x === arrLeng) {
//             answer++;
//             return;
//         }
//         else{
//             visited[y][x] = 1;
//             for (let i = 0; i < 4; i++) {
//                 let ny = dy[i] + y;
//                 let nx = dx[i] + x;

//                 if (nx < 0 || nx >= arrLeng || ny < 0 || ny >= arrLeng || visited[ny][nx] || arr[ny][nx] === 0){
//                     continue;
//                 }
//                 else {
//                     DFS(ny, nx);
//                 }
//             }
//         }
//     }

//     DFS(0,0); // 출발
//     return answer;
// }
// let arr=[
// [0, 0, 0, 0, 0, 0, 0], 
// [0, 1, 1, 1, 1, 1, 0],
// [0, 0, 0, 1, 0, 0, 0],
// [1, 1, 0, 1, 0, 1, 1],
// [1, 1, 0, 0, 0, 0, 1],
// [1, 1, 0, 1, 1, 0, 0],
// [1, 0, 0, 0, 0, 0, 0]];
// console.log(solution(arr));



function solution(arr){
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    function DFS(x, y){
        if(y === 6 && x === 6) {
            answer++;
        }
        else {
            for (let i = 0; i < 4; i++) {
                let nx = dx[i] + x;
                let ny = dy[i] + y;

                if(nx >= 0 && ny >= 0 && nx <= 6 && ny <= 6 && arr[nx][ny] === 0){
                    arr[nx][ny] = 1;
                    DFS(nx, ny);
                    arr[nx][ny] = 0;
                }
            }
        }
    }
    arr[0][0] = 1;
    DFS(0,0); // 출발
    return answer;
}
let arr=[
[0, 0, 0, 0, 0, 0, 0], 
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];
console.log(solution(arr));