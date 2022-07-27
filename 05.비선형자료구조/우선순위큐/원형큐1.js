const DEFUALT_SIZE = 5;

// CircularQueue() : 초기 속성 값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = DEFUALT_SIZE){ //디폴트 인자들
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = array.length;

    this.head = 0;
    this.tail = array.length; // array의 바깥쪽을 가리키고있음 (요소가 들어올 자리)
}

// getBuffer() : 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
    return this.array.slice();
    //slice메서드는 배열의 begin ~ end까지에대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열을 바뀌지 않는다. 
}

// isEmpty() : 객체가 비어 있는지 ?
CircularQueue.prototype.isEmpty = function () {
    return this.length == 0;
}


// isFull() : 객체가 꽉 차 있는지 ?
CircularQueue.prototype.isFull = function () {
    return this.size == this.length;
}


// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
    if (this.isFull()) return false; // 큐가 꽉차있다면 false반환

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.size;  
    this.length++;

    return true;
}


// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
    if (this.isEmpty()) return undefined; //비어있으니까 초기화 자료형반환

    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;
    
    return element;
}


// front(): 가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
    return this.length == 0 ? undefined : this.array[this.head];
}


// size(): 큐 내 데이터 개수 확인
CircularQueue.prototype.clear = function (size = DEFUALT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
}


let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

// console.log(cq.isEmpty());
// console.log(cq.isFull());
// console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));

console.log(cq.enqueue(5));
console.log(cq.enqueue(6));
console.log(cq);

console.log(cq.dequeue());
console.log(cq);

console.log(cq.dequeue());
console.log(cq);