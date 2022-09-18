// function solution(a, b) {
//     let answer = [];
//     for (let x of a) {
//         if (b.includes(x)) answer.push(x);
//     }
//     return answer.sort((a, b) => a - b);
// }

// console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
// 내가 푼 코드는 includes메서드를 사용했는데 이메서드는 O(n)복잡도이다 따라서
// 포문O(n)안에 또 O(n)이 돌아가면 O(n^2)이 되는 코드이므로 숫자가 커질수록 효율성이 좋지않다. 
// 이중포문을 피해서 하는것이 더 좋은 코드라고 생각해야 한다.. 

// 해설 O(n)복잡도
function solution(a, b) {
    let answer = [];
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let p1 = p2 = 0; // 투포인터 지정

    // 누군가 하나가 다 탐색되면 거짓되는 와일문
    while (p1 < a.length && p2 < b.length){
        if (a[p1] == b[p2]){
            answer.push(a[p1++]);
            p2++;
        } 
        else if (a[p1] < b[p2]){
            p1++; // 작은값을 가리키는 포인터를 증가 이동시킴
        }
        else if (a[p1] > b[p2]){
            p2++; 
        }
    }
    return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

// 무조건 코드가 짧은게 좋은코드가 아닌 효율성을 더 생각해봐야 한다. 