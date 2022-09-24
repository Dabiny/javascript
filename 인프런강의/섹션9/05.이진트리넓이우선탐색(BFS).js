function solution(n){
    let answer = "";
    let queue = [];

    queue.push(1); // root

    while (queue.length) { //0되면 멈춤
        let v = queue.shift();
        answer += v + " ";

        for (let nv of [v * 2, v * 2 + 1]){
            if (nv > 7) continue;
            queue.push(nv);
        }
    }


}
console.log(solution(n));