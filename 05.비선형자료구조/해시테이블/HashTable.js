const HASH_SIZE = 1013;

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

// put(): 데이터 추가
HashTable.prototype.put = function (key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);
    if (this.table[index] !== undefined){ //해시함수된 인덱스에 이미 키값이 있다면 false
        return false;
    }
    this.table[index] = new Element(key, value); 
    // 요소 오브젝트에 key,value를 저장해 table[해시된인덱스]에 저장한다.
    this.length++; //테이블길이++
    return true;
};

// get(): 데이터 조회
HashTable.prototype.get = function (key) {
    return this.table[this.hashCode(key)];
    // 테이블에저장된 인덱스를 찾는데 그인덱스를 찾으려면 key값을 해시함수로 다시 풀어서 index값을 찾는다.
};

// remove(): 데이터 삭제
HashTable.prototype.remove = function (key) {
    let element = this.table[this.hashCode(key)];
    if (element !== undefined){
        delete this.table[this.hashCode(key)];
        this.length--;
    }
    return element;
};

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



let ht = new HashTable();
console.log(ht);

// console.log(ht.hashCode("Ana"));
// console.log(ht.hashCode("Sue"));
// console.log(ht.hashCode("Bob"));

ht.put("ana", 172); // key value
ht.put("Sue", 163); // key values

ht.put("Paul", 190); // key values
ht.put("Paul", 190); // key values
console.log(ht);

console.log(ht.remove("Paul"));
console.log(ht);
console.log(ht.remove("Paul"));
console.log(ht);
