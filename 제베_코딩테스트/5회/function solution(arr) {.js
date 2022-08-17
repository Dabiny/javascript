function solution(arr) {
    let a = 0;
    let mx = 0;
    for (let i = 0; i < arr.length; i++) {
        a = arr[i].split(" ").length;
        if (mx < a){
            mx = a;
        }
    }
    
    return mx;
}

console.log(solution(['Happy new year', 'Hello World', 'Nice to meet you']));