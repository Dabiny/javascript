function solution(num) {
    let answer = [];
    let reverseNum = num.map((v, i, arr) => {
        let str = v.toString();
        return parseInt(str.split('').reverse().join(''));
    })
    
    for (let i = 0; i < reverseNum.length; i++) {
        for (let j = 2; reverseNum[i] > j; j++) {
            if (reverseNum[i] % j !== 0){
                answer.push(reverseNum[i]);
                break;
            }
        }
    }

    return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
// 실패 답이 다르게 나옴.


// 해설
function isPrime(res) {
    if(res === 1) return false; // 1은 소수가 아니다. 1과 자기자신이 소수
    for(let i = 2; i <= parseInt(Math.sqrt(res)); i++) {
        if (res % i === 0) return false;
    }
    return true;
};
function solution(arr) {
    let answer = [];
    for(let x of arr) {
        let res = 0; // 바꿔지는 결과를 res에 저장한다. 
        while(x) { // x가 0되면 멈춘다. 
            let t = x % 10; 
            res = res * 10 + t; // 뒤집어진다. 
            
            x = parseInt(x / 10); // 몫
        }
        if(isPrime(res)) answer.push(res);
    }

    return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));


