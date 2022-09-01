function solution(n) {
    let life = 0;

    while (n.length != 1) {
        n.sort((a, b) => b - a);
        let x = n.shift();
        let y = n.shift();

        if (x - y == 0) continue;
        else if (x > y){
            const res = x - y;
            n.push(res);
        }
    }

    return n.length != 0 ? n[0] : 0;
}

console.log(solution([4, 8, 6, 1, 2]))

