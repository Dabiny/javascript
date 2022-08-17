function solution(n) {
    let redPaper = 0;
 
    for(let i = 0; i <= n; i++){
        let bn = (i).toString(2);
        console.log(bn);

        for (let j = 0; j < bn.length; j++){
            if (bn[j].includes('1')) {
                redPaper++;
            }
        }
    }
    return redPaper;
}
console.log(solution(3));