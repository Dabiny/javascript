function solution(cars, clients) {
    let answer = 0;
    cars.sort((a, b) => b[0] - a[0]);
    clients.sort((a, b) => b[0] - a[0]);
    
    for (let i = 0; i < cars.length; i++) {
        for (let j = 0; j < cars.length; j++) {
            if (clients[j][1] >= cars[i][1]){
                if (clients[j][0] <= cars[i][0]){
                    answer++;
                    break;
                }
            }
        }
    }

    return answer;
}

console.log(solution([
    [10, 100], 
    [2, 200], 
    [30, 300]
],[
    [5, 110], 
    [9, 500], 
    [20, 400]]));

// 0.4