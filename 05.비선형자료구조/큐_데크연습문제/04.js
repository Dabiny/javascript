/* 대표 선출 */
function CircularQueue (size) {
    this.array = new Array(size);
    this.size = this.array.length;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
};
CircularQueue.prototype.isEmpty = function () {
    return this.array.length == 0;
};
CircularQueue.prototype.enqueue = function (element) {
    this.length++;
    this.array[this.tail++ % this.size] = element;
};
CircularQueue.prototype.dequeue = function () {
    this.length--;
    return this.array[this.head++ % this.size];
};


/* user code */
function answer(n, m, k) {
    let result = [];
    // 내가 푼 풀이 undefined가 나온다. 
    // let cq = new CircularQueue();
    // let start = 0;
    // let target = 0;
    // //1. 대표들을 앉혀 놓는다. 이때 굴려나온숫자 m 대표를 제외한다.
    // for (let i = 1; i <= n; i++){
    //     if (i == m){
    //         start = i;
    //         result.push(i);
    //         let n = 0;
    //         cq.enqueue(n);
    //         // cq.head = i; //시작지점 옮겨놓기 
    //         target = i;
    //     }
    //     cq.enqueue(i);
    // }
    // //2. start부터 target을 k만큼 계속 이동해서 그 위치의 값을 0으로 만들고 result에 옮긴다.
    // while (true){
    //     if (result.length == n){
    //         break;
    //     }
    //     target += k; //k만큼 이동
    //     if (cq[target] == 0) continue;
    //     if (target == cq.tail){ //만약 큐를 다돌면 다시 head로 만들기
    //         target = cq.head;
    //     }
    //     result.push(cq[target]);
    //     cq[target] = 0; //0값을 만들기
    // }

    //1. 원탁에 후보 번호 세팅 (enqueue)
    let cq = new CircularQueue(n);
    for (let i = 1; i <= n; i++){
        cq.enqueue(i);
    }
    //2. 첫번째 후보 제거 노드 위치로 선정
    cq.tail = cq.head = (n + m - 1) % n; 
    // 인덱스의 위치가 0부터시작하니까 m - 1 하지만 그렇게되면 0번째 인덱스를 처리할땐 -1을 가리키게된다.
    // 그걸방지하기위해 모듈러 연산을 쓴다. 굿노트 참조
  
    //3. k만큼 움직이면서 대표 후보를 제거 제거된 번호는 result에 추가.
    let count;
    result.push(cq.dequeue());
    while(cq.length != 0){
        count = k - 1;
        while (count--){
            cq.enqueue(cq.dequeue());
        }
        result.push(cq.dequeue());
    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [8, 2, 3],
  
    // TC: 2
    [10, 2, 3],
  
    // TC: 3
    [20, 5, 7],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
  }