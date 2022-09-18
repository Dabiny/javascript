// function solution(a, b){
//     let answer = [...a, ...b];
//     return answer.sort((a, b) => a - b);
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));

// 해설
// sort함수를 호출하기만해도 (n log n)복잡도를 갖는다. 
// 투포인터를 이용하면 포문하나 O(a + b)로만 이용하여 구현가능하다. 
// 두개의 포인터를 잡앗다고해서 투포인터라고 불리는 알고리즘이다. 

function solution (a, b) {
    let p1 = p2 = 0; // 포인터들
    let answer = [];
    let n = a.length;
    let m = b.length;

    // 둘중하나가 짧아서 끝내면 멈춰서 나머지 길이를 넣어야함
    while (p1 < n && p2 < m){
        if (a[p1] <= b[p2]){
            answer.push(a[p1++]); // p1이 들어가고 ++
        }
        else answer.push(b[p2++]);
    }
    while(p1 < n) answer.push(a[p1++]);
    while(p2 < m) answer.push(b[p2++]);

    return answer;
}   
let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));