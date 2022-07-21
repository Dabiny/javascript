/* 큐 최적화 
    방식개선: enqueue / dequeue 방식을 
            push/shift에서 index로 변경 (shift는 O(n), index탐색은 O(1)이다 */


// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array){
    this.array = array ? array : [];
    this.tail = array ? array.length : 0;
    this.head = 0;
}

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function (element) {
    return (this.array[this.tail++] = element);
}

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function () {
    if (this.tail === this.head)
        return undefined;
    
    let element = this.array[this.head];
    delete this.array[this.head++];
}

let queue = new Queue([1, 2, 3]);
console.log (queue);
