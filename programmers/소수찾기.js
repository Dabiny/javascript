// 효율성을위해 에라토스테네스의 채를 구현하여 소수를 찾았다.

function solution(n) {
    const arr = [];
    // arr값에 소수라고 뜻할 true를 넣어주기
    for (let i = 0; i < n + 1; i++) {
        arr.push(true); //[ true, true, true, true, false, true ]
    }

    // 2를 제외한 2의 제곱부터 제곱하면서 제곱값만 체크하면서 지워나가기 (채에 거르는 동작)
    // 제곱근까지 반복한다. (주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화 한다. )
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i){
                arr[j] = false;
            }
        }
    }
    console.log(arr); //[ true, true, true, true, false, true ]

    // 0, 1은 소수가 아니다. splice로 자르기 
    arr.splice(0, 2, false, false);
    console.log(arr); //[ false, false, true, true, false, true ]
    const result = arr.filter((value) => {
        return value !== false;
    })
    return result.length;
}
//console.log(solution(10000000));
console.log(solution(5));