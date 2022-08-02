//빅오 표기법 예제 1
function big_o(n){
    let sum = 0;    //1회
    sum = n * 2;    //1회
    return sum;     //1회
}   //1회 + 1회 + 1회 = 3회 (상수임 그래서 O(N))

//빅오 표기법 예제 2
// 크게 빅오를 볼거면 포문개수를 보면된다. 포문1개 -> n, 2개 -> n2 ...
function big_o(arr, n){
    let sum = 0;                    //1회
    for (let i = 0; i < n; i++){    //n회
        sum += arr[i];
    }
    return sum;                     //1회
} // n회 + 2회 = 2 + n  O(N) n이 있을 때는 상수떼고 n이 우선적

//빅오 표기법 예제 3
function big_o(arr, n){
    let sum = 0;                    //1회 
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < n; j++) //n*n = n2
            sum += arr[i][j];

    return sum;                     //1회
} // n2 + 2 -> O(N2)
// 가장 높은차수가 빅오표기법에 남는다. 

//빅오 표기법 예제 4 
function big_o(n) {
    let sum = 0;                    // 1
    for (let i = 0; i < n; i *= 2)  // n / 2 나누기
        sum += 2;
    return sum;                     // 1
} // (n/2) + 2 -> O(log N)

 