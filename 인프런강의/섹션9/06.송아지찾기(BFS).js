// function solution(s, e){
//     let answer = 0;
//     let ch = Array.from({length: 10001}, () => 0);
//     let dis = Array.from({length: 10001}, () => 0);

//     let queue = [];
//     queue.push(s); // 현수의 위치
//     dis[s] = 0;
//     ch[s] = 1; // check

//     while (queue.length) {
//         let x = queue.shift();
        
//         for (let nx of [x - 1, x + 1, x + 5]){ // 콩콩으로 가는 방법
//             if(nx === e) return dis[x] + 1; // 종착점에 왔다면 ~번째 니까 +1해줌
//             if(nx > 0 && nx <= 10000 && ch[nx] === 0){
//                 ch[nx] = 1; // 이미탐색한건 들어가면안되니까 체크
//                 queue.push(nx);
//                 dis[nx] = dis[x] + 1; // 간지점에 부모노드의 거리값 + 1저장.
//             }
//         }
//     }
//     return answer;
// }
// console.log(solution(5, 14));
// console.log(solution(8, 3));

// // 레벨로 탐색하는 트리
// function solution(s, e){  
//     let answer=0;
//     let ch=Array.from({length:10001}, ()=>0);
//     let queue=[];
//     queue.push(s);
//     ch[s]=1;
//     let L=0;
//     while(queue.length){
//         let len=queue.length;
//         for(let i=0; i<len; i++){
//             let x=queue.shift();
//             for(let nx of [x-1, x+1, x+5]){
//                 if(nx===e) return L+1;
//                 if(nx>0 && nx<=10000 && ch[nx]===0){
//                     ch[nx]=1;
//                     queue.push(nx);
//                 }
//             }
//         }
//         L++;
//     }
//     return answer;
// }

// console.log(solution(5, 14));


// 복습
// function solution(s, e) {
//     let answer = 0; // 최소 횟수
//     let queue = [];
//     queue.push(5); // 현수 거리 push

//     while (queue.length) {
//         let v = queue.shift();
//         if (v === e) break; // 송아지 찾으면 break;
//         for (let nv of [v + 1, v - 1, v + 5]) {
//             // 트리 가지 뻗기 3갈래
//             if (nv > e) continue;
//             queue.push(nv);
//         }
//     }
//     return answer;
// }
// console.log(solution(5, 14));
// level 변경은 어디서 해야할지 모르겠음.

function solution(s, e) {
    let answer = 0; // 최소 횟수
    let queue = [];
    const dis = Array.from({ length: 10001 }, () => 0);
    const ch = Array.from({ length: 10001 }, () => 0);

    queue.push(5); // 현수 거리 push
    ch[s] = 1; // 현수거리 check

    while (queue.length) {
        let v = queue.shift();
        for (let nv of [v - 1, v + 1, v + 5]) {
            if(nv === e) return dis[v] + 1; // 다 종료해버림
            if(nv > 0 && nv <= 10000 && ch[nv] === 0) {
                ch[nv] = 1;
                queue.push(nv);
                dis[nv] = dis[v] + 1; // level 더해준다
            }
        }
    }
    return answer;
}
console.log(solution(30, 638));
// 1. ch배열을 하나만들어 겹치는 숫자를 체크하여 시간복잡도를 줄이자.
// 2. level을 알기위해 dis배열을 만들어서 값 넣어주기.

// 레벨예시
function solution(s, e) {
    let answer = 0; // 최소 횟수
    let ch = Array.from({length: 10001}, () => 0);
    let queue = [];
    queue.push(s);
    ch[s] = 1;
    let L = 0;
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let x = queue.shift();
            for (let nx of [x - 1, x + 1, x + 5]){
                if(nx === e) return L + 1; // 부모레벨에서 + 1
                if(nx > 0 && nx <= 10000 && ch[nx] === 0) {
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}