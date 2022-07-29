/* 대표 선출 */
function CircularQueue (array = []) {
    this.array = array;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
};
CircularQueue.prototype.isEmpty = function () {
    return this.array.length == 0;
}
CircularQueue.prototype.enqueue = function (element) {
    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.length;
}
CircularQueue.prototype.dequeue = function () {
    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.length;
}
CircularQueue.prototype.front = function () {
    return this.length == 0 ? undefined : this.array[this.head];
}


/* user code */
function answer(n, m, k) {
    let result = [];
    let cq = new CircularQueue();
    let start = 0;
    //1. 대표들을 앉혀 놓는다. 이때 굴려나온숫자 m 대표를 제외한다.
    for (let i = 1; i <= n; i++){
        if (i == m){
            start = i;
            result.push(i);
            let n = 0;
            cq.enqueue(n);
            cq.head = i; //시작지점 옮겨놓기 
        }
        cq.enqueue(i);
    }
    //2. start부터 k만큼 계속 이동해서 그 위치의 값을 0으로 만들고 result에 옮긴다.
    while (true){
        if (result.length == n) break;
        cq.head += k;
        if (cq[cq.head] == 0){
            continue;
        }
        if (cq.head == cq.tail){
            cq.head = 0;
        }
        result.push(cq[cq.head]); //값을 넣고 
        cq[cq.head] = 0; //0만들기
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