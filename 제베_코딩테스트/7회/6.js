function solution(w, h) {
    let block = 0;
    let halfblock = 0;

    let blockCost = 500;
    let halfCost = 300;

    for (let i = 0; i < h; i++) {
        if (i % 2 == 0) {
            block += w;
        }
        if (i % 2 == 1) {
            block += w - 1;
            halfblock += 2;
        }
    }
    
    return (block * blockCost) + (halfblock * halfCost);
}

console.log(solution(5, 3));