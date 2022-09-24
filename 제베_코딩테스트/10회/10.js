// car

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

// 해답
function solution(cars, clients) {
    const x = 0
    const y = 1

    clients = clients.sort((a, b) => a[y] - b[y])
    cars = cars.sort((a, b) => a[x] - b[x])

    let sells = cars.reduce((total, car) => {
        for (let i = 0; i < clients.length; i++){
            const client = clients[i]
            if (client[y] >= car[y] && client[x] < car[x]) {
                clients.splice(i, 1)
                return total + 1
            }    
        }
        return total
    }, 0)

    return sells
}