function solution(operations) {
    const arr = [];
    for(let x of operations) { // 명령어 분리하는 작업
        const strArr = x.split(' ').map((v) => {
            const num = Number(v);
            if (!isNaN(num)) return num;
            else return v;
        });
        arr.push(strArr);
    }
    
    // arr돌면서 명령어 수행하기
    const queue = []; 
    for(let [commend, number] of arr) {
        // queue가 비어있으면 D 명령어 수행 못함 다음으로 넘어가기
        if (queue.length === 0 && commend === 'D') continue;

        if (commend === 'I') queue.unshift(number);
        if (commend === 'D' && number === 1) {
            const maxNum = Math.max(...queue);
            const maxIndex = queue.indexOf(maxNum);
            queue.splice(maxIndex, 1);
        }
        if (commend === 'D' && number === -1) {
            const minNum = Math.min(...queue);
            const minIndex = queue.indexOf(minNum);
            queue.splice(minIndex, 1);
        }
    }
    if (queue.length === 0) return [0,0];
    return [Math.max(...queue), Math.min(...queue)];
}




console.log(
    solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log(
    solution([
        "I -45",
        "I 653",
        "D 1",
        "I -642",
        "I 45",
        "I 97",
        "D 1",
        "D -1",
        "I 333",
    ])
);