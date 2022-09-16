

function solution(bj, one, two) {
    let money = 150; // 상금
    let zza = 20; //20그릇 최대
    let cnt = 0;
    let bjList = {};

    for (let x of bj) {
        bjList[x] = -1;
        cnt++;
    }
    
    for (let x of one) {
        if (bjList[x]) {
            bjList[x]++;
            cnt++;
        }
    }
    
    for (let x of two) {
        if (bjList[x]) {
            bjList[x] += 2;
            cnt++
        }
    }
    
    for (let x of Object.keys(bjList)) {
        if (bjList[x] == -1){
            return `${money * cnt}만원(${x})`;
        }
    }
}

console.log(solution(["혁준", "하밥", "양상", "심심이", "소스왕"], ["혁준", "양상"], ["심심이", "소스왕"] ))