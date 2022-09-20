// function CirclarQueue(size) {
//     this.array = new Array(size);
//     this.size = this.array.length;
//     this.length = 0;
//     this.head = 0;
//     this.tail = 0;
// };
// CirclarQueue.prototype.isEmpty = function () {
//     return this.array.length === 0;
// };

// CirclarQueue.prototype.enqueue = function (element) {
//     this.length++;
//     this.array[this.tail % this.size] = element;
// };

// CirclarQueue.prototype.dequeue = function () {
//     this.length--;
//     return this.array[this.head++ % this.size];
// };

// function solution(n, k) {
//     let cq = new CirclarQueue(n);
//     for (let i = 1; i <= n; i++){ //왕자를 자리에 앉힘
//         cq.enqueue(i);
//     }  
//     cq.tail = cq.head = (n + k - 1) % n;
//     let cnt;
    
//     while(cq.length == 1){
//         cnt = k - 1;
//         while (cnt--) {
//             cq.enqueue(cq.dequeue());
//         }
//     }
//     return cq.array;
// }

// console.log(solution(8, 3));
// 답이 올바르게 나오지 않는다. 원형큐를 쓰는것같은데 아직 익숙치 않다. 


// function solution(n, k) {
//     let answer = 0;
//     let queue = []; // 큐 생성
//     for (let i = 0; i < n; i++) queue.push(i + 1); // 왕자 투입
//     while (true) { //queue 길이가 1이 될때까지

//         // k - 1번 shift() pop해준다. 
//         for (let i = 0; i < k - 1; i++) {
//             let tmp = queue[0];
//             queue.shift();
//             queue.push(tmp);
//         }
//         let prin = queue[0]; // k번을 외친 왕자
//         if (queue.length !== 1) { // 외쳤는데 혼자가 아니고 남은 왕자가 있다면 탈락
//             queue.shift();
//         }
//         else { // 혼자밖에 남지 않았다면 그사람이 왕자 선출
//             answer = prin;
//             break;
//         }    
//     }
//     return queue[0];
// }

// console.log(solution(8, 3));


// 해설
function solution(n, k) {
    let answer;
    // 선언과 동시에 배열 초기화
    let queue = Array.from({length: n}, (v, i) => i + 1); // 길이만 설정하면 유사배열'객체'가 생긴다. 
    // v는 Array의 밸류값  i + 1을 v에 넣는 콜백
    while (queue.length) {
        for (let i = 1; i < k; i++) queue.push(queue.shift()); // 한줄로 가능
        queue.shift(); // k번을 외친왕자 
        if (queue.length === 1) answer = queue.shift();
    }
    return answer;
}

console.log(solution(8, 3));