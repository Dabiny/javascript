// function solution(arr, str){
//     let answer = 0;
//     let a = [];

//     for (let i = 0; i < arr.length - str.length; i++){
//         a.push(arr[i]);
//         for (let j = i + 1; j < i + str.length; j++){
//             a.push(arr[j]);
//         }
//         let flag = 0;
//         for (let x of a){
//             if (str.includes(x)) flag++;
//         }
//         if (flag === str.length) answer++;
//         a = [];
//     }
//     return answer;
// }
// console.log(solution("bacaAacba", "abc"));
// 내가푼것은 O(n * m)이다. 

// 해쉬, 투포인터, 슬라이딩윈도우를 다쓰는 문제이다. 
// 내가 인강듣고 도전해본 코드
// function solution(arr, str){
//     let th = new Map(); // "abc" 대상값
//     let sh = new Map(); // 비교값

//     for (let x of str) {
//         if (th.has(x)) th.set(x, th.get(x) + 1);
//         else th.set(x, 1);
//     }
//     // 슬라이딩 윈도우를 위해 먼저 2개 넣어주기 (다음포문부터 검색을 본격적으로 시작할거니까 일단2개만 넣기)
//     for (let i = 0; i < str.length - 1; i++){
//         if (sh.has(arr[i])) sh.set(arr[i], sh.get(arr[i]) + 1);
//         else sh.set(arr[i], 1);
//     }
    
//     let lt = 0;
//     for (let rt = str.length - 1; rt < arr.length; rt++){
//         if (sh.has(arr[rt])) sh.set(arr[rt], sh.get(arr[rt]) + 1);
//         else {
//             sh.set(arr[rt], 1);
//             // rt를 추가한 순간 th와 sh 있는지 비교
//             if (th.has(arr[rt])) {
//                 sh.set(arr[rt], sh.get(arr[rt]) - 1);
//             }
//             // 지웠는데 값이 0이되면 키삭제해주기
//             if (sh.get(arr[rt]) === 0){
//                 sh.delete(arr[rt]);
//             }

//             if (sh.has(arr[++lt])) sh.set(arr[lt], sh.get(arr[lt]) + 1);
//             else sh.set(arr[lt]);
//         }
//     }

// }
// console.log(solution("bacaAacba", "abc"));


// 정답 복습 꼭꼭하기
function compareMaps(map1, map2){ // sh, th
    if (map1.size !== map2.size) return false; // key종류가 다르면 애초에 아나그램이아님

    // map2랑 비교 같은지 || 밸류값을 가져오는것, 키값은 같지만 밸류값이 다르면 아나그램이아님
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
function solution(arr, str){
    let answer = 0;
    let th = new Map();
    let sh = new Map();
    for (let x of str) { // o
        if(th.has(x)) th.set(x, th.get(x) + 1);
        else th.set(x, 1);
    }
    // str개수 하나적게 세팅
    let len = str.length - 1;
    for (let i = 0; i < len; i++) { // o
        if(sh.has(arr[i])) sh.set(arr[i], sh.get(arr[i]) + 1);
        else sh.set(arr[i], 1);
    }
    // 세팅끝
    let lt = 0; // o
    for (let rt = len; rt < arr.length; rt++){ // o
        if(sh.has(arr[rt])) sh.set(arr[rt], sh.get(arr[rt]) + 1); // o
        else sh.set(arr[rt], 1); // x
        // 넣고 바로 비교하는 부분
        if (compareMaps(sh, th)) answer++; // x

        // 비교뒤 빼고 lt 증가 다시올라가서 비교 ...
        sh.set(arr[lt], sh.get(arr[lt]) - 1); // o
        if (sh.get(arr[lt]) === 0) sh.delete(arr[lt]); // o
        lt++; // o
    }

    return answer;
}
console.log(solution("bacaAacba", "abc"));