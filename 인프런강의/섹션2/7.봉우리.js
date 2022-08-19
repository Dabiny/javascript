function solution(arr){  
    let count = 0;
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    let num = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            num = arr[i][j];
            let flag = false; // 봉우린지 아닌지

            for (let k = 0; k < 4; k++){ //상하좌우
                let ny = i + dy[k];
                let nx = j + dx[k];
                
                if (ny < 0 || nx < 0) continue;
                if (arr[ny][nx] < num){
                    flag = true;
                }
                if (arr[ny][nx] > num){
                    flag = false;
                }
            }
            if (flag == true) count++;
        }
    }
    return count;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];

console.log(solution(arr));