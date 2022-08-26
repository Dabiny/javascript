
function solution(city) {
    let n = city.length;
    let answer = [];
    let visited = [];
    let count = 0;
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    for (let i = 0; i < n; i++){
        answer[i] = new Array(n).fill(0);
        visited[i] = new Array(n).fill(0);
    }
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (city[i][j] == 1 && visited[i][j] == 0){ //아파트고 방문하지않았다면
                answer[i][j] = DFS(i, j, 0);
            }
        }
    }

    function DFS(y, x, cnt) {
        visited[y][x] = true; //방문도장 

        for (let i = 0; i < 4; i++){
            let ny = y + dy[i];
            let nx = x + dx[i];
    
            if (ny < 0 || nx < 0 || ny >= n || nx >= n)
                continue;

            if (city[ny][nx] == 1 && !visited[ny][nx]){
                cnt++;
                DFS(ny, nx, cnt);
            }
        
        }
        return cnt;
    }

    return answer;
}

console.log(solution([[1, 0, 1], [1, 1, 1], [1, 1, 1]]));