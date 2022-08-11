//거스름돈 그리디문제
// function solution(A) {
//     const money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

//     let count = 0;
//     for (let i = 0; A !== 0; i++){
//         // 만약 A / money[i]가 1보다크면 나누고 아니면 0  -> 2장, 1장이런식으로 나온다
//         count = A / money[i] > 1 ? Math.floor(A / money[i]) : 0;
//         // 60,000 = 1 > 0? 60,000 -= 50000 * 1 : 60,000
//         A = count > 0 ? A -= money[i] * count : A;        
//     }

//     return count;
// }

// console.log(solution(1000));

//최대공약수 구하기
// function solution(A) {
//     const arr = [];

// }
// console.log(solution([2,6,10,12]));


// function solution(N, K) {
//     if (N <= 0){
//        let str = N.toString();
//        let s = str[str.length-1];
//        let ss = str.replace(s, K.toString());
//        return parseInt(ss);
//     }
//     else{
//         let str = N.toString();
//         let s = K.toString() + str;

//         return parseInt(s);
//     }
//     return N;
// }

// console.log(solution(-278, 3));



function solution(puzzle, word) {
    const str = [ ...word ];
    const arr = [];
    for (let i = 0; i < puzzle.length; i++){
        for (let j = 0; j < puzzle[i].length; j++){
            if (str.includes(puzzle[i][j])){
                arr.push(puzzle[i][j]);
            }
        }
    }
    arr.map( elem => {
        if (!str.includes(elem)){
            return false;
        }
    })
    return true;
}
console.log(solution([["대", "한", "가", "나"],
                     ["국", "민", "다", "라"], 
                     ["마", "바", "사", "아"], 
                     ["자", "차", "카", "타"]], "대한민국"));