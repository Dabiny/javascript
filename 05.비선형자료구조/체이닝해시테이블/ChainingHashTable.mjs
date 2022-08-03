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
};

// getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
    let array = []; // 반환할 배열
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){ //요소가 있다면
            let current = this.table[i].head;
            // current를 head가 가리키는 요소를 가리키게 해라.
            do { //무조건 값이 있다고 판단해서 두와일을 썼다.
                array.push(current.data); //배열에 푸시하고
                current = current.next;  // 넥스트를 가리키게 해라.
            } while (current); // current가 null이 아닐때까지
        }
    }
    return array; //포문을 통해서 넣은 배열을 반환.
};

// print(): 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
    for (let i = 0; i < this.table.length; i++){
        if (this.table[i]){ // 테이블[i]에 링크드리스트요소가 있다면
            let current = this.table[i].head;
            process.stdout.write(`#${i}`); // key값 출력 (이어쓰게 하려고 write 썼음)
            do {
                process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
                current = current.next;
            } while (current);
            console.log("");
        }
    }
};

// get(): 데이터 조회
ChainingHashTable.prototype.get = function (key) {
    let index = this.hashCode(key);
    if (this.table[index] !== undefined && !this.table[index].isEmpty()){
        let current = this.table[index].head;
        do {
            if (current.data.key === key){
                return current.data.value;
            }
            current = current.next;
        } while (current);
    }
    return undefined;
};

// remove(): 데이터 삭제
ChainingHashTable.prototype.remove = function (key) {
    let index = this.hashCode(key);
    let element = undefined;
    if (this.table[index] !== undefined){
        let current = this.table[index].head;
        do {
            if (key === current.data.key){
                element = current.data;
                this.table[index].remove(current.data); //LinkedList의 remove()
                if (this.table[index].isEmpty()){
                    delete this.table[index]; // 아예 LinkedList를 해제시키기.
                }
            }
            current = current.next;
        } while (current);
    }
    this.length--;
    return element;
};

let cht = new ChainingHashTable();

cht.put("Ana", 172); 
cht.put("Donnie", 183); // 충돌
cht.put("Sue", 163); 
cht.put("Jamie", 168); // 충돌
cht.put("Paul", 190);
console.log(cht);

console.log(cht.getBuffer());
cht.print();

console.log(cht.get("Ana"));
console.log(cht.get("sam"));