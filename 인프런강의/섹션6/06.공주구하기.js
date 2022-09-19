function CirclarQueue(size) {
    this.array = new Array(size);
    this.size = this.array.length;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
};
CirclarQueue.prototype.isEmpty = function () {
    return this.array.length === 0;
};

CirclarQueue.prototype.enqueue = function (element) {
    this.length++;
    this.array[this.tail % this.size] = element;
};

CirclarQueue.prototype.dequeue = function () {
    this.length--;
    return this.array[this.head++ % this.size];
};

function solution(n, k) {
    let cq = new CirclarQueue(n);
    for (let i = 1; i <= n; i++){ //왕자를 자리에 앉힘
        cq.enqueue(i);
    }  
    cq.tail = cq.head = (n + k - 1) % n;
    let cnt;
    
    while(cq.length == 1){
        cnt = k - 1;
        while (cnt--) {
            cq.enqueue(cq.dequeue());
        }
    }
    return cq.array;
}

console.log(solution(8, 3));
// 답이 올바르게 나오지 않는다. 