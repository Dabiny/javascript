function solution(s, e){
    let answer = 0;
    let ch = Array.from({length: 10001}, () => 0);
    let dis = Array.from({length: 10001}, () => 0);

    let queue = [];
    queue.push(s); // 현수의 위치
    dis[s] = 0;
    ch[s] = 1; // check

    while (queue.length) {
        let x = queue.shift();
        
        for (let nx of [x - 1, x + 1, x + 5]){ // 콩콩으로 가는 방법
            if(nx === e) return dis[x] + 1; // 종착점에 왔다면 ~번째 니까 +1해줌
            if(nx > 0 && nx <= 10000 && ch[nx] === 0){
                ch[nx] = 1; // 이미탐색한건 들어가면안되니까 체크
                queue.push(nx);
                dis[nx] = dis[x] + 1; // 간지점에 부모노드의 거리값 + 1저장.
            }
        }
    }
    return answer;
}
console.log(solution(5, 14));
console.log(solution(8, 3));

// 레벨로 탐색하는 트리
function solution(s, e){  
    let answer=0;
    let ch=Array.from({length:10001}, ()=>0);
    let queue=[];
    queue.push(s);
    ch[s]=1;
    let L=0;
    while(queue.length){
        let len=queue.length;
        for(let i=0; i<len; i++){
            let x=queue.shift();
            for(let nx of [x-1, x+1, x+5]){
                if(nx===e) return L+1;
                if(nx>0 && nx<=10000 && ch[nx]===0){
                    ch[nx]=1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}

console.log(solution(5, 14));