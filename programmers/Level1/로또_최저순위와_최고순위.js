//로또 최고순위와 최저순위
function solution(lottos, win_nums) {
    let result = [];
    let trueNum = [];
    let zeroCount = 0;
    for (let i = 0; i < lottos.length; i++){
        for (let j = 0; j < win_nums.length; j++){
            if (lottos[i] == win_nums[j] && lottos[i] != 0){
                trueNum.push(lottos[i]);
            }
        }
        if (lottos[i] == 0){
            zeroCount++;
        }
    }
    //최고순위
    if (trueNum + zeroCount == 0){
        result[0] = 6;
    }else{
        result[0] = 7 - (trueNum.length + zeroCount);
    }
    
    //최저순위
    if (trueNum.length == 0){
        result[1] = 6;
    }
    else{
        result[1] = 7 - (trueNum.length);
    }

    return result;
}
console.log(solution([44,1,0,0,31,25],[31,10,45,1,6,19]));
console.log(solution([0,0,0,0,0,0],[38,19,20,40,15,25]));
