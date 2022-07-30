// 선형 조사법 해시테이블 (Linear probing HashTable)
// Hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어있다면 그자리에 대신 저장하는 해시테이블기반 구조.

const HASH_SIZE = 5; // 충돌을 위해 작게 변경

// ----------------------  이전 해시테이블과 동일 코드 ----------------------------
// Element(): key, value 저장 (john, lisa...)을 위한 생성자
function Element(key, value) {
    this.key = key;
    this.value = value;
}

// HashTable() : 해쉬테이블 생성자
function HashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시 함수 (loselosehash 알고리즘 -> djd2로 변경 collision 문서 참조)
HashTable.prototype.hashCode = function (key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
    } // 아스키코드로 변환해서 한자한자 더해준다.
    return hash % HASH_SIZE; // 더해준값을 사이즈랑 모듈러연산을통해 충돌을 최소화시킨다.
}

// clear(): 초기화 (생성자와 동일한 함수)
HashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE); //다시 새로운 정적어레이를 만들어줌 
    this.length = 0;
};

// size(): 크기 반환
HashTable.prototype.size = function () {
    return this.length;
};

// getBuffer(): 데이터 셋 반환 (데이터가 산발적으로 저장되어있기 때문에 전체 순환을하면서 값이 있으면 그값을 넣는식)
HashTable.prototype.getBuffer = function () {
    let array = [];
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
};

HashTable.prototype.print = function () {
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){
            console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
};
// ---------------------------------------------------------------------------------

