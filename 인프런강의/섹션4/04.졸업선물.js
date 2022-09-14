

function solution(money, arr){
    let answer = 0;
    let cnt = money;
    arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i][0] + arr[i][1];
        if (money - sum < 0){
            sum = 0;
            sum = (arr[i][0] / 2) + arr[i][1];
            if (money - sum < 0){
                continue;
            }
            else if (money - sum == 0){
                money -= sum;
                answer++;
                break;
            }
        }
        else {
            money -= sum;
            answer++;
        }
    }
    
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));