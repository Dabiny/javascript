function solution(A, B) {
    let answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer = answer + (A[i] * B[i]);
    }
    
    return answer;
}

// A를 젤 낮게 , B를 젤 크게 => 젤 작은 수로 젤 큰수를 곱해야 최소값이 나온다. 
console.log(solution([1, 4, 2], [5, 4, 4]));

