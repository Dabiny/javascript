function solution(arr) {
    let cnt = 1000;
    let num = [];

    if (arr[0] == 1){
        cnt = 1;
        num[0] = 1;
    } else {
        cnt = 0;
        num[0] = 0;
    }

    for (let i = 1; i < arr.length; i++){
        if (arr[i] == 0){
            cnt = 0;
            num.push(cnt);
        }else {
            cnt++;
            num.push(cnt);
        }
    }

    return Math.max(...num);
}

console.log(solution([1, 0, 1, 1, 1, 0]))