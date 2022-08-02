// 별도의 자료구조인 연결 리스트를 병합 사용하여 Hash 충돌을 해결한 해시테이블기반 자료구조
import { LinkedList } from "./linked_list.mjs"; //import 모듈
const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자.
function Element(key, value) {
    this.key = key;
    this.value = value;
}

// ChainingHashTable() : 생성자
function ChainingHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode(): 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

// clear(): 초기화
ChainingHashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

// size(): 크기 반환
ChainingHashTable.prototype.size = function () {
    return this.length;
};

// -------------------------------------------------------

// put(): 데이터 추가
ChainingHashTable.prototype.put = function (key, value) {
    let index = this.hashCode(key); //key값으로 해시숫자 만들거임.
    console.log(`key: ${key} -> index: ${index}`);

    if (this.table[index] === undefined){
    // 이 key값 테이블이 비어 있다면
        this.table[index] = new LinkedList();
        // 일단 링크드리스트를 만들어 놓기 
    }
    this.table[index].append(new Element(key, value));
    //이 테이블에있는 링크드리스트에 새로운 엘리먼트를 생성해서 append해라.
    this.length++;
    return true;
}


let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);
console.log(cht);