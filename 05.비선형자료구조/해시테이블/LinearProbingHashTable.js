// 선형 조사법 해시테이블 (Linear probing LinearHashTable)
// Hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어있다면 그자리에 대신 저장하는 해시테이블기반 구조.

const HASH_SIZE = 5; // 충돌을 증가시키기 위해 작게 변경

// ----------------------  이전 해시테이블과 동일 코드 ----------------------------
// Element(): key, value 저장 (john, lisa...)을 위한 생성자
function Element(key, value) {
    this.key = key;
    this.value = value;
}

// LinearHashTable() : 해쉬테이블 생성자
function LinearHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시 함수 (loselosehash 알고리즘 -> djd2로 변경 collision 문서 참조) 
LinearHashTable.prototype.hashCode = function (key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
    } // 아스키코드로 변환해서 한자한자 더해준다.
    return hash % HASH_SIZE; // 더해준값을 사이즈랑 모듈러연산을통해 충돌을 최소화시킨다.
}

// clear(): 초기화 (생성자와 동일한 함수) 
LinearHashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE); //다시 새로운 정적어레이를 만들어줌 
    this.length = 0;
};

// size(): 크기 반환 
LinearHashTable.prototype.size = function () {
    return this.length;
};

// getBuffer(): 데이터 셋 반환 (데이터가 산발적으로 저장되어있기 때문에 전체 순환을하면서 값이 있으면 그값을 넣는식) 
LinearHashTable.prototype.getBuffer = function () {
    let array = [];
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
};
 LinearHashTable.prototype.print = function () {
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){
            console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
};
// ---------------------------------------------------------------------------------

// put(): 선형 해시테이블 데이터 추가
// 1. 값존재여부 check -> 비어있다면 put -> 비어있지 않으면 모듈러연산을통해서 옆자리 알아보기
LinearHashTable.prototype.put = function (key, value) {
    let index = this.hashCode(key); // 해싱된 값을 index번호로 넣어준다.
    let startIndex = index; // 인덱스번호를 저장
    console.log (`key: ${key} -> index: ${index}`);

    do {    // 일단 무조건 수행을 시작하기위해서 두와일을 쓴다.
        if (this.table[index] === undefined){ //인덱스자리에 만약 요소가 비어있다면
            this.table[index] = new Element(key, value); //요소를 추가해주고
            this.length++; // 길이를 추가
            return true; 
        }
        index = (index + 1) % HASH_SIZE; //비어있지 않을때 인덱스에 인덱스 + 1 해주고 %연산해줌.
    } while (index !== startIndex); //비어있지않앗을때 계속 비어있는곳이 있을 때까지 찾아주게됨. 
    return false; // 두와일을돌아도 값이 다 차있을땐 false반환
};


// get(): 데이터 조회 
LinearHashTable.prototype.get = function (key) {
    let index = this.hashCode(key); // 충돌되는 키를 다시 받아오고있는중
    let startIndex = index;
    do {
        if (this.table[index] !== undefined && this.table[index].key === key){
            return this.table[index].value;
        }
        index = (index + 1) % HASH_SIZE; // 만약 인덱스값, 키값이 같지않다면 (충돌되었던 자리였다면) 다시 한칸씩 이동하며 키값을 매칭한다.
    } while (index !== startIndex) // 한바퀴다돌기
    return undefined; // 그래도 못찾았다면 테이블에 키가 없는 것이기에 undefined 반환
};

// remove(): 데이터 삭제 get과 동작이 동일하지만 삭제하는 부분이 다르다.
LinearHashTable.prototype.remove = function (key) {
    let index = this.hashCode(key);
    let startIndex = index;
    do {
        if (this.table[index] !== undefined && this.table[index].key === key){
            let element = this.table[index];
            delete this.table[index];
            this.length--;
            return element;
        }
        index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);
    return undefined;
};

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);

console.log(lht.put("Paul", 168));
console.log(lht);
console.log("\n");

console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));
console.log("\n");

console.log(lht.remove("Ana"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));

lht.print();