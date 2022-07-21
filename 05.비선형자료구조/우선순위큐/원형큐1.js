// CircularQueue() : 초기 속성 값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5){
    this.array = array;
    this.size = size;
    this.length = array.length;

    this.head = 0;
    this.tail = array.length; // array의 바깥쪽을 가리키고있음 (요소가 들어올 자리)
}

// getBuffer() : 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
    return this.array.slice();
    //slice메서드는 배열의 begin ~ end까지에대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열을 바뀌지 않는다. 
}

